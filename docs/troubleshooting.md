# Troubleshooting

[Documentation index](index.md)

## Setup failures

| Symptom | Check |
| --- | --- |
| Default runtime initializer not found | Import/link `ClaudeKit`; it includes the default-harness initializer |
| Missing NodeMobile resources or incompatible simulator architecture | Bootstrap before package resolution; use an arm64 simulator/device |
| macOS harness cannot start | Supply an existing absolute `nodeExecutable` path |
| Sign-in does not open a browser | Retain/render the coordinator and browser; `signIn()` alone does not present UI |
| Old API-key screen | Build the current harness-backed demo target, not an old installed binary |
| Lazy conversation appears empty | Activate history or page from the store; an overview intentionally omits message bodies |

## Runtime failures

`AgentRuntimeError` exposes `code` and `message`. Handle cancellation separately from a failed turn, and show an actionable user message rather than dumping every internal event.

| Code / condition | Response |
| --- | --- |
| `missing_session` | Restore and present account sign-in if no session exists |
| `thread_busy` | Wait/cancel the existing operation or use another thread |
| `runtime_busy` | Finish exclusive lifecycle work; after persistence failure restore durable state |
| `driver_busy` | A custom driver does not supply independent session drivers |
| `output_started` | Typed final output has begun; send the follow-up in a subsequent turn |
| `invalid_tool_arguments` | Inspect the tool schema/model arguments; do not bypass validation |
| `event_buffer_overflow` | Consume raw events promptly; move expensive processing off the loop |
| `memory_limit` | Reduce selection/content or explicitly configure the intended context budget |
| `transcript_not_persisted` | Completion was not durably confirmed; do not blindly replay a side-effecting prompt |
| `recovery_busy` | Another holder owns that operation's lease |
| `remote_http_409` | Submission ID was reused with different content; recover the original payload |

A storage failure may occur after a provider response or tool effect. Restore the store before further work and reconcile the app's side effects. Retry is not automatically safe merely because the UI did not receive completion.

## Useful diagnostics

Record app/SDK version, pinned CLI version/hash, platform/architecture, error code, execution ID, thread ID, and whether the run used fixture or account mode. Preserve the error and test result bundle when reproducing a failure. Log payloads only under an app-owned consent/redaction policy.

Avoid credentials, authorization codes, account configuration files, raw prompts or full memory records in routine logs. Provider usage/quota fields can be absent; do not synthesize values to make a dashboard look complete.

Run the [verification commands](verification.md) to distinguish packaging/adapter failures from live-provider behavior. Fixture success proves the tested orchestration path, not subscription availability or production APNs delivery.
