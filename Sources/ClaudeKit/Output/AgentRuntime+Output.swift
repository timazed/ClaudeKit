import Foundation

public struct AgentOutputExecution<Event: Sendable, Output: Sendable>: Sendable {
    public let id: UUID
    public let threadID: String
    public let events: AsyncThrowingStream<AgentOutputEvent<Event, Output>, Error>
    private let execution: AgentExecution
    init(_ execution: AgentExecution, events: AsyncThrowingStream<AgentOutputEvent<Event, Output>, Error>) {
        self.execution = execution; id = execution.id; threadID = execution.threadID; self.events = events
    }
    public func cancel() { execution.cancel() }
    public func waitUntilReady() async throws { try await execution.waitUntilReady() }
}

struct AgentOutputHooks: Sendable {
    let consume: @Sendable (String) async throws -> Void
    let answer: @Sendable (String) async throws -> Void
    let acceptsSteering: @Sendable () async -> Bool
    let finish: @Sendable (String, String) async throws -> AgentOutputRepresentation?
    let committed: @Sendable () async throws -> Void
    let lifecycle: @Sendable (AgentEvent) async throws -> Void
    let end: @Sendable (Error?) async -> Void
}

public extension AgentRuntime {
    func start<Format: AgentOutputFormat>(_ request: Request, in threadID: String, output format: Format) throws -> AgentOutputExecution<Format.Event, Format.Output> {
        let prepared = try AgentPreparedOutput(format, isEphemeral: request.isEphemeral)
        let decoder = try format.makeDecoder()
        var request = request
        request.outputSchema = format.nativeJSONSchema?.schema.jsonValue
        request.formatInstructions = prepared.instructions
        // Claude does not mark final-answer deltas separately from tool commentary.
        // Keep tools enabled and decode the end_turn document before transcript flushing.
        let policy = try effectivePolicy(for: request, in: threadID)
        let deferUntilFinal = !policy.allowedToolNames.isEmpty || policy.hostedSearchEnabled
        let channel = AgentEventChannel<AgentOutputEvent<Format.Event, Format.Output>>.makeStream(
            capacity: format.limits.maximumQueuedEventCount, maximumBufferedBytes: format.limits.maximumQueuedEventBytes)
        let stream = channel.stream, sink = channel.continuation
        let execution = try start(request, in: threadID)
        let output = AgentOutputDelivery(prepared: prepared, decoder: decoder, executionID: execution.id, threadID: threadID, deferUntilFinal: deferUntilFinal, sink: sink)
        let destination = sink
        executions[execution.id]?.outputHooks = .init(consume: { try await output.consume($0) }, answer: { try await output.consumeAnswer($0) }, acceptsSteering: { await output.acceptsSteering }, finish: { try await output.finish($0, messageID: $1) }, committed: { try await output.commit() }, lifecycle: { event in
            try await destination.yield(.lifecycle(event), byteCount: event.outputByteCount)
        }, end: { await output.end($0) })
        sink.onCancellation { execution.cancel() }
        return .init(execution, events: stream)
    }
    func send<Format: AgentOutputFormat>(_ request: Request, in threadID: String, output format: Format) async throws -> Format.Output {
        let execution = try start(request, in: threadID, output: format)
        return try await withTaskCancellationHandler {
            var result: Format.Output?
            for try await event in execution.events { if case let .outputCommitted(_, value) = event { result = value } }
            guard let result else { throw AgentOutputError.invalidOutput("Missing committed output.") }; return result
        } onCancel: { execution.cancel() }
    }
    func fetchLatestOutput<Format: AgentOutputFormat>(in threadID: String, output format: Format) throws -> Format.Output? {
        guard let envelope = state.outputs?.last(where: { $0.context.threadID == threadID && $0.codecIdentifier == format.codecIdentifier }) else { return nil }
        return try envelope.restore(using: format)
    }
}

private actor AgentOutputDelivery<Format: AgentOutputFormat> {
    let prepared: AgentPreparedOutput<Format>
    let decoder: Format.Decoder
    let executionID: UUID
    let threadID: String
    let sink: AgentEventChannel<AgentOutputEvent<Format.Event, Format.Output>>
    let deferUntilFinal: Bool
    let documentID = UUID()
    var context: AgentOutputContext?
    var source = ""
    var result: Format.Output?
    var resultByteCount = 0
    var ended = false
    init(prepared: AgentPreparedOutput<Format>, decoder: Format.Decoder, executionID: UUID, threadID: String, deferUntilFinal: Bool,
         sink: AgentEventChannel<AgentOutputEvent<Format.Event, Format.Output>>) {
        self.deferUntilFinal = deferUntilFinal
        self.prepared = prepared; self.decoder = decoder; self.executionID = executionID; self.threadID = threadID; self.sink = sink
    }
    var acceptsSteering: Bool { !ended && source.isEmpty && result == nil }
    func consume(_ text: String) async throws {
        guard !ended else { throw CancellationError() }
        // Native JSON is supplied by the harness's StructuredOutput result, never narrative text.
        if prepared.format.nativeJSONSchema != nil || deferUntilFinal { return }
        guard text.utf8.count <= prepared.format.limits.maximumInputBytes - source.utf8.count else { throw AgentOutputError.limit("Output input exceeds limit.") }
        source += text
        try await decoder.consume(Data(text.utf8), into: eventSink())
    }
    func consumeAnswer(_ text: String) async throws {
        guard deferUntilFinal, prepared.format.nativeJSONSchema == nil else { return }
        guard !ended, source.isEmpty else { throw AgentOutputError.protocolViolation("Multiple final answer documents.") }
        guard text.utf8.count <= prepared.format.limits.maximumInputBytes else { throw AgentOutputError.limit("Answer exceeds limit.") }
        source = text
        try await decoder.consume(Data(text.utf8), into: eventSink())
    }
    func eventSink() -> AgentOutputEventSink<Format.Event> {
        let context = self.context ?? AgentOutputContext(executionID: executionID, threadID: threadID, turnID: executionID.uuidString, messageID: executionID.uuidString, documentID: documentID)
        let limit = prepared.format.limits.maximumSemanticUnitBytes, sink = sink
        return .init { event, size in
            guard size >= 0, size <= limit else { throw AgentOutputError.limit("Semantic event exceeds byte limit.") }
            try await sink.yield(.format(context, event), byteCount: size)
        }
    }
    func finish(_ text: String, messageID: String) async throws -> AgentOutputRepresentation? {
        guard !ended else { throw CancellationError() }
        context = .init(executionID: executionID, threadID: threadID, turnID: executionID.uuidString, messageID: messageID, documentID: documentID)
        if prepared.format.nativeJSONSchema != nil || source.isEmpty {
            source = text
            try await decoder.consume(Data(text.utf8), into: eventSink())
        } else if source != text { throw AgentOutputError.protocolViolation("Final answer differs from streamed document.") }
        let output = try await decoder.finish(into: eventSink())
        try await prepared.format.validateFinal(output)
        try Task.checkCancellation()
        result = output
        resultByteCount = prepared.format.limits.maximumOutputBytes
        guard let persistence = prepared.persistence else {
            guard resultByteCount <= prepared.format.limits.maximumQueuedEventBytes else { throw AgentOutputError.limit("Custom output requires a queue large enough for its declared maximum output size.") }
            return nil
        }
        let bytes = try persistence.encode(output)
        resultByteCount = bytes.count
        guard bytes.count <= prepared.format.limits.maximumQueuedEventBytes else { throw AgentOutputError.limit("Committed output exceeds the event queue byte limit.") }
        guard bytes.count <= prepared.format.limits.maximumOutputBytes else { throw AgentOutputError.limit("Encoded output exceeds limit.") }
        return .init(envelopeVersion: 1, codecIdentifier: prepared.format.codecIdentifier, formatVersion: prepared.format.formatVersion,
                     context: context!, schema: prepared.schema, rawText: source, encodedOutput: bytes)
    }
    func commit() async throws {
        guard !ended, let result, let context else { throw AgentOutputError.protocolViolation("Output was not validated.") }
        try await sink.yield(.outputCommitted(context, result), byteCount: resultByteCount)
    }
    func end(_ error: Error?) async {
        guard !ended else { return }; ended = true
        if let error {
            sink.finish(throwing: error, finalElements: [.validationFailed(context, .init(error: error))]); await decoder.cancel()
        } else { sink.finish() }
    }
}

private extension AgentEvent {
    var outputByteCount: Int {
        switch self {
        case let .assistantMessageDelta(_, _, delta): return delta.utf8.count + 256
        case let .messageCommitted(message): return message.text.utf8.count + message.images.reduce(0) { $0 + $1.data.count } + 512
        case let .toolCallStarted(invocation): return invocation.arguments.compactJSONString.utf8.count + 512
        case let .toolCallFinished(result): return result.content.reduce(512) { $0 + ($1.textValue?.utf8.count ?? 0) }
        case let .progress(_, _, _, message): return (message?.utf8.count ?? 0) + 512
        default: return 1024
        }
    }
}
