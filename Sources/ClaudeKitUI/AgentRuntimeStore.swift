import ClaudeKit
import Combine
import Foundation

@MainActor public final class AgentRuntimeStore: ObservableObject {
    @Published public private(set) var threads: [AgentThread] = []
    @Published public private(set) var messagesByThread: [String: [AgentMessage]] = [:]
    public let runtime: AgentRuntime
    private var observation: Task<Void, Never>?
    public init(runtime: AgentRuntime) {
        self.runtime = runtime
        observation = Task { [weak self, runtime] in
            let stream = await runtime.observeState()
            for await state in stream {
                guard let self else { return }
                threads = state.threads.sorted { $0.updatedAt > $1.updatedAt }
                messagesByThread = state.messagesByThread
            }
        }
    }
    deinit { observation?.cancel() }
}
