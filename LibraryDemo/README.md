# ClaudeKit Demo

[Documentation index](../docs/index.md)

A small SwiftUI app consuming `ClaudeKit` and `ClaudeKitUI` through a local Swift package. Runtime configuration automatically creates the official harness driver. The demo only customizes harness settings to select its optional fixture mode; its automated verifier accesses driver diagnostics to check process identity. App code does not implement a second agent loop or directly import NodeMobile.

## Demo gallery

<table>
  <tr>
    <td align="center"><a href="../docs/images/demo/01-sign-in.png"><img src="../docs/images/demo/01-sign-in.png" width="160" alt="ClaudeKit demo: sign in"></a><br>Sign in</td>
    <td align="center"><a href="../docs/images/demo/02-conversation.png"><img src="../docs/images/demo/02-conversation.png" width="160" alt="ClaudeKit demo: conversation"></a><br>Conversation</td>
    <td align="center"><a href="../docs/images/demo/03-tool-approval.png"><img src="../docs/images/demo/03-tool-approval.png" width="160" alt="ClaudeKit demo: tool approval"></a><br>Tool approval</td>
    <td align="center"><a href="../docs/images/demo/04-completed-reply.png"><img src="../docs/images/demo/04-completed-reply.png" width="160" alt="ClaudeKit demo: completed reply"></a><br>Completed reply</td>
    <td align="center"><a href="../docs/images/demo/05-output-controls.png"><img src="../docs/images/demo/05-output-controls.png" width="160" alt="ClaudeKit demo: output controls"></a><br>Output controls</td>
    <td align="center"><a href="../docs/images/demo/06-reply-formats.png"><img src="../docs/images/demo/06-reply-formats.png" width="160" alt="ClaudeKit demo: reply formats"></a><br>Reply formats</td>
  </tr>
</table>

Captured on an iPhone 17 Pro simulator running iOS 27.0 on 23 October 2026. Conversation, approval, reply, and format screens use the local model fixture with the real embedded harness. No live account or model responses are shown.

See [capture details and reproduction](../docs/images/demo/README.md) and the [SDK integration guide](../docs/sdk-integration.md).

## Build and run

```sh
bash Scripts/bootstrap-library.sh
open LibraryDemo/LibraryDemo.xcodeproj
```

Run these commands from the repository root. Select **LibraryDemo**, choose an arm64 iPhone or iOS simulator, and run. The project targets iOS 18+, uses automatic signing, and has no special memory entitlements. Change the development team if using a different Apple account.

The app is named **ClaudeKit Demo**, bundle ID `ai.claudekit.demo`. It is separate from **Harness Lab** and its existing credentials.

1. Tap **Sign in with Claude** and complete the official flow in the private authentication browser. The harness receives its automatic callback. Closing or cancelling the browser ends the entire login attempt; a new attempt starts a fresh private browser session.
2. Tap **New conversation**.
3. Send the prefilled request to write and read a note.
4. Approve each native tool call. The response streams into the conversation.
5. Create a second conversation, switch back, and ask about the first conversation. Relaunch the app to check restoration.
6. Choose **Reply format**: Text, JSON (`{ "answer": "…" }`), JSON Lines (1–10 answer records), or XML (`<answer>…</answer>`). JSONL/XML support native tools; their typed events are delivered from the final result when tools are available. Image controls are excluded from this demo pass.
7. Enable **Use saved preferences** to retrieve matching memories; ask Claude to remember a preference to exercise the memory tools. Writes require approval. **Allow web search** opts into up to three live searches for any reply format.
8. While a text turn is active, edit the composer and use **Add follow-up** to queue steering. Usage appears after completion.
9. **Recoverable JSON** saves a frozen request and its operation ID. **Resume / replay receipt** resumes it, or displays a completed receipt without another model call. Stop cancels the task; failed retries remain subject to cooldown/budget.
10. Enable **Ephemeral request** for a fresh turn without conversation history or transcript persistence. Its reply is shown temporarily and is not saved to the thread. Tools can still have side effects.
11. **Sign out** removes the harness login. Model selection applies to new conversations.

**Deny** prevents a tool from running. **Stop turn** dismisses a pending approval and interrupts the execution. The demo's tools access its own `demo-note.txt` and scoped saved preferences.

## Deterministic verification

Launch arguments:

| Arguments | Behavior |
| --- | --- |
| none | Real Claude-account sign-in and model service |
| `--fixture` | Interactive demo using the official harness and a local deterministic model |
| `--fixture --verify` | Automatically approve demo tools and verify A → B → A in one app process |
| `--fixture --verify-parity` | Verify image input, JSON output, ephemeral turns, memory, and logout on embedded Node |
| `--fixture --verify-resume` | After a process restart, restore A without calling native tools again |

The automated verifier writes `Documents/library-proof.json` and `Documents/library-resume.json`. It checks exact conversation recall, distinct A/B contents, expected tool counts, and identical Swift/Node process IDs. Fixture and account modes use separate harness directories and app state stores.

Run the Swift package suite with the local Node development host:

```sh
CLAUDEKIT_RUN_HARNESS_TESTS=1 \
CLAUDEKIT_NODE="$(command -v node)" \
swift test
```

Node 24.14.0 was used for desktop fixture tests; iOS always uses the bundled NodeMobile 18.19.1. Without the environment flag, the official-harness integration test is skipped and the other tests still run.

Run UI tests on a selected arm64 simulator:

```sh
xcodebuild -project LibraryDemo/LibraryDemo.xcodeproj \
  -scheme LibraryDemo \
  -destination 'platform=iOS Simulator,id=YOUR_SIMULATOR_UDID' \
  -derivedDataPath LibraryDemo/build test
```

The UI suite uses fixture mode for tool/session tests. Its sign-in test opens the official account flow and cancels it; use a simulator without an existing login for that test. It does not enter credentials or submit real model requests.

## Files to start with

- [DemoModel.swift](Sources/DemoModel.swift): runtime setup, tool registration, streaming, and session verification.
- [LibraryDemoApp.swift](Sources/LibraryDemoApp.swift): chat, private authentication browser, and approval UI.
- [LibraryDemoUITests.swift](Tests/LibraryDemoUITests.swift): device UI acceptance tests.
- [Evidence](Evidence/README.md): recorded results and their limits.

The demo has been built for simulator and device targets, and simulator UI regressions run in this pass. `--fixture --verify-formats` checks JSONL and XML after native tool work and replay of a recovery receipt through the embedded official harness. The original image-input acceptance path is retained; no image-generation work was added. See [verification results](../docs/verification-pending.md) and the [feature matrix](../docs/feature-parity.md). Remote/APNs, Realm, and concurrent sessions have library/server examples rather than controls in this small demo.
