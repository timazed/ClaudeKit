# Claude-account authentication

[Documentation index](index.md)

The default harness configuration signs in with a Claude account. The official harness owns OAuth, credential storage and refresh. The Swift API exposes account metadata; it does not require developers to collect an API key or paste an OAuth token into the app.

## Present the sign-in flow

Create a `ClaudeSignInCoordinator` on the main actor and pass it as `signInPresenter`. Retain the task awaiting `runtime.signIn()`. Wire the coordinator's `onCancel` to cancel that task.

Render `coordinator.page` using `ClaudeSignInBrowser(url:onCancel:onError:)`. Pass the page ID to `coordinator.cancel(browserPageID:)` so a callback from an old browser cannot cancel a newer attempt. The [demo's SignInControls](../LibraryDemo/Sources/LibraryDemoApp.swift) is the complete SwiftUI example.

The harness supplies the authorization URL and handles its loopback callback and token exchange. Successful completion dismisses the presenter. A consent page identifying **Claude Code** is consistent with using the official harness.

## Cancellation and logout are different operations

| Action | Effect |
| --- | --- |
| Cancel the sign-in task/browser | Ends the pending attempt and closes its private authentication session |
| `disconnect()` | Closes the runtime's control session and clears its in-memory account; preserves stored login |
| `signOut()` | Runs the official harness logout; clears the runtime account after success |
| Delete app projection data | Deletes only what the chosen app store owns; does not imply credential or transcript deletion |

The iOS browser requests an ephemeral `ASWebAuthenticationSession`. Closing it does not clear unrelated Safari cookies or revoke a login that already completed. Use explicit sign-out to remove the harness login. Lifecycle operations require active turns/recovery to finish.

## Restoration and account identity

`restore()` loads app state and asks the harness for its account. It does not initiate interactive sign-in when no login is available. A store containing account-bound conversations cannot silently attach them to a different account.

Use separate state, recovery and harness directories for different accounts. Do not point multiple unrelated app users at one store. Identity checks use metadata supplied by the harness; ClaudeKit does not implement a cross-provider user identity system.

The iOS harness directory has file protection and is excluded from backup. Configure protection, retention and backup policy for your own projection/recovery stores as appropriate. Never log credential files, browser callback URLs or authorization codes as diagnostics.

## Refresh and external failures

Credential refresh is delegated to the pinned harness. Fixture tests and successful login do not qualify every real subscription-expiry or refresh case. If a session changes unexpectedly, stop work and restore the intended account rather than rebinding stored conversations automatically.

For automated checks, use fixture mode. See [verification](verification.md) for the separation between browser tests, fixture inference and live-account evidence.
