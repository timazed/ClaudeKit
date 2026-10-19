import SwiftUI
import ClaudeKit
import ClaudeKitUI

@main struct LibraryDemoApp: App {
    @StateObject private var model = DemoModel()
    var body: some Scene { WindowGroup { DemoView(model: model) } }
}

struct DemoView: View {
    @ObservedObject var model: DemoModel
    @State private var prompt = "Write a short note about Claude Code on iPhone, then read it back."
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    HStack {
                        Image(systemName: "bubble.left.and.bubble.right.fill").font(.largeTitle).foregroundStyle(.indigo)
                        VStack(alignment: .leading) {
                            Text("ClaudeKit").font(.largeTitle.bold())
                            Text(model.fixture ? "Official harness · local model fixture" : "Official harness · Claude account").font(.caption).foregroundStyle(.secondary)
                        }
                    }
                    HStack { if model.busy { ProgressView() }; Text(model.status).font(.subheadline) }
                    Text("Native tool calls: \(model.toolCalls)").font(.caption).accessibilityIdentifier("native-tool-count")
                    if let error = model.error { Text(error).foregroundStyle(.red).textSelection(.enabled) }
                    if let account = model.account {
                        Label(account.email ?? (model.fixture ? "Fixture account" : "Claude account"), systemImage: "person.crop.circle.badge.checkmark")
                    } else if model.ready {
                        Button("Sign in with Claude") { model.signIn() }.buttonStyle(.borderedProminent).disabled(model.busy)
                    }
                    if model.account != nil { Button("Sign out", role: .destructive) { model.signOut() }.disabled(model.busy) }
                    SignInControls(coordinator: model.signInCoordinator, cancel: { model.cancelSignIn() }, report: { model.error = $0 })
                    if model.account != nil {
                        if !model.availableModels.isEmpty {
                            Picker("Model for new conversations", selection: $model.selectedModel) {
                                ForEach(model.availableModels) { Text($0.displayName).tag($0.id) }
                            }.disabled(model.busy)
                        }
                        HStack {
                            Text("Conversations").font(.headline)
                            Spacer()
                            Button("New conversation", systemImage: "plus") { model.createThread() }.disabled(model.busy)
                        }
                        ForEach(model.threads) { thread in
                            Button { model.select(thread.id) } label: {
                                HStack {
                                    Image(systemName: model.selected == thread.id ? "bubble.left.fill" : "bubble.left")
                                    Text(thread.title ?? "Conversation"); Spacer()
                                    if thread.harnessSessionID != nil { Image(systemName: "checkmark.icloud") }
                                }.padding(10).background(Color.indigo.opacity(model.selected == thread.id ? 0.10 : 0.03), in: RoundedRectangle(cornerRadius: 10))
                            }.disabled(model.busy).accessibilityIdentifier("thread-\(thread.id)")
                        }
                        if model.selected != nil {
                            Divider()
                            ForEach(model.messages) { message in
                                VStack(alignment: .leading, spacing: 5) {
                                    Text(message.role == .user ? "You" : "Claude").font(.caption.bold()).foregroundStyle(.secondary)
                                    Text(message.text).textSelection(.enabled)
                                }.frame(maxWidth: .infinity, alignment: .leading).padding(12)
                                    .background(Color(.secondarySystemGroupedBackground), in: RoundedRectangle(cornerRadius: 12))
                            }
                            if !model.streaming.isEmpty { Text(model.streaming).textSelection(.enabled) }
                            if !model.transientReply.isEmpty {
                                VStack(alignment: .leading) {
                                    Text("Ephemeral reply · not saved").font(.caption)
                                    Text(model.transientReply).textSelection(.enabled)
                                }
                            }
                            Toggle("Ephemeral request", isOn: $model.ephemeral).disabled(model.busy)
                            Picker("Reply format", selection: $model.replyFormat) {
                                ForEach(DemoModel.ReplyFormat.allCases, id: \.self) { Text($0.rawValue).tag($0) }
                            }.disabled(model.busy)
                            Toggle("Use saved preferences", isOn: $model.useMemory).disabled(model.busy)
                            Toggle("Allow web search", isOn: $model.useSearch).disabled(model.busy)
                            if !model.usageSummary.isEmpty { Text(model.usageSummary).font(.caption) }
                            TextField("Message Claude", text: $prompt, axis: .vertical).lineLimit(2...6).textFieldStyle(.roundedBorder).accessibilityIdentifier("message-input")
                            HStack {
                                Button("Send", systemImage: "arrow.up") { model.send(prompt) }.buttonStyle(.borderedProminent).disabled(model.busy || prompt.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                                if model.busy { Button("Stop", role: .destructive) { model.stop() } }
                                if model.execution != nil { Button("Add follow-up") { model.steer(prompt) } }
                            }
                            HStack {
                                Button("Recoverable JSON") { model.recover(prompt, resume: false) }.disabled(model.busy)
                                if model.recoveryID != nil { Button("Resume / replay receipt") { model.recover(prompt, resume: true) }.disabled(model.busy) }
                            }
                        }
                    }
                    Text("Native tools access this demo’s note and saved preferences. The embedded harness owns the conversation and model calls.").font(.footnote).foregroundStyle(.secondary)
                }.padding(20)
            }.background(Color(.systemGroupedBackground)).navigationTitle("Library demo").navigationBarTitleDisplayMode(.inline)
                .task { await model.prepare() }
                .overlay(alignment: .bottom) { ApprovalPanel(inbox: model.approvals, stop: { model.stop() }) }
        }
    }
}

private struct ApprovalPanel: View {
    @ObservedObject var inbox: ApprovalInbox
    let stop: () -> Void
    var body: some View {
        if let request = inbox.pending.first {
            VStack(alignment: .leading, spacing: 14) {
                Label("Tool approval", systemImage: "hand.raised.fill").font(.headline)
                Text(request.invocation.toolName).font(.headline.monospaced())
                ScrollView { Text(request.invocation.arguments.prettyPrintedJSONString).font(.caption.monospaced()) }.frame(maxHeight: 180)
                HStack {
                    Button("Deny", role: .destructive) { inbox.deny(request.id) }.buttonStyle(.bordered)
                    Button("Stop turn", action: stop).buttonStyle(.bordered)
                    Spacer()
                    Button("Allow once") { inbox.approve(request.id) }.buttonStyle(.borderedProminent)
                }
            }.padding(20).background(.regularMaterial, in: RoundedRectangle(cornerRadius: 20)).padding().shadow(radius: 12)
        }
    }
}
private struct SignInControls: View {
    @ObservedObject var coordinator: ClaudeSignInCoordinator
    let cancel: () -> Void
    let report: (String) -> Void
    var body: some View {
        if coordinator.request != nil {
            VStack(alignment: .leading, spacing: 12) {
                Text("Complete sign-in in the private browser window. Closing it cancels this attempt.").font(.footnote)
                Button("Cancel sign-in", role: .cancel, action: cancel)
            }.background {
                if let page = coordinator.page {
                    ClaudeSignInBrowser(url: page.url,
                        onCancel: { coordinator.cancel(browserPageID: page.id) },
                        onError: report)
                        .id(page.id).frame(width: 0, height: 0)
                }
            }
        }
    }
}
