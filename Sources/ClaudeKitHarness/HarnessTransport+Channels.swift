import Foundation
import ClaudeKitCore

/// Every driver owns a logical channel; iOS shares exactly one native Node instance.
final class HarnessTransport: @unchecked Sendable {
    #if os(iOS)
    private let channel = UUID().uuidString
    private let hub = HarnessChannelHub.shared
    func start(nodeExecutable: URL?) throws -> AsyncThrowingStream<JSONValue, Error> { try hub.attach(channel) }
    func write(_ value: JSONValue) async throws {
        var packet = value.objectValue ?? [:]; packet["channel"] = .string(channel)
        try await hub.write(.object(packet))
    }
    func shutdown() { hub.detach(channel) }
    #else
    private let raw = RawHarnessTransport()
    func start(nodeExecutable: URL?) throws -> AsyncThrowingStream<JSONValue, Error> { try raw.start(nodeExecutable: nodeExecutable) }
    func write(_ value: JSONValue) async throws { try await raw.write(value) }
    func shutdown() { raw.shutdown() }
    #endif
}
#if os(iOS)
private final class HarnessChannelHub: @unchecked Sendable {
    static let shared = HarnessChannelHub()
    private let lock = NSLock()
    private let raw = RawHarnessTransport()
    private var terminalError: Error?
    private var reader: Task<Void, Never>?
    private var sinks: [String: AsyncThrowingStream<JSONValue, Error>.Continuation] = [:]
    func attach(_ channel: String) throws -> AsyncThrowingStream<JSONValue, Error> {
        lock.lock(); defer { lock.unlock() }
        if let terminalError { throw terminalError }
        if reader == nil {
            let events = try raw.start(nodeExecutable: nil)
            reader = Task { [weak self] in
                do { for try await event in events { self?.deliver(event) } }
                catch { self?.fail(error) }
            }
        }
        return AsyncThrowingStream(bufferingPolicy: .bufferingOldest(512)) { sinks[channel] = $0 }
    }
    func write(_ value: JSONValue) async throws { try await raw.write(value) }
    func detach(_ channel: String) {
        lock.lock(); let sink = sinks.removeValue(forKey: channel); lock.unlock(); sink?.finish()
        Task { try? await raw.write(.object(["op": .string("closeChannel"), "channel": .string(channel)])) }
    }
    private func deliver(_ event: JSONValue) {
        guard let channel = event["channel"]?.stringValue else { return }
        lock.lock(); let sink = sinks[channel]; lock.unlock()
        if case .dropped = sink?.yield(event) {
            sink?.finish(throwing: AgentRuntimeError(code: "protocol_overflow", message: "Harness channel consumer fell behind."))
            detach(channel)
        }
    }
    private func fail(_ error: Error) {
        lock.lock(); terminalError = error; let all = Array(sinks.values); sinks.removeAll(); lock.unlock()
        all.forEach { $0.finish(throwing: error) }
    }
}
#endif
