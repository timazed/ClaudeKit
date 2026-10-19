import Foundation

public struct HarnessCapabilities: Sendable {
    public let sessionSwitching: Bool
    /// Int.max means no library-imposed concurrency ceiling; device resources still apply.
    public let maximumConcurrentExecutions: Int
    public let images: Bool
    public let structuredOutput: Bool
    public let ephemeralRequests: Bool
    public let imageGeneration = false
    public let steering: Bool
    public init(sessionSwitching: Bool, maximumConcurrentExecutions: Int = 1, images: Bool = false, structuredOutput: Bool = false, ephemeralRequests: Bool = false, steering: Bool = false) {
        self.steering = steering
        self.images = images; self.structuredOutput = structuredOutput; self.ephemeralRequests = ephemeralRequests
        self.sessionSwitching = sessionSwitching; self.maximumConcurrentExecutions = maximumConcurrentExecutions
    }
}

public struct HarnessSessionConfiguration: Sendable {
    public let sessionID: String?
    public let model: String
    public let instructions: String
    public let tools: [ToolDefinition]
    public let outputSchema: JSONValue?
    public let ephemeral: Bool
    public let maximumThinkingTokens: Int?
    public let webSearch: AgentWebSearchPolicy
    public let approve: @Sendable (String, JSONValue) async -> Bool
    public let execute: @Sendable (String, JSONValue) async -> ToolResultEnvelope
    public init(sessionID: String?, model: String, instructions: String, tools: [ToolDefinition], outputSchema: JSONValue? = nil, ephemeral: Bool = false, webSearch: AgentWebSearchPolicy = .init(), maximumThinkingTokens: Int? = nil,
                approve: @escaping @Sendable (String, JSONValue) async -> Bool,
                execute: @escaping @Sendable (String, JSONValue) async -> ToolResultEnvelope) {
        self.sessionID = sessionID; self.model = model; self.instructions = instructions; self.tools = tools
        self.maximumThinkingTokens = maximumThinkingTokens
        self.outputSchema = outputSchema; self.ephemeral = ephemeral; self.webSearch = webSearch
        self.approve = approve; self.execute = execute
    }
}

public enum HarnessEvent: Sendable {
    case session(String)
    case text(String)
    /// A complete assistant document whose provider stop reason is end_turn.
    case answer(String)
    case diagnostic(JSONValue)
}

public struct HarnessResult: Sendable {
    public let sessionID: String
    public let text: String
    public let usage: AgentUsage
    public let structuredOutput: JSONValue?
    public init(sessionID: String, text: String, usage: AgentUsage, structuredOutput: JSONValue? = nil) {
        self.sessionID = sessionID; self.text = text; self.usage = usage; self.structuredOutput = structuredOutput
    }
}

public protocol HarnessDriving: Sendable {
    var capabilities: HarnessCapabilities { get }
    /// Returns an independent execution session; nil declares a single-session custom driver.
    func makeSessionDriver() throws -> (any HarnessDriving)?
    func open(_ configuration: HarnessSessionConfiguration) async throws -> ClaudeAccount?
    func signIn(presenter: any ClaudeSignInPresenting) async throws -> ClaudeAccount
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult
    func run(_ request: Request, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult
    func usageLimits() async -> [AgentUsageLimitSnapshot]
    func steer(_ text: String) async throws
    func availableModels() async -> [AgentModelInfo]
    func signOut() async throws
    func interrupt() async
    func close() async
}

public extension HarnessDriving {
    func makeSessionDriver() throws -> (any HarnessDriving)? { nil }
    func usageLimits() async -> [AgentUsageLimitSnapshot] { [] }
    func steer(_ text: String) async throws { throw AgentRuntimeError(code: "unsupported_feature", message: "This driver does not accept steering.") }
    func availableModels() async -> [AgentModelInfo] { [] }
    func signOut() async throws { throw AgentRuntimeError(code: "unsupported_feature", message: "This driver cannot remove credentials.") }
    func run(_ request: Request, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        guard request.images.isEmpty else { throw AgentRuntimeError(code: "unsupported_feature", message: "This driver does not accept images.") }
        return try await run(request.transportText, onEvent: onEvent)
    }
}
