import XCTest
@testable import ClaudeKitLegacy

final class AgentRuntimeTests: XCTestCase {
    func testSendCollectsAssistantMessageAndPersistsHistory() async throws {
        let runtime = try AgentRuntime(configuration: .init(
            authProvider: AnthropicAPIKeyAuthProvider(apiKey: "test-key"),
            secureStore: InMemorySessionSecureStore(),
            backend: LoopbackBackend(),
            approvalPresenter: AutomaticApprovalPresenter(),
            stateStore: InMemoryRuntimeStateStore()
        ))

        try await runtime.signIn()
        let thread = try await runtime.createThread(title: "Test")
        let text = try await runtime.send(Request(text: "Hello"), in: thread.id)

        XCTAssertEqual(text, "Echo: Hello")

        let messages = await runtime.messages(for: thread.id)
        XCTAssertEqual(messages.map(\.role), [.user, .assistant])
        XCTAssertEqual(messages.last?.text, "Echo: Hello")
    }

    func testExecutesToolWithApproval() async throws {
        let backend = ToolRequestingBackend()
        let runtime = try AgentRuntime(configuration: .init(
            authProvider: AnthropicAPIKeyAuthProvider(apiKey: "test-key"),
            secureStore: InMemorySessionSecureStore(),
            backend: backend,
            approvalPresenter: AutomaticApprovalPresenter(),
            stateStore: InMemoryRuntimeStateStore()
        ))

        try await runtime.signIn()
        try await runtime.registerTool(
            ToolDefinition(
                name: "lookup",
                description: "Look up a value.",
                inputSchema: .object(["type": .string("object")]),
                approvalPolicy: .requiresApproval
            ),
            executor: AnyToolExecutor { invocation, _ in
                .success(invocation: invocation, text: "42")
            }
        )

        let thread = try await runtime.createThread()
        let response = try await runtime.send(Request(text: "Use the tool"), in: thread.id)

        XCTAssertEqual(response, "Tool said 42")
    }
}

private actor LoopbackBackend: AgentBackend {
    var defaultThreadConfiguration: AgentThreadConfiguration? {
        get async {
            AgentThreadConfiguration(model: "test")
        }
    }

    func createThread(session _: AnthropicSession) async throws -> AgentThread {
        AgentThread(id: UUID().uuidString, configuration: AgentThreadConfiguration(model: "test"))
    }

    func resumeThread(id: String, session _: AnthropicSession) async throws -> AgentThread {
        AgentThread(id: id, configuration: AgentThreadConfiguration(model: "test"))
    }

    func beginTurn(
        thread: AgentThread,
        history _: [AgentMessage],
        message: Request,
        instructions _: String,
        tools _: [ToolDefinition],
        session _: AnthropicSession
    ) async throws -> AgentTurnStream {
        let turn = AgentTurn(threadID: thread.id)
        let text = "Echo: \(message.text)"
        return AgentTurnStream(events: AsyncThrowingStream { continuation in
            continuation.yield(.turnStarted(turn))
            continuation.yield(.assistantMessageDelta(threadID: thread.id, turnID: turn.id, delta: text))
            continuation.yield(.assistantMessageCompleted(
                AgentMessage(threadID: thread.id, role: .assistant, text: text)
            ))
            continuation.yield(.turnCompleted(
                AgentTurnSummary(threadID: thread.id, turnID: turn.id)
            ))
            continuation.finish()
        })
    }
}

private actor ToolRequestingBackend: AgentBackend {
    func createThread(session _: AnthropicSession) async throws -> AgentThread {
        AgentThread(id: UUID().uuidString)
    }

    func resumeThread(id: String, session _: AnthropicSession) async throws -> AgentThread {
        AgentThread(id: id)
    }

    func beginTurn(
        thread: AgentThread,
        history _: [AgentMessage],
        message _: Request,
        instructions _: String,
        tools _: [ToolDefinition],
        session _: AnthropicSession
    ) async throws -> AgentTurnStream {
        let pending = PendingTestResult()
        let turn = AgentTurn(threadID: thread.id)
        let invocation = ToolInvocation(
            id: "toolu_test",
            threadID: thread.id,
            turnID: turn.id,
            toolName: "lookup",
            arguments: .object([:])
        )

        let events = AsyncThrowingStream<AgentBackendEvent, Error> { continuation in
            Task {
                continuation.yield(.turnStarted(turn))
                continuation.yield(.toolCallRequested(invocation))
                let result = await pending.wait()
                let text = "Tool said \(result.primaryText ?? "")"
                continuation.yield(.assistantMessageDelta(threadID: thread.id, turnID: turn.id, delta: text))
                continuation.yield(.assistantMessageCompleted(
                    AgentMessage(threadID: thread.id, role: .assistant, text: text)
                ))
                continuation.yield(.turnCompleted(
                    AgentTurnSummary(threadID: thread.id, turnID: turn.id)
                ))
                continuation.finish()
            }
        }

        return AgentTurnStream(events: events) { result, _ in
            await pending.resolve(result)
        }
    }
}

private actor PendingTestResult {
    private var result: ToolResultEnvelope?
    private var continuation: CheckedContinuation<ToolResultEnvelope, Never>?

    func resolve(_ result: ToolResultEnvelope) {
        if let continuation {
            self.continuation = nil
            continuation.resume(returning: result)
        } else {
            self.result = result
        }
    }

    func wait() async -> ToolResultEnvelope {
        if let result {
            self.result = nil
            return result
        }

        return await withCheckedContinuation { continuation in
            self.continuation = continuation
        }
    }
}
