import ClaudeKitLegacy
import ClaudeKitLegacyUI
import SwiftUI

struct AgentDemoView: View {
    @ObservedObject var viewModel: AgentDemoViewModel
    @ObservedObject private var approvalInbox: ApprovalInbox

    init(viewModel: AgentDemoViewModel) {
        self.viewModel = viewModel
        self.approvalInbox = viewModel.approvalInbox
    }

    var body: some View {
        VStack(spacing: 0) {
            header
                .padding()
                .background(.thinMaterial)

            Divider()

            if viewModel.session == nil {
                signInView
            } else {
                chatView
            }
        }
        .task {
            await viewModel.restore()
        }
        .alert(
            "ClaudeKit",
            isPresented: Binding(
                get: { viewModel.errorMessage != nil },
                set: { if !$0 { viewModel.errorMessage = nil } }
            )
        ) {
            Button("OK", role: .cancel) {
                viewModel.errorMessage = nil
            }
        } message: {
            Text(viewModel.errorMessage ?? "")
        }
    }
}

private extension AgentDemoView {
    var header: some View {
        HStack(spacing: 12) {
            VStack(alignment: .leading, spacing: 2) {
                Text(viewModel.selectedThread?.title ?? "Claude Demo")
                    .font(.headline)
                    .lineLimit(1)
                Text(viewModel.statusText)
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }

            Spacer()

            if viewModel.session != nil {
                Menu {
                    Button {
                        Task { await viewModel.createThread() }
                    } label: {
                        Label("New Thread", systemImage: "plus.message")
                    }

                    ForEach(viewModel.threads) { thread in
                        Button {
                            Task { await viewModel.selectThread(thread.id) }
                        } label: {
                            Label(
                                thread.title ?? "Claude Chat",
                                systemImage: thread.id == viewModel.selectedThreadID ? "checkmark.circle" : "bubble.left"
                            )
                        }
                    }

                    Divider()

                    Button(role: .destructive) {
                        Task { await viewModel.signOut() }
                    } label: {
                        Label("Sign Out", systemImage: "rectangle.portrait.and.arrow.right")
                    }
                } label: {
                    Image(systemName: "ellipsis.circle")
                        .imageScale(.large)
                }
                .accessibilityLabel("Thread and account actions")
            }
        }
    }

    var signInView: some View {
        Form {
            Section("Anthropic API Key") {
                SecureField("sk-ant-api...", text: $viewModel.apiKey)
                    .textInputAutocapitalization(.never)
                    .autocorrectionDisabled()

                Button {
                    Task { await viewModel.signInWithEnteredAPIKey() }
                } label: {
                    Label("Sign In", systemImage: "key")
                }
            }

            Section("OAuth Token") {
                SecureField("Bearer token", text: $viewModel.oauthToken)
                    .textInputAutocapitalization(.never)
                    .autocorrectionDisabled()

                Button {
                    Task { await viewModel.signInWithEnteredOAuthToken() }
                } label: {
                    Label("Sign In", systemImage: "person.badge.key")
                }
            }

            Section("Environment") {
                Button {
                    Task { await viewModel.signInWithEnvironment() }
                } label: {
                    Label("Use ANTHROPIC_API_KEY", systemImage: "terminal")
                }

                Button {
                    Task { await viewModel.signInWithOAuthEnvironment() }
                } label: {
                    Label("Use CLAUDE_CODE_OAUTH_TOKEN", systemImage: "terminal")
                }
            }
        }
    }

    var chatView: some View {
        VStack(spacing: 0) {
            if !approvalInbox.pending.isEmpty {
                approvalStrip
            }

            transcript

            Divider()

            composer
                .padding()
                .background(.background)
        }
    }

    var transcript: some View {
        ScrollViewReader { proxy in
            ScrollView {
                LazyVStack(alignment: .leading, spacing: 12) {
                    ForEach(viewModel.messages) { message in
                        MessageBubble(message: message)
                            .id(message.id)
                    }

                    if !viewModel.streamingText.isEmpty {
                        MessageBubble(
                            message: AgentMessage(
                                threadID: viewModel.selectedThreadID ?? "",
                                role: .assistant,
                                text: viewModel.streamingText
                            ),
                            isStreaming: true
                        )
                        .id("streaming")
                    }
                }
                .padding()
            }
            .onChange(of: viewModel.messages.count) { _, _ in
                scrollToBottom(proxy)
            }
            .onChange(of: viewModel.streamingText) { _, _ in
                scrollToBottom(proxy)
            }
        }
    }

    var composer: some View {
        HStack(alignment: .bottom, spacing: 10) {
            TextField("Message Claude", text: $viewModel.draft, axis: .vertical)
                .lineLimit(1...5)
                .textFieldStyle(.roundedBorder)
                .disabled(viewModel.isStreaming)

            Button {
                Task { await viewModel.send() }
            } label: {
                Image(systemName: viewModel.isStreaming ? "hourglass" : "arrow.up.circle.fill")
                    .font(.system(size: 28))
            }
            .disabled(!viewModel.canSend)
            .accessibilityLabel("Send message")
        }
    }

    var approvalStrip: some View {
        VStack(alignment: .leading, spacing: 8) {
            ForEach(approvalInbox.pending) { approval in
                VStack(alignment: .leading, spacing: 8) {
                    Text(approval.request.message)
                        .font(.subheadline.weight(.semibold))

                    Text(approval.request.invocation.arguments.prettyPrintedJSONString)
                        .font(.caption.monospaced())
                        .foregroundStyle(.secondary)
                        .lineLimit(4)

                    HStack {
                        Button(role: .destructive) {
                            approvalInbox.deny(approval.id)
                        } label: {
                            Label("Deny", systemImage: "xmark.circle")
                        }

                        Spacer()

                        Button {
                            approvalInbox.approve(approval.id)
                        } label: {
                            Label("Approve", systemImage: "checkmark.circle.fill")
                        }
                        .buttonStyle(.borderedProminent)
                    }
                }
                .padding(12)
                .background(Color.yellow.opacity(0.16), in: RoundedRectangle(cornerRadius: 8))
            }
        }
        .padding()
        .background(Color.yellow.opacity(0.08))
    }

    func scrollToBottom(_ proxy: ScrollViewProxy) {
        withAnimation(.snappy) {
            if !viewModel.streamingText.isEmpty {
                proxy.scrollTo("streaming", anchor: .bottom)
            } else if let lastID = viewModel.messages.last?.id {
                proxy.scrollTo(lastID, anchor: .bottom)
            }
        }
    }
}

private struct MessageBubble: View {
    let message: AgentMessage
    var isStreaming = false

    var body: some View {
        HStack {
            if message.role == .user {
                Spacer(minLength: 40)
            }

            VStack(alignment: .leading, spacing: 4) {
                Text(roleLabel)
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(.secondary)

                Text(message.displayText)
                    .font(.body)
                    .textSelection(.enabled)
            }
            .padding(12)
            .background(background, in: RoundedRectangle(cornerRadius: 8))

            if message.role != .user {
                Spacer(minLength: 40)
            }
        }
        .opacity(isStreaming ? 0.82 : 1)
    }

    private var roleLabel: String {
        switch message.role {
        case .user:
            "You"
        case .assistant:
            "Claude"
        case .system:
            "System"
        case .tool:
            "Tool"
        }
    }

    private var background: Color {
        switch message.role {
        case .user:
            Color.accentColor.opacity(0.16)
        case .assistant:
            Color.secondary.opacity(0.12)
        case .system,
             .tool:
            Color.orange.opacity(0.14)
        }
    }
}
