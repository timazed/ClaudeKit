import Foundation

public struct AgentModelInfo: Codable, Hashable, Sendable, Identifiable {
    public var id: String
    public var displayName: String
    public var description: String?
    public init(id: String, displayName: String, description: String? = nil) {
        self.id = id; self.displayName = displayName; self.description = description
    }
}

public extension AgentRuntime {
    func availableModels() async -> [AgentModelInfo] { await configuration.driver.availableModels() }
}
