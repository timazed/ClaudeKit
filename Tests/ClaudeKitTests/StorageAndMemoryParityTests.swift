import XCTest
import ClaudeKit
@testable import ClaudeKitCore
import ClaudeKitSQLite
import ClaudeKitRealm

final class StorageAndMemoryParityTests: XCTestCase {
    func testSQLiteAndRealmPreserveInactivePartitionsAndRedaction() async throws {
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        let stores: [any RuntimeStatePartitioning] = [SQLiteRuntimeStateStore(url: root.appendingPathComponent("store.sqlite")), try RealmRuntimeStateStore(url: root.appendingPathComponent("store.realm"))]
        for store in stores {
            let runtime = try AgentRuntime(configuration: .init(driver: ParityDriver(chunks: ["answer"]), approvalPresenter: AutomaticApprovalPresenter(), stateStore: store))
            try await runtime.restore()
            let first = try await runtime.createThread(title: "first"), second = try await runtime.createThread(title: "second")
            _ = try await runtime.send(.init(text: "secret"), in: first.id)
            _ = try await runtime.send(.init(text: "keep"), in: second.id)
            let before = try await store.loadState()
            let lazy = try await runtime.restore(lazyHistory: true)
            XCTAssertTrue(lazy.messagesByThread.isEmpty)
            try await runtime.renameThread(id: second.id, title: "renamed")
            let afterRename = try await store.loadState()
            XCTAssertEqual(afterRename.messagesByThread, before.messagesByThread)
            let activated = try await runtime.activateThread(id: first.id)
            XCTAssertEqual(activated.count, 2)
            try await runtime.redactMessages(ids: [activated[0].id], in: first.id)
            try await runtime.setContext(.object(["value": .string("saved")]), for: first.id)
            let redacted = try await store.loadState()
            XCTAssertEqual(redacted.messagesByThread[first.id]?.first?.text, "[redacted]")
            XCTAssertEqual(redacted.messagesByThread[second.id], before.messagesByThread[second.id])
            XCTAssertNil(redacted.threads.first { $0.id == first.id }?.harnessSessionID)
            XCTAssertEqual(redacted.contexts?[first.id]?["value"], .string("saved"))
            _ = try await runtime.send(.init(text: "another"), in: second.id)
            let continued = try await store.loadState()
            XCTAssertEqual(continued.messagesByThread[second.id]?.count, 4)
            try await runtime.deleteThread(id: first.id)
            let deleted = try await store.loadState()
            XCTAssertNil(deleted.messagesByThread[first.id]); XCTAssertNil(deleted.contexts?[first.id])
        }
    }
    func testEmbeddingCacheInvalidatesEditsAndExcludesDeletedRecords() async throws {
        let runtime = try AgentRuntime(configuration: .init(driver: ParityDriver(chunks: []), approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore()
        let thread = try await runtime.createThread()
        let embedding = CountingEmbedding()
        var record = AgentMemoryRecord(text: "first", threadID: thread.id)
        try await runtime.saveMemory(record)
        _ = try await runtime.semanticMemories(query: "query", in: thread.id, using: embedding)
        _ = try await runtime.semanticMemories(query: "query", in: thread.id, using: embedding)
        let cached = await runtime.memoryRetrievalDiagnostics()
        XCTAssertEqual(cached?.cacheHits, 1); XCTAssertEqual(cached?.embeddedCount, 0)
        record.text = "changed"; try await runtime.saveMemory(record)
        let edited = try await runtime.semanticMemories(query: "query", in: thread.id, using: embedding)
        XCTAssertEqual(edited.first?.text, "changed")
        let invalidated = await runtime.memoryRetrievalDiagnostics(); XCTAssertEqual(invalidated?.embeddedCount, 1)
        try await runtime.deleteMemory(id: record.id)
        let deleted = try await runtime.semanticMemories(query: "query", in: thread.id, using: embedding)
        XCTAssertTrue(deleted.isEmpty)
    }
    func testMemoryContextBudgetIsExplicit() async throws {
        let runtime = try AgentRuntime(configuration: .init(driver: ParityDriver(chunks: []), approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore(); let thread = try await runtime.createThread()
        for _ in 0..<5 { try await runtime.saveMemory(.init(text: String(repeating: "x", count: 16000), threadID: thread.id)) }
        let unbounded = try await runtime.memoryInstructions(for: .init(text: "query", memory: .init()), threadID: thread.id)
        XCTAssertGreaterThan(unbounded.utf8.count, 65536)
        do { _ = try await runtime.memoryInstructions(for: .init(text: "query", memory: .init(maximumContextBytes: 1024)), threadID: thread.id); XCTFail("Expected explicit budget") } catch {}
    }
}
private actor CountingEmbedding: AgentMemoryEmbedding {
    nonisolated let cacheIdentifier: String? = "test-v1"
    func embedding(for text: String) -> [Double] { [Double(text.utf8.count), 1] }
}

extension StorageAndMemoryParityTests {
    func testFailedPersistenceRequiresRestoreBeforeFurtherTurns() async throws {
        let store = FailingStateStore()
        let runtime = try AgentRuntime(configuration: .init(driver: ParityDriver(chunks: ["answer"]), approvalPresenter: AutomaticApprovalPresenter(), stateStore: store))
        try await runtime.restore(); let thread = try await runtime.createThread()
        await store.failNextWrite()
        do { _ = try await runtime.send(.init(text: "failure"), in: thread.id); XCTFail("Expected persistence failure") } catch {}
        do { _ = try await runtime.createThread(); XCTFail("Expected restore requirement") } catch {}
        try await runtime.restore()
        _ = try await runtime.send(.init(text: "survives"), in: thread.id)
        let saved = try await store.loadState()
        XCTAssertEqual(saved.messagesByThread[thread.id]?.map(\.text), ["survives", "answer"])
    }
    func testRemotePreparationFreezesHistoryMemoryAndInstructions() async throws {
        let runtime = try AgentRuntime(configuration: .init(driver: ParityDriver(chunks: ["answer"]), approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore(); let thread = try await runtime.createThread(configuration: .init(model: "test", personaStack: .init(layers: [.init(name: "Editor", instructions: "Be precise")])) )
        _ = try await runtime.send(.init(text: "earlier"), in: thread.id)
        try await runtime.saveMemory(.init(text: "Use metric", threadID: thread.id))
        let prepared = try await runtime.prepareRemoteSubmission(.init(text: "continue", memory: .init()), in: thread.id)
        XCTAssertTrue(prepared.request.formatInstructions?.contains("Be precise") == true)
        XCTAssertTrue(prepared.request.formatInstructions?.contains("Use metric") == true)
        XCTAssertNotNil(prepared.request.context?["history"])
        XCTAssertNil(prepared.request.memory); XCTAssertNil(prepared.request.personaOverride)
        XCTAssertEqual(prepared.model, "test")
    }
}
private actor FailingStateStore: RuntimeStateStoring {
    var state = StoredRuntimeState.empty
    var fail = false
    func prepare() {}
    func loadState() -> StoredRuntimeState { state }
    func failNextWrite() { fail = true }
    func saveState(_ value: StoredRuntimeState) throws {
        if fail { fail = false; throw AgentRuntimeError(code: "test_disk_failure", message: "Injected write failure") }
        state = value
    }
}
