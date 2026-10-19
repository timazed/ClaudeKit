import Foundation

public struct StoredRuntimeState: Codable, Hashable, Sendable {
    public var threads: [AgentThread]
    public var messagesByThread: [String: [AgentMessage]]
    public var account: ClaudeAccount?
    public var usageReceipts: [AgentUsageReceipt]?
    public var outputs: [AgentOutputRepresentation]?
    public var memoryApplications: [AgentMemoryApplication]?
    public var contexts: [String: JSONValue]?
    public var memories: [AgentMemoryRecord]?

    public init(
        threads: [AgentThread] = [],
        messagesByThread: [String: [AgentMessage]] = [:]
    ) {
        self.threads = threads
        self.messagesByThread = messagesByThread
    }

    public static var empty: StoredRuntimeState {
        StoredRuntimeState()
    }
}

public protocol RuntimeStateStoring: Sendable {
    func prepare() async throws
    func loadState() async throws -> StoredRuntimeState
    func saveState(_ state: StoredRuntimeState) async throws
}

public actor InMemoryRuntimeStateStore: RuntimeStateStoring {
    private var state: StoredRuntimeState

    public init(state: StoredRuntimeState = .empty) {
        self.state = state
    }

    public func prepare() async throws {}

    public func loadState() async throws -> StoredRuntimeState {
        state
    }

    public func saveState(_ state: StoredRuntimeState) async throws {
        self.state = state
    }
}

public actor FileRuntimeStateStore: RuntimeStateStoring {
    private let url: URL
    private let encoder: JSONEncoder
    private let decoder: JSONDecoder

    public init(url: URL = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0].appendingPathComponent("ClaudeKit/state.json")) {
        self.url = url
        self.encoder = JSONEncoder()
        self.decoder = JSONDecoder()
        encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
    }

    public func prepare() async throws {
        guard url.isFileURL else { throw AgentRuntimeError(code: "state_store", message: "State storage requires a local file URL.") }
        let directory = url.deletingLastPathComponent()
        try FileManager.default.createDirectory(
            at: directory,
            withIntermediateDirectories: true
        )
    }

    public func loadState() async throws -> StoredRuntimeState {
        guard FileManager.default.fileExists(atPath: url.path) else {
            return .empty
        }

        guard (try url.resourceValues(forKeys: [.fileSizeKey]).fileSize ?? 0) <= 64 * 1024 * 1024 else { throw AgentRuntimeError(code: "store_limit", message: "State exceeds 64 MiB.") }
        let data = try Data(contentsOf: url)
        return try decoder.decode(StoredRuntimeState.self, from: data)
    }

    public func saveState(_ state: StoredRuntimeState) async throws {
        try await prepare()
        let data = try encoder.encode(state)
        guard data.count <= 64 * 1024 * 1024 else { throw AgentRuntimeError(code: "store_limit", message: "State exceeds 64 MiB.") }
        try data.write(to: url, options: [.atomic])
        try FileManager.default.setAttributes([.posixPermissions: 0o600], ofItemAtPath: url.path)
    }
}
