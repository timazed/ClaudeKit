import XCTest
import ClaudeKit
@testable import ClaudeKitCore

final class HarnessRuntimeTests: XCTestCase {
    func testSchemaRejectsUnsupportedAndInvalidArguments() throws {
        let schema: JSONValue = .object(["type": .string("object"), "properties": .object(["text": .object(["type": .string("string")])]), "required": .array([.string("text")]), "additionalProperties": .bool(false)])
        try ToolSchema.validateDefinition(schema)
        XCTAssertThrowsError(try ToolSchema.validate(.object([:]), against: schema))
        XCTAssertThrowsError(try ToolSchema.validate(.object(["text": .number(4)]), against: schema))
        try ToolSchema.validate(.object(["text": .string("ok")]), against: schema)
        XCTAssertThrowsError(try ToolSchema.validateDefinition(.object(["type": .string("string"), "pattern": .string(".*")])))
        XCTAssertThrowsError(try ToolSchema.validateDefinition(.object(["type": .string("string")])))
        XCTAssertThrowsError(try ToolSchema.validateDefinition(.object(["type": .string("object"), "unsupportedAssertion": .bool(true) ])))
    }

    func testOfficialHarnessSwitchesAndRestoresSessions() async throws {
        try XCTSkipUnless(ProcessInfo.processInfo.environment["CLAUDEKIT_RUN_HARNESS_TESTS"] == "1")
        let node = try XCTUnwrap(ProcessInfo.processInfo.environment["CLAUDEKIT_NODE"])
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        let configuration = try AgentRuntime.Configuration(approvalPresenter: AutomaticApprovalPresenter(),
            stateStore: FileRuntimeStateStore(url: root.appendingPathComponent("state.json")),
            harness: .init(authentication: .fixture, storageDirectory: root, nodeExecutable: URL(fileURLWithPath: node)))
        let runtime = try AgentRuntime(configuration: configuration)
        let note = Note()
        try await runtime.registerTool(.init(name: "write_note", description: "Write the demo note", inputSchema: .object(["type": .string("object"), "properties": .object(["text": .object(["type": .string("string")])]), "required": .array([.string("text")])]), approvalPolicy: .requiresApproval), executor: .init { invocation, _ in
            await note.write(invocation.arguments["text"]?.stringValue ?? ""); return .success(invocation: invocation, text: "saved")
        })
        try await runtime.registerTool(.init(name: "read_note", description: "Read the demo note", inputSchema: .object(["type": .string("object"), "properties": .object([:])]), approvalPolicy: .requiresApproval), executor: .init { invocation, _ in
            .success(invocation: invocation, text: await note.read())
        })
        try await runtime.restore()
        let a = try await runtime.createThread(title: "A")
        let first = try await runtime.send(.init(text: "Write and read the note"), in: a.id)
        let b = try await runtime.createThread(title: "B")
        let second = try await runtime.send(.init(text: "Write and read the note"), in: b.id)
        XCTAssertNotEqual(first, second)
        let restored = try await runtime.send(.init(text: "RESUME_PROOF"), in: a.id)
        XCTAssertEqual(first.replacingOccurrences(of: "PROOF_OK:", with: "RESUME_OK:"), restored)
        let threads = await runtime.threads()
        XCTAssertEqual(threads.count, 2)
        XCTAssertNotEqual(threads[0].harnessSessionID, threads[1].harnessSessionID)
        let calls = await note.calls; XCTAssertEqual(calls, 4)
        try await runtime.disconnect()
        await (configuration.driver as? ClaudeCodeDriver)?.shutdown()
    }
}
private actor Note {
    var text = ""; var calls = 0
    func write(_ text: String) { self.text = text; calls += 1 }
    func read() -> String { calls += 1; return text }
}
