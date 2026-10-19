import XCTest
@testable import ClaudeKit

final class ConcurrencyParityTests: XCTestCase {
    func testIndependentThreadsHaveNoTwoTurnCapAndCancellationIsIsolated() async throws {
        let probe = ConcurrentSessionProbe(), store = InMemoryRuntimeStateStore()
        let runtime = try AgentRuntime(configuration: .init(driver: ConcurrentSessionDriver(probe), approvalPresenter: AutomaticApprovalPresenter(), stateStore: store))
        try await runtime.restore()
        var threads: [AgentThread] = []
        for _ in 0..<4 { threads.append(try await runtime.createThread()) }
        var handles: [AgentExecution] = []
        for thread in threads { handles.append(try await runtime.start(.init(text: thread.id), in: thread.id)) }
        let consumers = handles.map { handle in Task { () -> String in
            var text = ""
            for try await event in handle.events { if case let .messageCommitted(message) = event, message.role == .assistant { text = message.text } }
            return text
        } }
        defer { handles.forEach { $0.cancel() }; consumers.forEach { $0.cancel() } }
        for _ in 0..<500 {
            if await probe.started == 4 { break }
            try await Task.sleep(nanoseconds: 10_000_000)
        }
        let started = await probe.started; XCTAssertEqual(started, 4)
        do { _ = try await runtime.start(.init(text: "overlap"), in: threads[0].id); XCTFail("Expected same-thread exclusion") }
        catch let error as AgentRuntimeError { XCTAssertEqual(error.code, "thread_busy") }
        // Thread creation is independent of active executions too.
        _ = try await runtime.createThread(title: "Created while four turns run")
        handles[0].cancel()
        do { _ = try await consumers[0].value; XCTFail("Expected cancellation") } catch {}
        await probe.release()
        for index in 1..<4 { let answer = try await consumers[index].value; XCTAssertEqual(answer, threads[index].id) }
        let saved = try await store.loadState()
        for index in 1..<4 {
            XCTAssertEqual(saved.messagesByThread[threads[index].id]?.last?.text, threads[index].id)
            XCTAssertEqual(saved.threads.first(where: { $0.id == threads[index].id })?.status, .idle)
        }
        XCTAssertFalse(saved.messagesByThread[threads[0].id]?.contains(where: { $0.role == .assistant }) ?? false)
    }
    func testLimitsAreConfigurableLikeCodexKit() throws {
        let policy = try EffectiveToolPolicy(skills: [.init(id: "large", name: "Large", instructions: "", executionPolicy: .init(maximumParallelToolCalls: 32))], registered: [], maximumCalls: nil, maximumParallel: 64)
        XCTAssertEqual(policy.parallel, 32); XCTAssertEqual(policy.total, Int.max); XCTAssertEqual(policy.rounds, Int.max)
        let runtime = try AgentRuntime(configuration: .init(driver: ConcurrentSessionDriver(ConcurrentSessionProbe()), approvalPresenter: AutomaticApprovalPresenter(), turnTimeout: nil, maximumToolCalls: nil, maximumParallelToolCalls: 64))
        _ = runtime
    }
}
private actor ConcurrentSessionProbe {
    var started = 0
    var released = false
    func entered() { started += 1 }
    func release() { released = true }
}
private actor ConcurrentSessionDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true, maximumConcurrentExecutions: .max)
    nonisolated let probe: ConcurrentSessionProbe
    init(_ probe: ConcurrentSessionProbe) { self.probe = probe }
    nonisolated func makeSessionDriver() -> (any HarnessDriving)? { ConcurrentSessionDriver(probe) }
    func open(_ configuration: HarnessSessionConfiguration) -> ClaudeAccount? { .init(email: "concurrency@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) -> ClaudeAccount { .init(email: "concurrency@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        await probe.entered()
        while !(await probe.released) { try await Task.sleep(nanoseconds: 5_000_000) }
        try Task.checkCancellation()
        await onEvent(.text(prompt))
        return .init(sessionID: UUID().uuidString, text: prompt, usage: .init())
    }
    func interrupt() {}
    func close() {}
}

extension ConcurrencyParityTests {
    func testTypedRecordsAllowRequiredToolsAndIgnoreCommentary() async throws {
        struct Answer: Codable, Sendable { let answer: String }
        let driver = FormatToolDriver()
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.registerTool(.init(name: "read", description: "Read", inputSchema: .object(["type": .string("object")])), executor: .init { invocation, _ in
            .success(invocation: invocation, text: "native result")
        })
        try await runtime.restore()
        let thread = try await runtime.createThread(configuration: .init(model: "test", skills: [.init(id: "read", name: "Read", instructions: "Read first", executionPolicy: .init(requiredToolNames: ["read"]))]))
        let result = try await runtime.send(.init(text: "Read then answer"), in: thread.id,
            output: AgentRecordResponseFormat<Answer>(name: "answers", minimumRecords: 1))
        XCTAssertEqual(result.records.first?.answer, "done")
        let count = await driver.toolCount; XCTAssertEqual(count, 1)
    }
    func testSearchPolicyHasNoArbitraryCallCapAndNarrowsSubdomains() async throws {
        let runtime = try AgentRuntime(configuration: .init(driver: ConcurrentSessionDriver(ConcurrentSessionProbe()), approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore(), allowHostedSearch: true))
        try await runtime.restore()
        let thread = try await runtime.createThread(configuration: .init(model: "test", skills: [.init(id: "docs", name: "Docs", instructions: "", executionPolicy: .init(webSearch: .init(mode: .live, allowedDomains: ["docs.example.com"])))]))
        var request = Request(text: "Search"); request.webSearch = .init(mode: .live, allowedDomains: ["example.com"], maximumCalls: 100)
        let policy = try await runtime.resolvedWebSearch(request, thread: thread)
        XCTAssertEqual(policy.mode, .live); XCTAssertEqual(policy.allowedDomains, ["docs.example.com"]); XCTAssertEqual(policy.maximumCalls, 100)
    }
}
private actor FormatToolDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true)
    var session: HarnessSessionConfiguration?
    var toolCount = 0
    func open(_ configuration: HarnessSessionConfiguration) -> ClaudeAccount? { session = configuration; return .init(email: "format@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) -> ClaudeAccount { .init(email: "format@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        await onEvent(.text("I will read the data first."))
        guard let session, session.tools.contains(where: { $0.name == "read" }) else { throw AgentRuntimeError(code: "missing_tool", message: "Tool was hidden") }
        let result = await session.execute("read", .object([:]))
        guard result.success else { throw AgentRuntimeError(code: "tool_failed", message: "Tool failed") }
        toolCount += 1
        let final = "{\"answer\":\"done\"}\n"
        await onEvent(.text(final))
        await onEvent(.answer(final))
        return .init(sessionID: "format", text: final, usage: .init())
    }
    func interrupt() {}
    func close() {}
}
