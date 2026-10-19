import ClaudeKit
import Combine
import Foundation

@MainActor public final class ApprovalInbox: ObservableObject, ApprovalPresenting {
    @Published public private(set) var pending: [ApprovalRequest] = []
    private var waiters: [String: CheckedContinuation<ApprovalDecision, Never>] = [:]
    public init() {}
    public func presentApproval(_ request: ApprovalRequest) async -> ApprovalDecision {
        await withTaskCancellationHandler {
            if Task.isCancelled { return .denied }
            return await withCheckedContinuation { continuation in
                waiters[request.id] = continuation; pending.append(request)
            }
        } onCancel: { Task { @MainActor in self.deny(request.id) } }
    }
    public func approve(_ id: String) { resolve(id, .approved) }
    public func deny(_ id: String) { resolve(id, .denied) }
    private func resolve(_ id: String, _ decision: ApprovalDecision) {
        pending.removeAll { $0.id == id }; waiters.removeValue(forKey: id)?.resume(returning: decision)
    }
}
