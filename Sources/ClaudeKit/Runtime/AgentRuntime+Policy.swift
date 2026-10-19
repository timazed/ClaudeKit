import Foundation

public struct AgentEffectivePolicy: Codable, Hashable, Sendable {
    public let allowedToolNames: [String]
    public let requiredToolNames: [String]
    public let maximumToolCalls: Int
    public let maximumToolCallsByName: [String: Int]
    public let maximumToolRounds: Int
    public let maximumParallelToolCalls: Int
    public let toolSequence: [String]?
    public let hostedSearchEnabled: Bool
}
public extension AgentRuntime {
    func effectivePolicy(for request: Request, in threadID: String) throws -> AgentEffectivePolicy {
        guard let thread = state.threads.first(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        let policy = try EffectiveToolPolicy(skills: (thread.configuration?.skills ?? []) + (request.skills ?? []), registered: Set(tools.keys), maximumCalls: configuration.maximumToolCalls, maximumParallel: configuration.maximumParallelToolCalls)
        return .init(allowedToolNames: request.disableTools == true ? [] : (policy.allowed ?? Set(tools.keys)).sorted(), requiredToolNames: policy.required.sorted(),
                     maximumToolCalls: policy.total, maximumToolCallsByName: policy.byName, maximumToolRounds: policy.rounds,
                     maximumParallelToolCalls: policy.parallel, toolSequence: policy.sequence, hostedSearchEnabled: try resolvedWebSearch(request, thread: thread).mode == .live)
    }
    func unregisterTool(named name: String) throws { try requireIdle(); tools.removeValue(forKey: name) }
    func replaceTool(_ definition: ToolDefinition, executor: AnyToolExecutor) throws {
        try requireIdle(); try Self.validate(definition); tools[definition.name] = .init(definition: definition, executor: executor)
    }
    func previewInstructions(for request: Request, in threadID: String) throws -> String {
        guard let thread = state.threads.first(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        return AgentInstructionCompiler.compile(baseInstructions: configuration.baseInstructions, threadPersonaStack: thread.configuration?.personaStack,
            threadSkills: thread.configuration?.skills ?? [], turnPersonaOverride: request.personaOverride, turnSkills: request.skills ?? []) + (try memoryInstructions(for: request, threadID: threadID)) + "\n\n" + memoryGuidance + "\n\n" + (request.formatInstructions ?? "")
    }
}
