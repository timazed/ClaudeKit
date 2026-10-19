# Verification results — 19 October 2026

[Documentation index](index.md)

The later request to build and test superseded the earlier instruction to leave verification pending. This file retains its name so existing links continue to work.

## Executed checks

| Check | Result |
| --- | --- |
| Swift package tests, including opt-in official-harness integrations | 40 tests passed (33 core/harness/storage + 7 legacy), zero skipped |
| JavaScript worker, scheduler and HTTP tests | 4 tests passed |
| iOS 18.6 Claude Harness Lab simulator UI suite | 6 tests passed |
| LibraryDemo iOS device target, signing disabled | Build passed; not installed |
| ClaudeKitRealm iOS Simulator target | Build passed |
| Realm 20.0.5 dependency | Resolved; macOS read/write/lazy history/redaction tests passed |

The simulator tests cover account-browser cancellation/retry, approval denial, cancellation followed by a new conversation, conversation switching and process restart, existing request modes, JSONL/XML after native tools, and durable recovery receipt replay. The model endpoint is a deterministic local fixture, but the inference/tool orchestration is the pinned, unmodified official CLI running in embedded Node.

The JavaScript tests exercise four concurrent worker workspaces, relative chdir/symlink/ESM filesystem behavior, overlapping remote jobs, cancellation isolation, persisted notification retry across scheduler restart, HTTP authentication, receipt replay, idempotency conflict and interrupted-job recovery. HTTP tests do not generate model responses or send APNs notifications.

## Failures found and fixed

- Updated an obsolete schema test: supported schema assertions are accepted; unsupported assertions still fail closed.
- Added explicit Objective-C names for Realm's private object classes after a real Realm initialization exception.
- Fixed the demo marking a cancelled event stream as “Turn completed”; cancellation now follows the ended-turn path. The UI regression passed afterward.

## Reproduction

```sh
CLAUDEKIT_RUN_HARNESS_TESTS=1 CLAUDEKIT_NODE=/path/to/node swift test
node --test Tests/RuntimeJS/*.test.cjs RemoteServer/*.test.mjs
xcodebuild -project LibraryDemo/LibraryDemo.xcodeproj -scheme LibraryDemo \
  -destination 'platform=iOS Simulator,id=C1DFECE8-D228-4590-8C60-07E85FEC8CCC' test
xcodebuild -project LibraryDemo/LibraryDemo.xcodeproj -scheme LibraryDemo \
  -destination 'generic/platform=iOS' CODE_SIGNING_ALLOWED=NO build
xcodebuild -scheme ClaudeKitRealm -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build
```

Current source hashes, the CLI checksum and copied logs are recorded under `LibraryDemo/Evidence/parity-verification-2026-10-19/`. Simulator result bundle: `/tmp/claudekit-parity-acceptance.xcresult`. Earlier evidence remains historical.

## External qualification still outstanding

These checks do not establish live subscription expiry/refresh, hosted-search behavior, upstream steering ordering, remote model generation/session continuation, TLS/APNs deployment, or physical-device performance and memory pressure with many concurrent harness workers. No remote service was deployed and no physical phone was installed or exercised in this pass.

See `feature-parity.md` and `concurrency-audit.md` for provider/platform differences. Image generation is excluded. Passing tests are not a claim of identical CodexKit API/protocol behavior.
