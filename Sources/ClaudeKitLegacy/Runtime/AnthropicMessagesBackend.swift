import Foundation

public struct AnthropicMessagesBackendConfiguration: Sendable {
    public let baseURL: URL
    public let model: String
    public let maxTokens: Int
    public let anthropicVersion: String
    public let instructions: String
    public let maxToolRounds: Int
    public let extraHeaders: [String: String]

    public init(
        baseURL: URL = URL(string: "https://api.anthropic.com/v1/messages")!,
        model: String = "claude-sonnet-4-6",
        maxTokens: Int = 4096,
        anthropicVersion: String = "2023-06-01",
        instructions: String = "You are a helpful assistant embedded in an Apple platform app. Use host-defined tools when useful, and do not assume access to files, shell, or network unless a tool explicitly provides it.",
        maxToolRounds: Int = 8,
        extraHeaders: [String: String] = [:]
    ) {
        self.baseURL = baseURL
        self.model = model
        self.maxTokens = maxTokens
        self.anthropicVersion = anthropicVersion
        self.instructions = instructions
        self.maxToolRounds = maxToolRounds
        self.extraHeaders = extraHeaders
    }

    var defaultThreadConfiguration: AgentThreadConfiguration {
        AgentThreadConfiguration(model: model, maxTokens: maxTokens)
    }
}

public actor AnthropicMessagesBackend: AgentBackend {
    public let baseInstructions: String?
    public let defaultThreadConfiguration: AgentThreadConfiguration?

    private let configuration: AnthropicMessagesBackendConfiguration
    private let urlSession: URLSession
    private let encoder = JSONEncoder()
    private let decoder = JSONDecoder()

    public init(
        configuration: AnthropicMessagesBackendConfiguration = AnthropicMessagesBackendConfiguration(),
        urlSession: URLSession = .shared
    ) {
        self.configuration = configuration
        self.urlSession = urlSession
        self.baseInstructions = configuration.instructions
        self.defaultThreadConfiguration = configuration.defaultThreadConfiguration
    }

    public func createThread(session _: AnthropicSession) async throws -> AgentThread {
        AgentThread(
            id: UUID().uuidString,
            configuration: configuration.defaultThreadConfiguration
        )
    }

    public func resumeThread(id: String, session _: AnthropicSession) async throws -> AgentThread {
        AgentThread(
            id: id,
            configuration: configuration.defaultThreadConfiguration
        )
    }

    public func beginTurn(
        thread: AgentThread,
        history: [AgentMessage],
        message: Request,
        instructions: String,
        tools: [ToolDefinition],
        session: AnthropicSession
    ) async throws -> AgentTurnStream {
        let pendingToolResults = PendingToolResults()
        let turn = AgentTurn(threadID: thread.id)
        let threadConfiguration = thread.configuration ?? configuration.defaultThreadConfiguration

        let events = AsyncThrowingStream<AgentBackendEvent, Error> { continuation in
            continuation.yield(.turnStarted(turn))

            Task {
                do {
                    let runner = AnthropicMessagesTurnRunner(
                        configuration: configuration,
                        threadConfiguration: threadConfiguration,
                        urlSession: urlSession,
                        encoder: encoder,
                        decoder: decoder,
                        instructions: instructions,
                        threadID: thread.id,
                        turnID: turn.id,
                        tools: tools,
                        session: session,
                        pendingToolResults: pendingToolResults,
                        continuation: continuation
                    )
                    let usage = try await runner.run(history: history, newMessage: message)
                    continuation.yield(
                        .turnCompleted(
                            AgentTurnSummary(
                                threadID: thread.id,
                                turnID: turn.id,
                                usage: usage
                            )
                        )
                    )
                    continuation.finish()
                } catch {
                    continuation.finish(throwing: error)
                }
            }
        }

        return AgentTurnStream(events: events) { result, invocationID in
            await pendingToolResults.resolve(result, for: invocationID)
        }
    }
}

private actor PendingToolResults {
    private var buffered: [String: ToolResultEnvelope] = [:]
    private var continuations: [String: CheckedContinuation<ToolResultEnvelope, Never>] = [:]

    func resolve(_ result: ToolResultEnvelope, for invocationID: String) {
        if let continuation = continuations.removeValue(forKey: invocationID) {
            continuation.resume(returning: result)
        } else {
            buffered[invocationID] = result
        }
    }

    func wait(for invocationID: String) async -> ToolResultEnvelope {
        if let result = buffered.removeValue(forKey: invocationID) {
            return result
        }

        return await withCheckedContinuation { continuation in
            continuations[invocationID] = continuation
        }
    }
}

private struct AnthropicMessagesTurnRunner {
    let configuration: AnthropicMessagesBackendConfiguration
    let threadConfiguration: AgentThreadConfiguration
    let urlSession: URLSession
    let encoder: JSONEncoder
    let decoder: JSONDecoder
    let instructions: String
    let threadID: String
    let turnID: String
    let tools: [ToolDefinition]
    let session: AnthropicSession
    let pendingToolResults: PendingToolResults
    let continuation: AsyncThrowingStream<AgentBackendEvent, Error>.Continuation

    func run(history: [AgentMessage], newMessage: Request) async throws -> AgentUsage {
        var messages = history.compactMap(AnthropicMessage.init(agentMessage:))
        messages.append(.user(content: Self.contentBlocks(for: newMessage)))

        var aggregateText = ""
        var aggregateUsage = AgentUsage()

        for _ in 0..<configuration.maxToolRounds {
            let response = try await streamOnce(messages: messages)
            aggregateText += response.text
            aggregateUsage.inputTokens += response.usage.inputTokens
            aggregateUsage.outputTokens += response.usage.outputTokens

            guard !response.toolUses.isEmpty else {
                let assistantMessage = AgentMessage(
                    threadID: threadID,
                    role: .assistant,
                    text: aggregateText
                )
                continuation.yield(.assistantMessageCompleted(assistantMessage))
                return aggregateUsage
            }

            messages.append(.assistant(content: response.assistantContent))

            var toolResultBlocks: [JSONValue] = []
            for toolUse in response.toolUses {
                let invocation = ToolInvocation(
                    id: toolUse.id,
                    threadID: threadID,
                    turnID: turnID,
                    toolName: toolUse.name,
                    arguments: toolUse.input
                )
                continuation.yield(.toolCallRequested(invocation))
                let result = await pendingToolResults.wait(for: invocation.id)
                toolResultBlocks.append(Self.toolResultBlock(for: result))
            }
            messages.append(.user(content: toolResultBlocks))
        }

        throw AgentRuntimeError(
            code: "tool_round_limit_exceeded",
            message: "Claude requested more than \(configuration.maxToolRounds) tool continuation rounds."
        )
    }

    private func streamOnce(messages: [AnthropicMessage]) async throws -> AnthropicStreamResult {
        var request = URLRequest(url: configuration.baseURL)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("text/event-stream", forHTTPHeaderField: "Accept")
        for (field, value) in session.credential.requestHeaders {
            request.setValue(value, forHTTPHeaderField: field)
        }
        request.setValue(configuration.anthropicVersion, forHTTPHeaderField: "anthropic-version")

        for (field, value) in configuration.extraHeaders {
            request.setValue(value, forHTTPHeaderField: field)
        }

        let body = AnthropicRequestBody(
            model: threadConfiguration.model,
            maxTokens: threadConfiguration.maxTokens,
            system: instructions,
            messages: messages,
            tools: tools.map(AnthropicToolDefinition.init(tool:)),
            toolChoice: tools.isEmpty ? nil : AnthropicToolChoice(type: "auto"),
            stream: true
        )
        request.httpBody = try encoder.encode(body)

        let (bytes, response) = try await urlSession.bytes(for: request)
        guard let httpResponse = response as? HTTPURLResponse else {
            throw AgentRuntimeError.transport("Anthropic returned a non-HTTP response.")
        }

        guard (200..<300).contains(httpResponse.statusCode) else {
            throw AgentRuntimeError.transport("Anthropic request failed with HTTP \(httpResponse.statusCode).")
        }

        var parser = AnthropicSSEParser()

        for try await line in bytes.lines {
            if let event = try parser.feed(line: line) {
                try handle(event, state: &parser.state)
            }
        }

        if let event = try parser.finish() {
            try handle(event, state: &parser.state)
        }

        return parser.state.result()
    }

    private func handle(
        _ event: AnthropicSSEEvent,
        state: inout AnthropicStreamState
    ) throws {
        let value = try decoder.decode(JSONValue.self, from: Data(event.data.utf8))
        let type = value["type"]?.stringValue ?? event.name

        switch type {
        case "message_start":
            if let usage = value["message"]?["usage"] {
                state.usage.inputTokens = usage["input_tokens"]?.intValue ?? 0
                state.usage.outputTokens = usage["output_tokens"]?.intValue ?? 0
            }

        case "content_block_start":
            guard let index = value["index"]?.intValue,
                  let block = value["content_block"]?.objectValue,
                  let blockType = block["type"]?.stringValue
            else {
                return
            }
            state.startBlock(index: index, type: blockType, block: .object(block))

        case "content_block_delta":
            guard let index = value["index"]?.intValue,
                  let delta = value["delta"]?.objectValue,
                  let deltaType = delta["type"]?.stringValue
            else {
                return
            }

            if deltaType == "text_delta",
               let text = delta["text"]?.stringValue {
                state.appendText(text, index: index)
                continuation.yield(
                    .assistantMessageDelta(
                        threadID: threadID,
                        turnID: turnID,
                        delta: text
                    )
                )
            } else if deltaType == "input_json_delta",
                      let partialJSON = delta["partial_json"]?.stringValue {
                state.appendToolInput(partialJSON, index: index)
            }

        case "content_block_stop":
            if let index = value["index"]?.intValue {
                state.stopBlock(index: index)
            }

        case "message_delta":
            if let usage = value["usage"] {
                state.usage.outputTokens = usage["output_tokens"]?.intValue ?? state.usage.outputTokens
            }

        case "error":
            let message = value["error"]?["message"]?.stringValue ?? "Anthropic stream returned an error."
            throw AgentRuntimeError.transport(message)

        default:
            return
        }
    }

    private static func contentBlocks(for request: Request) -> [JSONValue] {
        var content: [JSONValue] = []
        let text = request.transportText.trimmingCharacters(in: .whitespacesAndNewlines)

        if !text.isEmpty {
            content.append(.object([
                "type": .string("text"),
                "text": .string(text),
            ]))
        }

        content.append(contentsOf: request.images.map { image in
            .object([
                "type": .string("image"),
                "source": .object([
                    "type": .string("base64"),
                    "media_type": .string(image.mediaType),
                    "data": .string(image.data.base64EncodedString()),
                ]),
            ])
        })

        return content
    }

    private static func toolResultBlock(for result: ToolResultEnvelope) -> JSONValue {
        let content = result.primaryText ?? result.errorMessage ?? ""
        var block: [String: JSONValue] = [
            "type": .string("tool_result"),
            "tool_use_id": .string(result.invocationID),
            "content": .string(content),
        ]

        if !result.success {
            block["is_error"] = .bool(true)
        }

        return .object(block)
    }
}

private struct AnthropicRequestBody: Encodable {
    let model: String
    let maxTokens: Int
    let system: String
    let messages: [AnthropicMessage]
    let tools: [AnthropicToolDefinition]?
    let toolChoice: AnthropicToolChoice?
    let stream: Bool

    init(
        model: String,
        maxTokens: Int,
        system: String,
        messages: [AnthropicMessage],
        tools: [AnthropicToolDefinition],
        toolChoice: AnthropicToolChoice?,
        stream: Bool
    ) {
        self.model = model
        self.maxTokens = maxTokens
        self.system = system
        self.messages = messages
        self.tools = tools.isEmpty ? nil : tools
        self.toolChoice = toolChoice
        self.stream = stream
    }

    enum CodingKeys: String, CodingKey {
        case model
        case maxTokens = "max_tokens"
        case system
        case messages
        case tools
        case toolChoice = "tool_choice"
        case stream
    }
}

private struct AnthropicToolChoice: Encodable {
    let type: String
}

private struct AnthropicToolDefinition: Encodable {
    let name: String
    let description: String
    let inputSchema: JSONValue

    init(tool: ToolDefinition) {
        self.name = tool.name
        self.description = tool.description
        self.inputSchema = tool.inputSchema
    }

    enum CodingKeys: String, CodingKey {
        case name
        case description
        case inputSchema = "input_schema"
    }
}

private struct AnthropicMessage: Encodable, Sendable {
    let role: String
    let content: [JSONValue]

    static func user(content: [JSONValue]) -> AnthropicMessage {
        AnthropicMessage(role: "user", content: content)
    }

    static func assistant(content: [JSONValue]) -> AnthropicMessage {
        AnthropicMessage(role: "assistant", content: content)
    }

    init(role: String, content: [JSONValue]) {
        self.role = role
        self.content = content
    }

    init?(agentMessage: AgentMessage) {
        switch agentMessage.role {
        case .user:
            var content: [JSONValue] = []
            if !agentMessage.text.isEmpty {
                content.append(.object([
                    "type": .string("text"),
                    "text": .string(agentMessage.text),
                ]))
            }
            content.append(contentsOf: agentMessage.images.map { image in
                .object([
                    "type": .string("image"),
                    "source": .object([
                        "type": .string("base64"),
                        "media_type": .string(image.mediaType),
                        "data": .string(image.data.base64EncodedString()),
                    ]),
                ])
            })
            self.init(role: "user", content: content)

        case .assistant:
            guard !agentMessage.text.isEmpty else {
                return nil
            }
            self.init(role: "assistant", content: [
                .object([
                    "type": .string("text"),
                    "text": .string(agentMessage.text),
                ]),
            ])

        case .system, .tool:
            return nil
        }
    }
}

private struct AnthropicSSEEvent: Sendable {
    let name: String
    let data: String
}

private struct AnthropicSSEParser {
    var state = AnthropicStreamState()
    private var eventName = "message"
    private var dataLines: [String] = []

    mutating func feed(line: String) throws -> AnthropicSSEEvent? {
        if line.isEmpty {
            return emit()
        }

        if line.hasPrefix(":") {
            return nil
        }

        if line.hasPrefix("event:") {
            eventName = String(line.dropFirst("event:".count)).trimmingCharacters(in: .whitespaces)
        } else if line.hasPrefix("data:") {
            dataLines.append(String(line.dropFirst("data:".count)).trimmingCharacters(in: .whitespaces))
        }

        return nil
    }

    mutating func finish() throws -> AnthropicSSEEvent? {
        emit()
    }

    private mutating func emit() -> AnthropicSSEEvent? {
        guard !dataLines.isEmpty else {
            eventName = "message"
            return nil
        }

        let event = AnthropicSSEEvent(
            name: eventName,
            data: dataLines.joined(separator: "\n")
        )
        eventName = "message"
        dataLines.removeAll()
        return event
    }
}

private struct AnthropicStreamResult: Sendable {
    let text: String
    let assistantContent: [JSONValue]
    let toolUses: [AnthropicToolUse]
    let usage: AgentUsage
}

private struct AnthropicToolUse: Sendable {
    let id: String
    let name: String
    let input: JSONValue
}

private struct AnthropicToolAccumulator {
    var id: String
    var name: String
    var seedInput: JSONValue
    var partialInput: String = ""
}

private struct AnthropicStreamState {
    var usage = AgentUsage()
    private var textByIndex: [Int: String] = [:]
    private var toolByIndex: [Int: AnthropicToolAccumulator] = [:]
    private var contentByIndex: [Int: JSONValue] = [:]

    mutating func startBlock(index: Int, type: String, block: JSONValue) {
        if type == "tool_use",
           let object = block.objectValue {
            let id = object["id"]?.stringValue ?? UUID().uuidString
            let name = object["name"]?.stringValue ?? ""
            let input = object["input"] ?? .object([:])
            toolByIndex[index] = AnthropicToolAccumulator(
                id: id,
                name: name,
                seedInput: input
            )
        } else if type == "text" {
            textByIndex[index] = ""
            contentByIndex[index] = .object([
                "type": .string("text"),
                "text": .string(""),
            ])
        } else {
            contentByIndex[index] = block
        }
    }

    mutating func appendText(_ text: String, index: Int) {
        textByIndex[index, default: ""] += text
        contentByIndex[index] = .object([
            "type": .string("text"),
            "text": .string(textByIndex[index] ?? ""),
        ])
    }

    mutating func appendToolInput(_ partialJSON: String, index: Int) {
        toolByIndex[index]?.partialInput += partialJSON
    }

    mutating func stopBlock(index: Int) {
        guard let accumulator = toolByIndex[index] else {
            return
        }

        let input = parseToolInput(accumulator)
        contentByIndex[index] = .object([
            "type": .string("tool_use"),
            "id": .string(accumulator.id),
            "name": .string(accumulator.name),
            "input": input,
        ])
    }

    func result() -> AnthropicStreamResult {
        let content = contentByIndex.keys.sorted().compactMap { contentByIndex[$0] }
        let toolUses = toolByIndex.keys.sorted().compactMap { index -> AnthropicToolUse? in
            guard let accumulator = toolByIndex[index] else {
                return nil
            }
            return AnthropicToolUse(
                id: accumulator.id,
                name: accumulator.name,
                input: parseToolInput(accumulator)
            )
        }
        let text = textByIndex.keys.sorted().compactMap { textByIndex[$0] }.joined()
        return AnthropicStreamResult(
            text: text,
            assistantContent: content,
            toolUses: toolUses,
            usage: usage
        )
    }

    private func parseToolInput(_ accumulator: AnthropicToolAccumulator) -> JSONValue {
        guard !accumulator.partialInput.isEmpty else {
            return accumulator.seedInput
        }

        guard let data = accumulator.partialInput.data(using: .utf8),
              let decoded = try? JSONDecoder().decode(JSONValue.self, from: data)
        else {
            return .object([:])
        }

        return decoded
    }
}
