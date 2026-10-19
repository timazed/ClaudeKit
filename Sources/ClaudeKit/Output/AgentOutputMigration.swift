import Foundation

public extension AgentRuntime {
    /// Atomically migrate a saved typed output without rerunning the harness.
    /// The original conversational text is retained for audit/replay.
    func migrateOutput<Old: AgentOutputFormat, New: AgentOutputFormat>(messageID: String, from old: Old, to new: New,
            transform: @Sendable (Old.Output) async throws -> New.Output) async throws {
        try reserve(); defer { operation = false }
        guard account != nil, state.account == account else { throw AgentRuntimeError.missingSession() }
        guard let index = state.outputs?.firstIndex(where: { $0.context.messageID == messageID }), let envelope = state.outputs?[index] else {
            throw AgentOutputError.invalidOutput("Stored output was not found.")
        }
        let prepared = try AgentPreparedOutput(new, isEphemeral: false)
        let value = try await transform(envelope.restore(using: old))
        try await new.validateFinal(value); try Task.checkCancellation()
        guard let persistence = prepared.persistence else { throw AgentOutputError.persistenceUnavailable }
        let data = try persistence.encode(value)
        guard data.count <= new.limits.maximumOutputBytes, envelope.rawText.utf8.count <= new.limits.maximumInputBytes else { throw AgentOutputError.limit("Migrated output exceeds limit.") }
        // Run the new codec's decode-time schema validation before replacing the old envelope.
        _ = try persistence.decode(data)
        let replacement = AgentOutputRepresentation(envelopeVersion: 1, codecIdentifier: new.codecIdentifier, formatVersion: new.formatVersion,
            context: envelope.context, schema: prepared.schema, rawText: envelope.rawText, encodedOutput: data)
        let previous = state
        state.outputs?[index] = replacement
        do { try await persist() } catch { state = previous; throw error }
    }
}
