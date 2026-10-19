# Models and usage

[Documentation index](index.md)

## Model discovery and selection

```swift
let models = await runtime.availableModels()
if let model = models.first {
    let thread = try await runtime.createThread(configuration: .init(model: model.id))
    print(thread.id)
}
```

Use returned IDs rather than treating display names as API identifiers. Discovery depends on the driver/account; inspect the actual returned list and handle an empty result. The demo includes a model picker. A configured model string is not a guarantee that the account can use it indefinitely.

`AgentThreadConfiguration.maximumThinkingTokens` is optional: nil leaves harness defaults, zero requests disabled thinking, and positive values request a budget. Negative values are rejected; provider/model-specific maxima are left to the harness. This is not CodexKit's reasoning-effort vocabulary.

`configureThread(id:configuration:)` replaces configuration for an idle thread. Do not mutate a running thread's model behind its execution.

## Usage receipts

```swift
let history = await runtime.usageHistory(in: thread.id)
if let last = history.last {
    print(last.usage.inputTokens, last.usage.outputTokens)
}
let limits = await runtime.usageLimits()
```

Usage can include input/output tokens, cache-read/cache-creation tokens and an upstream estimated cost. Cost is not a Claude subscription invoice. Optional fields remain absent when the provider omits them; absent quota information does not mean zero usage or unlimited capacity.

`usageLimits()` combines the latest known control/active-session snapshots by limit kind. Snapshots include observation time and optional utilization/reset time; they are observations, not a locally calculated quota ledger. Usage receipts in the app projection currently retain the latest 10,000 entries, and are not a long-term billing archive.

Completed recovery receipt replay does not initiate a new provider call. Track app-level consumption separately from generation attempts and avoid charging a user again merely for reading a saved receipt.
