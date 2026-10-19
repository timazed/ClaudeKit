import ClaudeKitLegacy
import Combine
import Foundation

@MainActor
public final class AgentRuntimeStore: ObservableObject {
    @Published public private(set) var threads: [AgentThread] = []
    @Published public private(set) var messagesByThread: [String: [AgentMessage]] = [:]
    @Published public private(set) var lastError: Error?

    public let runtime: AgentRuntime

    public init(runtime: AgentRuntime) {
        self.runtime = runtime
    }

    public func restore() async {
        do {
            _ = try await runtime.restore()
            await refresh()
        } catch {
            lastError = error
        }
    }

    public func refresh() async {
        let threads = await runtime.threads()
        var messages: [String: [AgentMessage]] = [:]
        for thread in threads {
            messages[thread.id] = await runtime.messages(for: thread.id)
        }
        self.threads = threads
        self.messagesByThread = messages
    }

    @discardableResult
    public func createThread(title: String? = nil) async throws -> AgentThread {
        let thread = try await runtime.createThread(title: title)
        await refresh()
        return thread
    }
}
