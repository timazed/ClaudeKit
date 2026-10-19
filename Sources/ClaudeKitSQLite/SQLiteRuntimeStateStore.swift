import Foundation
import SQLite3
import ClaudeKit

/// Transactional row-based persistence with a compact metadata record. Official harness transcripts remain in the harness directory.
public actor SQLiteRuntimeStateStore: RuntimeStatePartitioning {
    private let url: URL
    var database: OpaquePointer?
    let transient = unsafeBitCast(-1, to: sqlite3_destructor_type.self)
    public init(url: URL) { self.url = url }
    deinit { if let database { sqlite3_close(database) } }

    public func prepare() async throws {
        guard database == nil else { return }
        guard url.isFileURL else { throw error("SQLite requires a local file URL.") }
        try FileManager.default.createDirectory(at: url.deletingLastPathComponent(), withIntermediateDirectories: true)
        var handle: OpaquePointer?
        guard sqlite3_open_v2(url.path, &handle, SQLITE_OPEN_CREATE | SQLITE_OPEN_READWRITE | SQLITE_OPEN_FULLMUTEX, nil) == SQLITE_OK else {
            if let handle { sqlite3_close(handle) }; throw error("Cannot open the state database.")
        }
        database = handle
        do {
            sqlite3_busy_timeout(handle, 5000)
            try execute("PRAGMA journal_mode=WAL")
            try execute("CREATE TABLE IF NOT EXISTS claudekit_state (id INTEGER PRIMARY KEY CHECK(id=1), version INTEGER NOT NULL, payload BLOB NOT NULL)")
            try execute("CREATE TABLE IF NOT EXISTS claudekit_threads (id TEXT PRIMARY KEY, updated REAL NOT NULL, payload BLOB NOT NULL)")
            try execute("CREATE INDEX IF NOT EXISTS claudekit_thread_date ON claudekit_threads(updated DESC, id)")
            try execute("CREATE TABLE IF NOT EXISTS claudekit_messages (id TEXT PRIMARY KEY, thread_id TEXT NOT NULL, position INTEGER NOT NULL, text TEXT NOT NULL, payload BLOB NOT NULL)")
            try execute("CREATE INDEX IF NOT EXISTS claudekit_message_page ON claudekit_messages(thread_id,position)")
            try rebuildLegacyIndexIfNeeded()
        } catch { sqlite3_close(handle); database = nil; throw error }
    }
    public func loadState() async throws -> StoredRuntimeState { try await load(includeMessages: true) }
    public func loadOverview() async throws -> StoredRuntimeState { try await load(includeMessages: false) }
    private func load(includeMessages: Bool) async throws -> StoredRuntimeState {
        try await prepare()
        let statement = try prepareStatement("SELECT version, payload FROM claudekit_state WHERE id=1")
        defer { sqlite3_finalize(statement) }
        let result = sqlite3_step(statement)
        if result == SQLITE_DONE { return .empty }
        guard result == SQLITE_ROW, [1, 2].contains(sqlite3_column_int(statement, 0)) else { throw error("Unknown or unreadable state format.") }
        let count = Int(sqlite3_column_bytes(statement, 1))
        guard count <= 64 * 1024 * 1024, let bytes = sqlite3_column_blob(statement, 1) else { throw error("Invalid state payload.") }
        var state = try JSONDecoder().decode(StoredRuntimeState.self, from: Data(bytes: bytes, count: count))
        if sqlite3_column_int(statement, 0) == 2 {
            let threads = try prepareStatement("SELECT payload FROM claudekit_threads ORDER BY updated DESC,id")
            defer { sqlite3_finalize(threads) }
            while sqlite3_step(threads) == SQLITE_ROW { state.threads.append(try payload(AgentThread.self, from: threads)) }
            if includeMessages {
            let messages = try prepareStatement("SELECT thread_id,payload FROM claudekit_messages ORDER BY thread_id,position")
            defer { sqlite3_finalize(messages) }
            while sqlite3_step(messages) == SQLITE_ROW {
                let id = String(cString: sqlite3_column_text(messages, 0))
                state.messagesByThread[id, default: []].append(try payload(AgentMessage.self, from: messages, column: 1))
            }
            }
        }
        if !includeMessages { state.messagesByThread = [:] }
        return state
    }
    public func saveState(_ state: StoredRuntimeState) async throws { try await saveProjection(state, preservingMessagesFor: []) }
    public func saveProjection(_ state: StoredRuntimeState, preservingMessagesFor preserved: Set<String>) async throws {
        try await prepare()
        var metadata = state; metadata.threads = []; metadata.messagesByThread = [:]
        let data = try JSONEncoder().encode(metadata)
        guard data.count <= 64 * 1024 * 1024 else { throw error("State snapshot exceeds 64 MiB.") }
        try execute("BEGIN IMMEDIATE")
        defer { try? execute("ROLLBACK") }
        let statement = try prepareStatement("INSERT INTO claudekit_state(id,version,payload) VALUES(1,2,?) ON CONFLICT(id) DO UPDATE SET version=excluded.version,payload=excluded.payload")
        defer { sqlite3_finalize(statement) }
        let bound = data.withUnsafeBytes { sqlite3_bind_blob(statement, 1, $0.baseAddress, Int32($0.count), transient) }
        guard bound == SQLITE_OK, sqlite3_step(statement) == SQLITE_DONE else { throw error("State transaction failed.") }
        try rebuildIndexes(state, preservingMessagesFor: preserved)
        try execute("COMMIT")
    }
    func prepareStatement(_ sql: String) throws -> OpaquePointer {
        var statement: OpaquePointer?
        guard sqlite3_prepare_v2(database, sql, -1, &statement, nil) == SQLITE_OK, let statement else { throw error("Cannot prepare state query.") }
        return statement
    }
    func execute(_ sql: String) throws {
        guard sqlite3_exec(database, sql, nil, nil, nil) == SQLITE_OK else { throw error("Cannot initialize state database.") }
    }
    func error(_ message: String) -> AgentRuntimeError { .init(code: "sqlite_store", message: message) }
}
