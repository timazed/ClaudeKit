import Foundation

public enum ToolApprovalPolicy: String, Codable, Hashable, Sendable {
    case automatic
    case requiresApproval
}

public struct ToolDefinition: Identifiable, Codable, Hashable, Sendable {
    public var id: String { name }

    public let name: String
    public let description: String
    public let inputSchema: JSONValue
    public let approvalPolicy: ToolApprovalPolicy
    public let approvalMessage: String?
    /// Missing in older persisted definitions means serial execution.
    public let allowsParallelExecution: Bool?

    public init(
        name: String,
        description: String,
        inputSchema: JSONValue,
        approvalPolicy: ToolApprovalPolicy = .automatic,
        approvalMessage: String? = nil, allowsParallelExecution: Bool = false
    ) {
        self.name = name
        self.description = description
        self.inputSchema = inputSchema
        self.approvalPolicy = approvalPolicy
        self.approvalMessage = approvalMessage
        self.allowsParallelExecution = allowsParallelExecution
    }

    public static func isValidName(_ name: String) -> Bool {
        guard (1...64).contains(name.count) else {
            return false
        }
        return name.range(of: "^[a-zA-Z0-9_-]+$", options: .regularExpression) != nil
    }
}

public struct ToolInvocation: Identifiable, Codable, Hashable, Sendable {
    public let id: String
    public let threadID: String
    public let turnID: String
    public let toolName: String
    public let arguments: JSONValue

    public init(
        id: String,
        threadID: String,
        turnID: String,
        toolName: String,
        arguments: JSONValue
    ) {
        self.id = id
        self.threadID = threadID
        self.turnID = turnID
        self.toolName = toolName
        self.arguments = arguments
    }
}

public enum ToolResultContent: Codable, Hashable, Sendable {
    case text(String)
    case image(AgentImageAttachment)

    public var textValue: String? {
        guard case let .text(value) = self else {
            return nil
        }
        return value
    }
}

public struct ToolResultEnvelope: Codable, Hashable, Sendable {
    public let invocationID: String
    public let toolName: String
    public let success: Bool
    public let content: [ToolResultContent]
    public let errorMessage: String?

    public init(
        invocationID: String,
        toolName: String,
        success: Bool,
        content: [ToolResultContent] = [],
        errorMessage: String? = nil
    ) {
        self.invocationID = invocationID
        self.toolName = toolName
        self.success = success
        self.content = content
        self.errorMessage = errorMessage
    }

    public var primaryText: String? {
        content.compactMap(\.textValue).first
    }

    public static func success(
        invocation: ToolInvocation,
        text: String
    ) -> ToolResultEnvelope {
        ToolResultEnvelope(
            invocationID: invocation.id,
            toolName: invocation.toolName,
            success: true,
            content: [.text(text)]
        )
    }

    public static func failure(
        invocation: ToolInvocation,
        message: String
    ) -> ToolResultEnvelope {
        ToolResultEnvelope(
            invocationID: invocation.id,
            toolName: invocation.toolName,
            success: false,
            content: [.text(message)],
            errorMessage: message
        )
    }

    public static func denied(invocation: ToolInvocation) -> ToolResultEnvelope {
        failure(invocation: invocation, message: "Tool execution was denied by the user.")
    }
}

public struct ToolExecutionContext: Sendable {
    public let threadID: String
    public let turnID: String

    public init(threadID: String, turnID: String) {
        self.threadID = threadID
        self.turnID = turnID
    }
}

public protocol ToolExecuting: Sendable {
    func execute(
        invocation: ToolInvocation,
        context: ToolExecutionContext
    ) async throws -> ToolResultEnvelope
}

public struct AnyToolExecutor: ToolExecuting, Sendable {
    private let closure: @Sendable (ToolInvocation, ToolExecutionContext) async throws -> ToolResultEnvelope

    public init(
        _ closure: @escaping @Sendable (ToolInvocation, ToolExecutionContext) async throws -> ToolResultEnvelope
    ) {
        self.closure = closure
    }

    public func execute(
        invocation: ToolInvocation,
        context: ToolExecutionContext
    ) async throws -> ToolResultEnvelope {
        try await closure(invocation, context)
    }
}
