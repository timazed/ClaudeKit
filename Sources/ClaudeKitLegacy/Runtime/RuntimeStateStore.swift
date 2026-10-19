import Foundation

public struct StoredRuntimeState: Codable, Hashable, Sendable {
    public var threads: [AgentThread]
    public var messagesByThread: [String: [AgentMessage]]

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

    public init(url: URL) {
        self.url = url
        self.encoder = JSONEncoder()
        self.decoder = JSONDecoder()
        encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
    }

    public func prepare() async throws {
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

        let data = try Data(contentsOf: url)
        return try decoder.decode(StoredRuntimeState.self, from: data)
    }

    public func saveState(_ state: StoredRuntimeState) async throws {
        let data = try encoder.encode(state)
        try data.write(to: url, options: [.atomic])
    }
}
