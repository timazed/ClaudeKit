import Foundation
import ClaudeKit

/// Compatibility facade over the concurrent AgentRuntime. There are no lanes:
/// independent threads may execute together; overlapping work on one thread is rejected.
public actor ClaudeRuntimePool {
    private let runtime: AgentRuntime
    private let directory: URL
    private let store: FileRuntimeStateStore
    private var restoring = false
    public init(directory: URL,
                approvalPresenter: any ApprovalPresenting, signInPresenter: (any ClaudeSignInPresenting)? = nil,
                baseInstructions: String = "Be helpful and concise.", tools: [AgentRuntime.ToolRegistration] = [],
                harness: ClaudeCodeDriver.Configuration = .init()) throws {
        self.directory = directory
        store = FileRuntimeStateStore(url: directory.appendingPathComponent("state.json"))
        runtime = try AgentRuntime(configuration: .init(approvalPresenter: approvalPresenter, stateStore: store,
            signInPresenter: signInPresenter, baseInstructions: baseInstructions, tools: tools, harness: harness))
    }
    public func restore() async throws {
        guard !restoring else { throw AgentRuntimeError(code: "runtime_busy", message: "Restoration is already running.") }
        restoring = true; defer { restoring = false }
        try await migrateLaneStoresIfNeeded()
        _ = try await runtime.restore()
    }
    @discardableResult public func signIn() async throws -> ClaudeAccount { try checkRestoring(); return try await runtime.signIn() }
    public func signOut() async throws { try checkRestoring(); try await runtime.signOut() }
    public func createThread(title: String? = nil, configuration: AgentThreadConfiguration? = nil) async throws -> AgentThread {
        try checkRestoring(); return try await runtime.createThread(title: title, configuration: configuration)
    }
    public func start(_ request: Request, in threadID: String) async throws -> AgentExecution {
        try checkRestoring(); return try await runtime.start(request, in: threadID)
    }
    public func start<Format: AgentOutputFormat>(_ request: Request, in threadID: String, output: Format) async throws -> AgentOutputExecution<Format.Event, Format.Output> {
        try checkRestoring(); return try await runtime.start(request, in: threadID, output: output)
    }
    public func configureThread(id: String, configuration: AgentThreadConfiguration) async throws {
        try checkRestoring(); try await runtime.configureThread(id: id, configuration: configuration)
    }
    public func deleteThread(id: String) async throws { try checkRestoring(); try await runtime.deleteThread(id: id) }
    public func threads() async -> [AgentThread] { await runtime.threads() }
    public func messages(for threadID: String) async throws -> [AgentMessage] { await runtime.messages(for: threadID) }
    private func checkRestoring() throws {
        guard !restoring else { throw AgentRuntimeError(code: "runtime_busy", message: "Wait for restoration.") }
    }
    /// Import the former lane snapshots once; retain originals for recovery.
    private func migrateLaneStoresIfNeeded() async throws {
        guard !FileManager.default.fileExists(atPath: directory.appendingPathComponent("state.json").path),
              FileManager.default.fileExists(atPath: directory.path) else { return }
        let files = try FileManager.default.contentsOfDirectory(at: directory, includingPropertiesForKeys: nil)
            .filter { $0.lastPathComponent.range(of: "^lane-[0-9]+\\.json$", options: .regularExpression) != nil }
            .sorted { $0.lastPathComponent < $1.lastPathComponent }
        guard !files.isEmpty else { return }
        var merged = StoredRuntimeState.empty
        for file in files {
            let state = try await FileRuntimeStateStore(url: file).loadState()
            guard merged.account == nil || state.account == nil || merged.account == state.account,
                  Set(merged.threads.map(\.id)).isDisjoint(with: state.threads.map(\.id)) else {
                throw AgentRuntimeError(code: "invalid_lane_migration", message: "Lane stores have conflicting accounts or thread IDs; originals were retained.")
            }
            let messages = state.messagesByThread.values.flatMap { $0 }
            let existingMessageIDs = Set(merged.messagesByThread.values.flatMap { $0.map(\.id) })
            guard Set(messages.map(\.id)).count == messages.count, existingMessageIDs.isDisjoint(with: messages.map(\.id)),
                  Set(state.messagesByThread.keys).isSubset(of: Set(state.threads.map(\.id))) else {
                throw AgentRuntimeError(code: "invalid_lane_migration", message: "Lane message identities conflict; originals were retained.")
            }
            merged.account = merged.account ?? state.account
            merged.threads += state.threads
            for (id, messages) in state.messagesByThread { merged.messagesByThread[id] = messages }
            merged.outputs = (merged.outputs ?? []) + (state.outputs ?? [])
            merged.usageReceipts = (merged.usageReceipts ?? []) + (state.usageReceipts ?? [])
            merged.memoryApplications = (merged.memoryApplications ?? []) + (state.memoryApplications ?? [])
            var memories: [String: AgentMemoryRecord] = [:]
            for memory in merged.memories ?? [] { memories[memory.id] = memory }
            for memory in state.memories ?? [] {
                guard memories[memory.id] == nil || memories[memory.id] == memory else {
                    throw AgentRuntimeError(code: "invalid_lane_migration", message: "Lane memory IDs conflict; originals were retained.")
                }
                memories[memory.id] = memory
            }
            merged.memories = memories.values.sorted { $0.id < $1.id }
        }
        try await store.saveState(merged)
    }
}
