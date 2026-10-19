# Typed streaming output

[Documentation index](index.md)

Use typed formats when the app needs a validated value rather than parsing conversational text itself. The format owns decoding, semantic events, limits and persistence. The harness still owns model/tool iteration.

## Select a format

| Format | Result and timing |
| --- | --- |
| `AgentTextResponseFormat` | Text with format-defined events |
| `AgentJSONResponseFormat<Value>` | Schema-constrained native JSON; authoritative StructuredOutput result |
| `AgentRecordResponseFormat<Value>` | JSON Lines collection with provisional record events |
| `AgentXMLResponseFormat` | XML document with schema validation and node events |
| Custom `AgentOutputFormat` | App-defined decoder/validation/codec within the same limits contract |

```swift
struct Answer: Codable, Sendable { let answer: String }
let schema: JSONValue = .object([
    "type": .string("object"),
    "properties": .object(["answer": .object(["type": .string("string")])]),
    "required": .array([.string("answer")]),
    "additionalProperties": .bool(false)
])
let format = AgentJSONResponseFormat<Answer>(name: "answer", schema: .raw(schema))
let answer = try await runtime.send(Request(text: "Give a short answer."), in: thread.id, output: format)
print(answer.answer)
```

Native JSON crosses the harness JavaScript/Swift numeric representation. Do not assume exact integers beyond 53 bits; encode exact identifiers or decimal amounts as strings when required.

## Stream records

Using the `Answer` type defined above:

```swift
let records = AgentRecordResponseFormat<Answer>(name: "answers", minimumRecords: 1, maximumRecords: 10)
let execution = try await runtime.start(Request(text: "Give three answers."), in: thread.id, output: records)
for try await event in execution.events {
    switch event {
    case let .format(_, .recordCompleted(index, record)):
        print(index, record.answer) // provisional
    case let .outputCommitted(_, collection):
        print("Committed", collection.records.count)
    default: break
    }
}
```

A valid provisional record is not proof that the whole document will pass validation. Final decoding and caller validation happen before the assistant message/output envelope is committed. Invalid final output does not become a saved assistant message.

With tools/search available, text/JSONL/XML decoders receive the recognized `end_turn` document, avoiding tool commentary. This can happen before transcript flush, but is not token-by-token final-phase streaming equivalent to Codex. With no tools/search, text deltas can be decoded incrementally. Native JSON is taken from StructuredOutput, never narrative text. Drivers without answer-document events fall back to the final result.

## XML

```swift
let format = AgentXMLResponseFormat(name: "answer", schema: .element("answer", text: .string))
let document = try await runtime.send(Request(text: "Return the answer."), in: thread.id, output: format)
print(document.rawXML)
```

The library includes an XML schema DSL and self-contained XSD validation. DTD/entity-based external content is rejected. Unsupported schema/codec combinations should be treated as integration errors rather than bypassing validation.

## Persistence and migration

A successful non-ephemeral turn saves a versioned `AgentOutputRepresentation` containing codec/schema identity and encoded output. `fetchLatestOutput(in:output:)` restores through that format. `migrateOutput(messageID:from:to:transform:)` explicitly transforms/validates an existing saved envelope; it does not ask the model to regenerate it.

Ephemeral output is not persisted. Custom formats without a persistence codec require ephemeral requests. Their declared maximum output size must fit the output queue. Format limits also bound input bytes, semantic-unit bytes, queued events and queued bytes; custom codecs must report event sizes honestly.

Consume the stream once and cancel when abandoning it. Cancellation after a successful disk commit cannot undo that commit; replay the saved envelope rather than automatically repeating generation. See [recovery](structured-request-recovery.md) for durable structured requests across interruption.
