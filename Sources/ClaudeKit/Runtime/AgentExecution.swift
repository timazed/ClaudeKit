import Foundation

public struct AgentExecution: Sendable {
    public let id: UUID
    public let threadID: String
    public let events: AsyncThrowingStream<AgentEvent, Error>
    private let control: ExecutionControl
    init(id: UUID, threadID: String, events: AsyncThrowingStream<AgentEvent, Error>, control: ExecutionControl) {
        self.id = id; self.threadID = threadID; self.events = events; self.control = control
    }
    public func cancel() { Task { await control.cancel() } }
    public func waitUntilReady() async throws { try await control.wait() }
}

actor ExecutionControl {
    var ready: Result<Void, Error>?
    var waiters: [UUID: CheckedContinuation<Void, Error>] = [:]
    var cancellation: (@Sendable () async -> Void)?
    var cancelled = false
    func install(_ action: @escaping @Sendable () async -> Void) async {
        cancellation = action
        if cancelled { await action() }
    }
    func cancel() async { guard !cancelled else { return }; cancelled = true; await cancellation?() }
    func finish(_ result: Result<Void, Error>) {
        guard ready == nil else { return }; ready = result
        let pending = waiters; waiters.removeAll(); pending.values.forEach { $0.resume(with: result) }
    }
    func wait() async throws {
        let id = UUID()
        try await withTaskCancellationHandler {
            try Task.checkCancellation()
            if let ready { return try ready.get() }
            try await withCheckedThrowingContinuation { waiters[id] = $0 }
        } onCancel: { Task { await self.cancelWaiter(id) } }
    }
    private func cancelWaiter(_ id: UUID) { waiters.removeValue(forKey: id)?.resume(throwing: CancellationError()) }
}
