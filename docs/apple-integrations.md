# Apple app integrations

[Documentation index](index.md)

## SwiftUI state

Retain `AgentRuntimeStore(runtime:)` as a main-actor observable object to project threads and materialized messages into SwiftUI. It consumes `runtime.observeState()`, which buffers the newest snapshot. Use an execution's event stream for provisional output rather than assuming every delta is durable state.

Keep `ApprovalInbox` and `ClaudeSignInCoordinator` in the same retained application model. The [demo](../LibraryDemo/Sources/LibraryDemoApp.swift) shows browser presentation, approve/deny controls and execution cancellation.

## Finite background time

`AgentBackgroundExecution` wraps an ordinary `AgentExecution` with finite UIKit background time. Call `begin(for:)` after starting and `end()` when consumption finishes. Expiration cancels the execution. It does not survive termination or permit unbounded background inference, and its current overload does not directly accept a typed output handle.

For recoverable JSON, persist the recovery ID before generating, cancel when allowed time expires, and resume/replay in the foreground. For work that must keep running independently of the phone, use a remote job and persist its submission.

## Imports and share extensions

`AgentImportedContent.textFile(at:maximumBytes:)` reads bounded UTF-8 text. `Request(imported:prompt:executionMode:)` turns it into a request. Acquire/release security-scoped access when reading a document-picker URL. Binary document parsing belongs to the app's importer.

A share extension should write bounded content into an App Group inbox and route the user to the host app. Do not start a second embedded Node runtime in a short-lived extension. App Group entitlements, activation rules and inbox ownership are host configuration.

## App Intents and Shortcuts

The [App Intent example](../Examples/AppleIntegrations/AskClaudeIntent.swift) uses the host's retained runtime and existing login. Wire it after runtime setup; the intent does not embed credentials. Any requested native tools still require the app's normal approval presentation.

## Push completion

Register for APNs in the app and pass its hexadecimal device token with the remote submission. On a payload containing `claudekitJobID`, validate the UUID and fetch `client.job(id)`. Notifications are hints, not authoritative completion receipts. Silent pushes require the appropriate background mode; alerts require user notification authorization.

The [host integration notes](../Examples/AppleIntegrations/README.md) describe provisioning responsibilities. No entitlements, background guarantees or remote services are granted by importing a Swift package.
