import Foundation
import ClaudeKit
#if os(iOS) && canImport(NodeMobile)
import NodeMobile
import Darwin
#endif

final class RawHarnessTransport: @unchecked Sendable {
    let input = Pipe(), output = Pipe()
    private let writer = DispatchQueue(label: "ClaudeKit.writer")
    private var continuation: AsyncThrowingStream<JSONValue, Error>.Continuation?
    #if os(macOS)
    private var process: Process?
    #endif
    #if os(iOS)
    private static let ownershipLock = NSLock()
    private static var started = false
    #endif

    func start(nodeExecutable: URL?) throws -> AsyncThrowingStream<JSONValue, Error> {
        guard let root = Bundle.module.url(forResource: "Runtime", withExtension: nil),
              FileManager.default.fileExists(atPath: root.appendingPathComponent("vendor/claude-code/cli.js").path) else {
            throw AgentRuntimeError(code: "runtime_assets_missing", message: "Run Scripts/bootstrap-library.sh before building the app.")
        }
        let bootstrap = root.appendingPathComponent("host.cjs")
        let events = AsyncThrowingStream<JSONValue, Error>(bufferingPolicy: .bufferingOldest(512)) { continuation = $0 }
        let args = ["--jitless", "--no-short-builtin-calls", "--regexp-interpret-all", "--stack-size=864", bootstrap.path]
        #if os(iOS) && canImport(NodeMobile)
        Self.ownershipLock.lock()
        guard !Self.started else { Self.ownershipLock.unlock(); throw AgentRuntimeError(code: "runtime_already_owned", message: "The shared embedded Node host has already started. Relaunch the app if it stopped.") }
        Self.started = true; Self.ownershipLock.unlock()
        signal(SIGPIPE, SIG_IGN)
        setenv("CLAUDEKIT_INPUT_FD", String(input.fileHandleForReading.fileDescriptor), 1)
        setenv("CLAUDEKIT_OUTPUT_FD", String(output.fileHandleForWriting.fileDescriptor), 1)
        let thread = Thread { [self] in
            var pointers = (["node"] + args).map { strdup($0) }; pointers.append(nil)
            let count = Int32(pointers.count - 1)
            let code = pointers.withUnsafeMutableBufferPointer { node_start(count, $0.baseAddress) }
            pointers.compactMap { $0 }.forEach { free($0) }
            continuation?.finish(throwing: AgentRuntimeError(code: "host_stopped", message: "Embedded Node stopped (\(code)). Relaunch the app."))
        }
        thread.name = "ClaudeKit.Node"; thread.stackSize = 16 * 1024 * 1024; thread.qualityOfService = .userInitiated; thread.start()
        #elseif os(macOS)
        guard let nodeExecutable else { throw AgentRuntimeError(code: "node_path_required", message: "Supply a local Node executable for the macOS development host.") }
        let child = Process(); child.executableURL = nodeExecutable; child.arguments = args
        child.standardInput = input; child.standardOutput = output; child.standardError = FileHandle.nullDevice
        child.terminationHandler = { [weak self] _ in self?.continuation?.finish(throwing: AgentRuntimeError(code: "host_stopped", message: "The local harness host stopped.")) }
        try child.run(); process = child
        #else
        throw AgentRuntimeError(code: "unsupported_platform", message: "Bootstrap the iOS runtime before building this target.")
        #endif
        DispatchQueue(label: "ClaudeKit.reader", qos: .userInitiated).async { [self] in read() }
        return events
    }
    func write(_ value: JSONValue) async throws {
        let data = try JSONEncoder().encode(value)
        guard data.count <= 8 * 1024 * 1024 else { throw AgentRuntimeError(code: "protocol_limit", message: "Protocol packet exceeds limit.") }
        try await withCheckedThrowingContinuation { (waiter: CheckedContinuation<Void, Error>) in
            writer.async { [self] in
                do { try input.fileHandleForWriting.write(contentsOf: data + Data([10])); waiter.resume() }
                catch { waiter.resume(throwing: error) }
            }
        }
    }
    private func read() {
        var buffer = Data()
        while true {
            let data = output.fileHandleForReading.availableData
            if data.isEmpty { continuation?.finish(throwing: AgentRuntimeError(code: "host_disconnected", message: "Harness connection closed.")); return }
            buffer.append(data)
            while let newline = buffer.firstIndex(of: 10) {
                let line = buffer[..<newline]; buffer.removeSubrange(...newline)
                do {
                    guard line.count <= 8 * 1024 * 1024 else { throw AgentRuntimeError(code: "protocol_limit", message: "Harness event exceeds limit.") }
                    let packet = try JSONDecoder().decode(JSONValue.self, from: line)
                    if case .dropped = continuation?.yield(packet) { throw AgentRuntimeError(code: "protocol_overflow", message: "Harness event consumer fell behind.") }
                } catch { continuation?.finish(throwing: error); return }
            }
            if buffer.count > 8 * 1024 * 1024 { continuation?.finish(throwing: AgentRuntimeError(code: "protocol_limit", message: "Harness event exceeds limit.")); return }
        }
    }
    func shutdown() {
        #if os(macOS)
        try? input.fileHandleForWriting.close()
        if process?.isRunning == true { process?.terminate() }
        #endif
    }
}
