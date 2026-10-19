import Foundation
#if canImport(Darwin)
import Darwin
#else
import Glibc
#endif

public enum AgentRecoveryPhase: String, Codable, Sendable { case prepared, running, suspended, completed, failed }
public struct AgentRecoveryRecord: Codable, Sendable, Identifiable {
    public let id: UUID
    public let account: ClaudeAccount
    public let request: Request
    public let model: String
    public let instructions: String
    public var maximumThinkingTokens: Int? = nil
    public let maximumAttempts: Int
    public let expiresAt: Date?
    public var phase: AgentRecoveryPhase
    public var attempts: Int
    public var pendingAttemptID: UUID?
    public var nextAttemptAt: Date?
    public var result: JSONValue?
    public var lastFailure: String?
    public var formatVersion: Int
}
public protocol AgentRecoveryLease: AnyObject, Sendable {}
public protocol AgentRecoveryStoring: Sendable {
    func acquire(_ id: UUID) async throws -> any AgentRecoveryLease
    func load(_ id: UUID) async throws -> AgentRecoveryRecord
    func save(_ record: AgentRecoveryRecord) async throws
    func remove(_ id: UUID) async throws
    func records() async throws -> [AgentRecoveryRecord]
}

public actor FileAgentRecoveryStore: AgentRecoveryStoring {
    private let directory: URL
    public init(directory: URL = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0].appendingPathComponent("ClaudeKit/Recovery")) { self.directory = directory }
    private func prepare() throws {
        guard directory.isFileURL else { throw failure("Recovery store must be local.") }
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true, attributes: [.posixPermissions: 0o700])
    }
    private func url(_ id: UUID) -> URL { directory.appendingPathComponent(id.uuidString + ".json") }
    public func acquire(_ id: UUID) throws -> any AgentRecoveryLease {
        try prepare()
        let fd = open(directory.appendingPathComponent(id.uuidString + ".lock").path, O_CREAT | O_RDWR, mode_t(0o600))
        guard fd >= 0 else { throw failure("Cannot open recovery lease.") }
        guard flock(fd, LOCK_EX | LOCK_NB) == 0 else { close(fd); throw AgentRuntimeError(code: "recovery_busy", message: "Another execution owns this recovery request.") }
        return FileLease(fd: fd)
    }
    public func load(_ id: UUID) throws -> AgentRecoveryRecord {
        try prepare()
        let size = try url(id).resourceValues(forKeys: [.fileSizeKey]).fileSize ?? 0
        guard size <= 8 * 1024 * 1024 else { throw failure("Recovery record exceeds size limit.") }
        let record = try JSONDecoder().decode(AgentRecoveryRecord.self, from: Data(contentsOf: url(id)))
        guard record.id == id, record.formatVersion == 1 else { throw failure("Unknown recovery format or identity.") }
        return record
    }
    public func save(_ record: AgentRecoveryRecord) throws {
        try prepare()
        let data = try JSONEncoder().encode(record)
        guard data.count <= 8 * 1024 * 1024 else { throw failure("Recovery record exceeds size limit.") }
        try data.write(to: url(record.id), options: .atomic)
        try FileManager.default.setAttributes([.posixPermissions: 0o600], ofItemAtPath: url(record.id).path)
    }
    public func remove(_ id: UUID) throws { try FileManager.default.removeItem(at: url(id)) }
    public func records() throws -> [AgentRecoveryRecord] {
        try prepare()
        let files = try FileManager.default.contentsOfDirectory(at: directory, includingPropertiesForKeys: nil).filter { $0.pathExtension == "json" }
        guard files.count <= 10000 else { throw failure("Recovery store requires retention cleanup.") }
        return try files.compactMap { file in guard let id = UUID(uuidString: file.deletingPathExtension().lastPathComponent) else { return nil }; return try load(id) }
    }
    private func failure(_ message: String) -> AgentRuntimeError { .init(code: "recovery_store", message: message) }
}
private final class FileLease: AgentRecoveryLease, @unchecked Sendable {
    let fd: Int32
    init(fd: Int32) { self.fd = fd }
    deinit { flock(fd, LOCK_UN); close(fd) }
}
