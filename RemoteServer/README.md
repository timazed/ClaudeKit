# Remote Claude jobs

[Documentation index](../docs/index.md)

A standalone Node 22+ service using the pinned, unmodified official Claude Code CLI. The Swift client is `ClaudeKit.AgentRemoteClient`. Scheduler and loopback HTTP regression tests run without model generation. Live generation and APNs are not deployed or qualified by these tests.

Use one deployment, account configuration directory, queue directory, and application credential per account. This is not a multitenant identity service. Claude credentials stay on the server. The iOS client sends an application-server bearer credential, **not** its Claude OAuth token. Provision and store that application credential using your app's authentication/Keychain system.

## Setup

1. On the server, sign in through the official Claude CLI using the intended `CLAUDE_CONFIG_DIR`. Account login is an interactive deployment step; the service does not copy a phone's credentials or accept API keys.
2. Set `CLAUDEKIT_ACCOUNT_DIRECTORY` to that configuration directory. Keep this directory/account stable for the lifetime of the queue; changing account requires a new queue directory.
3. Set a unique random `CLAUDEKIT_REMOTE_TOKEN` of at least 32 characters through the deployment's secret manager. Do not put it in source control or app source code.
4. Optionally set `CLAUDEKIT_REMOTE_DIRECTORY` (default `RemoteServer/data`) and `PORT` (default 8787).
5. Start `node RemoteServer/server.mjs`. There are no npm dependencies. Startup verifies the CLI's pinned SHA-256. `CLAUDEKIT_CLI` can select another file only with the identical hash.
6. For remote devices, put authenticated HTTPS ingress in front of the loopback listener. The Swift client permits cleartext only for loopback development and rejects redirects.

The service runs independent jobs concurrently and persists each submission before acknowledging it. Repeating the same job ID and identical payload returns the existing job. Reusing an ID with a different payload returns 409. Keep the original submission ID/payload until you have a receipt, including after network timeouts. A process crash during generation marks that job `interrupted`; it is never silently regenerated. Submitting a new ID explicitly authorizes new generation.

Text/context and optional JSON Schema are accepted. `runtime.prepareRemoteSubmission` resolves local history, memory, personas and instructions before transport. Images and executable app tool closures are not transported. Required local tool policies and remote web search fail closed. The remote CLI runs with no tools, strict empty MCP configuration, and conversation persistence for threaded requests. Supply `parentJobID` to fork and continue a completed remote session; ephemeral jobs cannot be parents. Local preparation transfers app-visible history as context, not the phone's official transcript. `CLAUDEKIT_REMOTE_CONCURRENCY` defaults to 4 and `CLAUDEKIT_REMOTE_TIMEOUT_MS` to 300000. `CLAUDEKIT_REMOTE_MAX_OUTSTANDING` and `CLAUDEKIT_REMOTE_MAX_RETAINED` default to 0 (no fixed ceiling). Any of these settings accepts 0 to remove its limit. Request and response byte bounds remain enforced. Manage retention offline while the service is stopped; deleting a receipt also removes that ID's deduplication history.

```swift
let client = try AgentRemoteClient(baseURL: serverURL) {
    try await credentialStore.applicationServerToken()
}
let submission = AgentRemoteSubmission(request: Request(text: "Summarize this context", context: context))
// Save submission.id and the submission locally before sending.
let accepted = try await client.submit(submission)
let completed = try await client.waitForCompletion(accepted.id)
if completed.state == .completed { print(completed.text ?? "") }
```

`cancel(id)` stops a queued/running job. Cancelling the Swift polling task only stops polling; use `cancel(id)` to cancel remote execution. Completed receipts remain available through `job(id)`.

## Optional APNs

Configure `APNS_KEY_ID`, `APNS_TEAM_ID`, `APNS_PRIVATE_KEY_PATH`, `APNS_TOPIC` (app bundle identifier), and `APNS_ENVIRONMENT` (`production`, otherwise sandbox). Keep the `.p8` signing key on the server. The app needs its push entitlement, registration, and (for alerts) notification authorization. Silent delivery also needs the Remote notifications background mode.

Pass `AgentRemoteCompletion(deviceToken:mode:)` in the submission. The server signs an ES256 provider token and sends either a background notification or a generic completion alert. Payloads include only `claudekitJobID`, never prompts, generated text, or credentials. The app fetches the authoritative receipt with its authenticated client.

Push attempts persist retry intent before delivery, retry with exponential backoff (at most one hour between attempts), and resume after restart. Delivery is at-least-once: a crash after APNs acceptance but before saving acknowledgement can produce a duplicate. Failure never erases the receipt. Always refresh pending job IDs on foreground launch. Apple may delay, coalesce, or omit background delivery; see [Apple's background-notification guidance](https://developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app) and [APNs request documentation](https://developer.apple.com/documentation/usernotifications/sending-notification-requests-to-apns).

## Qualification still required

Exercise submission retries/conflicts, process restart, cancelled/failed jobs, oversized frames, TLS ingress, account expiry, and physical-device APNs. Loopback receipt replay, conflicting submissions, authentication, restart recovery, scheduler cancellation/concurrency and push retries have regression tests. Live generation/continuation and physical-device APNs still require deployment qualification. Never infer current test success from older mobile-harness evidence.
