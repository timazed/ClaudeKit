import Foundation

public protocol SessionSecureStoring: Sendable {
    func loadSession() async throws -> AnthropicSession?
    func saveSession(_ session: AnthropicSession) async throws
    func deleteSession() async throws
}

public actor InMemorySessionSecureStore: SessionSecureStoring {
    private var session: AnthropicSession?

    public init(session: AnthropicSession? = nil) {
        self.session = session
    }

    public func loadSession() async throws -> AnthropicSession? {
        session
    }

    public func saveSession(_ session: AnthropicSession) async throws {
        self.session = session
    }

    public func deleteSession() async throws {
        session = nil
    }
}

#if canImport(Security)
import Security

public final class KeychainSessionSecureStore: SessionSecureStoring, @unchecked Sendable {
    private let service: String
    private let account: String
    private let encoder = JSONEncoder()
    private let decoder = JSONDecoder()

    public init(service: String, account: String) {
        self.service = service
        self.account = account
    }

    public func loadSession() async throws -> AnthropicSession? {
        var query = baseQuery()
        query[kSecReturnData as String] = true
        query[kSecMatchLimit as String] = kSecMatchLimitOne

        var item: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &item)

        if status == errSecItemNotFound {
            return nil
        }

        guard status == errSecSuccess else {
            throw keychainError(status)
        }

        guard let data = item as? Data else {
            throw AgentRuntimeError(
                code: "keychain_decode_failed",
                message: "The stored Anthropic session was not readable."
            )
        }

        return try decoder.decode(AnthropicSession.self, from: data)
    }

    public func saveSession(_ session: AnthropicSession) async throws {
        let data = try encoder.encode(session)
        var query = baseQuery()
        query[kSecValueData as String] = data

        let status = SecItemAdd(query as CFDictionary, nil)
        if status == errSecDuplicateItem {
            let updateStatus = SecItemUpdate(
                baseQuery() as CFDictionary,
                [kSecValueData as String: data] as CFDictionary
            )
            guard updateStatus == errSecSuccess else {
                throw keychainError(updateStatus)
            }
            return
        }

        guard status == errSecSuccess else {
            throw keychainError(status)
        }
    }

    public func deleteSession() async throws {
        let status = SecItemDelete(baseQuery() as CFDictionary)
        guard status == errSecSuccess || status == errSecItemNotFound else {
            throw keychainError(status)
        }
    }

    private func baseQuery() -> [String: Any] {
        [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
        ]
    }

    private func keychainError(_ status: OSStatus) -> AgentRuntimeError {
        let message = SecCopyErrorMessageString(status, nil) as String? ?? "Keychain error \(status)."
        return AgentRuntimeError(code: "keychain_error", message: message)
    }
}
#endif
