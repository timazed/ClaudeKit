import Foundation

public struct AgentWebSearchPolicy: Codable, Hashable, Sendable {
    public enum Mode: String, Codable, Sendable { case disabled, live }
    public var mode: Mode
    public var allowedDomains: [String]?
    public var maximumCalls: Int?
    public init(mode: Mode = .disabled, allowedDomains: [String]? = nil, maximumCalls: Int? = nil) {
        self.mode = mode; self.allowedDomains = allowedDomains; self.maximumCalls = maximumCalls
    }
    func validated() throws -> Self {
        guard maximumCalls.map({ $0 >= 0 }) ?? true, (allowedDomains?.count ?? 0) <= 128,
              (allowedDomains ?? []).allSatisfy({ $0.utf8.count <= 253 && $0.range(of: "^[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*$", options: .regularExpression) != nil }) else {
            throw AgentRuntimeError(code: "invalid_search_policy", message: "Invalid search call budget or domain allowlist.")
        }
        var value = self; value.allowedDomains = allowedDomains.map { Array(Set($0.map { $0.lowercased() })).sorted() }; return value
    }
}
extension AgentRuntime {
    func resolvedWebSearch(_ request: Request, thread: AgentThread) throws -> AgentWebSearchPolicy {
        var result = try (request.webSearch ?? .init()).validated()
        if !configuration.allowHostedSearch || request.disableTools == true { result.mode = .disabled }
        for skill in (thread.configuration?.skills ?? []) + (request.skills ?? []) {
            guard let restriction = skill.executionPolicy?.webSearch else { continue }
            let policy = try restriction.validated()
            if policy.mode == .disabled { result.mode = .disabled }
            result.maximumCalls = [result.maximumCalls, policy.maximumCalls].compactMap { $0 }.min()
            if let domains = policy.allowedDomains { result.allowedDomains = result.allowedDomains.map { Array(Set($0.flatMap { left in domains.compactMap { right -> String? in
                    if left == right || right.hasSuffix("." + left) { return right }
                    if left.hasSuffix("." + right) { return left }
                    return nil
                } })).sorted() } ?? domains }
        }
        if result.maximumCalls == 0 || result.allowedDomains?.isEmpty == true { result.mode = .disabled }
        return result
    }
}
