public actor ToolRegistry {
    private var toolsByName: [String: (definition: ToolDefinition, executor: AnyToolExecutor)] = [:]

    public init(initialTools: [AgentRuntime.ToolRegistration] = []) throws {
        for tool in initialTools {
            try Self.validate(tool.definition)
            toolsByName[tool.definition.name] = (tool.definition, tool.executor)
        }
    }

    public func register(
        _ definition: ToolDefinition,
        executor: AnyToolExecutor
    ) throws {
        try Self.validate(definition)
        toolsByName[definition.name] = (definition, executor)
    }

    public func replace(
        _ definition: ToolDefinition,
        executor: AnyToolExecutor
    ) throws {
        try register(definition, executor: executor)
    }

    public func definition(named name: String) -> ToolDefinition? {
        toolsByName[name]?.definition
    }

    public func executor(named name: String) -> AnyToolExecutor? {
        toolsByName[name]?.executor
    }

    public func allDefinitions() -> [ToolDefinition] {
        toolsByName.values
            .map(\.definition)
            .sorted { $0.name < $1.name }
    }

    private static func validate(_ definition: ToolDefinition) throws {
        guard ToolDefinition.isValidName(definition.name) else {
            throw AgentRuntimeError.invalidToolName(definition.name)
        }
    }
}
