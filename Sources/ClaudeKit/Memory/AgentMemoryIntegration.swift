import Foundation
#if canImport(NaturalLanguage)
import NaturalLanguage
#endif

public protocol AgentMemoryEmbedding: Sendable {
    /// A stable model/version identifier enables reuse. Change it when embedding semantics change.
    var cacheIdentifier: String? { get }
    func embedding(for text: String) async throws -> [Double]
}
public extension AgentMemoryEmbedding { var cacheIdentifier: String? { nil } }

struct MemoryEmbeddingEntry { let record: AgentMemoryRecord; let vector: [Double] }
public struct AgentMemoryRetrievalDiagnostics: Sendable {
    public let candidateCount: Int
    public let cacheHits: Int
    public let embeddedCount: Int
    public let dimensions: Int
}
#if canImport(NaturalLanguage)
public actor AppleMemoryEmbedding: AgentMemoryEmbedding {
    private nonisolated let language: String
    public nonisolated var cacheIdentifier: String? { "apple-sentence-" + language + "-" + String(NLEmbedding.currentSentenceEmbeddingRevision(for: NLLanguage(rawValue: language))) }
    public init(language: String = "en") { self.language = language }
    public func embedding(for text: String) throws -> [Double] {
        guard text.utf8.count <= 16384, let model = NLEmbedding.sentenceEmbedding(for: NLLanguage(rawValue: language)), let vector = model.vector(for: text) else {
            throw AgentRuntimeError(code: "embedding_unavailable", message: "No local sentence embedding is available for this language.")
        }
        return vector
    }
}
#endif
public struct AgentMemoryApplication: Codable, Hashable, Sendable {
    public let turnID: String
    public let threadID: String
    public let recordIDs: [String]
    public let appliedAt: Date
}
public struct AgentMemoryPolicy: Sendable {
    public var automaticCapture: Bool
    public var allowGlobalWrites: Bool
    public init(automaticCapture: Bool = false, allowGlobalWrites: Bool = false) {
        self.automaticCapture = automaticCapture; self.allowGlobalWrites = allowGlobalWrites
    }
}
public extension AgentRuntime {
    /// The official harness decides what to remember through bounded native tools.
    func installMemoryTools(policy: AgentMemoryPolicy = .init()) throws {
        try requireIdle()
        let names = ["remember_memory", "recall_memory", "forget_memory"]
        guard names.allSatisfy({ tools[$0] == nil }) else { throw AgentRuntimeError(code: "duplicate_tool", message: "Memory tool names are already registered.") }
        let writePolicy: ToolApprovalPolicy = policy.automaticCapture ? .automatic : .requiresApproval
        try registerTool(.init(name: names[0], description: "Save a durable preference or fact, with concise supporting context. Avoid secrets and transient task details.", inputSchema: .object([
            "type": .string("object"), "properties": .object(["text": .object(["type": .string("string")]), "global": .object(["type": .string("boolean")])]), "required": .array([.string("text")]), "additionalProperties": .bool(false)]), approvalPolicy: writePolicy), executor: .init { [weak self] invocation, context in
                guard let self else { return .denied(invocation: invocation) }
                return try await self.captureMemory(invocation, context: context, policy: policy)
            })
        try registerTool(.init(name: names[1], description: "Retrieve relevant saved preferences for this conversation.", inputSchema: .object(["type": .string("object"), "properties": .object(["query": .object(["type": .string("string")])]), "required": .array([.string("query")])])), executor: .init { [weak self] invocation, context in
            guard let self else { return .denied(invocation: invocation) }
            let records = try await self.memories(matching: .init(query: invocation.arguments["query"]?.stringValue ?? ""), in: context.threadID)
            return .success(invocation: invocation, text: String(decoding: try JSONEncoder().encode(records), as: UTF8.self))
        })
        try registerTool(.init(name: names[2], description: "Forget a saved memory by ID.", inputSchema: .object(["type": .string("object"), "properties": .object(["id": .object(["type": .string("string")])]), "required": .array([.string("id")])]), approvalPolicy: writePolicy), executor: .init { [weak self] invocation, context in
            guard let self else { return .denied(invocation: invocation) }
            return try await self.forgetMemory(invocation, context: context, policy: policy)
        })
        memoryGuidance = "Use recall_memory for relevant preferences. Use remember_memory for stable preferences explicitly expressed by the user, and forget_memory when asked. Do not store secrets, inferred sensitive facts, or temporary task state."
    }
    func memoryAttribution(for turnID: String) -> AgentMemoryApplication? { state.memoryApplications?.last { $0.turnID == turnID } }
    func memoryRetrievalDiagnostics() -> AgentMemoryRetrievalDiagnostics? { lastMemoryDiagnostics }
    func clearMemoryEmbeddingCache() { memoryEmbeddingCache.removeAll(); lastMemoryDiagnostics = nil }
    func semanticMemories(query: String, in threadID: String, using provider: any AgentMemoryEmbedding, limit: Int = 8) async throws -> [AgentMemoryRecord] {
        guard (1...256).contains(limit), query.utf8.count <= 32768 else { throw AgentRuntimeError(code: "memory_limit", message: "Invalid memory query.") }
        guard account != nil else { throw AgentRuntimeError.missingSession() }
        guard state.threads.contains(where: { $0.id == threadID }) else { throw AgentRuntimeError.threadNotFound(threadID) }
        let snapshot = (state.memories ?? []).filter { $0.threadID == nil || $0.threadID == threadID }
        let identity = account
        let needle = try await provider.embedding(for: query)
        guard !needle.isEmpty, needle.count <= 4096, needle.allSatisfy(\.isFinite) else { throw AgentRuntimeError(code: "invalid_embedding", message: "Invalid embedding vector.") }
        var scored: [(AgentMemoryRecord, Double)] = []
        let cacheID = provider.cacheIdentifier
        if memoryEmbeddingAccount != identity { memoryEmbeddingCache.removeAll(); memoryEmbeddingAccount = identity }
        var cache = cacheID.flatMap { memoryEmbeddingCache[$0] } ?? [:]
        let current = Dictionary(uniqueKeysWithValues: snapshot.map { ($0.id, $0) })
        cache = cache.filter { current[$0.key] == $0.value.record }
        var hits = 0, embedded = 0
        for record in snapshot {
            try Task.checkCancellation()
            let vector: [Double]
            if let entry = cache[record.id], entry.record == record { vector = entry.vector; hits += 1 }
            else { vector = try await provider.embedding(for: record.text); embedded += 1 }
            guard account == identity else { throw AgentRuntimeError(code: "account_changed", message: "Memory account changed during retrieval.") }
            guard vector.count == needle.count, vector.allSatisfy(\.isFinite) else { throw AgentRuntimeError(code: "invalid_embedding", message: "Embedding dimensions changed.") }
            guard (state.memories ?? []).contains(record) else { continue }
            cache[record.id] = MemoryEmbeddingEntry(record: record, vector: vector)
            let dot = zip(needle, vector).reduce(0.0) { $0 + $1.0 * $1.1 }
            let norm = sqrt(needle.reduce(0) { $0 + $1 * $1 } * vector.reduce(0) { $0 + $1 * $1 })
            if norm > 0 { scored.append((record, dot / norm)) }
        }
        guard account == identity else { throw AgentRuntimeError(code: "account_changed", message: "Memory account changed during retrieval.") }
        let live = Set(state.memories ?? [])
        scored.removeAll { !live.contains($0.0) }
        if let cacheID { memoryEmbeddingCache[cacheID] = cache.filter { live.contains($0.value.record) } }
        lastMemoryDiagnostics = .init(candidateCount: snapshot.count, cacheHits: hits, embeddedCount: embedded, dimensions: needle.count)
        return scored.sorted { $0.1 == $1.1 ? $0.0.id < $1.0.id : $0.1 > $1.1 }.prefix(limit).map(\.0)
    }
}
extension AgentRuntime {
    func captureMemory(_ invocation: ToolInvocation, context: ToolExecutionContext, policy: AgentMemoryPolicy) async throws -> ToolResultEnvelope {
        guard executions.values.contains(where: { $0.id.uuidString == context.turnID && $0.threadID == context.threadID }), !Task.isCancelled else { throw CancellationError() }
        let text = invocation.arguments["text"]?.stringValue ?? ""
        let global = invocation.arguments["global"]?.boolValue == true
        guard !text.isEmpty, text.utf8.count <= 16384, !global || policy.allowGlobalWrites else {
            throw AgentRuntimeError(code: "memory_limit", message: "Memory content or scope is not allowed.")
        }
        var record = AgentMemoryRecord(text: text, threadID: global ? nil : context.threadID)
        record.sourceMessageIDs = (state.messagesByThread[context.threadID] ?? []).suffix(2).map(\.id)
        let previous = state; state.memories = (state.memories ?? []) + [record]
        do { try await persist() } catch { state = previous; throw error }
        return .success(invocation: invocation, text: record.id)
    }
    func forgetMemory(_ invocation: ToolInvocation, context: ToolExecutionContext, policy: AgentMemoryPolicy) async throws -> ToolResultEnvelope {
        guard executions.values.contains(where: { $0.id.uuidString == context.turnID && $0.threadID == context.threadID }), !Task.isCancelled else { throw CancellationError() }
        let id = invocation.arguments["id"]?.stringValue ?? ""
        guard let record = state.memories?.first(where: { $0.id == id }), record.threadID == context.threadID || (record.threadID == nil && policy.allowGlobalWrites) else {
            throw AgentRuntimeError(code: "memory_scope", message: "Memory is outside this tool's write scope.")
        }
        let previous = state; state.memories?.removeAll { $0.id == id }
        do { try await persist() } catch { state = previous; throw error }
        return .success(invocation: invocation, text: "Forgot memory.")
    }
}
