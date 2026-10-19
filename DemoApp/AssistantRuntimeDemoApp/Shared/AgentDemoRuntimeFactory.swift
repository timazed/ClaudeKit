import ClaudeKitLegacy
import ClaudeKitLegacyUI
import Foundation

struct AgentDemoRuntimeBundle {
    let runtime: AgentRuntime
    let approvalInbox: ApprovalInbox
}

enum AgentDemoRuntimeFactory {
    @MainActor
    static func makeLive(keychainAccount: String) -> AgentDemoRuntimeBundle {
        let approvalInbox = ApprovalInbox()
        let stateURL = applicationSupportURL()
            .appendingPathComponent("ClaudeKitDemo", isDirectory: true)
            .appendingPathComponent("runtime-state.json")

        let runtime = try! AgentRuntime(configuration: .init(
            authProvider: AnthropicAPIKeyAuthProvider(environmentVariable: "ANTHROPIC_API_KEY"),
            secureStore: KeychainSessionSecureStore(
                service: "ClaudeKit.AnthropicSession",
                account: keychainAccount
            ),
            backend: AnthropicMessagesBackend(),
            approvalPresenter: approvalInbox,
            stateStore: FileRuntimeStateStore(url: stateURL),
            tools: sampleTools()
        ))

        return AgentDemoRuntimeBundle(
            runtime: runtime,
            approvalInbox: approvalInbox
        )
    }

    private static func applicationSupportURL() -> URL {
        FileManager.default.urls(
            for: .applicationSupportDirectory,
            in: .userDomainMask
        ).first ?? FileManager.default.temporaryDirectory
    }

    private static func sampleTools() -> [AgentRuntime.ToolRegistration] {
        [
            AgentRuntime.ToolRegistration(
                definition: ToolDefinition(
                    name: "demo_current_time",
                    description: "Return the current local date and time from the host app.",
                    inputSchema: .object([
                        "type": .string("object"),
                        "properties": .object([:]),
                        "additionalProperties": .bool(false),
                    ]),
                    approvalPolicy: .requiresApproval,
                    approvalMessage: "Allow Claude to read the current local time from the demo app?"
                ),
                executor: AnyToolExecutor { invocation, _ in
                    let text = Date.now.formatted(
                        date: .abbreviated,
                        time: .standard
                    )
                    return .success(
                        invocation: invocation,
                        text: "Current local time: \(text)"
                    )
                }
            ),
        ]
    }
}
