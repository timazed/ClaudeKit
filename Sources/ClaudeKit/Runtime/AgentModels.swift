import Foundation

public enum AgentRole: String, Codable, Hashable, Sendable {
    case user
    case assistant
    case system
    case tool
}

public enum AgentThreadStatus: String, Codable, Hashable, Sendable {
    case idle
    case streaming
    case waitingForApproval
    case waitingForToolResult
    case failed
}

public enum AgentTurnStatus: String, Codable, Hashable, Sendable {
    case running
    case completed
    case failed
}

public struct AgentThreadConfiguration: Codable, Hashable, Sendable {
    public var model: String
    /// nil leaves the official harness default; zero requests disabled thinking.
    public var maximumThinkingTokens: Int?
    public var personaStack: AgentPersonaStack?
    public var skills: [AgentSkill]?

    public init(
        model: String, personaStack: AgentPersonaStack? = nil, skills: [AgentSkill]? = nil, maximumThinkingTokens: Int? = nil
    ) {
        self.maximumThinkingTokens = maximumThinkingTokens
        self.model = model; self.personaStack = personaStack; self.skills = skills
    }
}

public struct AgentUsage: Codable, Hashable, Sendable {
    public var inputTokens: Int
    public var outputTokens: Int
    public var cacheReadInputTokens: Int?
    public var cacheCreationInputTokens: Int?
    public var estimatedCostUSD: Double?

    public init(inputTokens: Int = 0, outputTokens: Int = 0, cacheReadInputTokens: Int? = nil, cacheCreationInputTokens: Int? = nil, estimatedCostUSD: Double? = nil) {
        self.cacheReadInputTokens = cacheReadInputTokens; self.cacheCreationInputTokens = cacheCreationInputTokens; self.estimatedCostUSD = estimatedCostUSD
        self.inputTokens = inputTokens
        self.outputTokens = outputTokens
    }
}

public struct AgentImageAttachment: Codable, Hashable, Sendable {
    public var mediaType: String
    public var data: Data

    public init(mediaType: String, data: Data) {
        self.mediaType = mediaType
        self.data = data
    }
}

public struct AgentThread: Identifiable, Codable, Hashable, Sendable {
    public var id: String
    public var title: String?
    public var harnessSessionID: String?
    public var configuration: AgentThreadConfiguration?
    public var createdAt: Date
    public var updatedAt: Date
    public var status: AgentThreadStatus

    public init(
        id: String,
        title: String? = nil,
        configuration: AgentThreadConfiguration? = nil,
        createdAt: Date = Date(),
        updatedAt: Date = Date(),
        status: AgentThreadStatus = .idle
    ) {
        self.id = id
        self.title = title
        self.configuration = configuration
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.status = status
    }
}

public struct AgentTurn: Identifiable, Codable, Hashable, Sendable {
    public var id: String
    public var threadID: String
    public var status: AgentTurnStatus
    public var startedAt: Date

    public init(
        id: String = UUID().uuidString,
        threadID: String,
        status: AgentTurnStatus = .running,
        startedAt: Date = Date()
    ) {
        self.id = id
        self.threadID = threadID
        self.status = status
        self.startedAt = startedAt
    }
}

public struct AgentMessage: Identifiable, Codable, Hashable, Sendable {
    public var id: String
    public var threadID: String
    public var role: AgentRole
    public var text: String
    public var images: [AgentImageAttachment]
    public var createdAt: Date

    public init(
        id: String = UUID().uuidString,
        threadID: String,
        role: AgentRole,
        text: String,
        images: [AgentImageAttachment] = [],
        createdAt: Date = Date()
    ) {
        self.id = id
        self.threadID = threadID
        self.role = role
        self.text = text
        self.images = images
        self.createdAt = createdAt
    }

    public var displayText: String {
        if !text.isEmpty {
            return text
        }

        if images.count == 1 {
            return "Attached 1 image"
        }

        if !images.isEmpty {
            return "Attached \(images.count) images"
        }

        return ""
    }
}

public struct AgentTurnSummary: Codable, Hashable, Sendable {
    public var threadID: String
    public var turnID: String
    public var usage: AgentUsage?
    public var completedAt: Date

    public init(
        threadID: String,
        turnID: String,
        usage: AgentUsage? = nil,
        completedAt: Date = Date()
    ) {
        self.threadID = threadID
        self.turnID = turnID
        self.usage = usage
        self.completedAt = completedAt
    }
}
