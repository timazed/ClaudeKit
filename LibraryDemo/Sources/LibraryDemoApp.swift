import SwiftUI
import ClaudeKit
import ClaudeKitUI

@main struct LibraryDemoApp: App {
    @StateObject private var model = DemoModel()
    var body: some Scene { WindowGroup { DemoView(model: model) } }
}

struct DemoView: View {
    @ObservedObject var model: DemoModel
    @State private var prompt = ProcessInfo.processInfo.arguments.contains("--gallery") ? "Save my Saturday plan: coffee in Surry Hills, a walk through the Botanic Garden, then lunch by the harbour. Read it back when you’re done." : "Write a short note about Claude Code on iPhone, then read it back."
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    HStack {
                        Image(systemName: "bubble.left.and.bubble.right.fill").font(.largeTitle).foregroundStyle(.indigo)
                        VStack(alignment: .leading) {
                            Text("ClaudeKit").font(.largeTitle.bold())
                            Text(model.fixture ? "Demo · local sample responses" : "Your ideas. Native tools. Claude.").font(.caption).foregroundStyle(.secondary)
                        }
                    }
                    HStack { if model.busy { ProgressView() }; Text(model.status).font(.subheadline) }
                    if model.account != nil {
                        Text("Native tool calls: \(model.toolCalls)").font(.caption).foregroundStyle(.secondary).accessibilityIdentifier("native-tool-count")
                    }
                    if let error = model.error { Text(error).foregroundStyle(.red).textSelection(.enabled) }
                    if model.account == nil {
                        VStack(alignment: .leading, spacing: 20) {
                            Text("A little help.\nA lot of possibility.").font(.system(size: 34, weight: .bold, design: .rounded))
                            Text("Turn an idea into a plan, keep the details that matter, and let Claude work with your app’s tools.").foregroundStyle(.secondary)
                            welcomeFeature("Conversations that continue", detail: "Pick up where you left off.", icon: "bubble.left.and.bubble.right")
                            welcomeFeature("Tools you control", detail: "Review requests before they run.", icon: "hand.raised")
                            welcomeFeature("Replies with structure", detail: "Text, JSON, JSON Lines, and XML.", icon: "curlybraces")
                            if model.ready {
                                Button("Sign in with Claude") { model.signIn() }
                                    .buttonStyle(.borderedProminent).controlSize(.large).disabled(model.busy)
                            }
                            Text("Use your Claude account. Sign-in opens in a private browser.").font(.caption).foregroundStyle(.secondary)
                        }.padding(22).frame(maxWidth: .infinity, alignment: .leading)
                            .background(.background, in: RoundedRectangle(cornerRadius: 24))
                    }
                    SignInControls(coordinator: model.signInCoordinator, cancel: { model.cancelSignIn() }, report: { model.error = $0 })
                    if model.account != nil {
                        DisclosureGroup("Account & model") {
                            Label(model.account?.email ?? "Sample account", systemImage: "person.crop.circle")
                            Button("Sign out", role: .destructive) { model.signOut() }.disabled(model.busy)
                            if !model.availableModels.isEmpty {
                                Picker("Model for new conversations", selection: $model.selectedModel) {
                                    ForEach(model.availableModels) { Text($0.displayName).tag($0.id) }
                                }.disabled(model.busy)
                            }
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
                            ForEach(model.messages.filter { message in
                                model.structuredReply.isEmpty || message.role != .assistant || message.id != model.messages.last?.id
                            }) { message in
                                VStack(alignment: .leading, spacing: 5) {
                                    Label(message.role == .user ? "You" : "Claude", systemImage: message.role == .user ? "person.crop.circle" : "sparkles").font(.caption.bold()).foregroundStyle(.secondary)
                                    Text(message.text).textSelection(.enabled)
                                }.frame(maxWidth: .infinity, alignment: .leading).padding(12)
                                    .background(Color(.secondarySystemGroupedBackground), in: RoundedRectangle(cornerRadius: 12))
                            }
                            if !model.structuredReply.isEmpty {
                                VStack(alignment: .leading, spacing: 10) {
                                    Label("Validated \(model.structuredFormat)", systemImage: "checkmark.seal.fill").font(.subheadline.bold()).foregroundStyle(.indigo)
                                    Text(model.structuredReply).font(.system(.caption, design: .monospaced)).textSelection(.enabled)
                                }.padding(16).frame(maxWidth: .infinity, alignment: .leading)
                                    .background(.background, in: RoundedRectangle(cornerRadius: 16))
                            }
                            if !model.streaming.isEmpty { Text(model.streaming).textSelection(.enabled) }
                            if !model.transientReply.isEmpty {
                                VStack(alignment: .leading) {
                                    Text("Ephemeral reply · not saved").font(.caption)
                                    Text(model.transientReply).textSelection(.enabled)
                                }
                            }
                            DisclosureGroup("Reply settings") {
                                Toggle("Ephemeral request", isOn: $model.ephemeral).disabled(model.busy)
                                Picker("Reply format", selection: $model.replyFormat) {
                                    ForEach(DemoModel.ReplyFormat.allCases, id: \.self) { Text($0.rawValue).tag($0) }
                                }.disabled(model.busy)
                                Toggle("Use saved preferences", isOn: $model.useMemory).disabled(model.busy)
                                Toggle("Allow web search", isOn: $model.useSearch).disabled(model.busy)
                            }
                            if !model.usageSummary.isEmpty { Text(model.usageSummary).font(.caption) }
                            TextField("Message Claude", text: $prompt, axis: .vertical).lineLimit(2...6).textFieldStyle(.roundedBorder).accessibilityIdentifier("message-input")
                            HStack {
                                Button("Send", systemImage: "arrow.up") { model.send(prompt) }.buttonStyle(.borderedProminent).disabled(model.busy || prompt.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                                if model.busy { Button("Stop", role: .destructive) { model.stop() } }
                                if model.execution != nil { Button("Add follow-up") { model.steer(prompt) } }
                            }
                            DisclosureGroup("Recovery") {
                                Button("Recoverable JSON") { model.recover(prompt, resume: false) }.disabled(model.busy)
                                if model.recoveryID != nil { Button("Resume / replay receipt") { model.recover(prompt, resume: true) }.disabled(model.busy) }
                            }
                        }
                    }
                    Text(model.fixture ? "Sample responses · Real on-device tool execution" : "Built with ClaudeKit · Your app stays in control").font(.footnote).foregroundStyle(.secondary)
                }.padding(20)
            }.background(Color(.systemGroupedBackground)).navigationTitle("ClaudeKit Demo").navigationBarTitleDisplayMode(.inline)
                .task { await model.prepare() }
                .overlay(alignment: .bottom) { ApprovalPanel(inbox: model.approvals, stop: { model.stop() }) }
        }
    }
    private func welcomeFeature(_ title: String, detail: String, icon: String) -> some View {
        HStack(spacing: 14) {
            Image(systemName: icon).font(.title2).foregroundStyle(.indigo).frame(width: 32)
            VStack(alignment: .leading, spacing: 3) {
                Text(title).font(.subheadline.bold())
                Text(detail).font(.caption).foregroundStyle(.secondary)
            }
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
                Text(request.invocation.toolName == "write_note" ? "Save your note?" : request.invocation.toolName == "read_note" ? "Read your saved note?" : request.invocation.toolName).font(.title3.bold())
                Text(request.invocation.toolName).font(.caption.monospaced()).foregroundStyle(.secondary)
                Text(["write_note", "read_note"].contains(request.invocation.toolName) ? "This tool accesses only the demo’s local note. You decide whether it runs." : "Review the requested action before allowing this tool to run.").font(.subheadline).foregroundStyle(.secondary)
                if let text = request.invocation.arguments["text"]?.stringValue {
                    Text(text).font(.body).padding(12).frame(maxWidth: .infinity, alignment: .leading)
                        .background(.background, in: RoundedRectangle(cornerRadius: 12))
                } else if request.invocation.toolName != "read_note" {
                    Text(request.invocation.arguments.prettyPrintedJSONString).font(.caption.monospaced())
                }
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
