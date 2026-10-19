import Foundation

public struct AgentPersonaLayer: Codable, Hashable, Sendable {
    public var name: String
    public var instructions: String
    public init(name: String, instructions: String) { self.name = name; self.instructions = instructions }
}
public struct AgentPersonaStack: Codable, Hashable, Sendable {
    public var layers: [AgentPersonaLayer]
    public init(layers: [AgentPersonaLayer] = []) { self.layers = layers }
    public var isEmpty: Bool { layers.isEmpty }
}
public struct AgentSkillExecutionPolicy: Codable, Hashable, Sendable {
    public var allowedToolNames: [String]?
    public var requiredToolNames: [String]
    public var maxToolCalls: Int?
    public var maxToolCallsByName: [String: Int]?
    public var maximumParallelToolCalls: Int?
    public var webSearch: AgentWebSearchPolicy?
    public var toolSequence: [String]?
    public var maxToolRounds: Int?
    public init(allowedToolNames: [String]? = nil, requiredToolNames: [String] = [], maxToolCalls: Int? = nil,
                maxToolCallsByName: [String: Int]? = nil, maximumParallelToolCalls: Int? = nil, toolSequence: [String]? = nil, maxToolRounds: Int? = nil, webSearch: AgentWebSearchPolicy? = nil) {
        self.allowedToolNames = allowedToolNames; self.requiredToolNames = requiredToolNames
        self.maxToolCalls = maxToolCalls; self.maxToolCallsByName = maxToolCallsByName
        self.maximumParallelToolCalls = maximumParallelToolCalls; self.toolSequence = toolSequence; self.maxToolRounds = maxToolRounds; self.webSearch = webSearch
    }
}
public struct AgentSkill: Codable, Hashable, Sendable {
    public var id: String
    public var name: String
    public var instructions: String
    public var executionPolicy: AgentSkillExecutionPolicy?
    public init(id: String, name: String, instructions: String, executionPolicy: AgentSkillExecutionPolicy? = nil) {
        self.id = id; self.name = name; self.instructions = instructions; self.executionPolicy = executionPolicy
    }
}
public enum AgentInstructionCompiler {
    public static func compile(baseInstructions: String, threadPersonaStack: AgentPersonaStack? = nil,
                               threadSkills: [AgentSkill] = [], turnPersonaOverride: AgentPersonaStack? = nil,
                               turnSkills: [AgentSkill] = []) -> String {
        let persona = turnPersonaOverride.flatMap { $0.isEmpty ? nil : $0 } ?? threadPersonaStack
        var sections = persona?.isEmpty == false ? persona!.layers.map { "\($0.name):\n\($0.instructions)" } : [baseInstructions]
        for skill in threadSkills + turnSkills { sections.append("Skill \(skill.name):\n\(skill.instructions)") }
        return sections.filter { !$0.isEmpty }.joined(separator: "\n\n")
    }
}

/// Policies intersect: a turn override cannot grant access denied by a thread skill.
struct EffectiveToolPolicy {
    var allowed: Set<String>?
    var required: Set<String> = []
    var total: Int = 128
    var byName: [String: Int] = [:]
    var parallel: Int = 1
    var sequence: [String]?
    var rounds: Int = .max
    init(skills: [AgentSkill], registered: Set<String>, maximumCalls: Int? = 128, maximumParallel: Int = 4) throws {
        total = maximumCalls ?? .max
        parallel = maximumParallel
        var parallelLimits: [Int] = []
        for skill in skills {
            guard !skill.id.isEmpty, skill.id.range(of: "^[a-zA-Z0-9_-]+$", options: .regularExpression) != nil else { throw Self.invalid("Invalid skill identifier.") }
            guard let policy = skill.executionPolicy else { continue }
            let names = Set((policy.allowedToolNames ?? []) + policy.requiredToolNames + Array((policy.maxToolCallsByName ?? [:]).keys) + (policy.toolSequence ?? []))
            guard names.isSubset(of: registered) else { throw Self.invalid("Skill references an unregistered tool.") }
            if let limit = policy.maxToolRounds {
                guard limit >= 0 else { throw Self.invalid("Round budgets must be nonnegative.") }; rounds = min(rounds, limit)
            }
            if let next = policy.toolSequence {
                guard sequence == nil || sequence == next else { throw Self.invalid("Skill tool sequences conflict.") }
                sequence = next
            }
            if let names = policy.allowedToolNames { allowed = allowed.map { $0.intersection(names) } ?? Set(names) }
            required.formUnion(policy.requiredToolNames)
            if let limit = policy.maxToolCalls { guard limit >= 0 else { throw Self.invalid("Tool budgets must be nonnegative.") }; total = min(total, limit) }
            for (name, limit) in policy.maxToolCallsByName ?? [:] {
                guard limit >= 0 else { throw Self.invalid("Tool budgets must be nonnegative.") }
                byName[name] = min(byName[name] ?? Int.max, limit)
            }
            if let limit = policy.maximumParallelToolCalls { guard limit >= 1 else { throw Self.invalid("Tool concurrency must be at least one.") }; parallelLimits.append(limit) }
        }
        parallel = sequence == nil ? min(maximumParallel, parallelLimits.min() ?? maximumParallel) : 1
        if let sequence {
            guard Set(sequence).isSubset(of: allowed ?? registered), sequence.count <= total,
                  required.isSubset(of: Set(sequence)) else { throw Self.invalid("Tool sequence conflicts with the effective policy.") }
            for name in Set(sequence) where sequence.filter({ $0 == name }).count > byName[name, default: Int.max] {
                throw Self.invalid("Tool sequence exceeds a per-tool budget.")
            }
        }
        guard required.isSubset(of: allowed ?? registered), required.count <= total,
              required.allSatisfy({ byName[$0, default: 1] > 0 }) else { throw Self.invalid("Required tools conflict with the effective policy.") }
    }
    static func invalid(_ message: String) -> AgentRuntimeError { .init(code: "invalid_skill_policy", message: message) }
}
