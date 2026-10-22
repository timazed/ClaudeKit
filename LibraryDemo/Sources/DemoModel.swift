import SwiftUI
import ClaudeKit
import ClaudeKitUI

@MainActor final class DemoModel: ObservableObject {
    @Published var status = "Loading library…"
    @Published var error: String?
    @Published var busy = false
    @Published var ready = false
    @Published var account: ClaudeAccount?
    @Published var threads: [AgentThread] = []
    @Published var selected: String?
    @Published var messages: [AgentMessage] = []
    @Published var streaming = ""
    @Published var toolCalls = 0
    @Published var ephemeral = false
    enum ReplyFormat: String, CaseIterable { case text = "Text", json = "JSON", records = "JSON Lines", xml = "XML" }
    @Published var replyFormat = ReplyFormat.text
    @Published var useMemory = false
    @Published var useSearch = false
    @Published var usageSummary = ""
    @Published var recoveryID: UUID?
    var cancelTurn: (() -> Void)?
    var turnTask: Task<Void, Never>?
    let background = AgentBackgroundExecution()
    @Published var attachment: AgentImageAttachment?
    @Published var transientReply = ""
    @Published var availableModels: [AgentModelInfo] = []
    @Published var selectedModel = "claude-sonnet-4-6"
    let approvals = ApprovalInbox()
    let signInCoordinator = ClaudeSignInCoordinator()
    let fixture = ProcessInfo.processInfo.arguments.contains("--fixture")
    var runtime: AgentRuntime?
    // Used only by the automated verifier for process/provenance checks.
    var verificationDriver: ClaudeCodeDriver?
    var execution: AgentExecution?
    var signInTask: Task<Void, Never>?
    private var prepared = false
    let documents = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]

    func prepare() async {
        guard !prepared else { return }; prepared = true; busy = true
        signInCoordinator.onCancel = { [weak self] in self?.signInTask?.cancel() }
        do {
            let store = FileRuntimeStateStore(url: documents.appendingPathComponent(fixture ? "fixture-state.json" : "account-state.json"))
            let formats = ProcessInfo.processInfo.arguments.contains("--verify-formats")
            let verifier = formats || ProcessInfo.processInfo.arguments.contains("--verify") || ProcessInfo.processInfo.arguments.contains("--verify-resume")
            let presenter: any ApprovalPresenting = verifier ? AutomaticApprovalPresenter() : approvals
            let configuration = try AgentRuntime.Configuration(approvalPresenter: presenter, stateStore: store,
                signInPresenter: signInCoordinator,
                baseInstructions: "You are a helpful assistant in a native iOS app. Use the ios tools when asked to write or read the demo note. Keep replies brief.",
                allowHostedSearch: true, harness: fixture ? .init(authentication: .fixture) : .init())
            let runtime = try AgentRuntime(configuration: configuration)
            if verifier { verificationDriver = configuration.driver as? ClaudeCodeDriver }
            self.runtime = runtime
            let note = NoteFile(url: documents.appendingPathComponent("demo-note.txt"))
            try await runtime.registerTool(.init(name: "write_note", description: "Write the demo's note with Swift.", inputSchema: .object([
                "type": .string("object"), "properties": .object(["text": .object(["type": .string("string")])]), "required": .array([.string("text")]), "additionalProperties": .bool(false)
            ]), approvalPolicy: .requiresApproval), executor: .init { invocation, _ in
                try await note.write(invocation.arguments["text"]?.stringValue ?? "")
                return .success(invocation: invocation, text: "saved")
            })
            try await runtime.registerTool(.init(name: "read_note", description: "Read the demo's note with Swift.", inputSchema: .object([
                "type": .string("object"), "properties": .object([:]), "additionalProperties": .bool(false)
            ]), approvalPolicy: .requiresApproval), executor: .init { invocation, _ in .success(invocation: invocation, text: try await note.read()) })
            try await runtime.installMemoryTools()
            recoveryID = UserDefaults.standard.string(forKey: fixture ? "fixtureRecovery" : "accountRecovery").flatMap(UUID.init(uuidString:))
            try await runtime.restore(); account = await runtime.currentSession()
            availableModels = await runtime.availableModels()
            if !availableModels.contains(where: { $0.id == selectedModel }), let first = availableModels.first { selectedModel = first.id }
            await refresh(); ready = true; busy = false; status = account == nil ? "Sign in to get started" : "Ready"
            if ProcessInfo.processInfo.arguments.contains("--verify-parity") && fixture { await verifyRequestModes() }
            if formats && fixture { await verifyTypedFormats() }
            if verifier && fixture && !formats { await verify(resumeOnly: ProcessInfo.processInfo.arguments.contains("--verify-resume"), note: note) }
        } catch { self.error = error.localizedDescription; status = "Could not start"; busy = false; writeFailure(error) }
    }
    func signIn() {
        guard let runtime else { return }; busy = true; error = nil
        signInTask = Task {
            do { account = try await runtime.signIn(); status = "Signed in" }
            catch is CancellationError { status = "Sign-in cancelled" }
            catch { self.error = error.localizedDescription; status = "Sign-in ended" }
            busy = false
        }
    }
    func cancelSignIn() { signInTask?.cancel(); signInCoordinator.cancel() }
    func createThread() {
        guard let runtime else { return }
        Task {
            do { let thread = try await runtime.createThread(title: "Conversation \(threads.count + 1)", configuration: .init(model: selectedModel)); selected = thread.id; await refresh() }
            catch { self.error = error.localizedDescription }
        }
    }
    func signOut() {
        guard let runtime, !busy else { return }; busy = true; error = nil
        Task {
            do { try await runtime.signOut(); account = nil; status = "Signed out" }
            catch { self.error = error.localizedDescription }
            busy = false
        }
    }
    func select(_ id: String) { selected = id; Task { await refresh() } }
    func send(_ prompt: String) {
        guard let runtime, let selected, !busy else { return }
        let isEphemeral = ephemeral
        var request = Request(text: prompt, executionMode: isEphemeral ? .ephemeral : .threaded,
                              memory: useMemory ? .init(query: prompt) : nil)
        request.webSearch = useSearch ? .init(mode: .live, maximumCalls: 3) : nil
        switch replyFormat {
        case .json:
            runTyped(request, output: AgentJSONResponseFormat<DemoAnswer>(name: "answer", schema: .raw(Self.answerSchema))) { $0.answer }; return
        case .records:
            runTyped(request, output: AgentRecordResponseFormat<DemoAnswer>(name: "answers", schema: .raw(Self.answerSchema), minimumRecords: 1, maximumRecords: 10)) {
                $0.records.map(\.answer).joined(separator: "\n")
            }; return
        case .xml:
            runTyped(request, output: AgentXMLResponseFormat(name: "answer", schema: .element("answer", text: .string))) { $0.rawXML }; return
        case .text: break
        }
        busy = true; error = nil; streaming = ""; transientReply = ""; status = "Claude is working…"
        turnTask = Task {
            do {
                let handle = try await runtime.start(request, in: selected); execution = handle
                cancelTurn = { handle.cancel() }; background.begin(for: handle)
                for try await event in handle.events {
                    if case let .assistantMessageDelta(_, _, text) = event { streaming += text }
                    if case let .messageCommitted(message) = event {
                        if isEphemeral && message.role == .assistant { transientReply = message.text }
                        await refresh()
                    }
                    if case .toolCallStarted(let invocation) = event { status = "Using \(invocation.toolName)…" }
                    if case .toolCallFinished(let result) = event, result.success { toolCalls += 1 }
                }
                try Task.checkCancellation()
                status = "Turn completed"
            } catch { self.error = error.localizedDescription; status = "Turn ended" }
            streaming = ""; execution = nil; cancelTurn = nil; background.end(); busy = false; await refresh()
        }
    }
    func stop() { cancelTurn?(); turnTask?.cancel() }
    func refresh() async {
        guard let runtime else { return }
        threads = await runtime.threads()
        if let receipt = await runtime.usageHistory(in: selected).last {
            usageSummary = "Last turn: \(receipt.usage.inputTokens) input / \(receipt.usage.outputTokens) output tokens"
        }
        if selected == nil { selected = threads.first?.id }
        messages = selected == nil ? [] : await runtime.messages(for: selected!)
    }
    func verify(resumeOnly: Bool, note: NoteFile) async {
        guard let runtime, let driver = verificationDriver else { return }; busy = true; status = "Verifying library on iOS…"
        do {
            let first: String, restored: String, aID: String
            if resumeOnly {
                aID = UserDefaults.standard.string(forKey: "verificationThread") ?? ""
                first = UserDefaults.standard.string(forKey: "verificationText") ?? ""
                guard !first.isEmpty else { throw VerificationError.failed }
                restored = try await runtime.send(.init(text: "RESUME_PROOF"), in: aID)
            } else {
                let a = try await runtime.createThread(title: "Library proof A"); aID = a.id
                first = try await runtime.send(.init(text: "Write and read the note"), in: a.id)
                let b = try await runtime.createThread(title: "Library proof B")
                let second = try await runtime.send(.init(text: "Write and read the note"), in: b.id)
                guard first != second else { throw VerificationError.failed }
                restored = try await runtime.send(.init(text: "RESUME_PROOF"), in: a.id)
                UserDefaults.standard.set(a.id, forKey: "verificationThread"); UserDefaults.standard.set(first, forKey: "verificationText")
            }
            guard restored == first.replacingOccurrences(of: "PROOF_OK:", with: "RESUME_OK:") else { throw VerificationError.failed }
            let counts = await note.counts
            guard counts == (resumeOnly ? 0 : 4) else { throw VerificationError.failed }
            let evidence = await driver.runtimeEvidence ?? .null
            guard evidence["platform"]?.stringValue == "ios", evidence["pid"]?.intValue == Int(ProcessInfo.processInfo.processIdentifier) else { throw VerificationError.failed }
            let report: JSONValue = .object(["passed": .bool(true), "sequence": .string(resumeOnly ? "process restart → A" : "A → B → A"), "nativeToolCalls": .number(Double(counts)), "runtime": evidence, "threadID": .string(aID), "fixture": .bool(true)])
            try JSONEncoder().encode(report).write(to: documents.appendingPathComponent(resumeOnly ? "library-resume.json" : "library-proof.json"), options: .atomic)
            selected = aID; status = resumeOnly ? "PASS — library resumed after restart" : "PASS — library A → B → A"
        } catch { self.error = error.localizedDescription; status = "Verification failed"; writeFailure(error) }
        busy = false; await refresh()
    }
    func verifyRequestModes() async {
        guard let runtime else { return }; busy = true; status = "Verifying request modes…"
        do {
            let thread = try await runtime.createThread(title: "Request mode verification")
            let png = Data(base64Encoded: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=")!
            let imageReply = try await runtime.send(.init(text: "IMAGE_PROOF", images: [.init(mediaType: "image/png", data: png)], executionMode: .ephemeral), in: thread.id)
            guard imageReply == "IMAGE_OK", await runtime.messages(for: thread.id).isEmpty else { throw VerificationError.failed }
            let schema: JSONValue = .object(["type": .string("object"), "properties": .object(["answer": .object(["type": .string("string")])]), "required": .array([.string("answer")]), "additionalProperties": .bool(false)])
            struct Answer: Decodable, Sendable { let answer: String }
            let answer = try await runtime.send(.init(text: "JSON_PROOF", outputSchema: schema), in: thread.id, as: Answer.self)
            guard answer.answer == "verified" else { throw VerificationError.failed }
            try await runtime.saveMemory(.init(id: "demo-preference", text: "Use concise Swift examples", threadID: thread.id))
            let memory = try await runtime.memories(matching: .init(query: "Swift"), in: thread.id)
            guard memory.count == 1 else { throw VerificationError.failed }
            try await runtime.signOut(); account = await runtime.currentSession()
            guard account == nil else { throw VerificationError.failed }
            let report: JSONValue = .object(["passed": .bool(true), "imageInput": .bool(true), "ephemeral": .bool(true), "structuredOutput": .bool(true), "memory": .bool(true), "logout": .bool(true)])
            try JSONEncoder().encode(report).write(to: documents.appendingPathComponent("library-parity.json"), options: .atomic)
            status = "PASS — images, JSON, ephemeral, memory, logout"
        } catch { self.error = error.localizedDescription; status = "Request mode verification failed"; writeFailure(error) }
        busy = false; await refresh()
    }
    func writeFailure(_ error: Error) {
        let report: JSONValue = .object(["passed": .bool(false), "error": .string(error.localizedDescription)])
        try? JSONEncoder().encode(report).write(to: documents.appendingPathComponent("library-failure.json"), options: .atomic)
    }
    enum VerificationError: Error { case failed }
}

actor NoteFile {
    let url: URL; var counts = 0
    init(url: URL) { self.url = url }
    func write(_ text: String) throws { try Data(text.utf8).write(to: url, options: [.atomic, .completeFileProtection]); counts += 1 }
    func read() throws -> String { let value = try String(contentsOf: url, encoding: .utf8); counts += 1; return value }
}

private struct DemoAnswer: Codable, Sendable { let answer: String }

extension DemoModel {
    static var answerSchema: JSONValue { .object(["type": .string("object"), "properties": .object(["answer": .object(["type": .string("string")])]), "required": .array([.string("answer")]), "additionalProperties": .bool(false)]) }
    private func runTyped<Format: AgentOutputFormat>(_ request: Request, output format: Format,
                                                    render: @escaping @Sendable (Format.Output) -> String) {
        guard let runtime, let selected, !busy else { return }
        busy = true; error = nil; streaming = ""; transientReply = ""; status = "Claude is working…"
        turnTask = Task {
            do {
                let handle = try await runtime.start(request, in: selected, output: format)
                cancelTurn = { handle.cancel() }
                var units = 0
                for try await event in handle.events {
                    switch event {
                    case .format: units += 1; status = "Receiving output · \(units) events"
                    case let .outputCommitted(_, value):
                        if request.isEphemeral { transientReply = render(value) }
                    case let .lifecycle(.toolCallFinished(result)): if result.success { toolCalls += 1 }
                    default: break
                    }
                }
                try Task.checkCancellation()
                status = "Turn completed"
            } catch { self.error = error.localizedDescription; status = "Turn ended" }
            cancelTurn = nil; busy = false; await refresh()
        }
    }
    func steer(_ text: String) {
        guard let runtime, let execution else { return }
        Task {
            do { try await runtime.steer(text, executionID: execution.id); status = "Follow-up queued" }
            catch { self.error = error.localizedDescription }
        }
    }
    func recover(_ prompt: String, resume: Bool) {
        guard let runtime, let selected, !busy else { return }
        busy = true; error = nil; status = "Recoverable request…"
        turnTask = Task {
            do {
                let id: UUID
                if resume, let recoveryID { id = recoveryID }
                else {
                    id = try await runtime.prepareRecovery(.init(text: prompt, executionMode: .ephemeral, outputSchema: Self.answerSchema), in: selected)
                    recoveryID = id
                    UserDefaults.standard.set(id.uuidString, forKey: fixture ? "fixtureRecovery" : "accountRecovery")
                }
                let record = try await runtime.recoveryStatus(id)
                if record.phase == .failed { try await runtime.retryRecovery(id) }
                let value = try await runtime.sendRecovering(id, as: DemoAnswer.self) { _ in true }
                transientReply = value.answer; status = "Recovery receipt saved"
            } catch { self.error = error.localizedDescription; status = "Recovery paused" }
            busy = false
        }
    }
}

extension DemoModel {
    func verifyTypedFormats() async {
        guard let runtime else { return }
        busy = true
        do {
            let recordsThread = try await runtime.createThread(title: "Records verifier")
            let records = try await runtime.send(.init(text: "RECORDS_PROOF"), in: recordsThread.id,
                output: AgentRecordResponseFormat<DemoAnswer>(name: "answers", schema: .raw(Self.answerSchema), minimumRecords: 2))
            guard records.records.map(\.answer) == ["one", "two"] else { throw VerificationError.failed }
            let xmlThread = try await runtime.createThread(title: "XML verifier")
            let xml = try await runtime.send(.init(text: "XML_PROOF"), in: xmlThread.id,
                output: AgentXMLResponseFormat(name: "answer", schema: .element("answer", text: .string)))
            guard xml.rawXML == "<answer>verified</answer>" else { throw VerificationError.failed }
            let id = try await runtime.prepareRecovery(.init(text: "JSON_PROOF", executionMode: .ephemeral, outputSchema: Self.answerSchema), in: xmlThread.id)
            let first = try await runtime.sendRecovering(id) { _ in true }
            let replay = try await runtime.sendRecovering(id) { _ in false }
            guard first == replay else { throw VerificationError.failed }
            status = "PASS — JSONL, XML, recovery replay"
        } catch { self.error = error.localizedDescription; status = "FAIL — typed formats"; writeFailure(error) }
        busy = false
    }
}
