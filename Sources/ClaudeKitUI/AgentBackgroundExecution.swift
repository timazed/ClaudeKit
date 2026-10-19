#if os(iOS)
import UIKit
import ClaudeKit

/// Holds only the finite background time granted by iOS. Expiration cancels the owned execution.
@MainActor public final class AgentBackgroundExecution {
    private var identifier: UIBackgroundTaskIdentifier = .invalid
    private var cancel: (() -> Void)?
    public init() {}
    public func begin(for execution: AgentExecution) {
        end(); cancel = { execution.cancel() }
        identifier = UIApplication.shared.beginBackgroundTask(withName: "ClaudeKit turn") { [weak self] in
            self?.cancel?(); self?.end()
        }
        if identifier == .invalid { cancel?(); cancel = nil }
    }
    public func end() {
        if identifier != .invalid { UIApplication.shared.endBackgroundTask(identifier); identifier = .invalid }
        cancel = nil
    }
}
#endif
