# Remote execution

[Documentation index](index.md)

Remote execution is optional infrastructure for work that should run outside the phone's process. It requires an app-owned server deployment. Importing ClaudeKit does not provision a service or forward the phone's Claude login.

## Prepare and submit

```swift
let submission = try await runtime.prepareRemoteSubmission(
    Request(text: "Summarize our discussion.", memory: .init()), in: thread.id
)
// Persist this complete Codable submission for retries.
let client = try AgentRemoteClient(baseURL: serverURL) {
    try await credentialStore.applicationServerToken()
}
let accepted = try await client.submit(submission)
let completed = try await client.waitForCompletion(accepted.id)
```

`serverURL` and `credentialStore` are app-owned dependencies. The client credential authenticates to your application server; it is not a Claude OAuth token. The worker uses its separately provisioned official Claude-account login.

Preparation freezes instructions, selected memory and app-visible history as context. It resolves local persona/skill settings before transport. This does not copy the phone's official transcript. Required local tools and remote live search fail closed, because the supplied worker cannot execute app closures or enforce those search policies. Images are outside this remote path.

For independent remote work, construct `AgentRemoteSubmission` directly with text/context and optional JSON Schema. Do not send unresolved local memory/persona/skill settings in a direct submission.

## Identity, polling and cancellation

Retain both submission ID and payload after uncertain network failures. Submitting the same ID and payload returns the existing job; changed payload with the same ID conflicts. Creating a new ID authorizes a different job, not a retry lookup.

Jobs transition through queued/running and a terminal completed/failed/cancelled/interrupted state. `job(id)` retrieves the receipt. Cancelling `waitForCompletion` stops local polling only; call `cancel(id)` to request server-side cancellation. A restarted server marks a running job interrupted rather than automatically replaying generation.

For native JSON, `client.decode(job, as:)` decodes a completed structured result. Ordinary text lives in `job.text`; terminal failure does not imply a completed output.

## Continue a remote conversation

Set `parentJobID` to a completed persistent remote job. The server resumes and forks its official session. Ephemeral jobs cannot be parents. A remote session reference belongs to that server/account and is not interchangeable with the phone's local session ID.

Local-history preparation and remote parent continuation are different mechanisms: the former supplies context, while the latter uses server-owned official transcripts. Live remote generation/continuation still needs deployment qualification.

## Completion notifications and limits

Attach `AgentRemoteCompletion(deviceToken:mode:)` for silent or alert APNs delivery. The worker persists retry intent and uses exponential backoff. Delivery is at-least-once; deduplicate by job ID and fetch the authoritative receipt. Always refresh pending IDs on foreground launch.

Concurrency defaults to four independent jobs. Queue retention/outstanding ceilings and execution timeout are configurable, with zero disabling each limit. Byte bounds remain enforced: submissions up to 6 MiB and client responses up to 8 MiB. Limits, TLS, account provisioning and APNs secrets are documented in the [server deployment guide](../RemoteServer/README.md).

Scheduler/HTTP tests do not establish production TLS, subscription refresh or real APNs delivery. See [verification](verification.md).
