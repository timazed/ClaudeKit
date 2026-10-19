import Foundation

public enum ApprovalDecision: String, Codable, Hashable, Sendable {
    case approved
    case denied
}

public struct ApprovalRequest: Identifiable, Codable, Hashable, Sendable {
    public let id: String
    public let invocation: ToolInvocation
    public let message: String
    public let createdAt: Date

    public init(
        id: String = UUID().uuidString,
        invocation: ToolInvocation,
        message: String,
        createdAt: Date = Date()
    ) {
        self.id = id
        self.invocation = invocation
        self.message = message
        self.createdAt = createdAt
    }
}

public struct ApprovalResolution: Codable, Hashable, Sendable {
    public let requestID: String
    public let invocationID: String
    public let decision: ApprovalDecision
    public let resolvedAt: Date

    public init(
        requestID: String,
        invocationID: String,
        decision: ApprovalDecision,
        resolvedAt: Date = Date()
    ) {
        self.requestID = requestID
        self.invocationID = invocationID
        self.decision = decision
        self.resolvedAt = resolvedAt
    }
}

public protocol ApprovalPresenting: Sendable {
    func presentApproval(_ request: ApprovalRequest) async -> ApprovalDecision
}

public struct AutomaticApprovalPresenter: ApprovalPresenting {
    public let decision: ApprovalDecision

    public init(decision: ApprovalDecision = .approved) {
        self.decision = decision
    }

    public func presentApproval(_: ApprovalRequest) async -> ApprovalDecision {
        decision
    }
}
