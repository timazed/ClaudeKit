# Concurrency and added-limit audit

[Documentation index](index.md)

Compared against local CodexKit commit `be2e9842f19d63add93bb3f0dab8690c9ae0631a`. The latest pass includes executed regression tests and builds; see [verification results](verification-pending.md).

## Concurrency model

CodexKit's `AgentRuntime.swift` keeps active executions and operations by thread. `AgentRuntime+ThreadOperations.swift` excludes overlapping work on one thread; it does not impose a runtime-wide two-turn maximum. `AgentRuntime+TurnControl.swift` targets cancellation and steering by execution/thread identity.

ClaudeKit now follows that model for ordinary and typed turns: one runtime, independent execution sessions, same-thread exclusion, no worker-count cap, and no permanently assigned lanes. Each turn owns its driver, event continuation, typed decoder, task, native-tool counters, and search policy. Recovery operations use independent sessions and per-operation leases. A custom injected driver can explicitly remain single-session by returning nil from `makeSessionDriver`; the official driver supplies independent sessions.

Persistence is serialized independently of model execution. Writes cannot finish out of order and overwrite another thread's newer projection. If a write fails, the writer chain fails closed and the runtime requires restoration; it does not continue committing snapshots based on uncertain state. Authentication/restoration remain exclusive lifecycle operations. These semantics are not a promise of unlimited device resources.


## Limits corrected

| Previous ClaudeKit behavior | Actual baseline / change |
| --- | --- |
| Two workers, permanently assigned lanes | No fixed turn count or lane assignment; independent threads run concurrently |
| Entire runtime busy while a conversation runs | Same-thread exclusion; other threads and new-thread creation can proceed |
| Typed JSONL/XML/text disabled all tools | Tool restriction removed. Tool commentary remains lifecycle text; authoritative final result is decoded when tools are available |
| Steering rejected for every typed request | Allowed until typed final output begins, as in CodexKit's output-start guard |
| Mandatory 120-second timeout, maximum one hour | Default 300 seconds; optional nil for unlimited; positive duration up to one year, matching CodexKit `AgentTurnLimits` |
| Hard 128 native calls | Configurable, default 128; nil means unlimited |
| Maximum 16 parallel host tools, default 1 | Configurable ceiling, default 4; no hard 16 limit. Tool opt-in and serial barriers remain |
| Implicit 64 host-tool rounds | No implicit maximum; explicit skill round restrictions still apply |
| Search default five calls / hard maximum 32 | Optional call budget, no implicit/hard maximum. Domain intersection understands parent/subdomain relationships |
| Steering queue 32 / 64 KiB text | 512 messages / 1 MiB text, aligned with CodexKit store limits |
| Request text 256 KiB / output schema 64 KiB | Request text 1 MiB; output schema up to 1 MiB subject to the selected format's narrower configured limit |
| Tool arguments depth 16 / 64 KiB, result 256 KiB | Embedded payload depth 64 / 4 MiB and results up to 4 MiB / 256 blocks |
| Arbitrary 128,000-token thinking ceiling | Removed; the harness validates model-specific limits |
| Recovery maximum 100 attempts, forced 7-day expiry / 30-day ceiling | Maximum 1,000 attempts; optional expiry. Expiry gates new attempts, not replay of completed receipts or completion of an already-authorized attempt |
| Memory store maximum 1,000 records | Removed; persistence size limits still apply |
| Memory summary 8 KiB / 32 short tags / 32 results | Summary 16 KiB, 64 tags of up to 4 KiB, 256 results and 32 KiB query text, aligned with corresponding CodexKit memory-store constants |

CodexKit itself requires tool-free durable structured recovery. That restriction was incorrectly presented earlier as a ClaudeKit-only gap. It remains intentional. Likewise serial execution for tools without explicit parallel opt-in is part of CodexKit's tool safety model, not a reason to serialize unrelated conversations.

## Additional gaps addressed

- **Typed-event timing:** the adapter recognizes an `end_turn` message and delivers its document before the harness result/transcript flush. Tool commentary is excluded. Native JSON remains tied to StructuredOutput. Claude does not expose Codex's identical commentary/final delta protocol.
- **Persistence:** SQLite and Realm use row-based thread/message storage, preserving unchanged rows and inactive histories. `restore(lazyHistory: true)`, `activateThread`, redaction and stored thread context are available. Existing snapshot databases migrate without dropping history. File stores remain snapshots; the metadata record still has a materialization bound.
- **Memory:** selected-context budgets are caller-configured. Embeddings are cached by explicit provider/model identity and record content, with edit/delete/account invalidation and retrieval diagnostics. Cached vectors are process-local and are rebuilt after restart.
- **Remote service:** independent jobs run concurrently (configurable default four). Outstanding/retained job limits and execution timeout are deployment settings; zero removes each limit. Persisted push retry state survives restart. Preparation freezes local history/instructions/memory, and `parentJobID` continues a completed remote session by forking it.
- **Tool schemas:** tool arguments and structured outputs share the same JSON Schema assertion validator.
- **Embedded workspaces:** each worker resolves relative filesystem operations against its own logical working directory. Four-worker tests cover concurrent writes, ESM filesystem APIs, local chdir and relative symlinks. This is path routing, not a filesystem sandbox.

## Provider and deployment differences

Image generation is excluded. Live-only search, native JSON numeric precision, optional upstream quota telemetry and finite iOS background execution remain backend/platform differences. Embedded shell/plugin subprocesses cannot be offered as ordinary iOS processes; app-defined MCP tools remain the execution boundary.

Remote workers use a separately configured server account. App tool closures cannot execute on a remote machine; prepared submissions reject required local tools and unsupported remote search instead of silently ignoring them. Imported app history provides context, not a byte-for-byte transfer of the phone's official transcript. Remote parent-job continuation uses server-owned transcripts. This is not a claim of complete source/API/protocol equivalence with CodexKit.

## Verification

Concurrency tests exercise four simultaneous conversations, same-thread exclusion, isolated cancellation, creation during execution and surviving persisted results. Storage tests exercise both SQLite and Realm, lazy history preservation, redaction and recovery after injected write failure. Simulator tests exercise the unmodified embedded harness. See the verification report for exact runs and remaining real-device/live-provider qualification.
