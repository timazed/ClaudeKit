import Foundation

public struct ClaudeAccount: Codable, Hashable, Sendable {
    public let email: String?
    public let provider: String
    public let authentication: String
    public init(email: String?, provider: String = "firstParty", authentication: String = "account") {
        self.email = email; self.provider = provider; self.authentication = authentication
    }
}

public struct ClaudeSignInRequest: Sendable, Identifiable {
    public let id: UUID
    public let automaticURL: URL
    public let manualURL: URL
    public let submitCode: @Sendable (String) async throws -> Void
    public init(automaticURL: URL, manualURL: URL, submitCode: @escaping @Sendable (String) async throws -> Void) {
        id = UUID(); self.automaticURL = automaticURL; self.manualURL = manualURL; self.submitCode = submitCode
    }
}

public protocol ClaudeSignInPresenting: Sendable {
    func present(_ request: ClaudeSignInRequest) async
    func dismiss() async
}
