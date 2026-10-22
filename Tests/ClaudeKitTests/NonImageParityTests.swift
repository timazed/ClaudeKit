import XCTest
import ClaudeKit
@testable import ClaudeKitCore
import ClaudeKitSQLite

/// Regression coverage for non-image output, recovery and storage behavior.
final class NonImageParityTests: XCTestCase {
    struct Answer: Codable, Sendable, Equatable { let answer: String }
    let schema: JSONValue = .object(["type": .string("object"), "properties": .object(["answer": .object(["type": .string("string")])]), "required": .array([.string("answer")]), "additionalProperties": .bool(false)])

    func makeRuntime(_ driver: ParityDriver, store: any RuntimeStateStoring = InMemoryRuntimeStateStore(), recovery: any AgentRecoveryStoring = FileAgentRecoveryStore()) async throws -> (AgentRuntime, AgentThread) {
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: store, recoveryStore: recovery))
        try await runtime.restore()
        return (runtime, try await runtime.createThread(configuration: .init(model: "test")))
    }
    func testJSONLinesChunksCommitAndRestore() async throws {
        let driver = ParityDriver(chunks: ["{\"answer\":\"one\"}\n{\"ans", "wer\":\"two\"}\n"])
        let (runtime, thread) = try await makeRuntime(driver)
        let format = AgentRecordResponseFormat<Answer>(name: "answers", schema: .raw(schema), minimumRecords: 2, maximumRecords: 2)
        let execution = try await runtime.start(.init(text: "two"), in: thread.id, output: format)
        var records: [Answer] = [], committed = false
        for try await event in execution.events {
            switch event {
            case let .format(_, .recordCompleted(index, record)): XCTAssertEqual(index, records.count); records.append(record)
            case let .outputCommitted(_, value): XCTAssertEqual(value.records, records); committed = true
            default: break
            }
        }
        XCTAssertTrue(committed); XCTAssertEqual(records.map(\.answer), ["one", "two"])
        let restored = try await runtime.fetchLatestOutput(in: thread.id, output: format)
        XCTAssertEqual(restored?.records, records)
        let tools = await driver.lastToolCount; XCTAssertEqual(tools, 0)
    }
    func testInvalidRecordNeverCommitsAssistant() async throws {
        let (runtime, thread) = try await makeRuntime(ParityDriver(chunks: ["{\"answer\":\"valid\"}\n{broken}\n"]))
        do {
            _ = try await runtime.send(.init(text: "records"), in: thread.id, output: AgentRecordResponseFormat<Answer>(name: "answers"))
            XCTFail("Expected invalid record")
        } catch {}
        let messages = await runtime.messages(for: thread.id)
        XCTAssertFalse(messages.contains { $0.role == .assistant })
    }
    func testXMLValidationRejectsDTDAndWrongSchema() async throws {
        let format = AgentXMLResponseFormat(name: "answer", schema: .element("answer", text: .string))
        for xml in ["<!DOCTYPE answer [<!ENTITY secret SYSTEM 'file:///etc/passwd'>]><answer>&secret;</answer>", "<wrong>value</wrong>"] {
            let decoder = try format.makeDecoder()
            let sink = AgentOutputEventSink<AgentXMLOutputEvent> { _, _ in }
            do { try await decoder.consume(Data(xml.utf8), into: sink); _ = try await decoder.finish(into: sink); XCTFail("Expected XML rejection") }
            catch {}
        }
    }
    func testRecoveryReceiptReplaysWithoutGenerationOrAuthorization() async throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let store = FileAgentRecoveryStore(directory: directory)
        let driver = ParityDriver(chunks: [], json: .object(["answer": .string("saved")]))
        let (runtime, thread) = try await makeRuntime(driver, recovery: store)
        let id = try await runtime.prepareRecovery(.init(text: "answer", executionMode: .ephemeral, outputSchema: schema), in: thread.id)
        let first = try await runtime.sendRecovering(id) { _ in true }
        let replay = try await runtime.sendRecovering(id) { _ in XCTFail("Receipt must not reauthorize"); return false }
        XCTAssertEqual(first, replay)
        let runs = await driver.runs; XCTAssertEqual(runs, 1)
        let messages = await runtime.messages(for: thread.id); XCTAssertTrue(messages.isEmpty)
        let persisted = try await FileAgentRecoveryStore(directory: directory).load(id)
        XCTAssertEqual(persisted.phase, .completed); XCTAssertEqual(persisted.attempts, 1)
    }
    func testRecoveryLeaseExcludesSecondStore() async throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let id = UUID(), a = FileAgentRecoveryStore(directory: directory), b = FileAgentRecoveryStore(directory: directory)
        let lease = try await a.acquire(id)
        do { _ = try await b.acquire(id); XCTFail("Expected exclusive lease") }
        catch let error as AgentRuntimeError { XCTAssertEqual(error.code, "recovery_busy") }
        withExtendedLifetime(lease) {}
    }
    func testDeniedRecoveryDoesNotSpendAttempt() async throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let driver = ParityDriver(chunks: [])
        let (runtime, thread) = try await makeRuntime(driver, recovery: FileAgentRecoveryStore(directory: directory))
        let id = try await runtime.prepareRecovery(.init(text: "answer", executionMode: .ephemeral, outputSchema: schema), in: thread.id)
        do { _ = try await runtime.sendRecovering(id) { _ in false }; XCTFail("Expected denial") } catch {}
        let status = try await runtime.recoveryStatus(id), runs = await driver.runs
        XCTAssertEqual(status.attempts, 0); XCTAssertEqual(runs, 0); XCTAssertNotNil(status.pendingAttemptID)
    }
    func testSQLiteIndexedQueryAndMigration() async throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let (runtime, thread) = try await makeRuntime(ParityDriver(chunks: ["answer"]))
        _ = try await runtime.send(.init(text: "question"), in: thread.id)
        let sqlite = SQLiteRuntimeStateStore(url: directory.appendingPathComponent("index.sqlite"))
        try await runtime.migrateState(to: sqlite)
        let hits = try await sqlite.queryMessages(.init(threadID: thread.id, containing: "ANSWER", limit: 1))
        XCTAssertEqual(hits.map(\.text), ["answer"])
        let first = try await sqlite.queryMessages(.init(threadID: thread.id, limit: 1))
        let next = try await sqlite.queryMessages(.init(threadID: thread.id, afterID: first.first!.id, limit: 1))
        XCTAssertEqual(next.first?.role, .assistant)
    }
    func testExplicitToolFreeRequestRejectsRequiredToolsBeforeRun() async throws {
        let driver = ParityDriver(chunks: [])
        let (runtime, _) = try await makeRuntime(driver)
        try await runtime.registerTool(.init(name: "read", description: "Read", inputSchema: .object(["type": .string("object")])), executor: .init { invocation, _ in .success(invocation: invocation, text: "ok") })
        let thread = try await runtime.createThread(configuration: .init(model: "test", skills: [.init(id: "required", name: "Required", instructions: "read", executionPolicy: .init(requiredToolNames: ["read"]))]))
        var request = Request(text: "records"); request.disableTools = true
        do { _ = try await runtime.start(request, in: thread.id, output: AgentRecordResponseFormat<Answer>(name: "answers")); XCTFail("Expected policy rejection") }
        catch let error as AgentRuntimeError { XCTAssertEqual(error.code, "invalid_tool_policy") }
        let runs = await driver.runs; XCTAssertEqual(runs, 0)
    }
}

actor ParityDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true, structuredOutput: true, ephemeralRequests: true)
    let chunks: [String]
    let json: JSONValue?
    var runs = 0
    var lastToolCount = 0
    init(chunks: [String], json: JSONValue? = nil) { self.chunks = chunks; self.json = json }
    func open(_ configuration: HarnessSessionConfiguration) -> ClaudeAccount? { lastToolCount = configuration.tools.count; return .init(email: "fixture@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) -> ClaudeAccount { .init(email: "fixture@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        runs += 1
        for chunk in chunks { try Task.checkCancellation(); await onEvent(.text(chunk)) }
        return .init(sessionID: "fixture", text: chunks.joined(), usage: .init(), structuredOutput: json)
    }
    func interrupt() {}
    func close() {}
}
