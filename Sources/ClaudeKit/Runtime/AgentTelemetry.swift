import Foundation

public struct AgentUsageLimitSnapshot: Codable, Hashable, Sendable {
    public let status: String
    public let kind: String?
    public let utilization: Double?
    public let resetsAt: Date?
    public let observedAt: Date
    public init(status: String, kind: String? = nil, utilization: Double? = nil, resetsAt: Date? = nil, observedAt: Date = Date()) {
        self.status = status; self.kind = kind; self.utilization = utilization; self.resetsAt = resetsAt; self.observedAt = observedAt
    }
}
public struct AgentUsageReceipt: Codable, Hashable, Sendable {
    public let executionID: String
    public let threadID: String
    public let usage: AgentUsage
    public let completedAt: Date
}
public extension AgentRuntime {
    func usageLimits() async -> [AgentUsageLimitSnapshot] {
        var snapshots = lastUsageLimits
        for context in executions.values { snapshots += await context.driver.usageLimits() }
        snapshots += await configuration.driver.usageLimits()
        var latest: [String: AgentUsageLimitSnapshot] = [:]
        for value in snapshots.sorted(by: { $0.observedAt < $1.observedAt }) { latest[value.kind ?? "unknown"] = value }
        return latest.values.sorted { ($0.kind ?? "") < ($1.kind ?? "") }
    }
    func usageHistory(in threadID: String? = nil) -> [AgentUsageReceipt] {
        (state.usageReceipts ?? []).filter { threadID == nil || $0.threadID == threadID }
    }
    /// Adds input to the official harness's active queue. Acceptance does not imply immediate model consumption.
    func steer(_ text: String, executionID: UUID) async throws {
        guard let context = executions[executionID], !text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              text.utf8.count <= AgentStoreLimits.maximumMessageTextByteCount else {
            throw AgentRuntimeError(code: "invalid_steering", message: "Steering requires an active execution and up to 1 MiB of input.")
        }
        if let hooks = context.outputHooks, !(await hooks.acceptsSteering()) {
            throw AgentRuntimeError(code: "output_started", message: "Final output has already begun.")
        }
        guard executions[executionID] === context else { throw CancellationError() }
        try await context.driver.steer(text)
    }
}
