import Foundation

public extension AgentRuntime {
    /// Freeze local instructions, selected memories and app-visible history for server execution.
    /// Host tool closures cannot cross a process boundary; required tool policies fail closed.
    func prepareRemoteSubmission(_ request: Request, in threadID: String, id: UUID = UUID(), parentJobID: UUID? = nil,
                                 completion: AgentRemoteCompletion? = nil) async throws -> AgentRemoteSubmission {
        try reserveThread(threadID); defer { threadOperations.remove(threadID) }
        guard account != nil else { throw AgentRuntimeError.missingSession() }
        guard let thread = state.threads.first(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        try request.validateAttachments(); try request.validateOutputSchema()
        let skills = (thread.configuration?.skills ?? []) + (request.skills ?? [])
        let policy = try EffectiveToolPolicy(skills: skills, registered: Set(tools.keys), maximumCalls: configuration.maximumToolCalls, maximumParallel: configuration.maximumParallelToolCalls)
        guard policy.required.isEmpty, (policy.sequence ?? []).isEmpty, request.images.isEmpty,
              try resolvedWebSearch(request, thread: thread).mode != .live else {
            throw AgentRuntimeError(code: "remote_request", message: "This request requires capabilities unavailable on the configured remote worker.")
        }
        try await hydrateHistory(threadID)
        var prepared = request
        prepared.formatInstructions = AgentInstructionCompiler.compile(baseInstructions: configuration.baseInstructions,
            threadPersonaStack: thread.configuration?.personaStack, threadSkills: thread.configuration?.skills ?? [],
            turnPersonaOverride: request.personaOverride, turnSkills: request.skills ?? []) +
            (try memoryInstructions(for: request, threadID: threadID)) + "\n\n" + (request.formatInstructions ?? "")
        if parentJobID == nil, !request.isEphemeral {
            prepared.context = .object(["history": try JSONValue.encoding(state.messagesByThread[threadID] ?? []),
                "thread": state.contexts?[threadID] ?? .null, "request": request.context ?? .null])
        }
        prepared.memory = nil; prepared.skills = nil; prepared.personaOverride = nil; prepared.disableTools = true
        return .init(id: id, request: prepared, model: thread.configuration?.model ?? "claude-sonnet-4-6", parentJobID: parentJobID, completion: completion)
    }
}
