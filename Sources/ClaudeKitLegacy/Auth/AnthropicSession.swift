import Foundation

public struct AnthropicAccount: Codable, Hashable, Sendable {
    public var id: String?
    public var email: String?

    public init(id: String? = nil, email: String? = nil) {
        self.id = id
        self.email = email
    }
}

public enum AnthropicCredential: Codable, Hashable, Sendable {
    case apiKey(String)
    case bearerToken(String)

    public var secretValue: String {
        switch self {
        case let .apiKey(value),
             let .bearerToken(value):
            value
        }
    }

    var requestHeaders: [String: String] {
        switch self {
        case let .apiKey(value):
            ["x-api-key": value]
        case let .bearerToken(value):
            ["Authorization": "Bearer \(value)"]
        }
    }
}

public struct AnthropicSession: Codable, Hashable, Sendable {
    public var credential: AnthropicCredential
    public var account: AnthropicAccount?
    public var acquiredAt: Date

    public init(
        apiKey: String,
        account: AnthropicAccount? = nil,
        acquiredAt: Date = Date()
    ) {
        self.credential = .apiKey(apiKey)
        self.account = account
        self.acquiredAt = acquiredAt
    }

    public init(
        bearerToken: String,
        account: AnthropicAccount? = nil,
        acquiredAt: Date = Date()
    ) {
        self.credential = .bearerToken(bearerToken)
        self.account = account
        self.acquiredAt = acquiredAt
    }

    public var apiKey: String? {
        guard case let .apiKey(value) = credential else {
            return nil
        }
        return value
    }
}

public protocol AnthropicAuthProviding: Sendable {
    func signIn() async throws -> AnthropicSession
}

public struct AnthropicAPIKeyAuthProvider: AnthropicAuthProviding {
    private let resolver: @Sendable () throws -> String

    public init(apiKey: String) {
        self.resolver = { apiKey }
    }

    public init(environmentVariable name: String = "ANTHROPIC_API_KEY") {
        self.resolver = {
            guard let value = ProcessInfo.processInfo.environment[name],
                  !value.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
            else {
                throw AgentRuntimeError(
                    code: "missing_api_key",
                    message: "Environment variable \(name) does not contain an Anthropic API key."
                )
            }
            return value
        }
    }

    public func signIn() async throws -> AnthropicSession {
        try AnthropicSession(apiKey: resolver())
    }
}

public struct AnthropicBearerTokenAuthProvider: AnthropicAuthProviding {
    private let resolver: @Sendable () throws -> String

    public init(token: String) {
        self.resolver = { token }
    }

    public init(environmentVariable name: String = "ANTHROPIC_AUTH_TOKEN") {
        self.resolver = {
            guard let value = ProcessInfo.processInfo.environment[name],
                  !value.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
            else {
                throw AgentRuntimeError(
                    code: "missing_bearer_token",
                    message: "Environment variable \(name) does not contain an Anthropic bearer token."
                )
            }
            return value
        }
    }

    public func signIn() async throws -> AnthropicSession {
        try AnthropicSession(bearerToken: resolver())
    }
}

public struct ClaudeCodeOAuthTokenAuthProvider: AnthropicAuthProviding {
    private let resolver: @Sendable () throws -> String

    public init(token: String) {
        self.resolver = { token }
    }

    public init(environmentVariable name: String = "CLAUDE_CODE_OAUTH_TOKEN") {
        self.resolver = {
            guard let value = ProcessInfo.processInfo.environment[name],
                  !value.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
            else {
                throw AgentRuntimeError(
                    code: "missing_oauth_token",
                    message: "Environment variable \(name) does not contain a Claude Code OAuth token."
                )
            }
            return value
        }
    }

    public func signIn() async throws -> AnthropicSession {
        try AnthropicSession(bearerToken: resolver())
    }
}
