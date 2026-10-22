import XCTest
import ClaudeKit
@testable import ClaudeKitCore
import ClaudeKitUI

final class ExecutionTests: XCTestCase {
    @MainActor func testSignInCancellationClearsAttemptAndIgnoresStaleBrowser() async throws {
        let coordinator = ClaudeSignInCoordinator()
        var cancellations = 0
        coordinator.onCancel = { cancellations += 1 }
        let request = ClaudeSignInRequest(automaticURL: URL(string: "https://claude.ai/oauth/authorize")!,
            manualURL: URL(string: "https://claude.ai/oauth/authorize")!) { _ in XCTFail("Cancelled request must not receive a code") }
        await coordinator.present(request)
        let firstPage = try XCTUnwrap(coordinator.page?.id)
        coordinator.cancel(browserPageID: firstPage)
        XCTAssertNil(coordinator.page); XCTAssertNil(coordinator.request)
        XCTAssertEqual(cancellations, 1)
        do { try await coordinator.submitCode("stale"); XCTFail("Expected cancellation") } catch is CancellationError {}
        await coordinator.present(request)
        coordinator.cancel(browserPageID: firstPage)
        XCTAssertNotNil(coordinator.request); XCTAssertEqual(cancellations, 1)
        await coordinator.dismiss() // successful completion must not trigger cancellation
        XCTAssertNil(coordinator.page); XCTAssertNil(coordinator.request)
        XCTAssertEqual(cancellations, 1)
    }
    func testCancellationBusyAndStaleHandle() async throws {
        let driver = ControlledDriver()
        let runtime = try AgentRuntime(configuration: .init(driver: driver, approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore()))
        try await runtime.restore()
        let thread = try await runtime.createThread()
        let old = try await runtime.start(.init(text: "first"), in: thread.id)
        try await old.waitUntilReady(); await driver.started()
        _ = try await runtime.createThread()
        do { _ = try await runtime.start(.init(text: "overlap"), in: thread.id); XCTFail("Same thread must remain exclusive") }
        catch let error as AgentRuntimeError { XCTAssertEqual(error.code, "thread_busy") }
        old.cancel()
        do { for try await _ in old.events {}; XCTFail("Expected cancellation") } catch {}
        let next = try await runtime.start(.init(text: "second"), in: thread.id)
        try await next.waitUntilReady(); await driver.started()
        old.cancel()
        await driver.complete()
        var completed = false
        for try await event in next.events { if case .turnCompleted = event { completed = true } }
        XCTAssertTrue(completed)
        let interruptions = await driver.interruptions
        XCTAssertEqual(interruptions, 1)
        let messages = await runtime.messages(for: thread.id)
        XCTAssertEqual(messages.filter { $0.role == .assistant }.map(\.text), ["finished"])
    }

    @MainActor func testApprovalCancellationRemovesPrompt() async throws {
        let inbox = ApprovalInbox()
        let invocation = ToolInvocation(id: "call", threadID: "thread", turnID: "turn", toolName: "write", arguments: .object([:]))
        let request = ApprovalRequest(invocation: invocation, message: "Allow?")
        let task = Task { await inbox.presentApproval(request) }
        while inbox.pending.isEmpty { await Task.yield() }
        task.cancel()
        let decision = await task.value
        XCTAssertEqual(decision, .denied)
        XCTAssertTrue(inbox.pending.isEmpty)
        inbox.approve(request.id) // stale UI response cannot resume a second time
    }

    func testDifferentAccountCannotRestoreStoredThreads() async throws {
        var state = StoredRuntimeState.empty
        state.account = .init(email: "other@example.test")
        let runtime = try AgentRuntime(configuration: .init(driver: ControlledDriver(), approvalPresenter: AutomaticApprovalPresenter(), stateStore: InMemoryRuntimeStateStore(state: state)))
        do { try await runtime.restore(); XCTFail("Account change must be explicit") }
        catch let error as AgentRuntimeError { XCTAssertEqual(error.code, "account_changed") }
        let account = await runtime.currentSession(); XCTAssertNil(account)
    }
}

private actor ControlledDriver: HarnessDriving {
    nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true)
    var waiter: CheckedContinuation<HarnessResult, Error>?
    var startWaiter: CheckedContinuation<Void, Never>?
    var interruptions = 0
    func open(_ configuration: HarnessSessionConfiguration) async throws -> ClaudeAccount? { .init(email: "test@example.test") }
    func signIn(presenter: any ClaudeSignInPresenting) async throws -> ClaudeAccount { .init(email: "test@example.test") }
    func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        await onEvent(.session("official-session"))
        return try await withCheckedThrowingContinuation {
            waiter = $0; startWaiter?.resume(); startWaiter = nil
        }
    }
    func started() async { if waiter != nil { return }; await withCheckedContinuation { startWaiter = $0 } }
    func complete() { waiter?.resume(returning: .init(sessionID: "official-session", text: "finished", usage: .init())); waiter = nil }
    func interrupt() async { interruptions += 1; waiter?.resume(throwing: CancellationError()); waiter = nil }
    func close() async { waiter?.resume(throwing: CancellationError()); waiter = nil }
}
