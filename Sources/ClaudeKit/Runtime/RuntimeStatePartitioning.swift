import Foundation

/// Stores can keep inactive message histories on disk while updating active threads atomically.
public protocol RuntimeStatePartitioning: RuntimeStateQuerying {
    func loadOverview() async throws -> StoredRuntimeState
    /// Missing message partitions are preserved for these thread IDs, unless the thread was deleted.
    func saveProjection(_ state: StoredRuntimeState, preservingMessagesFor threadIDs: Set<String>) async throws
}

public extension AgentRuntime {
    /// Materialize one history after restoring with lazyHistory enabled.
    func activateThread(id: String) async throws -> [AgentMessage] {
        try reserveThread(id); defer { threadOperations.remove(id) }
        guard state.threads.contains(where: { $0.id == id }) else { throw AgentRuntimeError.threadNotFound(id) }
        try await hydrateHistory(id)
        return state.messagesByThread[id] ?? []
    }
    func isHistoryLoaded(for id: String) -> Bool { !unloadedHistories.contains(id) }
    func exportFullState() async throws -> Data {
        try reserve(); defer { operation = false }
        for id in unloadedHistories { try await hydrateHistory(id) }
        return try JSONEncoder().encode(state)
    }
    /// Redacts the app projection and starts a fresh harness session on the next turn.
    /// Existing official transcript files are governed by the harness retention policy.
    func redactMessages(ids: Set<String>, in threadID: String, replacement: String = "[redacted]") async throws {
        try reserveThread(threadID); defer { threadOperations.remove(threadID) }
        guard let index = state.threads.firstIndex(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        try await hydrateHistory(threadID)
        guard ids.isSubset(of: Set((state.messagesByThread[threadID] ?? []).map(\.id))) else { throw AgentRuntimeError(code: "invalid_message", message: "Unknown message ID.") }
        let previous = state
        state.messagesByThread[threadID] = state.messagesByThread[threadID]?.map { original in
            var message = original
            if ids.contains(message.id) { message.text = replacement; message.images = [] }
            return message
        }
        state.threads[index].harnessSessionID = nil
        state.outputs?.removeAll { $0.context.threadID == threadID }
        state.memories?.removeAll { !Set($0.sourceMessageIDs ?? []).isDisjoint(with: ids) }
        do { try await persist() } catch { state = previous; throw error }
    }
    func setContext(_ context: JSONValue?, for threadID: String) async throws {
        try reserveThread(threadID); defer { threadOperations.remove(threadID) }
        guard state.threads.contains(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        if let context, try JSONEncoder().encode(context).count > AgentStoreLimits.maximumEmbeddedPayloadByteCount {
            throw AgentRuntimeError(code: "context_limit", message: "Thread context exceeds the embedded payload limit.")
        }
        let previous = state
        if state.contexts == nil { state.contexts = [:] }
        state.contexts?[threadID] = context
        do { try await persist() } catch { state = previous; throw error }
    }
    func context(for threadID: String) -> JSONValue? { state.contexts?[threadID] }
}
extension AgentRuntime {
    func hydrateHistory(_ id: String) async throws {
        guard unloadedHistories.contains(id), let store = configuration.stateStore as? any RuntimeStatePartitioning else { return }
        var messages: [AgentMessage] = [], cursor: String?
        while true {
            let page = try await store.queryMessages(.init(threadID: id, afterID: cursor, limit: 500))
            messages.append(contentsOf: page)
            if page.count < 500 { break }
            cursor = page.last?.id
        }
        state.messagesByThread[id] = messages; unloadedHistories.remove(id)
    }
}
