import Foundation
import SwiftUI
import NodeMobile
import Darwin

enum HarnessMode: String, CaseIterable {
    case account, fixture, apiKey
    var title: String { switch self { case .account: return "Claude account"; case .fixture: return "Fixture"; case .apiKey: return "API key" } }
}

struct HarnessLoginPage: Identifiable {
    let id = UUID()
    let url: URL
}

struct HarnessApproval: Identifiable {
    let id: String
    let tool: String
    let input: [String: Any]
    var description: String {
        guard let data = try? JSONSerialization.data(withJSONObject: input, options: [.prettyPrinted, .sortedKeys]) else { return "" }
        return String(decoding: data, as: UTF8.self)
    }
}

@MainActor
final class HarnessHost: ObservableObject {
    @Published var status = "Ready to test"
    @Published var started = false
    @Published var initialized = false
    @Published var busy = false
    @Published var transcript = ""
    @Published var events: [String] = []
    @Published var approval: HarnessApproval?
    @Published var sessionID = ""
    @Published var verdict = ""
    @Published var reportURL: URL?
    @Published var runtime = "Official Claude Code 2.1.112 · Node 18.19.1"
    @Published var writeCount = 0
    @Published var readCount = 0
    @Published var permissionCount = 0
    @Published var streamCount = 0
    @Published var loginPage: HarnessLoginPage?
    @Published var isAuthenticating = false
    @Published var signedIn = false
    @Published var accountLabel = ""
    @Published var authReady = false
    private var accountMode = false
    private var authAttempt = ""
    private var automaticLoginURL: URL?
    private var manualLoginURL: URL?
    private var automaticallyOpenBrowser = true

    let inputPipe = Pipe()
    private let outputPipe = Pipe()
    private let errorPipe = Pipe()
    private let writer = DispatchQueue(label: "demo.harness.input")
    private let outputReader = DispatchQueue(label: "demo.harness.output")
    private let errorReader = DispatchQueue(label: "demo.harness.error")
    private var approvals: [HarnessApproval] = []
    private var runtimeEvidence: [String: Any] = [:]
    private var fixtureVerified = false
    private var fixtureRequests = 0
    private var hadError = false
    private var fixtureMode = true
    private var resumed = false
    private var automaticallyApprove = false
    private var startTime = Date()
    private var initialPrompt = ""
    private var runID = UUID().uuidString
    private var eventFile: FileHandle?
    private var timeout: Task<Void, Never>?
    private var streamingText = false
    private var pendingSessionKey = ""

    let documents = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
    var workspace: URL { documents.appendingPathComponent("Workspace", isDirectory: true) }
    var proofURL: URL { workspace.appendingPathComponent("proof.txt") }
    private var configDirectory: URL {
        FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0].appendingPathComponent("OfficialClaude", isDirectory: true)
    }
    private var cacheDirectory: URL {
        FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask)[0].appendingPathComponent("OfficialClaude", isDirectory: true)
    }
    var savedSession: String { UserDefaults.standard.string(forKey: "fixtureSession") ?? "" }
    func savedSession(fixture: Bool) -> String { UserDefaults.standard.string(forKey: fixture ? "fixtureSession" : "liveSession") ?? "" }

    func start(mode: HarnessMode, apiKey: String, model: String, prompt: String, resume: Bool, autoApprove: Bool, openBrowser: Bool = true) {
        guard !started else { return }
        let fixture = mode == .fixture
        accountMode = mode == .account
        automaticallyOpenBrowser = openBrowser
        let cleanKey = apiKey.trimmingCharacters(in: .whitespacesAndNewlines)
        guard mode != .apiKey || !cleanKey.isEmpty else { status = "Enter your Anthropic API key first"; return }
        guard let bootstrap = Bundle.main.url(forResource: "bootstrap", withExtension: "cjs", subdirectory: "Runtime") else {
            status = "Runtime is missing. Run scripts/bootstrap.sh and rebuild."; return
        }
        let oldSession = resume ? savedSession(fixture: fixture) : ""
        if resume && oldSession.isEmpty { status = "No saved session for this mode"; return }
        do {
            try FileManager.default.createDirectory(at: workspace, withIntermediateDirectories: true)
            try FileManager.default.createDirectory(at: configDirectory, withIntermediateDirectories: true)
            try FileManager.default.createDirectory(at: cacheDirectory, withIntermediateDirectories: true)
            // Credentials remain owned by the official harness in its private directory.
            // Swift never reads, exchanges, or imports its access/refresh tokens.
            try FileManager.default.setAttributes([.protectionKey: FileProtectionType.complete, .posixPermissions: 0o700], ofItemAtPath: configDirectory.path)
            var protectedDirectory = configDirectory
            var resourceValues = URLResourceValues()
            resourceValues.isExcludedFromBackup = true
            try protectedDirectory.setResourceValues(resourceValues)
            let results = documents.appendingPathComponent("Results", isDirectory: true)
            try FileManager.default.createDirectory(at: results, withIntermediateDirectories: true)
            let logURL = results.appendingPathComponent("\(runID).jsonl")
            FileManager.default.createFile(atPath: logURL.path, contents: nil)
            eventFile = try FileHandle(forWritingTo: logURL)
            reportURL = results.appendingPathComponent("latest.json")
            if fixture && !resume && FileManager.default.fileExists(atPath: proofURL.path) { try FileManager.default.removeItem(at: proofURL) }
        } catch { status = error.localizedDescription; return }

        fixtureMode = fixture
        resumed = resume
        automaticallyApprove = fixture && autoApprove
        pendingSessionKey = fixture ? "fixtureSession" : "liveSession"
        initialPrompt = fixture ? (resume ? "RESUME_PROOF: Recall the earlier note from this saved conversation, without using tools." :
            "Use the native iOS tools to write a unique note, read it back, and report the result.") : prompt
        started = true
        busy = true
        startTime = Date()
        status = "Loading the official harness…"
        UIApplication.shared.isIdleTimerDisabled = true
        signal(SIGPIPE, SIG_IGN)
        let environment = [
            "DEMO_INPUT_FD": String(inputPipe.fileHandleForReading.fileDescriptor),
            "DEMO_OUTPUT_FD": String(outputPipe.fileHandleForWriting.fileDescriptor),
            "DEMO_ERROR_FD": String(errorPipe.fileHandleForWriting.fileDescriptor),
            "DEMO_WORKSPACE": workspace.path,
            "DEMO_MODE": fixture ? "fixture" : accountMode ? "account" : "live",
            "DEMO_MODEL": model,
            "DEMO_NONCE": UUID().uuidString,
            "DEMO_RESUME": oldSession,
            "CLAUDE_CONFIG_DIR": configDirectory.path,
            "XDG_CACHE_HOME": cacheDirectory.path,
            "XDG_CONFIG_HOME": configDirectory.path,
            "XDG_DATA_HOME": configDirectory.path,
            "XDG_STATE_HOME": configDirectory.path,
            "ANTHROPIC_API_KEY": fixture ? "fixture-key-not-a-real-credential" : cleanKey,
            "TERM": "dumb", "NO_COLOR": "1", "SHELL": "/bin/sh",
            "TMPDIR": NSTemporaryDirectory()
        ]
        for (key, value) in environment { setenv(key, value, 1) }
        readLines(outputPipe.fileHandleForReading, on: outputReader) { [weak self] line in self?.consume(line) }
        readLines(errorPipe.fileHandleForReading, on: errorReader) { [weak self] line in
            self?.record(["type": "runtime_stderr", "message": line])
            self?.log("Runtime: \(line.prefix(250))")
        }
        let argv = ["node", "--jitless", "--no-short-builtin-calls", "--regexp-interpret-all", "--stack-size=864", bootstrap.path]
        let thread = Thread { [weak self] in
            var pointers: [UnsafeMutablePointer<CChar>?] = argv.map { strdup($0) }
            pointers.append(nil)
            let code = pointers.withUnsafeMutableBufferPointer { node_start(Int32(argv.count), $0.baseAddress) }
            pointers.compactMap { $0 }.forEach { free($0) }
            DispatchQueue.main.async { [weak self] in
                self?.fail("Embedded Node returned \(code). Relaunch the app before starting another runtime.")
            }
        }
        thread.name = "official-harness-node"
        thread.stackSize = 16 * 1024 * 1024
        thread.qualityOfService = .userInitiated
        thread.start()
        send(["type": "control_request", "request_id": "demo-init", "request": ["subtype": "initialize", "sdkMcpServers": ["ios"]]])
        armTimeout()
    }

    func beginAccountLogin() {
        guard accountMode, initialized else { return }
        timeout?.cancel()
        busy = false
        signedIn = false
        authReady = false
        isAuthenticating = true
        authAttempt = UUID().uuidString
        status = "Starting Claude Code’s sign-in…"
        UIApplication.shared.isIdleTimerDisabled = true
        send(["type": "control_request", "request_id": "auth:\(authAttempt):start",
              "request": ["subtype": "claude_authenticate", "loginWithClaudeAi": true]])
    }

    func openSignIn(manual: Bool = false) {
        if let url = manual ? manualLoginURL : automaticLoginURL { loginPage = HarnessLoginPage(url: url) }
    }

    func submitLoginCode(_ value: String) {
        guard isAuthenticating, authReady else { return }
        let trimmed = value.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return }
        var code = trimmed
        var state = ""
        if let parts = URLComponents(string: trimmed), parts.scheme != nil, let query = parts.queryItems,
           let pastedCode = query.first(where: { $0.name == "code" })?.value {
            code = pastedCode
            state = query.first(where: { $0.name == "state" })?.value ?? ""
        } else {
            let parts = trimmed.split(separator: "#", maxSplits: 1, omittingEmptySubsequences: false)
            code = String(parts[0])
            if parts.count == 2 { state = String(parts[1]) }
        }
        guard !code.isEmpty else { return }
        status = "Claude Code is completing sign-in…"
        // One-time authorization code goes straight to the harness's own handler.
        // It is never written to the event log or exchanged by the native host.
        send(["type": "control_request", "request_id": "auth:\(authAttempt):code",
              "request": ["subtype": "claude_oauth_callback", "authorizationCode": code, "state": state]])
    }

    private func acceptAccount(_ account: [String: Any]) {
        signedIn = account["email"] as? String != nil && account["apiKeySource"] as? String == nil
        if signedIn {
            accountLabel = account["email"] as? String ?? "Claude account"
            status = "Signed in to Claude Code"
        }
    }

    private func handleAuthResponse(_ response: [String: Any], id: String) {
        guard id.hasPrefix("auth:\(authAttempt):") else { return }
        if response["subtype"] as? String != "success" {
            isAuthenticating = false
            loginPage = nil
            status = "Claude Code sign-in failed. Try again."
            log("Official sign-in did not complete")
            UIApplication.shared.isIdleTimerDisabled = false
            return
        }
        let payload = response["response"] as? [String: Any] ?? [:]
        if id.hasSuffix(":start") {
            guard let raw = payload["automaticUrl"] as? String, let url = URL(string: raw),
                  url.scheme == "https", ["claude.ai", "claude.com"].contains(url.host ?? ""),
                  let manual = payload["manualUrl"] as? String, let manualURL = URL(string: manual),
                  manualURL.scheme == "https", manualURL.host == url.host else {
                isAuthenticating = false
                status = "Unexpected sign-in URL from the harness"
                UIApplication.shared.isIdleTimerDisabled = false
                return
            }
            automaticLoginURL = url
            manualLoginURL = manualURL
            authReady = true
            status = "Complete Claude Code sign-in in the browser"
            log("Official harness generated its Claude-account login flow")
            let evidence: [String: Any] = ["status": "awaiting_user_sign_in", "runtime": runtimeEvidence,
                "nativePID": ProcessInfo.processInfo.processIdentifier, "officialLoginControl": "claude_authenticate",
                "authorizationHost": url.host ?? "", "authorizationPath": url.path,
                "credentialsHandledBy": "unmodified official harness", "realAccountAuthenticated": false]
            if let data = try? JSONSerialization.data(withJSONObject: evidence, options: [.prettyPrinted, .sortedKeys]) {
                try? data.write(to: documents.appendingPathComponent("Results/auth-init.json"), options: .atomic)
            }
            send(["type": "control_request", "request_id": "auth:\(authAttempt):wait",
                  "request": ["subtype": "claude_oauth_wait_for_completion"]])
            if automaticallyOpenBrowser { openSignIn() }
        } else if let account = payload["account"] as? [String: Any] {
            acceptAccount(account)
            isAuthenticating = false
            loginPage = nil
            UIApplication.shared.isIdleTimerDisabled = false
            if !signedIn { status = "Sign-in completed; reopen the app to load the account" }
            log("Official harness completed its account sign-in")
        }
    }

    private func readLines(_ handle: FileHandle, on queue: DispatchQueue, consume: @escaping @MainActor (String) -> Void) {
        queue.async {
            var buffer = Data()
            while true {
                let data = handle.availableData
                if data.isEmpty { break }
                buffer.append(data)
                while let end = buffer.firstIndex(of: 10) {
                    let line = String(decoding: buffer[..<end], as: UTF8.self)
                    buffer.removeSubrange(...end)
                    if !line.isEmpty { DispatchQueue.main.async { consume(line) } }
                }
                if buffer.count > 8 * 1024 * 1024 { buffer.removeAll() }
            }
        }
    }

    private func send(_ object: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: object) else { return }
        let handle = inputPipe.fileHandleForWriting
        writer.async {
            do { try handle.write(contentsOf: data + Data([10])) } catch { /* runtime failure is reported on output */ }
        }
    }

    private func respond(_ id: String, _ response: [String: Any]) {
        send(["type": "control_response", "response": ["subtype": "success", "request_id": id, "response": response]])
    }

    func sendPrompt(_ prompt: String) {
        guard initialized, !busy, (!accountMode || signedIn), !prompt.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return }
        beginTurn(prompt)
    }
    private func beginTurn(_ prompt: String) {
        busy = true
        streamingText = false
        transcript += transcript.isEmpty ? "" : "\n\n"
        status = "Running on this device…"
        UIApplication.shared.isIdleTimerDisabled = true
        send(["type": "user", "message": ["role": "user", "content": prompt], "parent_tool_use_id": NSNull(), "session_id": sessionID])
        armTimeout()
    }
    func interrupt() {
        send(["type": "control_request", "request_id": UUID().uuidString, "request": ["subtype": "interrupt"]])
        status = "Interrupt requested"
    }
    func decide(_ allow: Bool) {
        guard let item = approval else { return }
        log("\(allow ? "Allowed" : "Denied"): \(item.tool)")
        record(["type": "native_permission", "tool": item.tool, "allowed": allow, "automatic": false])
        respond(item.id, allow ? ["behavior": "allow", "updatedInput": item.input] : ["behavior": "deny", "message": "The user denied this tool request."])
        approval = nil
        if !approvals.isEmpty { approval = approvals.removeFirst() }
    }

    private func consume(_ line: String) {
        guard let data = line.data(using: .utf8), let event = (try? JSONSerialization.jsonObject(with: data)) as? [String: Any], let type = event["type"] as? String else {
            log("CLI: \(line.prefix(200))"); return
        }
        // Login control responses carry authorization URLs and OAuth state. Do not log them.
        if type == "control_response", let response = event["response"] as? [String: Any],
           let id = response["request_id"] as? String, id.hasPrefix("auth:") {
            handleAuthResponse(response, id: id)
            return
        }
        record(event)
        switch type {
        case "demo_runtime":
            runtimeEvidence = event
            runtime = "Claude Code \(event["harnessVersion"] ?? "?") · Node \(event["node"] ?? "?") · \(event["platform"] ?? "?")"
            log("Unmodified harness checksum verified; JIT disabled")
        case "control_response":
            guard let response = event["response"] as? [String: Any], response["request_id"] as? String == "demo-init" else { break }
            guard response["subtype"] as? String == "success" else { fail("Harness initialization failed: \(response)"); return }
            initialized = true
            log("Official harness initialized")
            if accountMode {
                busy = false
                timeout?.cancel()
                let payload = response["response"] as? [String: Any] ?? [:]
                acceptAccount(payload["account"] as? [String: Any] ?? [:])
                if signedIn { UIApplication.shared.isIdleTimerDisabled = false }
                else { beginAccountLogin() }
            } else { beginTurn(initialPrompt) }
        case "control_request": handleControl(event)
        case "control_cancel_request":
            let id = event["request_id"] as? String
            approvals.removeAll { $0.id == id }
            if approval?.id == id { approval = approvals.isEmpty ? nil : approvals.removeFirst() }
        case "system":
            if event["subtype"] as? String == "init", let id = event["session_id"] as? String {
                sessionID = id
                UserDefaults.standard.set(id, forKey: pendingSessionKey)
                log("Session: \(id)")
                log("MCP: \(event["mcp_servers"] ?? "unknown")")
            }
        case "stream_event":
            streamCount += 1
            if let inner = event["event"] as? [String: Any], let delta = inner["delta"] as? [String: Any], let text = delta["text"] as? String {
                streamingText = true
                transcript += text
            }
        case "assistant":
            if let message = event["message"] as? [String: Any], let blocks = message["content"] as? [[String: Any]] {
                for block in blocks {
                    if block["type"] as? String == "tool_use" { log("Harness dispatched \(block["name"] ?? "tool")") }
                    if !streamingText, let text = block["text"] as? String { transcript += text }
                }
            }
        case "demo_fixture":
            fixtureRequests = event["requests"] as? Int ?? fixtureRequests
            let stage = event["stage"] as? String ?? ""
            fixtureVerified = fixtureVerified || ["read_back_verified", "resumed_context_verified"].contains(stage)
            log("Fixture: \(stage)")
        case "demo_error", "demo_fixture_error": fail(event["message"] as? String ?? "Runtime error")
        case "result": finish(event)
        case "demo_exit":
            let code = event["code"] as? Int ?? 0
            if !busy && [0, 130, 143].contains(code) {
                // XCTest/app shutdown sends SIGTERM after a completed turn. Preserve
                // its test evidence; a requested process teardown is not a turn failure.
                initialized = false
                log("Harness ended after the completed turn (exit \(code))")
                status = "Session ended — reopen the app"
            } else if code != 0 { fail("Official harness exited with code \(code)") }
        default: break
        }
    }

    private func handleControl(_ event: [String: Any]) {
        guard let id = event["request_id"] as? String, let request = event["request"] as? [String: Any] else { return }
        switch request["subtype"] as? String {
        case "mcp_message":
            guard let message = request["message"] as? [String: Any] else { return }
            let rpc = handleMCP(message)
            respond(id, ["mcp_response": rpc])
        case "can_use_tool":
            let tool = request["tool_name"] as? String ?? "unknown"
            let input = request["input"] as? [String: Any] ?? [:]
            permissionCount += 1
            if automaticallyApprove && ["mcp__ios__write_note", "mcp__ios__read_note"].contains(tool) {
                record(["type": "native_permission", "tool": tool, "allowed": true, "automatic": true])
                log("Fixture approval: \(tool)")
                respond(id, ["behavior": "allow", "updatedInput": input])
            } else {
                let item = HarnessApproval(id: id, tool: tool, input: input)
                if approval == nil { approval = item } else { approvals.append(item) }
            }
        default:
            send(["type": "control_response", "response": ["subtype": "error", "request_id": id, "error": "Unsupported demo control request"]])
        }
    }

    private func handleMCP(_ message: [String: Any]) -> [String: Any] {
        let id = message["id"] ?? 0
        var result: [String: Any] = [:]
        switch message["method"] as? String {
        case "initialize":
            result = ["protocolVersion": "2025-03-26", "capabilities": ["tools": [:]], "serverInfo": ["name": "ios", "version": "1.0"]]
        case "tools/list":
            result = ["tools": [
                ["name": "write_note", "description": "Write the demo note using native iOS filesystem APIs.", "inputSchema": ["type": "object", "properties": ["text": ["type": "string"]], "required": ["text"], "additionalProperties": false]],
                ["name": "read_note", "description": "Read the demo note using native iOS filesystem APIs.", "inputSchema": ["type": "object", "properties": [:], "additionalProperties": false]]
            ]]
        case "tools/call":
            let params = message["params"] as? [String: Any] ?? [:]
            let args = params["arguments"] as? [String: Any] ?? [:]
            let name = params["name"] as? String ?? ""
            do {
                let text: String
                switch name {
                case "write_note":
                    guard let value = args["text"] as? String, value.utf8.count <= 64 * 1024 else { throw DemoError.invalidNote }
                    try Data(value.utf8).write(to: proofURL, options: [.atomic, .completeFileProtection])
                    writeCount += 1
                    text = "saved"
                case "read_note":
                    text = try String(contentsOf: proofURL, encoding: .utf8)
                    readCount += 1
                default: throw DemoError.unknownTool
                }
                log("Swift FileManager: \(name) completed")
                record(["type": "native_tool_completed", "name": name, "implementation": "Swift Foundation", "path": proofURL.path])
                result = ["content": [["type": "text", "text": text]], "isError": false]
            } catch { result = ["content": [["type": "text", "text": error.localizedDescription]], "isError": true] }
        case "notifications/initialized", "ping", "resources/list", "prompts/list": break
        default: return ["jsonrpc": "2.0", "id": id, "error": ["code": -32601, "message": "Method not implemented by demo MCP server"]]
        }
        return ["jsonrpc": "2.0", "id": id, "result": result]
    }

    private func finish(_ result: [String: Any]) {
        timeout?.cancel()
        busy = false
        UIApplication.shared.isIdleTimerDisabled = false
        let output = result["result"] as? String ?? ""
        let note = (try? String(contentsOf: proofURL, encoding: .utf8)) ?? ""
        let countsOK = resumed ? writeCount == 0 && readCount == 0 : writeCount == 1 && readCount == 1 && permissionCount == 2
        let proofOK = !note.isEmpty && output.contains(note) && output.contains(resumed ? "RESUME_OK:" : "PROOF_OK:")
        let runtimeOK = runtimeEvidence["pid"] as? Int == Int(ProcessInfo.processInfo.processIdentifier) &&
            runtimeEvidence["platform"] as? String == "ios" && runtimeEvidence["jitless"] as? Bool == true
        let success = !hadError && runtimeOK && !(result["is_error"] as? Bool ?? true) && initialized && !sessionID.isEmpty &&
            (!fixtureMode || (fixtureVerified && countsOK && proofOK && streamCount > 0))
        verdict = success ? (fixtureMode ? "PASS — \(resumed ? "saved session resumed" : "official harness + native tools")" : "Live turn completed") : "FAIL — inspect the event log"
        status = verdict
        log(verdict)
        // The harness persists its transcript asynchronously; allow it to flush before recording evidence.
        Task { [weak self] in
            try? await Task.sleep(nanoseconds: 1_000_000_000)
            self?.writeReport(success: success, result: result)
        }
    }

    private func writeReport(success: Bool, result: [String: Any]) {
        guard let url = reportURL else { return }
        var transcripts: [String] = []
        if let files = FileManager.default.enumerator(at: configDirectory, includingPropertiesForKeys: nil) {
            for case let item as URL in files where item.lastPathComponent == "\(sessionID).jsonl" { transcripts.append(item.path) }
        }
        var report: [String: Any] = [
            "passed": success && !hadError, "mode": fixtureMode ? "fixture" : accountMode ? "account" : "live", "resumed": resumed,
            "runID": runID, "date": ISO8601DateFormatter().string(from: Date()),
            "durationSeconds": Date().timeIntervalSince(startTime), "runtime": runtimeEvidence,
            "device": UIDevice.current.model, "systemVersion": UIDevice.current.systemVersion,
            "nativePID": ProcessInfo.processInfo.processIdentifier,
            "sessionID": sessionID, "writes": writeCount, "reads": readCount,
            "permissionRequests": permissionCount, "streamEvents": streamCount,
            "fixtureModelRequests": fixtureRequests, "fixtureVerified": fixtureVerified,
            "officialTranscriptPaths": transcripts, "result": result,
            "scope": "Official harness executes locally. Fixture mode simulates model responses, not the agent loop. Shell, subagents and compaction are not tested."
        ]
        #if targetEnvironment(simulator)
        report["environment"] = "iOS simulator"
        #else
        report["environment"] = "physical iOS device"
        #endif
        do {
            let data = try JSONSerialization.data(withJSONObject: report, options: [.prettyPrinted, .sortedKeys])
            try data.write(to: url, options: .atomic)
            try data.write(to: url.deletingLastPathComponent().appendingPathComponent("\(runID).json"), options: .atomic)
            try eventFile?.synchronize()
        } catch { log("Report error: \(error.localizedDescription)") }
    }
    private func record(_ object: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: object, options: [.sortedKeys]) else { return }
        try? eventFile?.write(contentsOf: data + Data([10]))
    }
    private func log(_ message: String) {
        events.append(message)
        if events.count > 300 { events.removeFirst(events.count - 300) }
    }
    private func fail(_ message: String) {
        hadError = true
        busy = false
        status = "Runtime error"
        verdict = "FAIL"
        log(message)
        UIApplication.shared.isIdleTimerDisabled = false
        timeout?.cancel()
        writeReport(success: false, result: ["error": message])
    }
    private func armTimeout() {
        timeout?.cancel()
        timeout = Task { [weak self] in
            do { try await Task.sleep(nanoseconds: 120_000_000_000) } catch { return }
            guard let self, self.busy else { return }
            self.interrupt()
            self.fail("No completed turn within 120 seconds. The runtime is still available for inspection.")
        }
    }
    enum DemoError: LocalizedError {
        case invalidNote, unknownTool
        var errorDescription: String? { self == .invalidNote ? "A note must be a string no larger than 64 KiB." : "Unknown native tool." }
    }
}
