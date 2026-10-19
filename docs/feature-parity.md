# Non-image CodexKit capability comparison

[Documentation index](index.md)

Baseline: local CodexKit `be2e9842f19d63add93bb3f0dab8690c9ae0631a` (2.0 development line), 19 October 2026. This compares capabilities, not source compatibility.

The user authorized verification on 19 October. Current build/test results are recorded in [verification results](verification-pending.md). Image generation is excluded. This is capability alignment, not an assertion that two different harnesses have identical protocols or production qualification.

The official Claude Code 2.1.112 CLI remains the inference/tool loop. Swift adds app integration and policy enforcement. Its pinned source is unchanged.

| Area | Implemented API | Qualification / differences |
| --- | --- | --- |
| Account authentication | `restore`, `signIn`, `disconnect`, `signOut`, private browser cancellation | Official Claude account flow; real expiry/refresh qualification pending |
| Conversations | Create/configure/rename/delete, stream/send, cancellation, official transcript resume, ephemeral turns | Deleting a projection does not delete the official transcript |
| Output formats | `AgentJSONResponseFormat`, `AgentRecordResponseFormat`, `AgentXMLResponseFormat`, `AgentTextResponseFormat`, custom `AgentOutputFormat` | JSONL records and XML nodes stream provisionally; final validation precedes commit. Native JSON arrives from the final StructuredOutput result, not typed partial objects |
| Output persistence | Versioned codec/schema envelopes, `fetchLatestOutput`, `migrateOutput` | Migration is explicit and does not regenerate. JSONL/XML/text allow tools; when tools/search are available their authoritative final result is decoded after tool work, avoiding commentary contamination |
| Schemas | JSON Schema DSL/validator, XML DSL/self-contained XSD, strict JSON parsing | Unsupported assertions fail closed. Native JSON crosses JS/Double representation; do not rely on exact integers beyond 53 bits |
| Skills/personas | Layered instructions, tool allowlists/requirements, total/per-tool budgets, sequence and round constraints, parallel opt-in, `effectivePolicy`, `previewInstructions` | Tools without parallel opt-in remain serial. Runtime parallel ceiling defaults to 4 and is configurable; sequences force serial execution |
| Hosted search | Opt-in live `WebSearch`, per-request/skill restrictions, optional maximum calls, allowed domain subtrees | Requires configuration opt-in too. Claude has no equivalent cached/indexed search mode here |
| Memory | CRUD, thread/global scope, explicit injection, guided memory tools, optional automatic capture, attribution, `semanticMemories`, `AppleMemoryEmbedding` | Automatic capture uses the harness's native tool loop. Embedding availability depends on installed Apple language assets; custom providers supported. Stable model identifiers enable cached embeddings, invalidation and retrieval diagnostics; selection context budgets are explicit |
| Persistence | File/in-memory, indexed `ClaudeKitSQLite`, indexed `ClaudeKitRealm`, queries, lazy activation, redaction, thread context, import/export/migration | SQLite/Realm store threads/messages as rows with transactional updates, lazy history activation, redaction and thread context; legacy snapshots migrate on write. File storage retains its bounded snapshot format |
| Models and telemetry | Model discovery, per-thread thinking budget, input/output/cache tokens, upstream cost estimate, usage receipts, rate-limit snapshots | No invented quota values. Cost estimate is not a subscription invoice; fields are optional when upstream omits them |
| Active-turn steering | `steer(_:executionID:)` using official priority input and replay acknowledgements | Steering is accepted until typed final output begins; queued acceptance is not an immediate consumption guarantee. Upstream ordering still needs integration tests |
| Concurrent conversations | Concurrent `AgentRuntime`; one embedded Node host with independent session channels | Independent worker workspaces, one active operation per conversation, no lane cap/assignment; serialized projection writes. Device memory/performance not qualified |
| Durable recovery | Freeze tool-free ephemeral JSON, exclusive lease, account binding, attempt authorization/budget, cooldown, cancellation, receipts, retry policy, receipt decoding/migration, acknowledgement/expiry cleanup | A crash after sending may consume an attempt without a receipt. Recovery is replacement generation, not exactly-once inference. Tool side effects are excluded |
| Remote execution | `AgentRemoteClient` and `RemoteServer` durable queue, idempotent submission, cancellation, polling, completed receipts, prepared context, remote parent-job continuation | Separate server setup and server-owned Claude login required; tool-free, single account per deployment. Scheduler and HTTP receipt/restart tests pass; no remote deployment |
| Completion notification | Optional APNs silent/alert notification of remote job ID | App APNs configuration required; durable at-least-once retries with backoff; receipt polling remains authoritative |
| Apple integration | Bounded text import, App Intent example, finite iOS background execution helper | Share-extension/intent host wiring is app-owned. iOS cannot promise sustained local execution while suspended |
| Images | Outside this pass | No image generation added; existing image-input support retained |

Built-in shell execution, plugin processes, and spawned harness subagents remain disabled in the embedded iOS adapter. App tools provide the supported native execution boundary. These platform/backend differences mean this is not a claim of identical Codex behavior.

## Typed output

```swift
struct Answer: Codable, Sendable { let answer: String }
let format = AgentRecordResponseFormat<Answer>(
    name: "answers", minimumRecords: 1, maximumRecords: 10
)
let execution = try await runtime.start(Request(text: "Give three short answers"), in: thread.id, output: format)
for try await event in execution.events {
    switch event {
    case let .format(_, .recordCompleted(index, record)):
        print(index, record.answer) // provisional until outputCommitted
    case let .outputCommitted(_, collection):
        print("Validated", collection.records.count)
    default: break
    }
}
```

Consume the stream once. Awaited delivery provides backpressure with count/byte limits. If a consumer abandons the stream, cancel the execution. Custom codecs must honestly report semantic event byte sizes and bound their allocations. A nonpersistent custom format requires an ephemeral request and an event queue large enough for its declared maximum output size.

For native JSON use `AgentJSONResponseFormat<Answer>(name:schema:)`; for XML use `AgentXMLResponseFormat(name:schema:)`. JSONL/XML can emit provisional semantic events before completion, but invalid final output is not saved as an assistant message. Caller final validation runs before commit. Cancellation after a successful disk commit cannot undo that commit; the saved envelope is available for replay.

## Recovery

```swift
let id = try await runtime.prepareRecovery(
    Request(text: "Produce the report", executionMode: .ephemeral, outputSchema: schema),
    in: thread.id, maximumAttempts: 3
)
// Persist id in the app. This callback runs before each new generation attempt.
let result = try await runtime.sendRecovering(id) { attempt in
    await appAuthorizesAttempt(attempt.attemptID)
}
// Calling again returns a completed receipt without generating again.
let sameResult = try await runtime.sendRecovering(id) { _ in false }
```

`retryRecovery` permits an explicit retry without resetting its budget or cooldown. The optional retry-policy overload retries only selected transport failures and still calls authorization for each attempt. Keep attempt authorization idempotent by attempt ID. `recoveredValue(migrate:)` adapts a completed JSON receipt to a new app model without generation. Receipt acknowledgement deletes it; do this only after the application has durably consumed the result. Cancelling the task interrupts generation and preserves retry state.

## Storage and concurrency

Pass `SQLiteRuntimeStateStore(url:)` or `RealmRuntimeStateStore(url:)` as `stateStore`. `fetchMessages` uses database indexes when available. `migrateState(to:)` requires an empty target; `importState` explicitly replaces a same-account projection. Neither operation copies official transcripts or credentials. Use `restore(lazyHistory: true)` with a database store, then `activateThread(id:)` for displayed history; turns activate their history automatically. `exportFullState()` materializes lazy histories for export. `setContext(_:for:)` persists context for future requests. `redactMessages` clears matching app text and derived output/memory, then starts a fresh harness session; it does not erase upstream transcript files.

Use one `AgentRuntime` and call `start` for different conversation IDs. Overlapping work on the same conversation throws `thread_busy`. Creating another conversation is allowed while turns run. Each execution owns its driver, stream, output decoder, cancellation and tool counters. Projection snapshots are written in order; a storage failure stops pending writes/executions and requires restoration before new work. Custom drivers that do not implement `makeSessionDriver` explicitly remain single-session.

`ClaudeRuntimePool(directory:approvalPresenter:signInPresenter:harness:)` is now a facade over that runtime, with no lane assignment or fixed concurrency count. Restore imports old `lane-N.json` snapshots into `state.json` once, retaining originals. Conflicting accounts/identities fail migration. Account changes/restoration require active work to finish.

Turn duration defaults to 300 seconds and host-tool calls to 128, matching CodexKit; set `turnTimeout: nil` / `maximumToolCalls: nil` to remove those budgets. `maximumParallelToolCalls` defaults to 4 with no arbitrary hard maximum. Skill limits narrow configuration. There is no implicit 64-round or hosted-search-call ceiling.

## Verification status

The package suite covers output validation/commit/replay, recovery authorization/leases, concurrent sessions, policy limits, faulted storage recovery, SQLite/Realm lazy partitions and redaction, memory invalidation and remote preparation. JavaScript tests cover worker workspaces, queue concurrency, notification retries, and HTTP receipt/restart behavior. Simulator UI tests cover authentication cancellation, approvals, turn cancellation, process restart, typed formats and recovery replay. Exact counts and evidence are in [verification results](verification-pending.md).

Live search/steering ordering, subscription refresh, physical-device memory pressure, remote generation/continuation, and APNs delivery still require deployment/device qualification. Passing fixture tests do not establish those external behaviors.
