# ClaudeKit Demo App

This existing Xcode project now builds the official Claude Code harness demo with **Sign in with Claude**. Users log in with their own Claude account through the official browser flow. There are no API-key, bearer-token, or environment-variable login fields.

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

## Open The App

```sh
open DemoApp/AssistantRuntimeDemoApp.xcodeproj
```

Select the **AssistantRuntimeDemoApp** scheme and run on an iOS 18+ device. The project links `ClaudeKit` and `ClaudeKitUI` from the local package and compiles the shared sources under `LibraryDemo/Sources`. Run `bash Scripts/bootstrap-library.sh` from the repository root before the first build on a fresh checkout.

The bundle identifier remains `ai.claudekit.demoapp`, so rebuilding installs over the previous demo. Existing legacy files remain on disk for reference but are not compiled. The new app uses its own harness authentication and state files; it does not import old API keys or bearer tokens.

## What The App Tests

- Official Claude-account browser sign-in
- Conversation creation, switching, streaming, and restoration
- Native note read/write tools with manual approvals
- Cancellation and recovery

See [LibraryDemo instructions](../LibraryDemo/README.md) for fixture launch arguments and current alpha limitations. Both projects use the same app implementation.
