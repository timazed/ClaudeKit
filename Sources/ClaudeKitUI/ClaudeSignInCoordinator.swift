import ClaudeKit
import Combine
import Foundation

@MainActor public final class ClaudeSignInCoordinator: ObservableObject, ClaudeSignInPresenting {
    public struct BrowserPage: Identifiable { public let id = UUID(); public let url: URL }
    @Published public var page: BrowserPage?
    @Published public private(set) var request: ClaudeSignInRequest?
    /// Cancel the task awaiting AgentRuntime.signIn() when the user ends login.
    public var onCancel: (@MainActor () -> Void)?
    public init() {}
    public func present(_ request: ClaudeSignInRequest) async { self.request = request; openBrowser() }
    public func dismiss() async { page = nil; request = nil }
    public func cancel(browserPageID: UUID? = nil) {
        if let browserPageID, page?.id != browserPageID { return }
        guard request != nil else { return }
        page = nil; request = nil
        onCancel?()
    }
    public func openBrowser(manual: Bool = false) {
        guard let request else { return }; page = .init(url: manual ? request.manualURL : request.automaticURL)
    }
    public func submitCode(_ code: String) async throws {
        guard let request else { throw CancellationError() }
        try await request.submitCode(code)
    }
}

#if os(iOS)
import SwiftUI
import AuthenticationServices
public struct ClaudeSignInBrowser: UIViewControllerRepresentable {
    public let url: URL
    public let onCancel: @MainActor () -> Void
    public let onError: @MainActor (String) -> Void
    public init(url: URL, onCancel: @escaping @MainActor () -> Void = {},
                onError: @escaping @MainActor (String) -> Void = { _ in }) {
        self.url = url; self.onCancel = onCancel; self.onError = onError
    }
    public func makeUIViewController(context: Context) -> AuthenticationController {
        AuthenticationController(url: url, onCancel: onCancel, onError: onError)
    }
    public func updateUIViewController(_ controller: AuthenticationController, context: Context) {}
    public static func dismantleUIViewController(_ controller: AuthenticationController, coordinator: ()) {
        controller.stop()
    }

    public final class AuthenticationController: UIViewController, ASWebAuthenticationPresentationContextProviding {
        let url: URL
        let onCancel: @MainActor () -> Void
        let onError: @MainActor (String) -> Void
        var session: ASWebAuthenticationSession?
        var ended = false
        init(url: URL, onCancel: @escaping @MainActor () -> Void, onError: @escaping @MainActor (String) -> Void) {
            self.url = url; self.onCancel = onCancel; self.onError = onError
            super.init(nibName: nil, bundle: nil)
        }
        required init?(coder: NSCoder) { return nil }
        public override func viewDidAppear(_ animated: Bool) {
            super.viewDidAppear(animated)
            guard session == nil, !ended, view.window != nil else { return }
            // The official harness owns its HTTP loopback callback and token exchange.
            // Completion is observed by the driver, which dismisses this controller.
            let session = ASWebAuthenticationSession(url: url, callbackURLScheme: nil) { [weak self] _, error in
                Task { @MainActor [weak self] in
                    guard let self, !self.ended else { return }
                    self.ended = true; self.session = nil
                    if let error, (error as? ASWebAuthenticationSessionError)?.code != .canceledLogin {
                        self.onError("The sign-in browser could not complete the session.")
                    }
                    self.onCancel()
                }
            }
            session.presentationContextProvider = self
            session.prefersEphemeralWebBrowserSession = true
            self.session = session
            if !session.start() {
                stop(); onError("The sign-in browser could not start."); onCancel()
            }
        }
        public func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
            view.window ?? ASPresentationAnchor()
        }
        func stop() {
            ended = true
            let current = session; session = nil
            current?.cancel()
        }
    }
}
#endif
