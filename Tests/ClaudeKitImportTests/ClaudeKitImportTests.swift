import XCTest
import ClaudeKit

// This target depends only on the public ClaudeKit product-facing module.
final class ClaudeKitImportTests: XCTestCase {
    func testDefaultHarnessIsAvailableWithoutStartingHost() async throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let configuration = try AgentRuntime.Configuration(
            approvalPresenter: AutomaticApprovalPresenter(),
            harness: .init(storageDirectory: directory,
                           nodeExecutable: directory.appendingPathComponent("nonexistent-node")))
        let runtime = try AgentRuntime(configuration: configuration)
        let driver = try XCTUnwrap(configuration.driver as? ClaudeCodeDriver)
        let evidence = await driver.runtimeEvidence
        let session = await runtime.currentSession()
        XCTAssertNil(evidence)
        XCTAssertNil(session)
        // Construction succeeds even with no usable host. Starting it remains explicit.
        await driver.shutdown()
    }
}
