import Foundation

/// Tool contracts use the same bounded JSON Schema vocabulary as typed output.
enum ToolSchema {
    static func validateDefinition(_ schema: JSONValue, depth: Int = 0) throws {
        guard schema.objectValue != nil, schema["type"]?.stringValue == "object",
              schema.compactJSONString.utf8.count <= AgentStoreLimits.maximumEmbeddedPayloadByteCount else {
            throw error("Tool input schemas must describe an object within the payload limit.")
        }
        try AgentJSONSchemaValidator.validateSchema(.raw(schema))
    }
    static func validate(_ value: JSONValue, against schema: JSONValue, depth: Int = 0) throws {
        guard value.compactJSONString.utf8.count <= AgentStoreLimits.maximumEmbeddedPayloadByteCount else { throw error("Tool arguments exceed limits.") }
        do { try AgentJSONSchemaValidator.validate(value, schema: .raw(schema)) }
        catch { throw Self.error(error.localizedDescription) }
    }
    static func error(_ message: String) -> AgentRuntimeError { .init(code: "invalid_tool_arguments", message: message) }
}
