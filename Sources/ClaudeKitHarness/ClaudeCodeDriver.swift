import Foundation
import ClaudeKit

public actor ClaudeCodeDriver: HarnessDriving {
    public enum Authentication: Sendable {
        case claudeAccount
        case apiKey(String)
        /// Development-only local model fixture; the official harness still runs.
        case fixture
    }
    public struct Configuration: Sendable {
        public let authentication: Authentication
        public let storageDirectory: URL
        public let nodeExecutable: URL?
        public init(authentication: Authentication = .claudeAccount, storageDirectory: URL? = nil, nodeExecutable: URL? = nil) {
            self.authentication = authentication; self.nodeExecutable = nodeExecutable
            let mode: String
            switch authentication { case .claudeAccount: mode = "account"; case .apiKey: mode = "api"; case .fixture: mode = "fixture" }
            self.storageDirectory = storageDirectory ?? FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0].appendingPathComponent("ClaudeKitHarness/\(mode)")
        }
    }
    public nonisolated let capabilities = HarnessCapabilities(sessionSwitching: true, maximumConcurrentExecutions: .max, images: true, structuredOutput: true, ephemeralRequests: true, steering: true)
    nonisolated let configuration: Configuration
    let transport = HarnessTransport()
    var reader: Task<Void, Never>?
    var generation = ""
    var session: HarnessSessionConfiguration?
    var pending: [String: CheckedContinuation<JSONValue, Error>] = [:]
    var deadlines: [String: Task<Void, Never>] = [:]
    var runtimeWaiter: CheckedContinuation<Void, Error>?
    var logoutWaiter: CheckedContinuation<Void, Error>?
    var runWaiter: CheckedContinuation<HarnessResult, Error>?
    var onEvent: (@Sendable (HarnessEvent) async -> Void)?
    var sessionID = ""
    var text = ""
    var answerBuffer = ""
    var answerStopReason: String?
    var deliveredAnswer = false
    var tasks: [UUID: Task<Void, Never>] = [:]
    var permits: [(String, JSONValue, String)] = []
    var controlTasks: [String: UUID] = [:]
    var lastAssistantUUID: String?
    var pendingResult: HarnessResult?
    var limits: [String: AgentUsageLimitSnapshot] = [:]
    var searchCalls = 0
    var pendingInputs: Set<String> = []
    public func usageLimits() -> [AgentUsageLimitSnapshot] { limits.values.sorted { ($0.kind ?? "") < ($1.kind ?? "") } }
    var models: [AgentModelInfo] = []
    public func availableModels() -> [AgentModelInfo] { models }
    var opening = false
    var authenticating = false
    public internal(set) var runtimeEvidence: JSONValue?

    public init(configuration: Configuration = .init()) throws {
        guard configuration.storageDirectory.isFileURL else { throw AgentRuntimeError(code: "invalid_directory", message: "Storage must be a local directory.") }
        self.configuration = configuration
        for name in ["Workspace", "Config", "Cache"] {
            let url = configuration.storageDirectory.appendingPathComponent(name)
            try FileManager.default.createDirectory(at: url, withIntermediateDirectories: true)
        }
        let config = configuration.storageDirectory.appendingPathComponent("Config")
        try FileManager.default.setAttributes([.posixPermissions: 0o700], ofItemAtPath: config.path)
        #if os(iOS)
        try FileManager.default.setAttributes([.protectionKey: FileProtectionType.complete], ofItemAtPath: config.path)
        #endif
        var url = configuration.storageDirectory
        var values = URLResourceValues(); values.isExcludedFromBackup = true; try url.setResourceValues(values)
    }
    deinit { reader?.cancel(); transport.shutdown() }

    /// Ends a desktop host. On iOS the process-wide Node host remains allocated;
    /// keep and reuse the same driver for the lifetime of the application.
    public func shutdown() async { await close(); reader?.cancel(); transport.shutdown() }

    public nonisolated func makeSessionDriver() throws -> (any HarnessDriving)? { try ClaudeCodeDriver(configuration: configuration) }

    public func open(_ configuration: HarnessSessionConfiguration) async throws -> ClaudeAccount? {
        guard runWaiter == nil, !opening, !authenticating else { throw failure("runtime_busy", "The harness is busy.") }
        opening = true
        defer { opening = false }
        if reader == nil {
            let events = try transport.start(nodeExecutable: self.configuration.nodeExecutable)
            reader = Task { [weak self] in
                do { for try await packet in events { await self?.receive(packet) } }
                catch { await self?.failAll(error) }
            }
        }
        await close()
        generation = UUID().uuidString; searchCalls = 0; session = configuration; sessionID = ""; text = ""; lastAssistantUUID = nil
        var options: [String: JSONValue] = [
            "workspace": .string(self.configuration.storageDirectory.appendingPathComponent("Workspace").path),
            "configDirectory": .string(self.configuration.storageDirectory.appendingPathComponent("Config").path),
            "cacheDirectory": .string(self.configuration.storageDirectory.appendingPathComponent("Cache").path),
            "model": .string(configuration.model), "instructions": .string(configuration.instructions)
        ]
        switch self.configuration.authentication {
        case .claudeAccount: options["mode"] = .string("account")
        case let .apiKey(key): options["mode"] = .string("apiKey"); options["apiKey"] = .string(key)
        case .fixture: options["mode"] = .string("fixture")
        }
        options["webSearch"] = .bool(configuration.webSearch.mode == .live)
        options["ephemeral"] = .bool(configuration.ephemeral)
        if let schema = configuration.outputSchema { options["outputSchema"] = schema }
        if let id = configuration.sessionID { options["resume"] = .string(id) }
        do {
            try await withCheckedThrowingContinuation { (waiter: CheckedContinuation<Void, Error>) in
                runtimeWaiter = waiter
                let packet = JSONValue.object(["op": .string("open"), "generation": .string(generation), "options": .object(options)])
                tasks[UUID()] = Task { [weak self, transport] in
                    do { try await transport.write(packet) } catch { await self?.failAll(error) }
                }
                armStartupTimeout()
            }
            let response = try await control(["subtype": .string("initialize"), "sdkMcpServers": .array([.string("ios")])])
            if let budget = configuration.maximumThinkingTokens {
                guard budget >= 0 else { throw failure("invalid_thinking_budget", "Thinking budget exceeds limits.") }
                _ = try await control(["subtype": .string("set_max_thinking_tokens"), "max_thinking_tokens": .number(Double(budget))])
            }
            models = (response["models"]?.arrayValue ?? []).compactMap { value in
                guard let id = value["value"]?.stringValue else { return nil }
                return AgentModelInfo(id: id, displayName: value["displayName"]?.stringValue ?? id, description: value["description"]?.stringValue)
            }
            return account(from: response["account"])
        } catch { await close(); throw error }
    }

    public func signIn(presenter: any ClaudeSignInPresenting) async throws -> ClaudeAccount {
        guard !opening, !authenticating, runWaiter == nil else { throw failure("runtime_busy", "The harness is busy.") }
        guard session != nil else { throw failure("not_initialized", "Initialize the harness first.") }
        authenticating = true
        defer { authenticating = false }
        return try await withTaskCancellationHandler {
            do {
                let result = try await control(["subtype": .string("claude_authenticate"), "loginWithClaudeAi": .bool(true)])
                guard let raw = result["automaticUrl"]?.stringValue, let url = URL(string: raw),
                      let manual = result["manualUrl"]?.stringValue, let manualURL = URL(string: manual),
                      url.scheme == "https", ["claude.ai", "claude.com"].contains(url.host ?? ""),
                      manualURL.scheme == "https", manualURL.host == url.host else { throw failure("invalid_auth_url", "The harness returned an unexpected sign-in URL.") }
                let authGeneration = generation
                await presenter.present(.init(automaticURL: url, manualURL: manualURL) { [weak self] code in
                    try await self?.submitCode(code, generation: authGeneration)
                })
                let completed = try await control(["subtype": .string("claude_oauth_wait_for_completion")], timeout: 600)
                try Task.checkCancellation()
                guard let account = account(from: completed["account"]) else { throw failure("login_failed", "The harness did not confirm a Claude account.") }
                await presenter.dismiss(); return account
            } catch { await presenter.dismiss(); throw error }
        } onCancel: { Task { await self.close() } }
    }
    func submitCode(_ code: String, generation: String) async throws {
        guard self.generation == generation else { throw failure("stale_login", "This sign-in attempt has ended.") }
        let parts = code.trimmingCharacters(in: .whitespacesAndNewlines).split(separator: "#", maxSplits: 1, omittingEmptySubsequences: false)
        guard let first = parts.first, !first.isEmpty else { throw failure("invalid_code", "Enter the one-time authorization code.") }
        _ = try await control(["subtype": .string("claude_oauth_callback"), "authorizationCode": .string(String(first)), "state": .string(parts.count > 1 ? String(parts[1]) : "")])
    }
    func account(from value: JSONValue?) -> ClaudeAccount? {
        switch configuration.authentication {
        case .fixture: return .init(email: nil, provider: "localFixture", authentication: "fixture")
        case .apiKey: return .init(email: nil, authentication: "apiKey")
        case .claudeAccount:
            guard let email = value?["email"]?.stringValue, value?["apiKeySource"]?.stringValue == nil else { return nil }
            return .init(email: email, provider: value?["apiProvider"]?.stringValue ?? "firstParty")
        }
    }
    public func run(_ prompt: String, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        try await run(Request(text: prompt), onEvent: onEvent)
    }
    public func run(_ request: Request, onEvent: @escaping @Sendable (HarnessEvent) async -> Void) async throws -> HarnessResult {
        try request.validateAttachments()
        guard session != nil, runWaiter == nil, !opening, !authenticating else { throw failure("runtime_busy", "Harness session is unavailable or busy.") }
        self.onEvent = onEvent; text = ""; answerBuffer = ""; answerStopReason = nil; deliveredAnswer = false
        return try await withTaskCancellationHandler {
            try Task.checkCancellation()
            return try await withCheckedThrowingContinuation { waiter in
                runWaiter = waiter
                tasks[UUID()] = Task { [weak self] in
                    do { try await self?.send(.object(["type": .string("user"), "message": .object(["role": .string("user"), "content": request.harnessContent]), "parent_tool_use_id": .null, "session_id": .string(self?.sessionID ?? "")])) }
                    catch { await self?.failAll(error) }
                }
            }
        } onCancel: { Task { await self.interrupt() } }
    }
    public func signOut() async throws {
        guard !opening, !authenticating, runWaiter == nil, logoutWaiter == nil else { throw failure("runtime_busy", "The harness is busy.") }
        if case .apiKey = configuration.authentication { throw failure("unsupported_feature", "API keys are owned by the host application.") }
        guard reader != nil else { throw failure("not_initialized", "Restore the runtime before signing out.") }
        await close()
        opening = true
        defer { opening = false }
        generation = UUID().uuidString
        let options: JSONValue = .object([
            "workspace": .string(configuration.storageDirectory.appendingPathComponent("Workspace").path),
            "configDirectory": .string(configuration.storageDirectory.appendingPathComponent("Config").path),
            "cacheDirectory": .string(configuration.storageDirectory.appendingPathComponent("Cache").path),
            "mode": .string("account"), "command": .string("logout")])
        do {
            try await withTaskCancellationHandler {
                try await withCheckedThrowingContinuation { (waiter: CheckedContinuation<Void, Error>) in
                    logoutWaiter = waiter
                    deadlines["logout"] = Task { [weak self] in
                        do { try await Task.sleep(nanoseconds: 30_000_000_000) } catch { return }
                        await self?.failAll(AgentRuntimeError(code: "logout_timeout", message: "Harness logout timed out."))
                    }
                    tasks[UUID()] = Task { [weak self] in
                        guard let self else { return }
                        do { try await self.transport.write(.object(["op": .string("open"), "generation": .string(self.generation), "options": options])) }
                        catch { await self.failAll(error) }
                    }
                }
            } onCancel: { Task { await self.close() } }
            limits.removeAll()
            await close()
        } catch { await close(); throw error }
    }
    public func steer(_ text: String) async throws {
        guard runWaiter != nil, pendingResult == nil, pendingInputs.count < 512, text.utf8.count <= AgentStoreLimits.maximumMessageTextByteCount else {
            throw failure("invalid_steering", "There is no steerable turn or the input queue is full.")
        }
        let id = UUID().uuidString
        pendingInputs.insert(id)
        do { try await send(.object(["type": .string("user"), "uuid": .string(id), "priority": .string("now"),
            "message": .object(["role": .string("user"), "content": .string(text)]),
            "parent_tool_use_id": .null, "session_id": .string(sessionID)])) }
        catch { pendingInputs.remove(id); throw error }
    }
    public func interrupt() async {
        guard !generation.isEmpty else { return }
        let old = generation
        tasks.values.forEach { $0.cancel() }; permits.removeAll()
        _ = try? await control(["subtype": .string("interrupt")], timeout: 3)
        guard generation == old else { return }
        // Terminating the isolate bounds cancellation even if its request hangs.
        await close()
    }
    public func close() async {
        guard !generation.isEmpty else { return }
        let old = generation; generation = ""; session = nil; permits.removeAll()
        failAll(CancellationError())
        try? await transport.write(.object(["op": .string("close"), "generation": .string(old)]))
    }
    func send(_ message: JSONValue) async throws {
        guard !generation.isEmpty else { throw CancellationError() }
        try await transport.write(.object(["op": .string("send"), "generation": .string(generation), "message": message]))
    }
    func control(_ request: [String: JSONValue], timeout: UInt64 = 30) async throws -> JSONValue {
        try Task.checkCancellation()
        let id = UUID().uuidString
        return try await withCheckedThrowingContinuation { waiter in
            pending[id] = waiter
            deadlines[id] = Task { [weak self] in
                do { try await Task.sleep(nanoseconds: timeout * 1_000_000_000) } catch { return }
                await self?.expire(id)
            }
            tasks[UUID()] = Task { [weak self] in
                do { try await self?.send(.object(["type": .string("control_request"), "request_id": .string(id), "request": .object(request)])) }
                catch { await self?.failAll(error) }
            }
        }
    }
    func expire(_ id: String) {
        deadlines.removeValue(forKey: id)?.cancel()
        pending.removeValue(forKey: id)?.resume(throwing: failure("control_timeout", "The harness control request timed out."))
    }
    func armStartupTimeout() {
        deadlines["startup"] = Task { [weak self] in
            do { try await Task.sleep(nanoseconds: 30_000_000_000) } catch { return }
            await self?.failAll(AgentRuntimeError(code: "startup_timeout", message: "The harness did not initialize."))
        }
    }
    func failAll(_ error: Error) {
        pendingResult = nil; pendingInputs.removeAll()
        logoutWaiter?.resume(throwing: error); logoutWaiter = nil
        runtimeWaiter?.resume(throwing: error); runtimeWaiter = nil
        runWaiter?.resume(throwing: error); runWaiter = nil
        let waiters = pending; pending.removeAll(); waiters.values.forEach { $0.resume(throwing: error) }
        deadlines.values.forEach { $0.cancel() }; deadlines.removeAll()
        tasks.values.forEach { $0.cancel() }; tasks.removeAll()
        controlTasks.removeAll()
        onEvent = nil
    }
    func failure(_ code: String, _ message: String) -> AgentRuntimeError { .init(code: code, message: message) }
}
