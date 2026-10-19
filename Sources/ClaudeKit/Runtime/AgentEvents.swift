public enum AgentEvent: Sendable {
    case threadStarted(AgentThread)
    case threadStatusChanged(threadID: String, status: AgentThreadStatus)
    case turnStarted(AgentTurn)
    case assistantMessageDelta(threadID: String, turnID: String, delta: String)
    case progress(threadID: String, turnID: String, kind: String, message: String?)
    case messageCommitted(AgentMessage)
    case approvalRequested(ApprovalRequest)
    case approvalResolved(ApprovalResolution)
    case toolCallStarted(ToolInvocation)
    case toolCallFinished(ToolResultEnvelope)
    case turnCompleted(AgentTurnSummary)
    case turnFailed(AgentRuntimeError)
}
