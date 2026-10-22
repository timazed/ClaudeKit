import XCTest
import ClaudeKit
@testable import ClaudeKitCore

final class RequestModeTests: XCTestCase {
    static let schema: JSONValue = .object(["type": .string("object"), "properties": .object(["answer": .object(["type": .string("string")])]), "required": .array([.string("answer")]), "additionalProperties": .bool(false)])
    func testEphemeralDoesNotChangeStateOrResumeExistingSession() async throws {
        let driver = RequestDriver()
        let store = InMemoryRuntimeStateStore()
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: store))
        try await runtime.restore()
        let thread = try await runtime.createThread()
        _ = try await runtime.send(.init(text: "persistent"), in: thread.id)
        let before = try await store.loadState()
        _ = try await runtime.send(.init(text: "private", executionMode: .ephemeral), in: thread.id)
        let after = try await store.loadState()
        XCTAssertEqual(before, after)
        let opened = await driver.opened
        XCTAssertNil(opened?.sessionID)
        XCTAssertEqual(opened?.ephemeral, true)
        let messages = await runtime.messages(for: thread.id)
        XCTAssertEqual(messages.count, 2)
    }
    func testStructuredResultIsValidatedBeforeCommit() async throws {
        let driver = RequestDriver()
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore(); let thread = try await runtime.createThread()
        struct Answer: Decodable, Sendable { let answer: String }
        let answer = try await runtime.send(.init(text: "json", outputSchema: Self.schema), in: thread.id, as: Answer.self)
        XCTAssertEqual(answer.answer, "verified")
        await driver.setOutput(.object(["answer": .number(1)]))
        do { _ = try await runtime.send(.init(text: "bad", outputSchema: Self.schema), in: thread.id); XCTFail("Must reject invalid output") } catch {}
        let messages = await runtime.messages(for: thread.id)
        XCTAssertEqual(messages.filter { $0.role == .assistant }.count, 1)
    }
    func testAttachmentsRejectSpoofedTypeAndOversizedPacket() throws {
        XCTAssertThrowsError(try Request(text: "", images: [.init(mediaType: "image/png", data: Data("not png".utf8))]).validateAttachments())
        XCTAssertThrowsError(try Request(text: "", images: [.init(mediaType: "image/png", data: Data(repeating: 0, count: 4 * 1024 * 1024 + 1))]).validateAttachments())
        XCTAssertThrowsError(try Request(text: "x", outputSchema: .object(["type": .string("object"), "$ref": .string("remote")])).validateOutputSchema())
    }

    func testOfficialHarnessImageAndEphemeralModes() async throws {
        try XCTSkipUnless(ProcessInfo.processInfo.environment["CLAUDEKIT_RUN_HARNESS_TESTS"] == "1")
        let node = try XCTUnwrap(ProcessInfo.processInfo.environment["CLAUDEKIT_NODE"])
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        let driver = try ClaudeCodeDriver(configuration: .init(authentication: .fixture, storageDirectory: root, nodeExecutable: URL(fileURLWithPath: node)))
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore(); let thread = try await runtime.createThread()
        let png = Data(base64Encoded: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=")!
        let text = try await runtime.send(.init(text: "IMAGE_PROOF", images: [.init(mediaType: "image/png", data: png)], executionMode: .ephemeral), in: thread.id)
        XCTAssertEqual(text, "IMAGE_OK")
        let messages = await runtime.messages(for: thread.id)
        XCTAssertTrue(messages.isEmpty)
        try await runtime.registerTool(.init(name: "read_image", description: "Read an image", inputSchema: .object(["type": .string("object")])), executor: .init { invocation, _ in
            .init(invocationID: invocation.id, toolName: invocation.toolName, success: true, content: [.image(.init(mediaType: "image/png", data: png))])
        })
        let imageResult = try await runtime.send(.init(text: "IMAGE_TOOL_PROOF", executionMode: .ephemeral), in: thread.id)
        XCTAssertEqual(imageResult, "IMAGE_TOOL_OK")
        await driver.shutdown()
        let files = FileManager.default.enumerator(at: root.appendingPathComponent("Config/projects"), includingPropertiesForKeys: nil)?.allObjects as? [URL] ?? []
        XCTAssertFalse(files.contains { $0.pathExtension == "jsonl" })
    }
    func testOfficialHarnessStructuredOutput() async throws {
        try XCTSkipUnless(ProcessInfo.processInfo.environment["CLAUDEKIT_RUN_HARNESS_TESTS"] == "1")
        let node = try XCTUnwrap(ProcessInfo.processInfo.environment["CLAUDEKIT_NODE"])
        let root = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: root) }
        let driver = try ClaudeCodeDriver(configuration: .init(authentication: .fixture, storageDirectory: root, nodeExecutable: URL(fileURLWithPath: node)))
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore(), turnTimeout: 30))
        try await runtime.restore(); let thread = try await runtime.createThread()
        let text = try await runtime.send(.init(text: "JSON_PROOF", outputSchema: Self.schema), in: thread.id)
        XCTAssertEqual(try JSONDecoder().decode(JSONValue.self, from: Data(text.utf8)), .object(["answer": .string("verified")]))
        await driver.shutdown()
    }
}
private actor RequestDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true, images: true, structuredOutput: true, ephemeralRequests: true)
    var opened: HarnessSessionConfiguration?
    var output: JSONValue = .object(["answer": .string("verified")])
    func setOutput(_ value: JSONValue) { output = value }
    func open(_ configuration: HarnessSessionConfiguration) async throws -> ClaudeAccount? { opened = configuration; return .init(email: "test@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) async throws -> ClaudeAccount { .init(email: "test@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        await onEvent(.session("session"))
        return .init(sessionID: "session", text: "ordinary", usage: .init(), structuredOutput: output)
    }
    func interrupt() async {}
    func close() async {}
}
