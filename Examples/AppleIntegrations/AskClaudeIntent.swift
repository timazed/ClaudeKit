// Add this file to the host app target, then install the host's shared runtime at launch.
import AppIntents
import ClaudeKit

@MainActor final class ClaudeIntentRuntime {
    static let shared = ClaudeIntentRuntime()
    var runtime: AgentRuntime?
}
struct AskClaudeIntent: AppIntent {
    static var title: LocalizedStringResource = "Ask Claude"
    static var description = IntentDescription("Ask the app's signed-in Claude account a question.")
    static var openAppWhenRun = true
    @Parameter(title: "Question") var question: String
    @MainActor func perform() async throws -> some IntentResult & ReturnsValue<String> {
        guard let runtime = ClaudeIntentRuntime.shared.runtime, await runtime.currentSession() != nil else { throw AgentRuntimeError.missingSession() }
        let thread = try await runtime.createThread(title: "Shortcut")
        return .result(value: try await runtime.send(.init(text: question), in: thread.id))
    }
}
struct ClaudeShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(intent: AskClaudeIntent(), phrases: ["Ask \(.applicationName)"], shortTitle: "Ask Claude", systemImageName: "bubble.left")
    }
}
