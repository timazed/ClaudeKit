# Branch verification — 23 October 2026

Branch: `codex/latest-harness-prototype`, based on `main` at `4a61b34`.

This pass fixed the updater's runtime checksum mismatch: bootstrap now bundles the verified pin, and the SDK, Harness Lab and remote server read its checksum at startup. Runtime evidence reports that pin's version. A regression test checks both installed runtime copies. HTTP test cleanup now handles a child that exited during startup.

`.nvmrc` pins Node 18.19.1. Both GitHub workflows read it. The new `Verify ClaudeKit` workflow runs the checked-in pin's qualification on pull requests and pushes to `main`; the scheduled updater still qualifies candidate releases separately.

## Results

| Check | Result |
| --- | --- |
| Python updater tests | 6 passed |
| Swift tests with official-harness fixtures enabled | 34 passed, zero skipped |
| JavaScript workspace, scheduler and HTTP tests | 4 passed; repeated successfully using nvm-managed Node 18.19.1 |
| Official harness worker/session resume | A → B → A passed; distinct worker isolates, original session resumed with zero repeated tools |
| LibraryDemo unsigned iOS device build | Passed |
| LibraryDemo unsigned arm64 simulator build | Passed |
| Git whitespace check | Passed |

Swift used `CLAUDEKIT_RUN_HARNESS_TESTS=1` and Node 18.19.1. Build logs were written to `/tmp/claudekit-merge-{swift,ios,simulator,workers}.log` on the verification machine. Xcode first-launch setup was completed before the successful iOS builds.

No simulator device/runtime was installed, so simulator UI acceptance was not rerun. No live-account or physical-device test was performed in this pass. Earlier prototype device evidence remains scoped as described in [the prototype README](../Prototypes/LatestHarness/README.md); the adapted latest prototype remains isolated from the shipping 2.1.112 runtime.

The remote `main` was an ancestor of the branch during verification. No pull-request refs were exposed by the Git remote; authenticated GitHub review/check status was unavailable in this environment. The local verification results do not assert GitHub branch-protection or review approval.

## Demo gallery follow-up

Installed the iOS 27.0 simulator runtime and captured six fresh iPhone 17 Pro screenshots through a passing UI capture test. This exercised fixture conversation creation, native write/read approvals, completion, and the reply-format menu. See [gallery provenance](images/demo/README.md). The complete simulator acceptance suite and live-account/device qualification were not rerun.

## Presentation refresh — 24 October 2026

Reworked the demo welcome, conversation, approval, and committed structured-output presentation. The gallery now uses a readable Saturday itinerary through an explicit `--fixture --gallery` scenario. This remains a deterministic model fixture with actual embedded-harness execution and native note tools; screenshots are not live-model evidence.

The seven-screen capture test passed, including a multiline note write/read round trip and a validated JSON result. Two additional simulator UI tests passed for approval denial and cancellation followed by a fresh conversation. All 34 Swift tests passed with official-harness fixtures enabled on nvm-managed Node 18.19.1. One parallel Swift run exited with SIGPIPE during logout; the subsequent complete run passed. Source and image hashes are recorded in the gallery manifest. This pass did not repeat live-account or physical-device qualification.
