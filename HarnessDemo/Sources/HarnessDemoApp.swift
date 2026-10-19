import SwiftUI
import SafariServices

@main
struct HarnessDemoApp: App {
    @StateObject private var host = HarnessHost()
    var body: some Scene { WindowGroup { HarnessDemoView(host: host) } }
}

struct HarnessDemoView: View {
    @ObservedObject var host: HarnessHost
    @State private var mode: HarnessMode = .account
    private var fixture: Bool { mode == .fixture }
    @State private var apiKey = ""
    @State private var model = "claude-sonnet-4-6"
    @State private var resume = false
    @State private var autoApprove = true
    @State private var prompt = "Write a short note about running Claude Code on an iPhone, then read it back using the native iOS tools."
    @State private var didAutoStart = false
    @State private var showEvents = false
    @State private var loginCode = ""

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 22) {
                    VStack(alignment: .leading, spacing: 10) {
                        Label("ON-DEVICE EXPERIMENT", systemImage: "iphone.gen3.radiowaves.left.and.right")
                            .font(.caption.weight(.semibold)).foregroundStyle(.indigo)
                        Text("The official harness.\nInside an iPhone.")
                            .font(.largeTitle.bold()).fixedSize(horizontal: false, vertical: true)
                        Text(host.runtime).font(.caption).foregroundStyle(.secondary)
                        Text(fixture ? "LOCAL FIXTURE · SIMULATED MODEL RESPONSES" : mode == .account ? "CLAUDE CODE · YOUR CLAUDE ACCOUNT" : "LIVE ANTHROPIC API")
                            .font(.caption2.weight(.semibold)).foregroundStyle(.indigo)
                    }
                    VStack(alignment: .leading, spacing: 12) {
                        HStack {
                            if host.busy || host.isAuthenticating { ProgressView() }
                            Image(systemName: host.verdict.hasPrefix("PASS") ? "checkmark.circle.fill" : "cpu")
                                .foregroundStyle(host.verdict.hasPrefix("PASS") ? .green : .indigo)
                            Text(host.status).font(.headline)
                        }
                        HStack(spacing: 0) {
                            metric("Writes", host.writeCount)
                            metric("Reads", host.readCount)
                            metric("Approvals", host.permissionCount)
                            metric("Stream events", host.streamCount)
                        }
                    }.padding().background(.indigo.opacity(0.07), in: RoundedRectangle(cornerRadius: 18))

                    if !host.started {
                        VStack(alignment: .leading, spacing: 14) {
                            Picker("Sign-in method", selection: $mode) {
                                ForEach(HarnessMode.allCases, id: \.self) { Text($0.title).tag($0) }
                            }.pickerStyle(.segmented)
                            Text(fixture ? "Simulated model responses drive the real agent loop. The official harness dispatches tools, handles permissions, streams results, and saves the session." :
                                    mode == .account ? "Sign in to the embedded Claude Code harness through Anthropic’s own browser flow. Claude Code uses your account and manages its own credentials. No API key is required." :
                                    "Use your own API key with the embedded harness. API usage is billed to that account.")
                                .font(.subheadline).foregroundStyle(.secondary)
                            if fixture {
                                Toggle("Approve the two fixture tools automatically", isOn: $autoApprove).font(.subheadline)
                            } else if mode == .apiKey {
                                SecureField("Anthropic API key", text: $apiKey).textContentType(.password)
                                    .textInputAutocapitalization(.never).autocorrectionDisabled().textFieldStyle(.roundedBorder)
                                Text("Kept in memory for this app run.").font(.caption).foregroundStyle(.secondary)
                            }
                            if !fixture {
                                TextField("Model ID", text: $model).textInputAutocapitalization(.never)
                                    .autocorrectionDisabled().textFieldStyle(.roundedBorder)
                                TextField("Prompt", text: $prompt, axis: .vertical).lineLimit(3...6).textFieldStyle(.roundedBorder)
                            }
                            if !host.savedSession(fixture: fixture).isEmpty {
                                Toggle("Resume the saved \(fixture ? "fixture" : "live") session", isOn: $resume).font(.subheadline)
                            }
                            Button { start() } label: {
                                Label(mode == .account ? "Open Claude Code sign-in" : resume ? "Resume & verify" : fixture ? "Run on-device proof" : "Start live conversation", systemImage: mode == .account ? "person.crop.circle" : "play.fill")
                                    .frame(maxWidth: .infinity).padding(.vertical, 6)
                            }.buttonStyle(.borderedProminent).tint(.indigo)
                        }
                    }
                    if !host.transcript.isEmpty {
                        VStack(alignment: .leading, spacing: 10) {
                            Label("Harness response", systemImage: "text.bubble").font(.headline)
                            Text(host.transcript).font(.system(.body, design: .monospaced)).textSelection(.enabled)
                        }.frame(maxWidth: .infinity, alignment: .leading).padding()
                            .background(Color(.secondarySystemGroupedBackground), in: RoundedRectangle(cornerRadius: 18))
                    }
                    if host.started {
                        if mode == .account && !host.signedIn {
                            VStack(alignment: .leading, spacing: 12) {
                                if host.authReady {
                                    Button("Continue in browser") { host.openSignIn() }.buttonStyle(.borderedProminent)
                                    DisclosureGroup("If the browser cannot return automatically") {
                                        VStack(alignment: .leading, spacing: 10) {
                                            Button("Open Claude Code’s code-based sign-in") { host.openSignIn(manual: true) }
                                            Text("Use the one-time code Anthropic displays after signing in. It is passed directly to the harness.").font(.footnote)
                                            SecureField("One-time authorization code", text: $loginCode)
                                                .textInputAutocapitalization(.never).autocorrectionDisabled().textFieldStyle(.roundedBorder)
                                            Button("Complete sign-in") { host.submitLoginCode(loginCode); loginCode = "" }
                                        }.padding(.top, 8)
                                    }
                                }
                                if host.initialized { Button("Restart sign-in") { host.beginAccountLogin() } }
                            }
                        }
                        if host.signedIn { Label(host.accountLabel, systemImage: "person.crop.circle.badge.checkmark").font(.subheadline) }
                        if !fixture && host.initialized && !host.busy && (mode != .account || host.signedIn) {
                            TextField("Continue the conversation", text: $prompt, axis: .vertical).textFieldStyle(.roundedBorder)
                                .accessibilityIdentifier("conversation-prompt")
                            Button("Send") { host.sendPrompt(prompt) }.buttonStyle(.borderedProminent)
                        }
                        if host.busy { Button("Interrupt current turn", role: .destructive) { host.interrupt() } }
                        DisclosureGroup("Event log (\(host.events.count))", isExpanded: $showEvents) {
                            VStack(alignment: .leading, spacing: 9) {
                                ForEach(Array(host.events.enumerated()), id: \.offset) { _, event in
                                    Text(event).font(.system(.caption, design: .monospaced)).frame(maxWidth: .infinity, alignment: .leading)
                                }
                            }.padding(.top, 8).textSelection(.enabled)
                        }
                        if let url = host.reportURL, !host.verdict.isEmpty {
                            ShareLink(item: url) { Label("Share test evidence", systemImage: "square.and.arrow.up") }
                        }
                        if !host.sessionID.isEmpty {
                            Text("Session \(host.sessionID)").font(.caption2.monospaced()).foregroundStyle(.secondary).textSelection(.enabled)
                        }
                        Text("To change mode or test a saved session, close and reopen the app. The embedded Node runtime starts once per app process.")
                            .font(.footnote).foregroundStyle(.secondary)
                    }
                    Text("This demo exposes two Swift filesystem tools. Shell commands, subagents, and compaction have not been validated.")
                        .font(.footnote).foregroundStyle(.secondary)
                }.padding(22)
            }.background(Color(.systemGroupedBackground))
                .navigationTitle("Harness Lab").navigationBarTitleDisplayMode(.inline)
                .sheet(item: $host.loginPage) { page in
                    OfficialSignInBrowser(url: page.url).ignoresSafeArea()
                }
                .sheet(item: $host.approval) { approval in
                    NavigationStack {
                        VStack(alignment: .leading, spacing: 20) {
                            Label("The harness requests permission", systemImage: "hand.raised.fill").font(.title2.bold())
                            Text(approval.tool).font(.headline.monospaced())
                            ScrollView { Text(approval.description).font(.body.monospaced()).frame(maxWidth: .infinity, alignment: .leading) }
                            Text("These tools can access only the demo’s proof.txt file.").font(.footnote).foregroundStyle(.secondary)
                            HStack {
                                Button("Deny", role: .destructive) { host.decide(false) }.buttonStyle(.bordered).frame(maxWidth: .infinity)
                                Button("Allow once") { host.decide(true) }.buttonStyle(.borderedProminent).frame(maxWidth: .infinity)
                            }
                        }.padding(24).navigationTitle("Tool approval").navigationBarTitleDisplayMode(.inline)
                    }.interactiveDismissDisabled()
                }
                .task {
                    guard !didAutoStart else { return }
                    didAutoStart = true
                    let args = ProcessInfo.processInfo.arguments
                    if args.contains("--smoke") || args.contains("--resume-smoke") || args.contains("--manual-smoke") {
                        mode = .fixture
                        resume = args.contains("--resume-smoke")
                        autoApprove = !args.contains("--manual-smoke")
                        showEvents = true
                        start()
                    } else if args.contains("--auth-smoke") {
                        mode = .account
                        host.start(mode: mode, apiKey: "", model: model, prompt: prompt, resume: false, autoApprove: false, openBrowser: false)
                    }
                }
        }
    }
    private func start() {
        host.start(mode: mode, apiKey: apiKey, model: model, prompt: prompt, resume: resume, autoApprove: autoApprove)
        apiKey = ""
    }
    private func metric(_ label: String, _ value: Int) -> some View {
        VStack(spacing: 4) {
            Text(String(value)).font(.title2.bold().monospacedDigit()).accessibilityIdentifier("count-\(label)")
            Text(label).font(.caption2).foregroundStyle(.secondary)
        }.frame(maxWidth: .infinity)
    }
}

private struct OfficialSignInBrowser: UIViewControllerRepresentable {
    let url: URL
    func makeUIViewController(context: Context) -> SFSafariViewController { SFSafariViewController(url: url) }
    func updateUIViewController(_ controller: SFSafariViewController, context: Context) {}
}
