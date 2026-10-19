import Foundation

public struct AgentRuntimeError: Error, Codable, Hashable, LocalizedError, Sendable {
    public let code: String
    public let message: String

    public init(code: String, message: String) {
        self.code = code
        self.message = message
    }

    public var errorDescription: String? {
        message
    }

    public static func invalidMessageContent() -> AgentRuntimeError {
        AgentRuntimeError(
            code: "invalid_message_content",
            message: "Requests must include text or at least one image."
        )
    }

    public static func threadNotFound(_ id: String) -> AgentRuntimeError {
        AgentRuntimeError(
            code: "thread_not_found",
            message: "No thread exists with id \(id)."
        )
    }

    public static func missingSession() -> AgentRuntimeError {
        AgentRuntimeError(
            code: "missing_session",
            message: "Sign in or provide an Anthropic session before sending a message."
        )
    }

    public static func toolNotFound(_ name: String) -> AgentRuntimeError {
        AgentRuntimeError(
            code: "tool_not_found",
            message: "No tool is registered with name \(name)."
        )
    }

    public static func invalidToolName(_ name: String) -> AgentRuntimeError {
        AgentRuntimeError(
            code: "invalid_tool_name",
            message: "Tool name \(name) must match Anthropic's tool-name requirements."
        )
    }

    public static func transport(_ message: String) -> AgentRuntimeError {
        AgentRuntimeError(
            code: "transport_error",
            message: message
        )
    }
}
