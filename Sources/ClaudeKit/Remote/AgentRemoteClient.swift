import Foundation

public struct AgentRemoteSubmission: Codable, Sendable {
    public var id: UUID
    public var request: Request
    public var model: String
    public var parentJobID: UUID?
    public var completion: AgentRemoteCompletion?
    public init(id: UUID = UUID(), request: Request, model: String = "claude-sonnet-4-6", parentJobID: UUID? = nil, completion: AgentRemoteCompletion? = nil) {
        self.parentJobID = parentJobID; self.id = id; self.request = request; self.model = model; self.completion = completion
    }
}
public struct AgentRemoteCompletion: Codable, Sendable {
    public enum Mode: String, Codable, Sendable { case silent, alert }
    public let deviceToken: String
    public let mode: Mode
    public init(deviceToken: String, mode: Mode = .silent) { self.deviceToken = deviceToken; self.mode = mode }
}
public struct AgentRemoteJob: Codable, Sendable, Identifiable {
    public enum State: String, Codable, Sendable { case queued, running, completed, failed, cancelled, interrupted }
    public let id: UUID
    public let state: State
    public let createdAt: Date
    public let updatedAt: Date
    public let text: String?
    public let structuredOutput: JSONValue?
    public let failure: String?
    public let usage: AgentUsage?
    public let sessionID: String?
    public var isTerminal: Bool { ![.queued, .running].contains(state) }
}

/// Uses an application server credential, never a Claude OAuth token.
public actor AgentRemoteClient {
    private let baseURL: URL
    private let token: @Sendable () async throws -> String
    private let session: URLSession
    public init(baseURL: URL, token: @escaping @Sendable () async throws -> String) throws {
        guard baseURL.scheme == "https" || (baseURL.scheme == "http" && ["127.0.0.1", "localhost", "[::1]", "::1"].contains(baseURL.host ?? "")),
              baseURL.user == nil, baseURL.password == nil, baseURL.query == nil, baseURL.fragment == nil else {
            throw AgentRuntimeError(code: "remote_url", message: "Remote execution requires HTTPS or a loopback development URL.")
        }
        self.baseURL = baseURL; self.token = token
        session = URLSession(configuration: .ephemeral, delegate: NoRemoteRedirects(), delegateQueue: nil)
    }
    public func submit(_ submission: AgentRemoteSubmission) async throws -> AgentRemoteJob {
        guard submission.request.hasContent, submission.request.images.isEmpty, submission.request.memory == nil, (submission.request.skills ?? []).isEmpty,
              submission.request.personaOverride == nil, submission.request.webSearch?.mode != .live else {
            throw AgentRuntimeError(code: "remote_request", message: "Remote jobs accept text/context/JSON; local tools, memory, and personas must be resolved before submission.")
        }
        try submission.request.validateAttachments(); try submission.request.validateOutputSchema()
        let body = try JSONEncoder().encode(submission)
        guard body.count <= 6 * 1024 * 1024 else { throw AgentRuntimeError(code: "remote_limit", message: "Prepared submission exceeds 6 MiB.") }
        return try await perform("POST", path: "v1/jobs", body: body)
    }
    public func job(_ id: UUID) async throws -> AgentRemoteJob { try await perform("GET", path: "v1/jobs/" + id.uuidString.lowercased()) }
    public func cancel(_ id: UUID) async throws -> AgentRemoteJob { try await perform("DELETE", path: "v1/jobs/" + id.uuidString.lowercased()) }
    public func waitForCompletion(_ id: UUID, pollInterval: TimeInterval = 2) async throws -> AgentRemoteJob {
        guard pollInterval.isFinite, (0.5...60).contains(pollInterval) else { throw AgentRuntimeError(code: "invalid_interval", message: "Poll interval must be 0.5–60 seconds.") }
        while true {
            try Task.checkCancellation(); let result = try await job(id)
            if result.isTerminal { return result }
            try await Task.sleep(nanoseconds: UInt64(pollInterval * 1_000_000_000))
        }
    }
    public func decode<Output: Decodable & Sendable>(_ job: AgentRemoteJob, as: Output.Type) throws -> Output {
        guard job.state == .completed, let output = job.structuredOutput else { throw AgentOutputError.invalidOutput("Remote job has no completed JSON result.") }
        return try JSONDecoder().decode(Output.self, from: JSONEncoder().encode(output))
    }
    private func perform(_ method: String, path: String, body: Data? = nil) async throws -> AgentRemoteJob {
        var request = URLRequest(url: baseURL.appendingPathComponent(path))
        request.httpMethod = method; request.httpBody = body; request.timeoutInterval = 30
        request.setValue("Bearer " + (try await token()), forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        let (bytes, response) = try await session.bytes(for: request)
        guard let response = response as? HTTPURLResponse else { throw AgentRuntimeError.transport("Invalid remote response.") }
        var data = Data()
        for try await byte in bytes {
            guard data.count < 8 * 1024 * 1024 else { throw AgentRuntimeError(code: "remote_limit", message: "Remote response exceeds 8 MiB.") }; data.append(byte)
        }
        guard (200...299).contains(response.statusCode) else { throw AgentRuntimeError(code: "remote_http_\(response.statusCode)", message: "Remote request was rejected (\(response.statusCode)).") }
        let decoder = JSONDecoder(); decoder.dateDecodingStrategy = .millisecondsSince1970
        return try decoder.decode(AgentRemoteJob.self, from: data)
    }
}
private final class NoRemoteRedirects: NSObject, URLSessionTaskDelegate, @unchecked Sendable {
    func urlSession(_ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest,
                    completionHandler: @escaping (URLRequest?) -> Void) { completionHandler(nil) }
}
