# Persistence and observation

[Documentation index](index.md)

ClaudeKit maintains an app projection and a separate official harness transcript. These are different stores with different owners.

## What is stored where

| Data | Owner |
| --- | --- |
| Thread titles/configuration and visible messages | `RuntimeStateStoring` |
| Memory, selected-memory attribution, output envelopes, usage receipts, thread context | `StoredRuntimeState` in that store |
| Official conversation/session transcript and login files | Harness storage directory |
| Frozen recovery attempts and completed receipts | `AgentRecoveryStoring` |
| Remote job receipts and notification retry state | Remote server directory |

Preserve both app state and harness storage for native session resumption. Exporting the app projection does not export login credentials or the official transcript.

## Choose a store

| Store | Suitable for | Behavior |
| --- | --- | --- |
| `InMemoryRuntimeStateStore` | Tests and intentionally transient apps | No disk durability |
| `FileRuntimeStateStore(url:)` | Small app histories | Atomic JSON snapshots; 64 MiB limit |
| `SQLiteRuntimeStateStore(url:)` | Indexed queries and lazy histories | Transactional thread/message rows, WAL, metadata record |
| `RealmRuntimeStateStore(url:)` | Realm-based apps | Actor-confined Realm rows and indexed queries |

```swift
import ClaudeKitSQLite
let store = SQLiteRuntimeStateStore(url: applicationDirectory.appendingPathComponent("state.sqlite"))
// Supply store as stateStore when constructing the runtime.
```

For Realm, import `ClaudeKitRealm` and use `try RealmRuntimeStateStore(url:)`. Each store requires a file URL and creates the parent directory. Use one logical runtime owner per app/account store; these APIs are not a multi-process merge protocol.

SQLite/Realm version-2 metadata excludes message histories and thread rows. Saving updates changed rows and removes deleted rows without deleting/rebuilding every index. Other metadata still has a 64 MiB payload bound. This does not make every metadata collection independently paged or eliminate all work proportional to loaded history.

## Lazy activation

```swift
try await runtime.restore(lazyHistory: true)
let messages = try await runtime.activateThread(id: thread.id)
let loaded = await runtime.isHistoryLoaded(for: thread.id)
```

Database stores support overview-only restore. `messages(for:)` reads the currently materialized projection; an empty array before activation is not proof of an empty stored conversation. Use `activateThread` before showing the full history, or `fetchMessages` for paging. Starting a turn materializes that thread automatically. Other unloaded histories are preserved during writes.

The default restore loads history eagerly. File/in-memory stores fall back to eager loading. Activation reads a whole thread using pages, so it is not a bounded context-window operation. The official harness separately manages model context.

## Queries

```swift
let first = try await runtime.fetchMessages(.init(threadID: thread.id, limit: 50))
if let cursor = first.last?.id {
    let next = try await runtime.fetchMessages(.init(threadID: thread.id, afterID: cursor, limit: 50))
    print(next.count)
}
```

Pages preserve message insertion order. `containing:` filters text case-insensitively; it is not a full-text relevance engine. The maximum page size is 500. Cursors must belong to the requested thread. Store-level `queryThreads(limit:before:)` orders by updated date; its date-only cursor is not a snapshot-isolated feed and can skip equal-timestamp rows across pages.

## Context and redaction

`setContext(_:for:)` saves a JSON context value (up to the embedded payload limit of 4 MiB). `context(for:)` reads it. Future ordinary requests combine it with request context.

```swift
try await runtime.setContext(.object(["project": .string("Kitchen")]), for: thread.id)
try await runtime.redactMessages(ids: [message.id], in: thread.id)
```

Redaction replaces selected app message text, clears their image attachments, removes that thread's typed output envelopes and memories whose source IDs match, and clears the official session reference for the next turn. It does **not** edit existing official transcript files, remote copies or previously delivered results. A new harness session is started rather than continuing a transcript that still contains the redacted material. Default replacement text is `[redacted]`.

## Export, import and migration

- `exportState()` encodes the current complete projection and rejects unmaterialized lazy history.
- `exportFullState()` materializes lazy history before encoding.
- `importState(_:)` replaces the projection after account/identity/reference checks; it requires a signed-in, idle runtime and accepts up to 64 MiB.
- `migrateState(to:)` copies to an empty destination. It does not switch the runtime's configured store; construct a new runtime with that destination afterward.

Exports contain user content, memory and metadata. Treat them as app data, not diagnostic attachments. Neither import nor migration transfers harness files or authentication.

## Commit failures and observation

Writes are ordered independently of concurrent turns. A write failure poisons the persistence chain, cancels active executions and requires `restore()` before new work. Do not treat an uncommitted UI delta as a saved assistant message. Restoration reloads the durable store; it cannot recover bytes the store never committed.

`observeState()` emits newest-value snapshots. `AgentRuntimeStore` wraps those snapshots for SwiftUI. A lazy overview contains only activated messages. The current `activateThread` method returns history directly; use that return value for immediate UI updates rather than assuming it emits a new observation by itself.

See [migration](migration.md) for old lane stores and [structured recovery](structured-request-recovery.md) for durable generation receipts.
