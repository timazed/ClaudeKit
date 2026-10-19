import ClaudeKitLegacy
import Combine
import Foundation

@MainActor
public final class ApprovalInbox: ObservableObject, ApprovalPresenting {
    public struct PendingApproval: Identifiable {
        public let request: ApprovalRequest
        fileprivate let continuation: CheckedContinuation<ApprovalDecision, Never>

        public var id: String {
            request.id
        }
    }

    @Published public private(set) var pending: [PendingApproval] = []

    public init() {}

    nonisolated public func presentApproval(_ request: ApprovalRequest) async -> ApprovalDecision {
        await withCheckedContinuation { continuation in
            Task { @MainActor in
                pending.append(
                    PendingApproval(
                        request: request,
                        continuation: continuation
                    )
                )
            }
        }
    }

    public func approve(_ requestID: String) {
        resolve(requestID, decision: .approved)
    }

    public func deny(_ requestID: String) {
        resolve(requestID, decision: .denied)
    }

    private func resolve(_ requestID: String, decision: ApprovalDecision) {
        guard let index = pending.firstIndex(where: { $0.id == requestID }) else {
            return
        }

        let approval = pending.remove(at: index)
        approval.continuation.resume(returning: decision)
    }
}
