# Memory

[Documentation index](index.md)

ClaudeKit memory is an app-owned collection of facts and preferences in `StoredRuntimeState`. It is distinct from the official harness transcript. Saving a record does not automatically inject it into every request.

## Choose an authoring path

| Path | Use when |
| --- | --- |
| `saveMemory` / `deleteMemory` | The app knows exactly which fact to save or remove |
| `installMemoryTools` | The harness should retrieve/write/forget through native tools |
| `Request(memory:)` | The app wants deterministic retrieval and injection before a turn |
| `semanticMemories` | The app wants embedding-based ranking from a selected provider |

ClaudeKit does not currently expose CodexKit's separate `MemoryWriter`, independent `MemoryStoring` package, configurable placement pipeline or post-turn extraction system. Automatic capture here means allowing the harness's memory tool to write without a user approval prompt. It is not a second extraction model call after every turn.

## Explicit records and scope

```swift
var preference = AgentMemoryRecord(
    text: "Use metric measurements.", tags: ["units"], threadID: thread.id
)
try await runtime.saveMemory(preference)
preference.text = "Use metric measurements and Celsius."
try await runtime.saveMemory(preference) // replaces the same ID
```

A non-nil `threadID` scopes the record to that conversation; nil makes it global within the account-bound store. “Global” does not mean shared across app users or providers. Keep the same ID when editing, and update `updatedAt` if the edit should affect recency ranking. `sourceMessageIDs` can preserve provenance.

Public writes require an idle runtime. Harness memory-tool writes instead verify their active execution and permitted scope. Deleting a thread removes its scoped memories. `deleteMemory(id:)` removes the record; it cannot retract memory already sent in an earlier model request.

Records accept text up to 16 KiB and at most 64 tags, each up to 4096 bytes. There is no arbitrary 1,000-record ceiling, but the chosen store's payload limits and device resources still apply.

## Retrieve and inject

```swift
let selection = AgentMemorySelection(query: "units", limit: 8,
                                     includeGlobal: true, maximumContextBytes: 32 * 1024)
let records = try await runtime.memories(matching: selection, in: thread.id)
let reply = try await runtime.send(Request(text: "Suggest a recipe.", memory: selection), in: thread.id)
```

Lexical retrieval splits the query into terms, matches record text/tags, then orders by match count, newest `updatedAt`, and ID. An empty query selects recent eligible records. Selection supports 1–256 records and a query up to 32 KiB.

The selected records are JSON-encoded into a labeled reference-data block. `maximumContextBytes` applies to that encoded block; nil removes this particular budget. An exceeded explicit budget throws `memory_limit` rather than silently truncating facts. Request-level memory is opt-in. The block is appended after compiled persona/skill instructions; configurable insertion positions are not implemented.

`memoryAttribution(for:)` takes the execution/turn ID string and reports selected record IDs for a persisted turn. It records selection, not proof that the model used each fact. Ephemeral requests do not save this attribution.

## Harness memory tools

Call this once while idle, before starting turns:

```swift
try await runtime.installMemoryTools(policy: .init(
    automaticCapture: false,
    allowGlobalWrites: false
))
```

This registers `remember_memory`, `recall_memory` and `forget_memory`, plus guidance about stable preferences and avoiding secrets/transient state. Writes require approval by default. `automaticCapture: true` makes write tools automatic; it does not force the model to call them. `allowGlobalWrites` grants global write/delete scope. Recall can read eligible global preferences even when global writes are disabled.

Tool names must not already be registered. The harness decides whether to call them; normal tool policy, budgets and cancellation still apply.

## Embedding retrieval and diagnostics

```swift
let embedding = AppleMemoryEmbedding(language: "en")
let matches = try await runtime.semanticMemories(
    query: "temperature preferences", in: thread.id, using: embedding, limit: 8
)
let diagnostics = await runtime.memoryRetrievalDiagnostics()
print(diagnostics?.cacheHits ?? 0)
```

Apple sentence embeddings depend on installed language assets. Custom `AgentMemoryEmbedding` implementations return finite vectors of consistent dimensions (at most 4096). Set a stable `cacheIdentifier` that includes the model/version to enable reuse; the default nil disables cross-query caching. Change that identifier when embedding semantics change.

Vectors are cached in process by provider identity and record content. Edits/deletions invalidate entries; account changes invalidate the cache. They are not a durable vector database and are rebuilt after restart. `clearMemoryEmbeddingCache()` clears cached vectors and diagnostics. Diagnostics report candidate count, cache hits, newly embedded records and dimensions.

Semantic retrieval returns ranked records; `Request(memory:)` still performs lexical selection. To use semantic results in a turn, include the selected records explicitly as app context. This does not automatically create lexical memory-attribution entries.

## Storage and future sharing

Memory records currently live alongside the app projection in File, SQLite or Realm state stores. There is no independent shared memory package between ClaudeKit and CodexKit today. If the app needs cross-provider memory now, own its canonical records at the app layer and explicitly provide selected context to each SDK; do not equate Claude and ChatGPT account identities automatically.

See [persistence](persistence.md) for exports, account binding and redaction behavior.
