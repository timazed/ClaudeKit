# Verification

[Documentation index](index.md)

## Reproduce local checks

From the repository root, after bootstrap:

```sh
CLAUDEKIT_RUN_HARNESS_TESTS=1 CLAUDEKIT_NODE=/absolute/path/to/node swift test
node --test Tests/RuntimeJS/*.test.cjs RemoteServer/*.test.mjs
xcodebuild -project LibraryDemo/LibraryDemo.xcodeproj -scheme LibraryDemo \
  -destination 'platform=iOS Simulator,id=YOUR_ARM64_SIMULATOR_ID' test
xcodebuild -project LibraryDemo/LibraryDemo.xcodeproj -scheme LibraryDemo \
  -destination 'generic/platform=iOS' CODE_SIGNING_ALLOWED=NO build
xcodebuild -scheme ClaudeKitRealm \
  -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build
```

Select an available simulator ID; do not copy an evidence-machine UUID blindly. Without the harness environment flag, integration tests are skipped. An unsigned device build checks compilation/linking, not installation or execution on hardware.

## What each layer establishes

| Layer | Coverage |
| --- | --- |
| Swift unit/store tests | Policies, cancellation, typed validation/commit, recovery, SQLite/Realm, memory, concurrent runtime state |
| Official-harness fixtures | Real CLI orchestration against a deterministic local Messages endpoint |
| JavaScript tests | Worker workspace routing, remote scheduler/retry and HTTP receipt behavior |
| Simulator UI tests | Browser cancellation, native approvals, turn cancellation, restart, typed formats and recovery replay |
| Physical/live qualification | Account refresh, live model behavior, resource pressure, remote deployment and APNs |

Current recorded baseline: 40 Swift tests, four JavaScript tests and six simulator UI tests passed, with device and Realm simulator builds passing. These counts describe the **19 October 2026 implementation verification**, not a test automatically rerun whenever this guide is edited.

See the [detailed result report](verification-pending.md) and [source/log manifest](../LibraryDemo/Evidence/parity-verification-2026-10-19/manifest.json). The older report filename is retained for existing links. Earlier evidence directories remain historical.

## Before shipping a new harness version

Verify provenance/hash and supported architecture first, then run fixture suites and the demo acceptance checks. Qualify real account refresh, live steering/search ordering and representative multiworker memory use separately. For remote work, test live generation/session continuation and production TLS/APNs in the intended account/deployment.

Do not infer those external guarantees from passing fixture tests. Image generation is outside the implementation and verification scope.
