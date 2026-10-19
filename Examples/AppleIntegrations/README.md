# Apple host integration

[Documentation index](../../docs/index.md)

These examples use the app's existing Claude-account runtime. They do not implement a second model loop. They are source examples and have not been compiled in this pass.

## App Intents

Add `AskClaudeIntent.swift` to the host app target. After configuring/restoring the runtime, assign it to `ClaudeIntentRuntime.shared.runtime` on the main actor. The intent opens the app, requires an existing login, creates a conversation, and sends the question. The host must present tool approvals through its normal coordinator. No account credential is embedded in the shortcut.

## Share and file imports

Use `AgentImportedContent.textFile(at:maximumBytes:)` for a bounded UTF-8 local text file, then `Request(imported:prompt:executionMode:)`. Obtain security-scoped access from the document picker before reading and release it afterwards. Unsupported binary files are rejected; extract text with an app-owned importer before constructing a request.

A share extension should save the bounded imported text in an App Group inbox and ask the user to open the host app. The host then reads it and sends a request using its retained runtime. Do not start a second Node instance in a short-lived extension. App Group provisioning, extension activation rules, and routing to the host remain application configuration.

## Finite background time

On iOS, retain `AgentBackgroundExecution`, call `begin(for: execution)` after starting a normal execution, and call `end()` when its stream finishes. Expiration cancels that execution. The helper does not grant unrestricted background execution or survive process termination. For jobs that must keep running remotely, use `AgentRemoteClient` and persist its submission ID.

Recovery is separate from keeping an app alive. Save the ID returned by `prepareRecovery`; cancel the task when the app's allowed background time ends, then call `sendRecovering` after returning to the foreground. A completed receipt is replayed without generation; incomplete requests remain subject to authorization, cooldown, and attempt budget.

## Completion notification

Register for APNs in the host app. Convert the device token to its hexadecimal string and attach `AgentRemoteCompletion` to a remote submission. On a notification containing `claudekitJobID`, validate it as a UUID and fetch `client.job(id)`. Treat notifications as hints; refresh all locally pending IDs on app launch. Do not mark a job complete solely from a notification payload.

See [remote setup](../../RemoteServer/README.md) for server/APNs configuration. No push entitlement or production service is provisioned automatically by importing the package.
