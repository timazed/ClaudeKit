import Foundation

public actor AgentRuntime {
    public struct ToolRegistration: Sendable {
        public let definition: ToolDefinition
        public let executor: AnyToolExecutor
        public init(definition: ToolDefinition, executor: AnyToolExecutor) { self.definition = definition; self.executor = executor }
    }
    public struct Configuration: Sendable {
        public let allowHostedSearch: Bool
        public let recoveryStore: any AgentRecoveryStoring
        public let driver: any HarnessDriving
        public let approvalPresenter: any ApprovalPresenting
        public let stateStore: any RuntimeStateStoring
        public let signInPresenter: (any ClaudeSignInPresenting)?
        public let baseInstructions: String
        public let tools: [ToolRegistration]
        public let turnTimeout: TimeInterval?
        public let maximumToolCalls: Int?
        public let maximumParallelToolCalls: Int
        public init(driver: any HarnessDriving, approvalPresenter: any ApprovalPresenting,
                    stateStore: any RuntimeStateStoring = FileRuntimeStateStore(),
                    signInPresenter: (any ClaudeSignInPresenting)? = nil,
                    baseInstructions: String = "Be helpful and concise.", tools: [ToolRegistration] = [], turnTimeout: TimeInterval? = 300, maximumToolCalls: Int? = 128, maximumParallelToolCalls: Int = 4, recoveryStore: any AgentRecoveryStoring = FileAgentRecoveryStore(), allowHostedSearch: Bool = false) {
            self.allowHostedSearch = allowHostedSearch
            self.recoveryStore = recoveryStore
            self.driver = driver; self.approvalPresenter = approvalPresenter; self.stateStore = stateStore
            self.signInPresenter = signInPresenter; self.baseInstructions = baseInstructions; self.tools = tools
            self.turnTimeout = turnTimeout
            self.maximumToolCalls = maximumToolCalls; self.maximumParallelToolCalls = maximumParallelToolCalls
        }
    }
    let configuration: Configuration
    var state: StoredRuntimeState = .empty
    var unloadedHistories: Set<String> = []
    var account: ClaudeAccount?
    var tools: [String: ToolRegistration] = [:]
    var executions: [UUID: RuntimeExecutionState] = [:]
    var threadOperations: Set<String> = []
    var activeRecovery: Set<UUID> = []
    var memoryGuidance = ""
    var memoryEmbeddingCache: [String: [String: MemoryEmbeddingEntry]] = [:]
    var memoryEmbeddingAccount: ClaudeAccount?
    var lastMemoryDiagnostics: AgentMemoryRetrievalDiagnostics?
    var operation = false
    var pendingPersists = 0
    var persistenceFailure: Error?
    var persistenceTail: Task<Void, Error>?
    var lastUsageLimits: [AgentUsageLimitSnapshot] = []
    var observations: [UUID: AsyncStream<StoredRuntimeState>.Continuation] = [:]

    public init(configuration: Configuration) throws {
        guard configuration.turnTimeout.map({ $0.isFinite && $0 > 0 && $0 <= 31_536_000 }) ?? true,
              configuration.maximumToolCalls.map({ $0 >= 0 }) ?? true, configuration.maximumParallelToolCalls >= 1 else {
            throw AgentRuntimeError(code: "invalid_turn_limits", message: "Duration must be positive and at most one year, or nil; tool limits must be nonnegative and concurrency at least one.")
        }
        self.configuration = configuration
        for tool in configuration.tools {
            try Self.validate(tool.definition)
            guard tools[tool.definition.name] == nil else { throw AgentRuntimeError(code: "duplicate_tool", message: "Duplicate tool name.") }
            tools[tool.definition.name] = tool
        }
    }
    public func isBusy() -> Bool { !executions.isEmpty || !activeRecovery.isEmpty || operation || !threadOperations.isEmpty }
    public func capabilities() -> HarnessCapabilities { configuration.driver.capabilities }
    public func currentSession() -> ClaudeAccount? { account }
    public func threads() -> [AgentThread] { state.threads.sorted { $0.updatedAt > $1.updatedAt } }
    public func messages(for threadID: String) -> [AgentMessage] { state.messagesByThread[threadID] ?? [] }

    @discardableResult public func restore(lazyHistory: Bool = false) async throws -> StoredRuntimeState {
        try reserve(); defer { operation = false }
        try await configuration.stateStore.prepare()
        if lazyHistory, let store = configuration.stateStore as? any RuntimeStatePartitioning {
            state = try await store.loadOverview(); unloadedHistories = Set(state.threads.map(\.id))
        } else { state = try await configuration.stateStore.loadState(); unloadedHistories = [] }
        persistenceFailure = nil; persistenceTail = nil
        for i in state.threads.indices where state.threads[i].status != .idle { state.threads[i].status = .failed }
        publish()
        account = try await configuration.driver.open(sessionConfiguration(sessionID: nil, model: "claude-sonnet-4-6", threadID: "", executionID: nil))
        if let account { try bindAccount(account) }
        return state
    }

    @discardableResult public func signIn() async throws -> ClaudeAccount {
        try reserve(); defer { operation = false }
        if let account { try bindAccount(account); return account }
        account = try await configuration.driver.open(sessionConfiguration(sessionID: nil, model: "claude-sonnet-4-6", threadID: "", executionID: nil))
        if let account { try bindAccount(account); return account }
        guard let presenter = configuration.signInPresenter else { throw AgentRuntimeError(code: "login_presenter_missing", message: "Configure a Claude sign-in presenter.") }
        let signedIn = try await configuration.driver.signIn(presenter: presenter)
        try Task.checkCancellation()
        try bindAccount(signedIn); account = signedIn; try await persist(); return signedIn
    }
    public func disconnect() async throws {
        try reserve(); defer { operation = false }
        await configuration.driver.close(); account = nil
    }
    public func signOut() async throws {
        try reserve(); defer { operation = false }
        try await configuration.driver.signOut()
        account = nil; lastUsageLimits = []
    }
    public func registerTool(_ definition: ToolDefinition, executor: AnyToolExecutor) throws {
        try requireIdle(); try Self.validate(definition)
        guard tools[definition.name] == nil else { throw AgentRuntimeError(code: "duplicate_tool", message: "A tool with that name is already registered.") }
        tools[definition.name] = .init(definition: definition, executor: executor)
    }
    @discardableResult public func createThread(title: String? = nil, configuration: AgentThreadConfiguration? = nil) async throws -> AgentThread {
        guard !operation, persistenceFailure == nil else { throw AgentRuntimeError(code: "runtime_busy", message: "Wait for runtime restoration or account changes.") }
        let thread = AgentThread(id: UUID().uuidString, title: title, configuration: configuration)
        state.threads.append(thread); try await persist(); return thread
    }
    @discardableResult public func resumeThread(id: String) throws -> AgentThread {
        guard let thread = state.threads.first(where: { $0.id == id }) else { throw AgentRuntimeError.threadNotFound(id) }
        return thread
    }
    public func observeState() -> AsyncStream<StoredRuntimeState> {
        let id = UUID()
        return AsyncStream(bufferingPolicy: .bufferingNewest(1)) { stream in
            observations[id] = stream; stream.yield(state)
            stream.onTermination = { [weak self] _ in Task { await self?.removeObservation(id) } }
        }
    }
    private func removeObservation(_ id: UUID) { observations.removeValue(forKey: id) }

    public func start(_ request: Request, in threadID: String) throws -> AgentExecution {
        guard !operation, persistenceFailure == nil else { throw AgentRuntimeError(code: "runtime_busy", message: "Restore the runtime or wait for account changes.") }
        guard !threadOperations.contains(threadID), !executions.values.contains(where: { $0.threadID == threadID }) else { throw AgentRuntimeError(code: "thread_busy", message: "This conversation already has an active operation.") }
        guard request.hasContent else { throw AgentRuntimeError.invalidMessageContent() }
        try request.validateAttachments()
        try request.validateOutputSchema()
        let capabilities = configuration.driver.capabilities
        guard request.images.isEmpty || capabilities.images,
              request.outputSchema == nil || capabilities.structuredOutput,
              !request.isEphemeral || capabilities.ephemeralRequests else {
            throw AgentRuntimeError(code: "unsupported_feature", message: "The selected driver does not support this request mode.")
        }
        guard let thread = state.threads.first(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        if let budget = thread.configuration?.maximumThinkingTokens, budget < 0 { throw AgentRuntimeError(code: "invalid_thinking_budget", message: "Thinking budget must be nonnegative; model-specific maxima are validated by the harness.") }
        guard account != nil else { throw AgentRuntimeError.missingSession() }
        let search = try resolvedWebSearch(request, thread: thread)
        let memory = try memoryInstructions(for: request, threadID: threadID)
        let policy = try EffectiveToolPolicy(skills: (thread.configuration?.skills ?? []) + (request.skills ?? []), registered: Set(tools.keys), maximumCalls: configuration.maximumToolCalls, maximumParallel: configuration.maximumParallelToolCalls)
        if request.disableTools == true, !policy.required.isEmpty || !(policy.sequence ?? []).isEmpty {
            throw AgentRuntimeError(code: "invalid_tool_policy", message: "A tool-free request cannot require native tools.")
        }
        let driver: any HarnessDriving
        if let independent = try configuration.driver.makeSessionDriver() { driver = independent }
        else {
            guard executions.isEmpty else { throw AgentRuntimeError(code: "driver_busy", message: "This custom driver does not provide independent sessions.") }
            driver = configuration.driver
        }
        let id = UUID(), control = ExecutionControl()
        let context = RuntimeExecutionState(id: id, threadID: threadID, driver: driver, request: request, policy: policy, search: search, memory: memory)
        let stream = AsyncThrowingStream<AgentEvent, Error>(bufferingPolicy: .bufferingOldest(256)) { context.continuation = $0 }
        executions[id] = context
        context.continuation?.onTermination = { [weak self] reason in
            if case .cancelled = reason { Task { await self?.cancel(id) } }
        }
        context.task = Task { [weak self] in
            guard let self else { return }
            await control.install { [weak self] in await self?.cancel(id) }
            await self.execute(request, thread: thread, id: id, control: control)
        }
        return AgentExecution(id: id, threadID: threadID, events: stream, control: control)
    }
    public func stream(_ request: Request, in threadID: String) throws -> AsyncThrowingStream<AgentEvent, Error> { try start(request, in: threadID).events }
    public func send(_ request: Request, in threadID: String) async throws -> String {
        let execution = try start(request, in: threadID)
        return try await withTaskCancellationHandler {
            var output = ""
            for try await event in execution.events {
                if case let .messageCommitted(message) = event, message.role == .assistant { output = message.text }
            }
            return output
        } onCancel: { execution.cancel() }
    }
    func execute(_ request: Request, thread: AgentThread, id: UUID, control: ExecutionControl) async {
        guard let context = executions[id] else { return }
        let deadline = Task { [weak self] in
            guard let duration = self?.configuration.turnTimeout else { return }
            do { try await Task.sleep(nanoseconds: UInt64(duration * 1_000_000_000)) }
            catch { return }
            await self?.cancel(id)
        }
        defer { deadline.cancel(); executions.removeValue(forKey: id) }
        do {
            try Task.checkCancellation()
            let user = AgentMessage(threadID: thread.id, role: .user, text: request.text, images: request.images)
            try await hydrateHistory(thread.id)
            if !request.isEphemeral {
                if let selection = request.memory {
                    let records = try memories(matching: selection, in: thread.id)
                    state.memoryApplications = Array(((state.memoryApplications ?? []) + [.init(turnID: id.uuidString, threadID: thread.id, recordIDs: records.map(\.id), appliedAt: Date())]).suffix(10000))
                }
                state.messagesByThread[thread.id, default: []].append(user)
                update(thread.id, status: .streaming); try await persist()
            }
            await emit(context, .messageCommitted(user)); await emit(context, .turnStarted(.init(id: id.uuidString, threadID: thread.id, status: .running)))
            let restored = try await context.driver.open(sessionConfiguration(sessionID: request.isEphemeral ? nil : thread.harnessSessionID,
                model: thread.configuration?.model ?? "claude-sonnet-4-6", threadID: thread.id, executionID: id, request: request))
            guard restored == account else { throw AgentRuntimeError(code: "account_changed", message: "The harness account changed. Restore the runtime before continuing.") }
            try Task.checkCancellation()
            await control.finish(.success(()))
            var effectiveRequest = request
            if let storedContext = state.contexts?[thread.id] {
                effectiveRequest.context = .object(["thread": storedContext, "request": request.context ?? .null])
            }
            let result = try await context.driver.run(effectiveRequest) { [weak self] event in
                await self?.receive(event, threadID: thread.id, executionID: id)
            }
            try Task.checkCancellation()
            guard context.policy?.required.isSubset(of: context.successfulTools) != false,
                  context.policy?.sequence == nil || context.toolCounts.values.reduce(0, +) == context.policy?.sequence?.count else {
                throw AgentRuntimeError(code: "required_tool_missing", message: "The turn did not successfully execute all required tools.")
            }
            let finalText: String
            if let schema = request.outputSchema {
                guard let output = result.structuredOutput else {
                    throw AgentRuntimeError(code: "missing_structured_output", message: "The harness did not return validated JSON.")
                }
                try AgentJSONSchemaValidator.validate(output, schema: .raw(schema))
                finalText = output.compactJSONString
            } else { finalText = result.text }
            let message = AgentMessage(id: id.uuidString, threadID: thread.id, role: .assistant, text: finalText)
            let output = try await context.outputHooks?.finish(finalText, message.id)
            try Task.checkCancellation()
            if !request.isEphemeral {
            let beforeCommit = state
            state.usageReceipts = Array(((state.usageReceipts ?? []) + [.init(executionID: id.uuidString, threadID: thread.id, usage: result.usage, completedAt: Date())]).suffix(10000))
            if let output { state.outputs = (state.outputs ?? []) + [output] }
            state.messagesByThread[thread.id, default: []].append(message)
            if let i = state.threads.firstIndex(where: { $0.id == thread.id }) { state.threads[i].harnessSessionID = result.sessionID }
            update(thread.id, status: .idle)
            do { try await persist() } catch { state = beforeCommit; throw error }
            }
            lastUsageLimits = await context.driver.usageLimits()
            await context.driver.close()
            await emit(context, .messageCommitted(message))
            try await context.outputHooks?.committed()
            await emit(context, .turnCompleted(.init(threadID: thread.id, turnID: id.uuidString, usage: result.usage)))
            context.continuation?.finish()
            await context.outputHooks?.end(nil)
        } catch {
            await control.finish(.failure(error))
            await context.driver.close()
            if !request.isEphemeral {
                update(thread.id, status: .failed)
                try? await persist()
            }
            let failure = error as? AgentRuntimeError ?? .init(code: error is CancellationError ? "cancelled" : "runtime_error", message: error is CancellationError ? "The turn was interrupted." : error.localizedDescription)
            await emit(context, .turnFailed(failure)); context.continuation?.finish(throwing: failure)
            await context.outputHooks?.end(error)
        }
    }
    func receive(_ event: HarnessEvent, threadID: String, executionID: UUID) async {
        guard let context = executions[executionID] else { return }
        switch event {
        case let .session(session):
            guard !context.ephemeral else { return }
            if let i = state.threads.firstIndex(where: { $0.id == threadID }) { state.threads[i].harnessSessionID = session }
            do { try await persist() } catch { await cancel(executionID) }
        case let .answer(text):
            do { try await context.outputHooks?.answer(text) }
            catch { await context.outputHooks?.end(error); await cancel(executionID) }
        case let .text(text):
            do { try await context.outputHooks?.consume(text) } catch {
                await context.outputHooks?.end(error); await cancel(executionID); return
            }
            await emit(context, .assistantMessageDelta(threadID: threadID, turnID: executionID.uuidString, delta: text))
        case let .diagnostic(value):
            if let kind = value["kind"]?.stringValue {
                if kind == "tool_round" {
                    context.toolRounds += 1
                    if context.toolRounds > (context.policy?.rounds ?? Int.max) { await cancel(executionID); return }
                }
                await emit(context, .progress(threadID: threadID, turnID: executionID.uuidString, kind: kind, message: value["message"]?.stringValue))
            }
        }
    }
    func cancel(_ id: UUID) async {
        guard let context = executions[id] else { return }
        context.task?.cancel()
        await context.driver.interrupt()
    }
    func sessionConfiguration(sessionID: String?, model: String, threadID: String, executionID: UUID?, request: Request? = nil) -> HarnessSessionConfiguration {
        let context = executionID.flatMap { executions[$0] }
        return .init(sessionID: sessionID, model: model, instructions: AgentInstructionCompiler.compile(baseInstructions: configuration.baseInstructions,
                threadPersonaStack: state.threads.first(where: { $0.id == threadID })?.configuration?.personaStack,
                threadSkills: state.threads.first(where: { $0.id == threadID })?.configuration?.skills ?? [],
                turnPersonaOverride: request?.personaOverride, turnSkills: request?.skills ?? []) + (context?.memoryInstructions ?? "") + "\n\n" + memoryGuidance + "\n\n" + (request?.formatInstructions ?? ""),
              tools: request?.disableTools == true ? [] : tools.values.map(\.definition).sorted { $0.name < $1.name },
              outputSchema: request?.outputSchema, ephemeral: request?.isEphemeral ?? false, webSearch: context?.search ?? .init(),
              maximumThinkingTokens: state.threads.first(where: { $0.id == threadID })?.configuration?.maximumThinkingTokens,
              approve: { [weak self] name, input in await self?.approve(name, input: input, threadID: threadID, executionID: executionID) ?? false },
              execute: { [weak self] name, input in
                  guard let self else { return .init(invocationID: "", toolName: name, success: false, errorMessage: "Runtime unavailable") }
                  return await self.invoke(name, input: input, threadID: threadID, executionID: executionID)
              })
    }
    func approve(_ name: String, input: JSONValue, threadID: String, executionID: UUID?) async -> Bool {
        guard let id = executionID, let context = executions[id], !context.toolsDisabled, !Task.isCancelled, let tool = tools[name] else { return false }
        guard context.policy?.allowed?.contains(name) != false else { return false }
        if tool.definition.approvalPolicy == .automatic { return true }
        let invocation = ToolInvocation(id: UUID().uuidString, threadID: threadID, turnID: id.uuidString, toolName: name, arguments: input)
        let request = ApprovalRequest(invocation: invocation, message: tool.definition.approvalMessage ?? "Allow \(name)?")
        update(threadID, status: .waitingForApproval); publish(); await emit(context, .approvalRequested(request))
        guard executions[id] === context, !Task.isCancelled else { return false }
        let decision = await configuration.approvalPresenter.presentApproval(request)
        guard executions[id] === context, !Task.isCancelled else { return false }
        update(threadID, status: .streaming); publish()
        await emit(context, .approvalResolved(.init(requestID: request.id, invocationID: invocation.id, decision: decision)))
        return decision == .approved
    }
    func invoke(_ name: String, input: JSONValue, threadID: String, executionID: UUID?) async -> ToolResultEnvelope {
        let invocation = ToolInvocation(id: UUID().uuidString, threadID: threadID, turnID: executionID?.uuidString ?? "", toolName: name, arguments: input)
        guard let id = executionID, let context = executions[id], !context.toolsDisabled, !Task.isCancelled, let tool = tools[name] else { return .denied(invocation: invocation) }
        do {
            guard let policy = context.policy, policy.allowed?.contains(name) != false,
                  context.toolCounts.values.reduce(0, +) < policy.total,
                  context.toolCounts[name, default: 0] < policy.byName[name, default: Int.max] else {
                throw AgentRuntimeError(code: "tool_policy_denied", message: "Tool access or call budget denied execution.")
            }
            if let sequence = policy.sequence {
                let index = context.toolCounts.values.reduce(0, +)
                guard index < sequence.count, sequence[index] == name else { throw AgentRuntimeError(code: "tool_sequence", message: "Tool is out of sequence.") }
            }
            guard policy.rounds > 0, context.toolRounds <= policy.rounds else { throw AgentRuntimeError(code: "tool_round_limit", message: "Tool round budget exhausted.") }
            try ToolSchema.validate(input, against: tool.definition.inputSchema)
            // Wait cooperatively; cancellation and generation are rechecked before side effects.
            let parallel = tool.definition.allowsParallelExecution == true
            while context.serialToolActive || context.executingTools >= (parallel ? policy.parallel : 1) {
                try await Task.sleep(nanoseconds: 10_000_000)
                guard executions[id] === context else { throw CancellationError() }
            }
            try Task.checkCancellation()
            guard context.toolCounts.values.reduce(0, +) < policy.total,
                  context.toolCounts[name, default: 0] < policy.byName[name, default: Int.max] else {
                throw AgentRuntimeError(code: "tool_policy_denied", message: "Tool call budget exhausted.")
            }
            if let sequence = policy.sequence {
                let index = context.toolCounts.values.reduce(0, +)
                guard index < sequence.count, sequence[index] == name else { throw AgentRuntimeError(code: "tool_sequence", message: "Tool is out of sequence.") }
            }
            context.toolCounts[name, default: 0] += 1; context.executingTools += 1
            if !parallel { context.serialToolActive = true }
            defer { if executions[id] === context { context.executingTools -= 1; if !parallel { context.serialToolActive = false } } }
            await emit(context, .toolCallStarted(invocation))
            try Task.checkCancellation()
            let result = try await tool.executor.execute(invocation: invocation, context: .init(threadID: threadID, turnID: id.uuidString))
            try Task.checkCancellation()
            guard executions[id] === context else { throw CancellationError() }
            guard result.content.reduce(0, { $0 + ($1.textValue?.utf8.count ?? 0) }) <= AgentStoreLimits.maximumEmbeddedPayloadByteCount, result.content.count <= 256 else { throw AgentRuntimeError(code: "tool_result_limit", message: "Tool result exceeds 4 MiB or 256 content blocks.") }
            let images = result.content.compactMap { item -> AgentImageAttachment? in
                if case let .image(image) = item { return image }; return nil
            }
            guard images.isEmpty || configuration.driver.capabilities.images else {
                throw AgentRuntimeError(code: "unsupported_feature", message: "This driver cannot accept tool images.")
            }
            try Request(text: "", images: images).validateAttachments()
            if result.success { context.successfulTools.insert(name) }
            await emit(context, .toolCallFinished(result)); return result
        } catch { let failure = ToolResultEnvelope.failure(invocation: invocation, message: error.localizedDescription); if executions[id] === context { await emit(context, .toolCallFinished(failure)) }; return failure }
    }
    static func validate(_ tool: ToolDefinition) throws {
        guard ToolDefinition.isValidName(tool.name) else { throw AgentRuntimeError.invalidToolName(tool.name) }
        try ToolSchema.validateDefinition(tool.inputSchema)
    }
    func bindAccount(_ value: ClaudeAccount) throws {
        guard state.account == nil || state.account == value else {
            account = nil
            throw AgentRuntimeError(code: "account_changed", message: "This store belongs to a different account. Use a separate state store and harness directory.")
        }
        state.account = value
    }
    func reserve() throws { try requireIdle(); operation = true }
    func requireIdle() throws {
        guard executions.isEmpty, activeRecovery.isEmpty, threadOperations.isEmpty, pendingPersists == 0, !operation else { throw AgentRuntimeError(code: "runtime_busy", message: "Wait for the current operation to finish.") }
    }
    func update(_ id: String, status: AgentThreadStatus) {
        guard !executions.values.contains(where: { $0.threadID == id && $0.ephemeral }) else { return }
        if let i = state.threads.firstIndex(where: { $0.id == id }) { state.threads[i].status = status; state.threads[i].updatedAt = Date() }
    }
    func persist() async throws {
        pendingPersists += 1; defer { pendingPersists -= 1 }
        if let persistenceFailure { throw persistenceFailure }
        let previous = persistenceTail, snapshot = state, store = configuration.stateStore, unloaded = unloadedHistories
        let task = Task {
            try await previous?.value
            if let partitioned = store as? any RuntimeStatePartitioning { try await partitioned.saveProjection(snapshot, preservingMessagesFor: unloaded) }
            else { try await store.saveState(snapshot) }
        }
        persistenceTail = task
        do { try await task.value; publish() }
        catch {
            persistenceFailure = error
            for context in executions.values { context.task?.cancel(); Task { await context.driver.interrupt() } }
            throw error
        }
    }
    func reserveThread(_ id: String) throws {
        guard !operation, persistenceFailure == nil else { throw AgentRuntimeError(code: "runtime_busy", message: "Restore the runtime or wait for account changes.") }
        guard !threadOperations.contains(id), !executions.values.contains(where: { $0.threadID == id }) else { throw AgentRuntimeError(code: "thread_busy", message: "This conversation already has an active operation.") }
        threadOperations.insert(id)
    }
    func publish() { observations.values.forEach { $0.yield(state) } }
    func emit(_ context: RuntimeExecutionState, _ event: AgentEvent) async {
        if let outputHooks = context.outputHooks {
            do { try await outputHooks.lifecycle(event) }
            catch { await outputHooks.end(error); context.task?.cancel(); Task { await context.driver.interrupt() } }
            return
        }
        if case .dropped = context.continuation?.yield(event) {
            context.continuation?.finish(throwing: AgentRuntimeError(code: "event_buffer_overflow", message: "Event consumer fell behind."))
            context.task?.cancel(); Task { await context.driver.interrupt() }
        }
    }
}
