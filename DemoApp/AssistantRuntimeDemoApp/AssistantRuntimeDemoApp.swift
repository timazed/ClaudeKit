import SwiftUI

@main
@MainActor
struct AssistantRuntimeDemoApp: App {
    @StateObject private var viewModel: AgentDemoViewModel

    init() {
        _viewModel = StateObject(
            wrappedValue: AgentDemoViewModel(
                runtimeBundle: AgentDemoRuntimeFactory.makeLive(
                    keychainAccount: "ClaudeRuntimeDemoApp"
                )
            )
        )
    }

    var body: some Scene {
        WindowGroup {
            NavigationStack {
                AgentDemoView(viewModel: viewModel)
                    .navigationTitle("ClaudeKit")
                    .navigationBarTitleDisplayMode(.inline)
            }
        }
    }
}
