import Foundation

public actor AgentRuntime {
    public struct ToolRegistration: Sendable {
        public let definition: ToolDefinition
        public let executor: AnyToolExecutor

        public init(definition: ToolDefinition, executor: AnyToolExecutor) {
            self.definition = definition
            self.executor = executor
        }
    }

    public struct Configuration: Sendable {
        public let authProvider: any AnthropicAuthProviding
        public let secureStore: any SessionSecureStoring
        public let backend: any AgentBackend
        public let approvalPresenter: any ApprovalPresenting
        public let stateStore: any RuntimeStateStoring
        public let baseInstructions: String?
        public let tools: [ToolRegistration]

        public init(
            authProvider: any AnthropicAuthProviding,
            secureStore: any SessionSecureStoring,
            backend: any AgentBackend,
            approvalPresenter: any ApprovalPresenting,
            stateStore: any RuntimeStateStoring,
            baseInstructions: String? = nil,
            tools: [ToolRegistration] = []
        ) {
            self.authProvider = authProvider
            self.secureStore = secureStore
            self.backend = backend
            self.approvalPresenter = approvalPresenter
            self.stateStore = stateStore
            self.baseInstructions = baseInstructions
            self.tools = tools
        }
    }

    private let authProvider: any AnthropicAuthProviding
    private let secureStore: any SessionSecureStoring
    private let backend: any AgentBackend
    private let approvalPresenter: any ApprovalPresenting
    private let stateStore: any RuntimeStateStoring
    private let toolRegistry: ToolRegistry
    private let configuredBaseInstructions: String?

    private var state: StoredRuntimeState = .empty
    private var session: AnthropicSession?

    public init(configuration: Configuration) throws {
        self.authProvider = configuration.authProvider
        self.secureStore = configuration.secureStore
        self.backend = configuration.backend
        self.approvalPresenter = configuration.approvalPresenter
        self.stateStore = configuration.stateStore
        self.configuredBaseInstructions = configuration.baseInstructions
        self.toolRegistry = try ToolRegistry(initialTools: configuration.tools)
    }

    @discardableResult
    public func restore() async throws -> StoredRuntimeState {
        session = try await secureStore.loadSession()
        try await stateStore.prepare()
        state = try await stateStore.loadState()
        return state
    }

    @discardableResult
    public func signIn() async throws -> AnthropicSession {
        let session = try await authProvider.signIn()
        try await secureStore.saveSession(session)
        self.session = session
        return session
    }

    @discardableResult
    public func useSession(_ session: AnthropicSession) async throws -> AnthropicSession {
        try await secureStore.saveSession(session)
        self.session = session
        return session
    }

    public func currentSession() async -> AnthropicSession? {
        session
    }

    public func signOut() async throws {
        try await secureStore.deleteSession()
        session = nil
    }

    public func threads() -> [AgentThread] {
        state.threads.sorted { $0.updatedAt > $1.updatedAt }
    }

    public func messages(for threadID: String) -> [AgentMessage] {
        state.messagesByThread[threadID] ?? []
    }

    public func registerTool(
        _ definition: ToolDefinition,
        executor: AnyToolExecutor
    ) async throws {
        try await toolRegistry.register(definition, executor: executor)
    }

    public func replaceTool(
        _ definition: ToolDefinition,
        executor: AnyToolExecutor
    ) async throws {
        try await toolRegistry.replace(definition, executor: executor)
    }

    @discardableResult
    public func createThread(
        title: String? = nil,
        configuration: AgentThreadConfiguration? = nil
    ) async throws -> AgentThread {
        let session = try requireSession()
        var thread = try await backend.createThread(session: session)
        thread.title = title ?? thread.title
        let defaultConfiguration = await backend.defaultThreadConfiguration
        thread.configuration = configuration ?? thread.configuration ?? defaultConfiguration
        thread.updatedAt = Date()
        upsertThread(thread)
        try await persistState()
        return thread
    }

    @discardableResult
    public func resumeThread(id: String) async throws -> AgentThread {
        let session = try requireSession()
        var thread = try await backend.resumeThread(id: id, session: session)
        let defaultConfiguration = await backend.defaultThreadConfiguration
        thread.configuration = thread.configuration ?? defaultConfiguration
        thread.updatedAt = Date()
        upsertThread(thread)
        try await persistState()
        return thread
    }

    public func stream(
        _ request: Request,
        in threadID: String
    ) async throws -> AsyncThrowingStream<AgentEvent, Error> {
        guard request.hasContent else {
            throw AgentRuntimeError.invalidMessageContent()
        }

        guard let thread = thread(for: threadID) else {
            throw AgentRuntimeError.threadNotFound(threadID)
        }

        let storesTurnState = !request.isEphemeral
        let userMessage = storesTurnState
            ? AgentMessage(threadID: threadID, role: .user, text: request.text, images: request.images)
            : nil
        let turnHistory = storesTurnState ? messages(for: threadID) : []

        if let userMessage {
            appendMessage(userMessage)
            try await setThreadStatus(.streaming, for: threadID)
        }

        return AsyncThrowingStream { continuation in
            if let userMessage {
                continuation.yield(.messageCommitted(userMessage))
                continuation.yield(.threadStatusChanged(threadID: threadID, status: .streaming))
            }

            Task {
                do {
                    let session = try self.requireSession()
                    let tools = await self.toolRegistry.allDefinitions()
                    let stream = try await self.backend.beginTurn(
                        thread: thread,
                        history: turnHistory,
                        message: request,
                        instructions: await self.resolveInstructions(),
                        tools: tools,
                        session: session
                    )

                    try await self.consume(
                        stream,
                        threadID: threadID,
                        session: session,
                        storesTurnState: storesTurnState,
                        continuation: continuation
                    )
                } catch let error as AgentRuntimeError {
                    await self.finishFailedTurn(
                        error,
                        threadID: threadID,
                        storesTurnState: storesTurnState,
                        continuation: continuation
                    )
                } catch {
                    await self.finishFailedTurn(
                        AgentRuntimeError(code: "turn_failed", message: error.localizedDescription),
                        threadID: threadID,
                        storesTurnState: storesTurnState,
                        continuation: continuation
                    )
                }
            }
        }
    }

    public func send(
        _ request: Request,
        in threadID: String
    ) async throws -> String {
        let stream = try await stream(request, in: threadID)
        var finalText = ""

        for try await event in stream {
            if case let .messageCommitted(message) = event,
               message.role == .assistant {
                finalText = message.displayText
            }
        }

        return finalText
    }

    private func consume(
        _ stream: AgentTurnStream,
        threadID: String,
        session: AnthropicSession,
        storesTurnState: Bool,
        continuation: AsyncThrowingStream<AgentEvent, Error>.Continuation
    ) async throws {
        for try await event in stream.events {
            switch event {
            case let .turnStarted(turn):
                continuation.yield(.turnStarted(turn))

            case let .assistantMessageDelta(threadID, turnID, delta):
                continuation.yield(.assistantMessageDelta(threadID: threadID, turnID: turnID, delta: delta))

            case let .assistantMessageCompleted(message):
                if storesTurnState {
                    appendMessage(message)
                }
                continuation.yield(.messageCommitted(message))

            case let .toolCallRequested(invocation):
                let result = try await resolveToolInvocation(
                    invocation,
                    session: session,
                    continuation: continuation
                )
                try await stream.submitToolResult(result, for: invocation.id)

            case let .turnCompleted(summary):
                if storesTurnState {
                    try await setThreadStatus(.idle, for: threadID)
                }
                continuation.yield(.turnCompleted(summary))
                continuation.yield(.threadStatusChanged(threadID: threadID, status: .idle))
                continuation.finish()
            }
        }
    }

    private func resolveToolInvocation(
        _ invocation: ToolInvocation,
        session: AnthropicSession,
        continuation: AsyncThrowingStream<AgentEvent, Error>.Continuation
    ) async throws -> ToolResultEnvelope {
        guard let definition = await toolRegistry.definition(named: invocation.toolName),
              let executor = await toolRegistry.executor(named: invocation.toolName)
        else {
            let result = ToolResultEnvelope.failure(
                invocation: invocation,
                message: AgentRuntimeError.toolNotFound(invocation.toolName).message
            )
            continuation.yield(.toolCallFinished(result))
            return result
        }

        continuation.yield(.toolCallStarted(invocation))

        if definition.approvalPolicy == .requiresApproval {
            let request = ApprovalRequest(
                invocation: invocation,
                message: definition.approvalMessage ?? "Allow Claude to run \(invocation.toolName)?"
            )
            continuation.yield(.approvalRequested(request))
            let decision = await approvalPresenter.presentApproval(request)
            let resolution = ApprovalResolution(
                requestID: request.id,
                invocationID: invocation.id,
                decision: decision
            )
            continuation.yield(.approvalResolved(resolution))

            if decision == .denied {
                let result = ToolResultEnvelope.denied(invocation: invocation)
                continuation.yield(.toolCallFinished(result))
                return result
            }
        }

        let context = ToolExecutionContext(
            threadID: invocation.threadID,
            turnID: invocation.turnID,
            session: session
        )

        do {
            let result = try await executor.execute(invocation: invocation, context: context)
            continuation.yield(.toolCallFinished(result))
            return result
        } catch {
            let result = ToolResultEnvelope.failure(
                invocation: invocation,
                message: error.localizedDescription
            )
            continuation.yield(.toolCallFinished(result))
            return result
        }
    }

    private func finishFailedTurn(
        _ error: AgentRuntimeError,
        threadID: String,
        storesTurnState: Bool,
        continuation: AsyncThrowingStream<AgentEvent, Error>.Continuation
    ) async {
        if storesTurnState {
            try? await setThreadStatus(.failed, for: threadID)
        }
        continuation.yield(.turnFailed(error))
        continuation.finish(throwing: error)
    }

    private func resolveInstructions() async -> String {
        if let configuredBaseInstructions {
            return configuredBaseInstructions
        }

        if let backendInstructions = await backend.baseInstructions {
            return backendInstructions
        }

        return "You are a helpful assistant embedded in an Apple platform app. Use host-defined tools when they are useful, and keep the user oriented."
    }

    private func requireSession() throws -> AnthropicSession {
        guard let session else {
            throw AgentRuntimeError.missingSession()
        }
        return session
    }

    private func thread(for id: String) -> AgentThread? {
        state.threads.first { $0.id == id }
    }

    private func upsertThread(_ thread: AgentThread) {
        if let index = state.threads.firstIndex(where: { $0.id == thread.id }) {
            state.threads[index] = thread
        } else {
            state.threads.append(thread)
        }
    }

    private func appendMessage(_ message: AgentMessage) {
        state.messagesByThread[message.threadID, default: []].append(message)
        if let index = state.threads.firstIndex(where: { $0.id == message.threadID }) {
            state.threads[index].updatedAt = message.createdAt
        }
    }

    private func setThreadStatus(
        _ status: AgentThreadStatus,
        for threadID: String
    ) async throws {
        guard let index = state.threads.firstIndex(where: { $0.id == threadID }) else {
            throw AgentRuntimeError.threadNotFound(threadID)
        }
        state.threads[index].status = status
        state.threads[index].updatedAt = Date()
        try await persistState()
    }

    private func persistState() async throws {
        try await stateStore.saveState(state)
    }
}
