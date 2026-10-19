import ClaudeKitLegacy
import ClaudeKitLegacyUI
import Foundation

@MainActor
final class AgentDemoViewModel: ObservableObject {
    let runtime: AgentRuntime
    let approvalInbox: ApprovalInbox

    @Published var apiKey = ""
    @Published var oauthToken = ""
    @Published private(set) var session: AnthropicSession?
    @Published private(set) var threads: [AgentThread] = []
    @Published var selectedThreadID: String?
    @Published private(set) var messages: [AgentMessage] = []
    @Published var draft = ""
    @Published private(set) var streamingText = ""
    @Published private(set) var isStreaming = false
    @Published private(set) var statusText = "Ready"
    @Published var errorMessage: String?

    init(runtimeBundle: AgentDemoRuntimeBundle) {
        self.runtime = runtimeBundle.runtime
        self.approvalInbox = runtimeBundle.approvalInbox
    }

    var selectedThread: AgentThread? {
        threads.first { $0.id == selectedThreadID }
    }

    var canSend: Bool {
        session != nil &&
            !isStreaming &&
            !draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    func restore() async {
        do {
            _ = try await runtime.restore()
            session = await runtime.currentSession()
            await refreshThreads(selectFirstIfNeeded: true)
            statusText = session == nil ? "Signed out" : "Session restored"
        } catch {
            show(error)
        }
    }

    func signInWithEnvironment() async {
        do {
            session = try await runtime.signIn()
            statusText = "Signed in with ANTHROPIC_API_KEY"
            await ensureThread()
        } catch {
            show(error)
        }
    }

    func signInWithEnteredAPIKey() async {
        let trimmedKey = apiKey.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedKey.isEmpty else {
            errorMessage = "Enter an Anthropic API key first."
            return
        }

        do {
            session = try await runtime.useSession(AnthropicSession(apiKey: trimmedKey))
            apiKey = ""
            statusText = "Signed in"
            await ensureThread()
        } catch {
            show(error)
        }
    }

    func signInWithEnteredOAuthToken() async {
        let trimmedToken = oauthToken.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmedToken.isEmpty else {
            errorMessage = "Enter an OAuth bearer token first."
            return
        }

        do {
            session = try await runtime.useSession(AnthropicSession(bearerToken: trimmedToken))
            oauthToken = ""
            statusText = "Signed in with OAuth token"
            await ensureThread()
        } catch {
            show(error)
        }
    }

    func signInWithOAuthEnvironment() async {
        do {
            let oauthSession = try await ClaudeCodeOAuthTokenAuthProvider().signIn()
            session = try await runtime.useSession(oauthSession)
            statusText = "Signed in with CLAUDE_CODE_OAUTH_TOKEN"
            await ensureThread()
        } catch {
            show(error)
        }
    }

    func signOut() async {
        do {
            try await runtime.signOut()
            session = nil
            threads = []
            selectedThreadID = nil
            messages = []
            streamingText = ""
            statusText = "Signed out"
        } catch {
            show(error)
        }
    }

    func createThread() async {
        guard session != nil else {
            errorMessage = "Sign in before creating a thread."
            return
        }

        do {
            let thread = try await runtime.createThread(title: "Claude Chat")
            selectedThreadID = thread.id
            await refreshThreads()
            await refreshMessages()
            statusText = "Thread created"
        } catch {
            show(error)
        }
    }

    func selectThread(_ threadID: String) async {
        selectedThreadID = threadID
        await refreshMessages()
    }

    func send() async {
        guard canSend else {
            return
        }

        do {
            let threadID = try await ensureThreadID()
            let text = draft.trimmingCharacters(in: .whitespacesAndNewlines)
            draft = ""
            streamingText = ""
            isStreaming = true
            statusText = "Streaming"

            let stream = try await runtime.stream(Request(text: text), in: threadID)
            for try await event in stream {
                handle(event)
            }

            isStreaming = false
            streamingText = ""
            await refreshThreads()
            await refreshMessages()
            statusText = "Ready"
        } catch {
            isStreaming = false
            streamingText = ""
            show(error)
        }
    }

    func refreshThreads(selectFirstIfNeeded: Bool = false) async {
        threads = await runtime.threads()
        if selectFirstIfNeeded, selectedThreadID == nil {
            selectedThreadID = threads.first?.id
        }
        await refreshMessages()
    }

    func refreshMessages() async {
        guard let selectedThreadID else {
            messages = []
            return
        }
        messages = await runtime.messages(for: selectedThreadID)
    }

    private func ensureThread() async {
        await refreshThreads(selectFirstIfNeeded: true)
        if selectedThreadID == nil {
            await createThread()
        }
    }

    private func ensureThreadID() async throws -> String {
        if let selectedThreadID {
            return selectedThreadID
        }

        let thread = try await runtime.createThread(title: "Claude Chat")
        selectedThreadID = thread.id
        await refreshThreads()
        return thread.id
    }

    private func handle(_ event: AgentEvent) {
        switch event {
        case let .messageCommitted(message):
            if message.role == .assistant {
                streamingText = ""
            }
            messages.append(message)

        case let .assistantMessageDelta(_, _, delta):
            streamingText += delta

        case let .approvalRequested(request):
            statusText = "Approval needed for \(request.invocation.toolName)"

        case let .approvalResolved(resolution):
            statusText = resolution.decision == .approved ? "Tool approved" : "Tool denied"

        case let .toolCallStarted(invocation):
            statusText = "Running \(invocation.toolName)"

        case let .toolCallFinished(result):
            statusText = result.success ? "Tool completed" : "Tool failed"

        case .turnCompleted:
            statusText = "Ready"

        case let .turnFailed(error):
            show(error)

        case .threadStarted,
             .threadStatusChanged,
             .turnStarted:
            break
        }
    }

    private func show(_ error: Error) {
        errorMessage = error.localizedDescription
        statusText = "Error"
    }
}
