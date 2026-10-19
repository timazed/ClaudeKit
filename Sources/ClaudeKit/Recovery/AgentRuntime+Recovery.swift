import Foundation

public struct AgentRecoveryAttempt: Sendable {
    public let operationID: UUID
    public let attemptID: UUID
    public let attemptNumber: Int
}
public extension AgentRuntime {
    /// Prepares a tool-free, schema-constrained replacement request. No generation occurs here.
    func prepareRecovery(_ request: Request, in threadID: String, maximumAttempts: Int = 3, retention: TimeInterval? = nil) async throws -> UUID {
        guard !operation else { throw AgentRuntimeError(code: "runtime_busy", message: "Wait for account changes or restoration.") }
        guard let account else { throw AgentRuntimeError.missingSession() }
        guard request.isEphemeral, request.outputSchema != nil, request.images.isEmpty,
              (1...1000).contains(maximumAttempts), retention.map({ $0.isFinite && $0 > 0 && Date().addingTimeInterval($0).timeIntervalSince1970.isFinite }) ?? true else {
            throw AgentRuntimeError(code: "invalid_recovery", message: "Recovery requires ephemeral JSON, no images, 1–1000 attempts, and optional positive retention.")
        }
        try request.validateAttachments(); try request.validateOutputSchema()
        let policy = try effectivePolicy(for: request, in: threadID)
        guard policy.requiredToolNames.isEmpty, policy.toolSequence == nil else { throw AgentRuntimeError(code: "invalid_recovery", message: "Recovery cannot require tools.") }
        guard let thread = state.threads.first(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        let instructions = try previewInstructions(for: request, in: threadID)
        var frozen = request; frozen.disableTools = true; frozen.memory = nil; frozen.personaOverride = nil; frozen.skills = nil
        let id = UUID()
        activeRecovery.insert(id); defer { activeRecovery.remove(id) }
        let lease = try await configuration.recoveryStore.acquire(id)
        defer { withExtendedLifetime(lease) {} }
        try await configuration.recoveryStore.save(.init(id: id, account: account, request: frozen, model: thread.configuration?.model ?? "claude-sonnet-4-6",
            instructions: instructions, maximumThinkingTokens: thread.configuration?.maximumThinkingTokens, maximumAttempts: maximumAttempts, expiresAt: retention.map { Date().addingTimeInterval($0) }, phase: .prepared,
            attempts: 0, pendingAttemptID: nil, nextAttemptAt: nil, result: nil, lastFailure: nil, formatVersion: 1))
        return id
    }
    /// A completed receipt is returned without another generation. Partial text is never delivered.
    func sendRecovering(_ id: UUID, authorize: @escaping @Sendable (AgentRecoveryAttempt) async throws -> Bool) async throws -> JSONValue {
        guard !operation, !activeRecovery.contains(id) else { throw AgentRuntimeError(code: "recovery_busy", message: "This recovery is active or the account is changing.") }
        activeRecovery.insert(id); defer { activeRecovery.remove(id) }
        let lease = try await configuration.recoveryStore.acquire(id)
        defer { withExtendedLifetime(lease) {} }
        var record = try await configuration.recoveryStore.load(id)
        guard record.account == account else { throw AgentRuntimeError(code: "recovery_binding", message: "Recovery account changed.") }
        try Task.checkCancellation()
        if record.phase == .completed, let result = record.result {
            guard let schema = record.request.outputSchema else { throw AgentOutputError.invalidOutput("Recovery receipt has no schema.") }
            try AgentJSONSchemaValidator.validate(result, schema: .raw(schema)); return result
        }
        guard record.expiresAt.map({ $0 > Date() }) ?? true else { throw AgentRuntimeError(code: "recovery_expired", message: "Recovery expired before a new attempt.") }
        guard record.phase != .failed, record.attempts < record.maximumAttempts else { throw AgentRuntimeError(code: "recovery_exhausted", message: "Recovery requires an explicit retry or its budget is exhausted.") }
        if let next = record.nextAttemptAt, next > Date() { throw AgentRuntimeError(code: "recovery_cooldown", message: "Wait until \(next) before retrying.") }
        if record.pendingAttemptID == nil { record.pendingAttemptID = UUID(); try await configuration.recoveryStore.save(record) }
        let attempt = AgentRecoveryAttempt(operationID: id, attemptID: record.pendingAttemptID!, attemptNumber: record.attempts + 1)
        guard try await authorize(attempt) else { throw AgentRuntimeError(code: "recovery_not_authorized", message: "Generation was not authorized.") }
        try Task.checkCancellation()
        guard record.account == account, (record.expiresAt.map { $0 > Date() } ?? true) else { throw AgentRuntimeError(code: "recovery_binding", message: "Recovery authorization is stale.") }
        let independent = try configuration.driver.makeSessionDriver()
        if independent == nil {
            guard executions.isEmpty, activeRecovery.count == 1 else { throw AgentRuntimeError(code: "driver_busy", message: "This custom driver has one session.") }
            operation = true
        }
        defer { if independent == nil { operation = false } }
        let driver = independent ?? configuration.driver
        record.attempts += 1; record.phase = .running; record.pendingAttemptID = nil
        try await configuration.recoveryStore.save(record) // Spend before transmitting, including uncertain crashes.
        do {
            let result = try await withTaskCancellationHandler {
                let restored = try await driver.open(.init(sessionID: nil, model: record.model, instructions: record.instructions,
                    tools: [], outputSchema: record.request.outputSchema, ephemeral: true, maximumThinkingTokens: record.maximumThinkingTokens, approve: { _, _ in false },
                    execute: { name, _ in .init(invocationID: "", toolName: name, success: false, errorMessage: "Recovery forbids tools.") }))
                guard restored == record.account else { throw AgentRuntimeError(code: "account_changed", message: "The harness account changed.") }
                let answer = try await driver.run(record.request) { _ in }
                try Task.checkCancellation()
                guard let json = answer.structuredOutput, let schema = record.request.outputSchema else { throw AgentOutputError.invalidOutput("Missing recovery JSON.") }
                try AgentJSONSchemaValidator.validate(json, schema: .raw(schema)); return json
            } onCancel: { Task { await driver.interrupt() } }
            try Task.checkCancellation()
            guard record.account == account else { throw AgentRuntimeError(code: "recovery_binding", message: "Recovery result is no longer applicable.") }
            record.result = result; record.phase = .completed; record.lastFailure = nil
            try await configuration.recoveryStore.save(record)
            await driver.close(); return result
        } catch {
            await driver.close()
            record.lastFailure = (error as? AgentRuntimeError)?.code ?? String(describing: type(of: error))
            record.phase = error is CancellationError ? .suspended : .failed
            record.nextAttemptAt = Date().addingTimeInterval(min(300, pow(2, Double(record.attempts))))
            try await configuration.recoveryStore.save(record)
            throw error
        }
    }
    func retryRecovery(_ id: UUID) async throws {
        guard !operation, !activeRecovery.contains(id) else { throw AgentRuntimeError(code: "recovery_busy", message: "Recovery is active or the account is changing.") }
        activeRecovery.insert(id); defer { activeRecovery.remove(id) }
        let lease = try await configuration.recoveryStore.acquire(id); defer { withExtendedLifetime(lease) {} }
        var record = try await configuration.recoveryStore.load(id)
        guard record.account == account, (record.expiresAt.map { $0 > Date() } ?? true), record.attempts < record.maximumAttempts,
              record.phase != .completed else { throw AgentRuntimeError(code: "recovery_exhausted", message: "Request cannot be retried.") }
        record.phase = .suspended; try await configuration.recoveryStore.save(record)
    }
    func recoveryStatus(_ id: UUID) async throws -> AgentRecoveryRecord {
        let record = try await configuration.recoveryStore.load(id)
        guard record.account == account else { throw AgentRuntimeError(code: "account_changed", message: "Recovery belongs to another account.") }; return record
    }
    func acknowledgeRecovery(_ id: UUID) async throws {
        let lease = try await configuration.recoveryStore.acquire(id); defer { withExtendedLifetime(lease) {} }
        _ = try await recoveryStatus(id); try await configuration.recoveryStore.remove(id)
    }
    func purgeExpiredRecovery() async throws {
        for record in try await configuration.recoveryStore.records() where record.expiresAt.map({ $0 <= Date() }) == true && record.account == account {
            let lease = try await configuration.recoveryStore.acquire(record.id); defer { withExtendedLifetime(lease) {} }
            try await configuration.recoveryStore.remove(record.id)
        }
    }
}
