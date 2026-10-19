import XCTest
@testable import ClaudeKitLegacy

final class ToolRegistryTests: XCTestCase {
    func testRejectsInvalidToolNames() async throws {
        let registry = try ToolRegistry()
        let definition = ToolDefinition(
            name: "bad tool",
            description: "Invalid because spaces are not allowed.",
            inputSchema: .object(["type": .string("object")])
        )

        do {
            try await registry.register(definition, executor: AnyToolExecutor { invocation, _ in
                .success(invocation: invocation, text: "ok")
            })
            XCTFail("Expected invalid tool name to throw.")
        } catch let error as AgentRuntimeError {
            XCTAssertEqual(error.code, "invalid_tool_name")
        }
    }

    func testStoresDefinitionsSortedByName() async throws {
        let registry = try ToolRegistry()
        for name in ["z_tool", "a_tool"] {
            let definition = ToolDefinition(
                name: name,
                description: "A test tool.",
                inputSchema: .object(["type": .string("object")])
            )
            try await registry.register(definition, executor: AnyToolExecutor { invocation, _ in
                .success(invocation: invocation, text: "ok")
            })
        }

        let names = await registry.allDefinitions().map(\.name)
        XCTAssertEqual(names, ["a_tool", "z_tool"])
    }
}
