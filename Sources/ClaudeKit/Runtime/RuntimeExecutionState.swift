import Foundation

/// Mutable fields are confined to the owning AgentRuntime actor. Each execution
/// owns a separate harness session, stream, policy counters, and cancellation task.
final class RuntimeExecutionState: @unchecked Sendable {
    let id: UUID
    let threadID: String
    let driver: any HarnessDriving
    let ephemeral: Bool
    let toolsDisabled: Bool
    let search: AgentWebSearchPolicy
    let memoryInstructions: String
    let policy: EffectiveToolPolicy?
    var outputHooks: AgentOutputHooks?
    var continuation: AsyncThrowingStream<AgentEvent, Error>.Continuation?
    var task: Task<Void, Never>?
    var toolCounts: [String: Int] = [:]
    var successfulTools: Set<String> = []
    var executingTools = 0
    var serialToolActive = false
    var toolRounds = 0
    init(id: UUID, threadID: String, driver: any HarnessDriving, request: Request,
         policy: EffectiveToolPolicy, search: AgentWebSearchPolicy, memory: String) {
        self.id = id; self.threadID = threadID; self.driver = driver
        ephemeral = request.isEphemeral; toolsDisabled = request.disableTools == true
        self.policy = policy; self.search = search; memoryInstructions = memory
    }
}
