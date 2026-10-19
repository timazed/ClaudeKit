# Verification updates

Latest executed verification: [source/log manifest](parity-verification-2026-10-19/manifest.json) and [detailed results](../../docs/verification-pending.md). The 19 October run passed 40 Swift tests, four JavaScript tests and six simulator UI tests, plus device and Realm simulator builds. This documentation update did not rerun those implementation tests.

The [concurrency alignment inventory](concurrency-alignment-2026-10-19.json) and [non-image implementation inventory](non-image-implementation-2026-10-19.json) describe earlier checkpoints when verification was pending. Their statuses are historical and have been superseded by the executed report above.

The [19 October parity report](parity-2026-10-19.json) records the new request modes, memory/store/tool policy work, successful test runs, and the final verification blocked by automatic approval-review timeouts. Its source hashes represent that historical revision, including the refinements unverified at that time; they do not represent the latest expansion. These are not claims of full CodexKit parity or live physical-device qualification.

# Library alpha verification — 18 October 2026

These results exercise the new `ClaudeKit` / `ClaudeKitHarness` / `ClaudeKitUI` package consumed by LibraryDemo.

## Automated results

| Check | Result | Evidence |
| --- | --- | --- |
| Swift package tests | 5 new-library tests and 7 legacy tests passed; no failures | `swift-tests.json` |
| Actual harness on the macOS development host | A → B → A with distinct sessions and exactly four native tool calls | Included in the five new-library tests; Node 24.14.0, local fixture |
| iOS simulator UI suite | 4 tests passed; no failures or skips | `simulator-ui-tests.json` |
| A → B → A in one iOS app process | Passed; four native tool calls; embedded Node PID 27151 | `simulator-library-proof.json` |
| Full process restart → A | Passed; same app thread ID, new PID 27172, zero additional native tool calls | `simulator-library-resume.json` |
| Native approval denial | Passed; zero native tool calls | UI test `testDenyPreventsNativeWrite` |
| Cancellation while approval is pending | Passed; prompt removed, zero initial calls, next conversation completes two calls | UI test `testCancelApprovalThenNewConversation` |
| Official sign-in presentation and cancellation | Passed; browser opens, cancellation returns to enabled sign-in | UI test `testOfficialSignInBrowserAndCancellation` |
| Legacy example app | Simulator build passed after product renaming and deployment-target alignment | `/tmp/claudekit-legacy-build.log` |

Simulator: arm64 iPhone 16 Pro, iOS 18.6. All harness reports identify unmodified Claude Code 2.1.112, NodeMobile 18.19.1, JIT disabled, and `platform=ios`. The verifier also asserts that Node and native Swift share the same process ID. Session recall checks compare the exact unique fixture content rather than only checking for a nonempty reply.

The simulator demo was left running in Claude-account mode. `simulator-account-start.png` records its initial sign-in screen.

The tool/session checks use a deterministic local **model fixture** with the **real official harness**. They do not establish a new live model turn or token refresh. The sign-in UI check opens the official browser flow and cancels it without entering credentials.

## Physical iPhone

The LibraryDemo device build succeeded with standard app entitlements and was installed as `ai.claudekit.demo`. Launch verification is pending: iOS first reported that the phone was locked, and the next attempt reported that the device disconnected. No physical-device library result is claimed here.

The earlier, separate Harness Lab app already demonstrated real Claude-account login, live inference, native tools, and restoration on the iPhone. Its evidence remains under [HarnessDemo/Evidence](../../HarnessDemo/Evidence). That validates the original foundation; it is not a substitute for repeating live inference through the new library build.

## Reproduction and provenance

See [LibraryDemo instructions](../README.md) for commands and launch arguments. Test output was recorded in `/tmp/claudekit-library-swift-final2.log` and `/tmp/claudekit-library-ui-final2.xcresult`; portable summaries are saved here. `source-sha256.json` records the source files at handoff, excluding downloaded vendor assets, build products, and app data. The official CLI hash is recorded in both runtime reports.

Follow-up qualification: real account turn through LibraryDemo, expiry/refresh, full logout, long sessions and memory pressure, background/foreground transitions, and production packaging. No account credentials, authorization codes, or user conversation transcripts are included in these evidence files.
