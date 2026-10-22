import Foundation
import RealmSwift
import ClaudeKit

@objc(ClaudeKitRuntimeSnapshot)
private final class RuntimeSnapshot: Object {
    @Persisted(primaryKey: true) var id = "runtime"
    @Persisted var version = 2
    @Persisted var payload = Data()
}
@objc(ClaudeKitThreadRow)
private final class ThreadRow: Object {
    @Persisted(primaryKey: true) var id = ""
    @Persisted(indexed: true) var updated = Date()
    @Persisted var payload = Data()
}
@objc(ClaudeKitMessageRow)
private final class MessageRow: Object {
    @Persisted(primaryKey: true) var id = ""
    @Persisted(indexed: true) var threadID = ""
    @Persisted(indexed: true) var position = 0
    @Persisted var text = ""
    @Persisted var payload = Data()
}

/// Actor-confined Realm persistence with indexed message/thread queries.
public actor RealmRuntimeStateStore: RuntimeStatePartitioning {
    private let configuration: Realm.Configuration
    private var realm: Realm?
    public init(url: URL) throws {
        guard url.isFileURL else { throw AgentRuntimeError(code: "realm_store", message: "Realm requires a local file URL.") }
        try FileManager.default.createDirectory(at: url.deletingLastPathComponent(), withIntermediateDirectories: true)
        configuration = Realm.Configuration(fileURL: url, schemaVersion: 1, objectTypes: [RuntimeSnapshot.self, ThreadRow.self, MessageRow.self])
    }
    private func open() async throws -> Realm {
        if let realm { return realm }
        let opened = try await Realm.open(configuration: configuration, _isolation: self)
        realm = opened; return opened
    }
    public func prepare() async throws { _ = try await open() }
    public func loadState() async throws -> StoredRuntimeState { try await load(includeMessages: true) }
    public func loadOverview() async throws -> StoredRuntimeState { try await load(includeMessages: false) }
    private func load(includeMessages: Bool) async throws -> StoredRuntimeState {
        let realm = try await open()
        guard let row = realm.object(ofType: RuntimeSnapshot.self, forPrimaryKey: "runtime") else { return .empty }
        guard row.version == 2, row.payload.count <= 64 * 1024 * 1024 else { throw AgentRuntimeError(code: "realm_store", message: "Unsupported state format.") }
        var state = try JSONDecoder().decode(StoredRuntimeState.self, from: row.payload)
        state.threads = try realm.objects(ThreadRow.self).map { try JSONDecoder().decode(AgentThread.self, from: $0.payload) }
        if includeMessages {
            for message in realm.objects(MessageRow.self).sorted(byKeyPath: "position") {
                state.messagesByThread[message.threadID, default: []].append(try JSONDecoder().decode(AgentMessage.self, from: message.payload))
            }
        }
        if !includeMessages { state.messagesByThread = [:] }
        return state
    }
    public func saveState(_ state: StoredRuntimeState) async throws { try await saveProjection(state, preservingMessagesFor: []) }
    public func saveProjection(_ state: StoredRuntimeState, preservingMessagesFor preserved: Set<String>) async throws {
        var metadata = state; metadata.threads = []; metadata.messagesByThread = [:]
        let data = try JSONEncoder().encode(metadata)
        guard data.count <= 64 * 1024 * 1024 else { throw AgentRuntimeError(code: "store_limit", message: "State exceeds 64 MiB.") }
        let threads = try state.threads.map { value -> ThreadRow in
            let row = ThreadRow(); row.id = value.id; row.updated = value.updatedAt; row.payload = try JSONEncoder().encode(value); return row
        }
        let messages = try state.messagesByThread.flatMap { threadID, values in
            try values.enumerated().map { index, value -> MessageRow in
                let row = MessageRow(); row.id = value.id; row.threadID = threadID; row.position = index; row.text = value.text
                row.payload = try JSONEncoder().encode(value); return row
            }
        }
        let realm = try await open()
        try await realm.asyncWrite(_isolation: self) {
            let snapshot = RuntimeSnapshot(); snapshot.version = 2; snapshot.payload = data
            realm.add(snapshot, update: .modified)
            let threadIDs = Set(threads.map(\.id)), messageIDs = Set(messages.map(\.id))
            realm.delete(realm.objects(ThreadRow.self).filter { !threadIDs.contains($0.id) })
            realm.delete(realm.objects(MessageRow.self).filter { !messageIDs.contains($0.id) && (!preserved.contains($0.threadID) || !threadIDs.contains($0.threadID)) })
            realm.add(threads, update: .modified); realm.add(messages, update: .modified)
        }
    }
    public func queryMessages(_ query: AgentMessageQuery) async throws -> [AgentMessage] {
        guard (1...500).contains(query.limit), (query.containing?.utf8.count ?? 0) <= 4096 else { throw AgentRuntimeError(code: "invalid_query", message: "Query exceeds limits.") }
        let realm = try await open()
        var rows = realm.objects(MessageRow.self).filter("threadID == %@", query.threadID)
        if let after = query.afterID {
            guard let cursor = realm.object(ofType: MessageRow.self, forPrimaryKey: after), cursor.threadID == query.threadID else {
                throw AgentRuntimeError(code: "invalid_cursor", message: "Unknown message cursor.")
            }
            rows = rows.filter("position > %d", cursor.position)
        }
        if let text = query.containing { rows = rows.filter("text CONTAINS[c] %@", text) }
        return try rows.sorted(byKeyPath: "position").prefix(query.limit).map { try JSONDecoder().decode(AgentMessage.self, from: $0.payload) }
    }
    public func queryThreads(limit: Int, before: Date? = nil) async throws -> [AgentThread] {
        guard (1...500).contains(limit) else { throw AgentRuntimeError(code: "invalid_query", message: "Invalid page size.") }
        let realm = try await open()
        var rows = realm.objects(ThreadRow.self)
        if let before { rows = rows.filter("updated < %@", before as NSDate) }
        return try rows.sorted(by: [SortDescriptor(keyPath: "updated", ascending: false), SortDescriptor(keyPath: "id")]).prefix(limit).map {
            try JSONDecoder().decode(AgentThread.self, from: $0.payload)
        }
    }
}
