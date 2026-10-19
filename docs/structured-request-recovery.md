# Structured request recovery

[Documentation index](index.md)

Recovery persists a frozen, tool-free, ephemeral JSON request plus its attempt state and completed receipt. It is designed for app interruption/relaunch, not exactly-once model inference.

## Prepare, persist the ID, authorize

```swift
let id = try await runtime.prepareRecovery(
    Request(text: "Produce the report.", executionMode: .ephemeral, outputSchema: schema),
    in: thread.id, maximumAttempts: 3
)
// Persist id in app state before attempting generation.
let result = try await runtime.sendRecovering(id) { attempt in
    // Apply the app's authorization policy, keyed by attempt.attemptID.
    true
}
```

`schema` is the app's JSON Schema value. Preparation freezes model/instructions/account/request data. Recovery must be ephemeral and have an output schema; tool effects are excluded. The attempt limit defaults to three, supports 1–1,000, and is never reset by explicit retry.

The authorization closure runs before each new attempt. Make it idempotent by attempt ID if it reserves app quota or records user approval. A denied attempt does not spend the generation budget. The library saves authorization/attempt state before transmission.

## Replay versus retry

Calling `sendRecovering` after completion returns the saved result without new generation or authorization. `sendRecovering(_:as:authorize:)` decodes a typed value. `recoveredValue(_:migrate:)` transforms a completed receipt into a new app model without invoking the provider.

For incomplete operations, inspect `recoveryStatus`. `retryRecovery` permits an explicit retry subject to budget/cooldown; it does not make retries free. The overload accepting `AgentRecoveryRetryPolicy` automatically retries only selected harness/startup/control transport failures. It still calls authorization and obeys the attempt budget.

A process may die after a provider request was sent but before the receipt was saved. The library cannot prove that generation did not occur. Repeating an incomplete request can consume another provider attempt. This is why completed receipt replay and retry authorization are separate paths.

## Storage and lifecycle

`FileAgentRecoveryStore` uses one bounded JSON file per ID, atomic replacement and a nonblocking per-operation file lease. The lease prevents two consumers from generating the same operation concurrently. Keep the recovery directory account-specific and persistent; it is separate from conversation storage.

Optional `retention` sets expiry for starting new attempts. Nil leaves it without automatic expiry. Expiry does not block replay of a completed receipt or abort an already-authorized attempt. `purgeExpiredRecovery()` provides explicit cleanup.

Acknowledge with `acknowledgeRecovery` only after the app has durably consumed the result: acknowledgement removes the receipt. Cancelling a generation task interrupts its driver and preserves recovery state. On iOS, save the ID and return in the foreground; recovery does not grant indefinite background execution.

See [Apple integrations](apple-integrations.md) and [remote execution](remote-execution.md) for the separate background-job options.
