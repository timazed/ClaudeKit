import Foundation

public struct AgentMessageQuery: Sendable {
    public var threadID: String
    public var afterID: String?
    public var containing: String?
    public var limit: Int
    public init(threadID: String, afterID: String? = nil, containing: String? = nil, limit: Int = 100) {
        self.threadID = threadID; self.afterID = afterID; self.containing = containing; self.limit = limit
    }
}
public protocol RuntimeStateQuerying: RuntimeStateStoring {
    func queryMessages(_ query: AgentMessageQuery) async throws -> [AgentMessage]
    func queryThreads(limit: Int, before: Date?) async throws -> [AgentThread]
}
public extension AgentRuntime {
    func fetchMessages(_ query: AgentMessageQuery) async throws -> [AgentMessage] {
        guard (1...500).contains(query.limit), (query.containing?.utf8.count ?? 0) <= 4096 else {
            throw AgentRuntimeError(code: "invalid_query", message: "Query limits exceeded.")
        }
        if let store = configuration.stateStore as? any RuntimeStateQuerying { return try await store.queryMessages(query) }
        let all = state.messagesByThread[query.threadID] ?? []
        let start: Int
        if let id = query.afterID {
            guard let i = all.firstIndex(where: { $0.id == id }) else { throw AgentRuntimeError(code: "invalid_cursor", message: "Unknown message cursor.") }
            start = i + 1
        } else { start = 0 }
        return Array(all.dropFirst(start).lazy.filter { query.containing == nil || $0.text.localizedCaseInsensitiveContains(query.containing!) }.prefix(query.limit))
    }
    func exportState() throws -> Data {
        guard unloadedHistories.isEmpty else { throw AgentRuntimeError(code: "history_not_loaded", message: "Use exportFullState for lazy histories.") }
        return try JSONEncoder().encode(state)
    }
    /// Import is explicit and account-bound; it replaces the app projection, not official transcripts.
    func importState(_ data: Data) async throws {
        try reserve(); defer { operation = false }
        guard data.count <= 64 * 1024 * 1024 else { throw AgentRuntimeError(code: "store_limit", message: "Import exceeds 64 MiB.") }
        guard account != nil else { throw AgentRuntimeError.missingSession() }
        let imported = try JSONDecoder().decode(StoredRuntimeState.self, from: data)
        guard imported.account == account, Set(imported.threads.map(\.id)).count == imported.threads.count,
              Set(imported.messagesByThread.keys).isSubset(of: Set(imported.threads.map(\.id))) else {
            throw AgentRuntimeError(code: "invalid_import", message: "Import identity or thread references are invalid.")
        }
        let allMessageIDs = imported.messagesByThread.values.flatMap { $0.map(\.id) }
        guard Set(allMessageIDs).count == allMessageIDs.count else { throw AgentRuntimeError(code: "invalid_import", message: "Message IDs must be globally unique.") }
        for (threadID, messages) in imported.messagesByThread {
            guard messages.allSatisfy({ $0.threadID == threadID }), Set(messages.map(\.id)).count == messages.count else {
                throw AgentRuntimeError(code: "invalid_import", message: "Import contains invalid messages.")
            }
        }
        try await configuration.stateStore.saveState(imported); state = imported; unloadedHistories = []; publish()
    }
    func migrateState(to destination: any RuntimeStateStoring) async throws {
        try reserve(); defer { operation = false }
        try await destination.prepare()
        let existing = try await destination.loadState()
        guard existing.threads.isEmpty, existing.account == nil else { throw AgentRuntimeError(code: "store_not_empty", message: "Migration requires an empty destination.") }
        for id in unloadedHistories { try await hydrateHistory(id) }
        try await destination.saveState(state)
    }
}
