import ClaudeKit
import Foundation

public extension AgentRuntime.Configuration {
    /// Creates and owns the official harness driver. Keep the resulting runtime
    /// for the application's lifetime on iOS.
    ///
    /// Import ClaudeKitHarness to make this initializer available. Use the
    /// driver-taking initializer when injecting a custom or test driver.
    init(approvalPresenter: any ApprovalPresenting,
         stateStore: any RuntimeStateStoring = FileRuntimeStateStore(),
         signInPresenter: (any ClaudeSignInPresenting)? = nil,
         baseInstructions: String = "Be helpful and concise.",
         tools: [AgentRuntime.ToolRegistration] = [],
         turnTimeout: TimeInterval? = 300,
         maximumToolCalls: Int? = 128,
         maximumParallelToolCalls: Int = 4,
         allowHostedSearch: Bool = false,
         recoveryStore: any AgentRecoveryStoring = FileAgentRecoveryStore(),
         harness: ClaudeCodeDriver.Configuration = .init()) throws {
        try self.init(driver: ClaudeCodeDriver(configuration: harness),
                      approvalPresenter: approvalPresenter,
                      stateStore: stateStore,
                      signInPresenter: signInPresenter,
                      baseInstructions: baseInstructions,
                      tools: tools,
                      turnTimeout: turnTimeout, maximumToolCalls: maximumToolCalls, maximumParallelToolCalls: maximumParallelToolCalls, recoveryStore: recoveryStore, allowHostedSearch: allowHostedSearch)
    }
}
