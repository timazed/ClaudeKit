import XCTest
@testable import ClaudeKit
import ClaudeKitSQLite
import ClaudeKitHarness

final class BehaviorAndStoreTests: XCTestCase {
    func testPoliciesDenyBeforeExecutingAndRequiredToolsFailCommit() async throws {
        let driver = PolicyDriver(), counter = CallCounter()
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.registerTool(.init(name: "read", description: "Read", inputSchema: .object(["type": .string("object")])), executor: .init { invocation, _ in
            await counter.increment(); return .success(invocation: invocation, text: "ok")
        })
        try await runtime.restore()
        let thread = try await runtime.createThread(configuration: .init(model: "test", skills: [
            .init(id: "limit", name: "Limit", instructions: "Read once", executionPolicy: .init(requiredToolNames: ["read"], maxToolCalls: 1))]))
        _ = try await runtime.send(.init(text: "test"), in: thread.id)
        let calls = await counter.value; XCTAssertEqual(calls, 1)
        let outcomes = await driver.outcomes; XCTAssertEqual(outcomes, [true, false])
        let denied = try await runtime.createThread(configuration: .init(model: "test", skills: [
            .init(id: "deny", name: "Deny", instructions: "No tools", executionPolicy: .init(allowedToolNames: []))]))
        _ = try await runtime.send(.init(text: "denied"), in: denied.id)
        let countAfter = await counter.value; XCTAssertEqual(countAfter, 1)
        await driver.setRunTools(false)
        do { _ = try await runtime.send(.init(text: "missing required tool"), in: thread.id); XCTFail("Expected missing required tool failure") }
        catch let error as AgentRuntimeError { XCTAssertEqual(error.code, "required_tool_missing") }
        let messages = await runtime.messages(for: thread.id)
        XCTAssertEqual(messages.filter { $0.role == .assistant }.count, 1)
    }
    func testParallelToolCeilingAndSerialDefault() async throws {
        for allowsParallel in [false, true] {
            let driver = ConcurrentPolicyDriver(), probe = ConcurrencyProbe()
            let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
            try await runtime.registerTool(.init(name: "read", description: "Read", inputSchema: .object(["type": .string("object")]), allowsParallelExecution: allowsParallel), executor: .init { invocation, _ in
                try await probe.execute()
                return .success(invocation: invocation, text: "ok")
            })
            try await runtime.restore()
            let thread = try await runtime.createThread(configuration: .init(model: "test", skills: [.init(id: "parallel", name: "Parallel", instructions: "Read", executionPolicy: .init(maximumParallelToolCalls: 2))]))
            _ = try await runtime.send(.init(text: "read"), in: thread.id)
            let peak = await probe.peak
            XCTAssertEqual(peak, allowsParallel ? 2 : 1)
        }
    }
    func testPolicyIntersectionAndPersonaPrecedence() throws {
        let skills: [AgentSkill] = [
            .init(id: "a", name: "A", instructions: "A", executionPolicy: .init(allowedToolNames: ["read", "write"], maxToolCalls: 8, maximumParallelToolCalls: 4)),
            .init(id: "b", name: "B", instructions: "B", executionPolicy: .init(allowedToolNames: ["read"], maxToolCalls: 2, maximumParallelToolCalls: 2))]
        let policy = try EffectiveToolPolicy(skills: skills, registered: ["read", "write"])
        XCTAssertEqual(policy.allowed, ["read"]); XCTAssertEqual(policy.total, 2); XCTAssertEqual(policy.parallel, 2)
        let result = AgentInstructionCompiler.compile(baseInstructions: "base", threadPersonaStack: .init(layers: [.init(name: "thread", instructions: "thread")]), threadSkills: skills,
            turnPersonaOverride: .init(layers: [.init(name: "override", instructions: "turn")]))
        XCTAssertFalse(result.contains("base")); XCTAssertFalse(result.contains("thread")); XCTAssertTrue(result.contains("override")); XCTAssertTrue(result.contains("Skill A"))
    }
    func testSQLiteRoundTripAndScopedMemory() async throws {
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        let store = SQLiteRuntimeStateStore(url: root.appendingPathComponent("state.sqlite"))
        let driver = PolicyDriver(); await driver.setRunTools(false)
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: store))
        try await runtime.restore()
        let a = try await runtime.createThread(), b = try await runtime.createThread()
        try await runtime.saveMemory(.init(id: "global", text: "Likes Swift", tags: ["language"]))
        try await runtime.saveMemory(.init(id: "a", text: "Private Swift project", threadID: a.id))
        let memories = try await runtime.memories(matching: .init(query: "Swift"), in: b.id)
        XCTAssertEqual(memories.map(\.id), ["global"])
        _ = try await runtime.send(.init(text: "reply", memory: .init(query: "Swift")), in: b.id)
        let instructions = await driver.instructions
        XCTAssertTrue(instructions.contains("Likes Swift")); XCTAssertFalse(instructions.contains("Private Swift project"))
        let saved = try await store.loadState()
        let reopened = SQLiteRuntimeStateStore(url: root.appendingPathComponent("state.sqlite"))
        let restored = try await reopened.loadState(); XCTAssertEqual(saved, restored)
        let first = try await runtime.messages(for: b.id, after: nil, limit: 1)
        let next = try await runtime.messages(for: b.id, after: first.first!.id, limit: 1)
        XCTAssertEqual(first.first?.role, .user); XCTAssertEqual(next.first?.role, .assistant)
        try await runtime.renameThread(id: b.id, title: "Renamed")
        try await runtime.deleteThread(id: a.id)
        let remaining = try await store.loadState()
        XCTAssertEqual(remaining.threads.first?.title, "Renamed")
        XCTAssertEqual(remaining.memories?.map(\.id), ["global"])
    }
    func testOfficialLogoutRemovesScopedCredential() async throws {
        try XCTSkipUnless(ProcessInfo.processInfo.environment["CLAUDEKIT_RUN_HARNESS_TESTS"] == "1")
        let node = try XCTUnwrap(ProcessInfo.processInfo.environment["CLAUDEKIT_NODE"])
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        let driver = try ClaudeCodeDriver(configuration: .init(authentication: .fixture, storageDirectory: root, nodeExecutable: URL(fileURLWithPath: node)))
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore()
        let credentials = root.appendingPathComponent("Config/.credentials.json")
        try Data("{\"claudeAiOauth\":{\"accessToken\":\"fixture-only\",\"refreshToken\":\"fixture-only\",\"expiresAt\":0}}".utf8).write(to: credentials)
        try await runtime.signOut()
        let account = await runtime.currentSession(); XCTAssertNil(account)
        if FileManager.default.fileExists(atPath: credentials.path) {
            let contents = try String(contentsOf: credentials, encoding: .utf8)
            XCTAssertFalse(contents.contains("fixture-only"))
        }
        await driver.shutdown()
    }
}
private actor CallCounter { var value = 0; func increment() { value += 1 } }
private actor PolicyDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true)
    var session: HarnessSessionConfiguration?
    var runTools = true
    var outcomes: [Bool] = []
    var instructions: String { session?.instructions ?? "" }
    func setRunTools(_ value: Bool) { runTools = value }
    func open(_ configuration: HarnessSessionConfiguration) async throws -> ClaudeAccount? { session = configuration; return .init(email: "test@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) async throws -> ClaudeAccount { .init(email: "test@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        outcomes = []
        if runTools, let session { for _ in 0..<2 { let result = await session.execute("read", .object([:])); outcomes.append(result.success) } }
        return .init(sessionID: "session", text: "done", usage: .init())
    }
    func interrupt() async {}
    func close() async {}
}

private actor ConcurrencyProbe {
    var active = 0
    var peak = 0
    func execute() async throws {
        active += 1; peak = max(peak, active)
        defer { active -= 1 }
        try await Task.sleep(nanoseconds: 30_000_000)
    }
}
private actor ConcurrentPolicyDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true)
    var session: HarnessSessionConfiguration?
    func open(_ configuration: HarnessSessionConfiguration) async throws -> ClaudeAccount? { session = configuration; return .init(email: "test@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) async throws -> ClaudeAccount { .init(email: "test@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        if let session {
            await withTaskGroup(of: Void.self) { group in
                for _ in 0..<4 { group.addTask { _ = await session.execute("read", .object([:])) } }
            }
        }
        return .init(sessionID: "session", text: "done", usage: .init())
    }
    func interrupt() async {}
    func close() async {}
}
