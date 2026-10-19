import Foundation

public extension AgentRuntime {
    func renameThread(id: String, title: String?) async throws {
        try reserveThread(id); defer { threadOperations.remove(id) }
        guard let index = state.threads.firstIndex(where: { $0.id == id }) else { throw AgentRuntimeError.threadNotFound(id) }
        let previous = state
        state.threads[index].title = title; state.threads[index].updatedAt = Date()
        do { try await persist() } catch { state = previous; throw error }
    }
    /// Removes the app's projection. The harness retains its transcript according to its retention policy.
    func deleteThread(id: String) async throws {
        try reserveThread(id); defer { threadOperations.remove(id) }
        guard state.threads.contains(where: { $0.id == id }) else { throw AgentRuntimeError.threadNotFound(id) }
        let previous = state
        state.threads.removeAll { $0.id == id }; state.messagesByThread.removeValue(forKey: id)
        state.contexts?.removeValue(forKey: id)
        state.memories?.removeAll { $0.threadID == id }
        state.outputs?.removeAll { $0.context.threadID == id }
        state.usageReceipts?.removeAll { $0.threadID == id }
        state.memoryApplications?.removeAll { $0.threadID == id }
        do { try await persist() } catch { state = previous; throw error }
    }
    func configureThread(id: String, configuration: AgentThreadConfiguration) async throws {
        try reserveThread(id); defer { threadOperations.remove(id) }
        guard let index = state.threads.firstIndex(where: { $0.id == id }) else { throw AgentRuntimeError.threadNotFound(id) }
        _ = try EffectiveToolPolicy(skills: configuration.skills ?? [], registered: Set(tools.keys), maximumCalls: self.configuration.maximumToolCalls, maximumParallel: self.configuration.maximumParallelToolCalls)
        let previous = state
        state.threads[index].configuration = configuration; state.threads[index].updatedAt = Date()
        do { try await persist() } catch { state = previous; throw error }
    }
    /// Stable insertion-order paging; pass the last message ID as the next cursor.
    func messages(for threadID: String, after messageID: String?, limit: Int) throws -> [AgentMessage] {
        guard (1...500).contains(limit) else { throw AgentRuntimeError(code: "invalid_page_size", message: "Page size must be between 1 and 500.") }
        guard state.threads.contains(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        let messages = state.messagesByThread[threadID] ?? []
        let start: Int
        if let messageID {
            guard let index = messages.firstIndex(where: { $0.id == messageID }) else { throw AgentRuntimeError(code: "invalid_cursor", message: "Message cursor does not exist in this thread.") }
            start = index + 1
        } else { start = 0 }
        return Array(messages.dropFirst(start).prefix(limit))
    }
}
