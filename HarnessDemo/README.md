# Harness Lab: official Claude Code inside iOS

This standalone SwiftUI demo embeds **the unmodified official Claude Code 2.1.112 JavaScript bundle** in NodeMobile 18.19.1, with JIT disabled. The harness executes inside the iOS app process. It does not use ClaudeKit's Swift agent loop, launch a remote harness, or implement a replacement agent loop.

The native host uses the CLI's SDK JSON control protocol directly. An SDK-type MCP server exposes two tools implemented in Swift: write `Documents/Workspace/proof.txt`, then read it back. The official harness controls tool dispatch, permission requests, streaming, conversation state, and transcript persistence.

**Claude account sign-in is the default.** The app asks the unmodified harness to run its own `claude_authenticate` flow, opens the generated Anthropic page in Safari, and waits for the harness to complete authentication. No API key is required for this mode. The harness owns PKCE, the callback listener, token exchange, credential persistence, and refresh. Swift does not import subscription tokens or implement a replacement OAuth client.

## Verified on 14–15 October 2026

| Test | Result |
| --- | --- |
| iPhone 16 Pro Max, iOS 27.0.1, development signed, no debugger attached | Passed: official harness and Swift share one process; JIT disabled; 3 fixture model requests, 2 approvals, 1 Swift write, 1 Swift read, 28 stream events |
| Same iPhone after terminating and relaunching the app | Passed: same official session ID, new process ID, earlier tool results restored, no repeated native calls, 11 stream events |
| iOS 18.6 simulator UI tests | 3 tests passed: manual allow/write/read/resume, deny/prevent-write, and official account-login initiation; a separate test verified the Safari sheet |
| Claude account login and live inference on the iPhone | Passed on 15 October: user completed the official browser login; Claude Sonnet 4.6 completed a real turn with 1 Swift write, 1 Swift read, 2 manual approvals, and 124 stream events; no API key or fixture model requests |
| Account restoration and live conversation resume after installation/restart | Passed on 15 October: restored login without browser sign-in, same official session in a new process, exact prior note recalled without new tools, 32 stream events |
| Optional API-key mode | Implemented but not exercised |

See the [evidence index](Evidence/README.md). The app is named **Harness Lab** (`ai.claudekit.harnesslab`). The account-login build is installed on the iPhone.

## Run it

```sh
cd HarnessDemo
bash scripts/bootstrap.sh
open HarnessDemo.xcodeproj
```

Choose the `HarnessDemo` scheme and an iPhone or Apple Silicon simulator. The project currently uses the existing workspace's development team; change Signing & Capabilities if building under another account. The framework contains arm64 device and simulator slices. The first bootstrap downloads a 573 MiB runtime archive including debug symbols; it is cached under the ignored `Vendor` directory.

1. Leave **Claude account** selected and tap **Open Claude Code sign-in**. Complete Anthropic's sign-in in the browser. After the harness confirms your account, tap **Send** to test a real conversation using that account. The app does not send a model request just for signing in.
2. If the browser cannot return automatically, close it and expand **If the browser cannot return automatically**. Open the harness's code-based sign-in page, then paste the one-time authorization code it displays. The app forwards that code to the official harness; it is not an API key or an access token. Do not send it in chat.
3. To run the deterministic test, reopen the app and select **Fixture**. A local model fixture drives the real loop through two native tools. Disable automatic approvals to test the SwiftUI Allow/Deny buttons. A denied write is an expected fixture failure.
4. Reopen and enable **Resume the saved session** to resume the harness's own persisted conversation. Fixture resume verifies prior tool results without repeating the native calls.
5. **API key** remains an optional authentication method, with a user-owned key held in memory for that app run. It is not required for Claude-account mode.

The embedded Node runtime starts once per app process, so changing modes requires an app restart. The app keeps the screen awake while a turn or sign-in runs. Standard iOS foreground/background restrictions still apply. The official harness stores its credentials in its own private Library configuration directory, protected by iOS file protection and excluded from backups; the native host never reads them. Auth control responses, authorization URLs, and one-time codes are excluded from the demo event log.

## What is being tested

```text
SwiftUI host
  ↕ dedicated in-process pipes (SDK JSON control protocol)
NodeMobile + compatibility adapters
  ↕ unmodified cli.js (verified SHA-256)
Official Claude Code agent loop
  ↔ model: local Messages API fixture OR Anthropic API
  ↔ SDK MCP + permission control requests → Swift filesystem tools
```

The proof requires the native and Node process IDs to refer to the same process, a successful initialization, two successful native tool calls, two permission requests, streamed events, the expected unique note in the final result, and a successful harness result. The resume proof requires the same persisted session ID and prior tool results in model context, with zero repeated native tool calls.

Evidence is written to `Documents/Results/latest.json` and per-run JSON/JSONL files. The official transcript is under `Library/Application Support/OfficialClaude/projects`. Use **Share test evidence**, Finder file sharing, or Xcode's app container download. Raw logs/transcripts contain prompts and tool content; live-mode evidence should be treated as conversation data. Cost/token fields in fixture reports are the CLI's calculations over invented fixture usage, not real charges.

## Runtime fixes validated by this experiment

- The stock NodeMobile 18.20.4 iOS build failed on both simulator and iPhone while parsing `\p{Default_Ignorable_Code_Point}` in the official bundle. The selected 1Conan NodeMobile 18.19.1 build has ICU 73.2 and parses the same untouched bundle successfully.
- V8 runs with `--jitless --no-short-builtin-calls --regexp-interpret-all --stack-size=864` on a dedicated 16 MiB thread stack. The app requests extended virtual addressing and the increased memory limit in its development entitlements.
- WASM-free fetch, process-title, process-exit, safe-copy, and child-process adapters come from L Shell. No subprocess command handlers are registered. The app exposes only its two native MCP tools; unsupported subprocess calls fail.
- Claude's XDG cache/config/data/state paths point to writable iOS Library directories. Without the cache mapping, a delayed MCP log write attempted to create `.cache` at the app container root and failed with `EPERM` after the conversation completed.
- The simulator framework must be code-signed too. Let Xcode perform its normal simulator signing; do not build with `CODE_SIGNING_ALLOWED=NO`.
- Account mode omits `--bare`, which disables OAuth credential lookup, and removes API-key/token environment overrides. It uses the harness's built-in `claude_authenticate`, `claude_oauth_wait_for_completion`, and optional `claude_oauth_callback` controls. The CLI bundle is unchanged.
- App updates can change the iOS container's absolute path. Because the harness indexes project transcripts by working directory, the host resolves the selected session in its own saved project folders and passes the existing JSONL path to the harness's `--resume` interface. No transcript content or harness code is rewritten. Missing or ambiguous matches fail explicitly.

## Tests

Desktop transport regression (not evidence of iOS execution):

```sh
node Tests/protocol-smoke.cjs
node Tests/auth-smoke.cjs
node --test Tests/resume-path.cjs
# Reuse the workspace printed by that test to verify resume:
DEMO_TEST_WORKSPACE=/path/printed/by/test node Tests/protocol-smoke.cjs --resume
```

Simulator UI integration tests exercise both permission decisions and resume:

```sh
xcodebuild -project HarnessDemo.xcodeproj -scheme HarnessDemo \
  -destination 'platform=iOS Simulator,id=YOUR_SIMULATOR_ID' \
  -derivedDataPath build test
```

For CLI-driven smoke runs, launch the app with `--smoke`, `--resume-smoke`, or `--manual-smoke`. `--auth-smoke` initializes the official account flow without automatically opening the browser or making a model request, and saves sanitized evidence to `Documents/Results/auth-init.json`. The fixture always runs locally inside the app; no external fixture service is needed.

`testSignedInAccountResume` is skipped by default because it makes one real account request. To run it deliberately on an already signed-in device, build for testing, copy the generated `.xctestrun` alongside the original, and set the test runner's `EnvironmentVariables`: `HARNESS_LIVE_ACCOUNT_TEST=1`, `HARNESS_EXPECTED_NOTE` to the prior note, and `HARNESS_LIVE_MARKER` to a fresh marker. Run only `HarnessDemoUITests/HarnessDemoUITests/testSignedInAccountResume` with `xcodebuild test-without-building -xctestrun ...`. The expected note is used only by the test assertion; it is not supplied in the new prompt. The test restores the account, resumes the saved conversation, and verifies exact recall with zero native tool calls.

## Scope

This demonstrates the official loop, streaming transport, native MCP tools, permission handling, basic session persistence/resume, and **actual Claude-account authentication and live inference on a physical iPhone**. Built-in Bash/Git, arbitrary file access, subagents, compaction, long-run memory behavior, background work, and production distribution are not validated. The selected CLI and runtime are deliberately pinned historical releases. No automatic updates are included.

Anthropic distinguishes a third-party app's own login/client from an end user signing into unmodified Claude Code hosted by a product. Its [current product and authentication rules](https://code.claude.com/docs/en/legal-and-compliance) explicitly preserve the latter. The demo follows the harness's own sign-in path. The earlier API-key-only configuration did not test the requested account-login experience.

This is a development-signed feasibility experiment. It does not establish redistribution rights, TestFlight eligibility, or App Store approval. See [ThirdParty/README.md](ThirdParty/README.md) for provenance, checksums, and licenses, and the [investigation](../docs/investigations/official-claude-code-on-ios.md) for the broader constraints.
