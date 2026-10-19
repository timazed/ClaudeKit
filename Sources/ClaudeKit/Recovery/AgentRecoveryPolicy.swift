import Foundation

/// Automatic retries are limited to transport failures. Each new generation still requires authorization.
public struct AgentRecoveryRetryPolicy: Sendable {
    public var maximumAutomaticRetries: Int
    public var maximumDelay: TimeInterval
    public init(maximumAutomaticRetries: Int = 2, maximumDelay: TimeInterval = 300) {
        self.maximumAutomaticRetries = maximumAutomaticRetries; self.maximumDelay = maximumDelay
    }
}
public extension AgentRuntime {
    func sendRecovering(_ id: UUID, retryPolicy: AgentRecoveryRetryPolicy,
                        authorize: @escaping @Sendable (AgentRecoveryAttempt) async throws -> Bool) async throws -> JSONValue {
        guard (0...10).contains(retryPolicy.maximumAutomaticRetries), retryPolicy.maximumDelay.isFinite,
              (0...3600).contains(retryPolicy.maximumDelay) else {
            throw AgentRuntimeError(code: "invalid_retry_policy", message: "Retry policy exceeds limits.")
        }
        var retries = 0
        while true {
            try Task.checkCancellation()
            do { return try await sendRecovering(id, authorize: authorize) }
            catch {
                guard !(error is CancellationError), retries < retryPolicy.maximumAutomaticRetries,
                      let failure = error as? AgentRuntimeError,
                      ["harness_failure", "startup_timeout", "control_timeout"].contains(failure.code) else { throw error }
                let receipt = try await recoveryStatus(id)
                guard receipt.attempts < receipt.maximumAttempts else { throw error }
                let delay = max(0, receipt.nextAttemptAt?.timeIntervalSinceNow ?? 0)
                guard delay <= retryPolicy.maximumDelay else { throw error }
                try await Task.sleep(nanoseconds: UInt64(delay * 1_000_000_000))
                try await retryRecovery(id); retries += 1
            }
        }
    }
    func sendRecovering<Value: Decodable & Sendable>(_ id: UUID, as type: Value.Type,
                        authorize: @escaping @Sendable (AgentRecoveryAttempt) async throws -> Bool) async throws -> Value {
        let value = try await sendRecovering(id, authorize: authorize)
        return try JSONDecoder().decode(type, from: JSONEncoder().encode(value))
    }
    /// Decode/migrate a completed receipt without authorizing or repeating generation.
    func recoveredValue<Value: Sendable>(_ id: UUID, migrate: @Sendable (JSONValue) throws -> Value) async throws -> Value {
        let record = try await recoveryStatus(id)
        try Task.checkCancellation()
        guard record.phase == .completed, let value = record.result else {
            throw AgentRuntimeError(code: "recovery_incomplete", message: "There is no completed receipt to migrate.")
        }
        return try migrate(value)
    }
}
