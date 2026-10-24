import Foundation
import SQLite3
import ClaudeKit

extension SQLiteRuntimeStateStore {
    func bind(_ value: String, at index: Int32, to statement: OpaquePointer) throws {
        guard sqlite3_bind_text(statement, index, value, -1, transient) == SQLITE_OK else { throw error("Cannot bind query.") }
    }
    func payload<Value: Decodable>(_ type: Value.Type, from statement: OpaquePointer, column: Int32 = 0) throws -> Value {
        let size = Int(sqlite3_column_bytes(statement, column))
        guard size <= 64 * 1024 * 1024, let bytes = sqlite3_column_blob(statement, column) else { throw error("Invalid row payload.") }
        return try JSONDecoder().decode(type, from: Data(bytes: bytes, count: size))
    }
    func rebuildIndexes(_ state: StoredRuntimeState, preservingMessagesFor preserved: Set<String> = []) throws {
        // Only delete absent rows; UPSERT skips identical payloads and preserves indexes.
        try execute("CREATE TEMP TABLE IF NOT EXISTS retained_ids(id TEXT PRIMARY KEY)")
        func removeAbsent(_ table: String, ids: [String]) throws {
            try execute("DELETE FROM retained_ids")
            let insert = try prepareStatement("INSERT INTO retained_ids VALUES(?)")
            defer { sqlite3_finalize(insert) }
            for id in ids {
                sqlite3_reset(insert); sqlite3_clear_bindings(insert); try bind(id, at: 1, to: insert)
                guard sqlite3_step(insert) == SQLITE_DONE else { throw error("Duplicate row identity.") }
            }
            if table == "claudekit_messages" {
                let lookup = try prepareStatement("INSERT OR IGNORE INTO retained_ids SELECT id FROM claudekit_messages WHERE thread_id=?")
                defer { sqlite3_finalize(lookup) }
                for id in preserved.intersection(Set(state.threads.map(\.id))) {
                    sqlite3_reset(lookup); sqlite3_clear_bindings(lookup); try bind(id, at: 1, to: lookup)
                    guard sqlite3_step(lookup) == SQLITE_DONE else { throw error("Cannot preserve inactive history.") }
                }
            }
            try execute("DELETE FROM \(table) WHERE id NOT IN (SELECT id FROM retained_ids)")
        }
        try removeAbsent("claudekit_threads", ids: state.threads.map(\.id))
        try removeAbsent("claudekit_messages", ids: state.messagesByThread.values.flatMap { $0.map(\.id) })
        let thread = try prepareStatement("INSERT INTO claudekit_threads VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET updated=excluded.updated,payload=excluded.payload WHERE payload!=excluded.payload")
        defer { sqlite3_finalize(thread) }
        for value in state.threads {
            sqlite3_reset(thread); sqlite3_clear_bindings(thread)
            try bind(value.id, at: 1, to: thread); sqlite3_bind_double(thread, 2, value.updatedAt.timeIntervalSince1970)
            let data = try JSONEncoder().encode(value)
            let result = data.withUnsafeBytes { sqlite3_bind_blob(thread, 3, $0.baseAddress, Int32($0.count), transient) }
            guard result == SQLITE_OK, sqlite3_step(thread) == SQLITE_DONE else { throw error("Cannot index thread.") }
        }
        let message = try prepareStatement("INSERT INTO claudekit_messages VALUES(?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET thread_id=excluded.thread_id,position=excluded.position,text=excluded.text,payload=excluded.payload WHERE payload!=excluded.payload OR position!=excluded.position OR thread_id!=excluded.thread_id")
        defer { sqlite3_finalize(message) }
        for (threadID, values) in state.messagesByThread {
            for (index, value) in values.enumerated() {
                sqlite3_reset(message); sqlite3_clear_bindings(message)
                try bind(value.id, at: 1, to: message); try bind(threadID, at: 2, to: message)
                sqlite3_bind_int64(message, 3, Int64(index)); try bind(value.text, at: 4, to: message)
                let data = try JSONEncoder().encode(value)
                let result = data.withUnsafeBytes { sqlite3_bind_blob(message, 5, $0.baseAddress, Int32($0.count), transient) }
                guard result == SQLITE_OK, sqlite3_step(message) == SQLITE_DONE else { throw error("Cannot index message.") }
            }
        }
    }
    public func queryMessages(_ query: AgentMessageQuery) async throws -> [AgentMessage] {
        guard (1...500).contains(query.limit), (query.containing?.utf8.count ?? 0) <= 4096 else { throw error("Invalid query limits.") }
        try await prepare()
        var cursor: Int64 = -1
        if let id = query.afterID {
            let lookup = try prepareStatement("SELECT position FROM claudekit_messages WHERE id=? AND thread_id=?")
            defer { sqlite3_finalize(lookup) }
            try bind(id, at: 1, to: lookup); try bind(query.threadID, at: 2, to: lookup)
            guard sqlite3_step(lookup) == SQLITE_ROW else { throw error("Unknown message cursor.") }; cursor = sqlite3_column_int64(lookup, 0)
        }
        let statement = try prepareStatement("SELECT payload FROM claudekit_messages WHERE thread_id=? AND position>? AND (?='' OR instr(lower(text),lower(?))>0) ORDER BY position LIMIT ?")
        defer { sqlite3_finalize(statement) }
        try bind(query.threadID, at: 1, to: statement); sqlite3_bind_int64(statement, 2, cursor)
        try bind(query.containing ?? "", at: 3, to: statement); try bind(query.containing ?? "", at: 4, to: statement)
        sqlite3_bind_int(statement, 5, Int32(query.limit))
        var rows: [AgentMessage] = []
        while true {
            let step = sqlite3_step(statement)
            if step == SQLITE_DONE { return rows }
            guard step == SQLITE_ROW else { throw error("Message query failed.") }
            rows.append(try payload(AgentMessage.self, from: statement))
        }
    }
    public func queryThreads(limit: Int, before: Date? = nil) async throws -> [AgentThread] {
        guard (1...500).contains(limit) else { throw error("Invalid page size.") }; try await prepare()
        let statement = try prepareStatement("SELECT payload FROM claudekit_threads WHERE updated<? ORDER BY updated DESC,id LIMIT ?")
        defer { sqlite3_finalize(statement) }
        sqlite3_bind_double(statement, 1, before?.timeIntervalSince1970 ?? Double.greatestFiniteMagnitude); sqlite3_bind_int(statement, 2, Int32(limit))
        var rows: [AgentThread] = []
        while true {
            let step = sqlite3_step(statement)
            if step == SQLITE_DONE { return rows }
            guard step == SQLITE_ROW else { throw error("Thread query failed.") }
            rows.append(try payload(AgentThread.self, from: statement))
        }
    }
}
