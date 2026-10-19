# Messaging and concurrency

[Documentation index](index.md)

Examples below assume a restored, signed-in `runtime`. Persist thread IDs in app navigation state; do not confuse them with harness session IDs or execution UUIDs.

## Create and send

```swift
let thread = try await runtime.createThread(title: "Planning")
let reply = try await runtime.send(Request(text: "Help me plan tomorrow."), in: thread.id)
print(reply)
```

Use `renameThread`, `configureThread` and `deleteThread` to manage the app conversation. Deletion removes the app projection and its associated memory/output/usage records. It does not delete the harness's own transcript files.

## Stream and cancel

```swift
let execution = try await runtime.start(Request(text: "Explain the options."), in: thread.id)
for try await event in execution.events {
    switch event {
    case let .assistantMessageDelta(_, _, delta): print(delta, terminator: "")
    case let .toolCallStarted(invocation): print("Using", invocation.toolName)
    case .turnCompleted: print("Completed")
    default: break
    }
}
```

Retain `execution` outside the consumer when another control needs to call `execution.cancel()`. `waitUntilReady()` waits for harness readiness, not turn completion. Consume the event stream once and handle thrown errors. For a cancelled consumer task, check cancellation after the loop before displaying success: stream termination alone is not proof of a successful turn.

Raw event streams buffer up to 256 events and fail/cancel if the consumer falls behind. Typed output uses its format's count/byte limits and awaited delivery. Avoid expensive UI or storage work directly inside a tight stream-consumption loop.

## Context and ephemeral requests

`Request(context:)` carries app data as a JSON value; the generic initializer encodes `Encodable & Sendable` values. It becomes a labeled context block in the prompt, not a separate authorization boundary.

```swift
let request = Request(text: "Summarize the selection.",
                      executionMode: .ephemeral,
                      context: .object(["selection": .string("App-provided text")]))
let reply = try await runtime.send(request, in: thread.id)
```

Ephemeral turns still use a thread's configuration but do not append their messages/output to the app's durable conversation. They use a fresh, nonpersistent harness session. Events can still contain transient messages, so the UI should distinguish them from saved history.

`setContext(_:for:)` stores context for future turns. When present, stored and per-request context are supplied together under `thread` and `request`. See [persistence](persistence.md).

## Independent conversations

Different threads can execute concurrently on one runtime. There is no fixed two-lane ceiling. A second operation on the same active thread fails with `thread_busy`; create another thread for independent work. Each execution has its own driver session, tool counters, output decoder and cancellation state.

Authentication, restore and whole-store migration remain exclusive. Creating a thread is allowed while another thread runs. Writes are ordered separately from model execution. A failed write stops further commits until restoration.

No fixed worker cap does not imply unlimited device memory. Start only the concurrent work your app needs and qualify device resource use for that workload.

## Steering

```swift
try await runtime.steer("Focus on the cheaper options.", executionID: execution.id)
```

Steering queues input in the active official harness. Acceptance does not promise immediate model consumption. Typed output rejects steering after final output begins (`output_started`). Queue capacity is 512 inputs, each up to 1 MiB. A stale execution ID cannot steer a later turn.

Defaults are 300 seconds per ordinary turn, 128 host-tool calls, and four parallel host-tool calls. Configuration can remove the first two budgets with nil or change parallelism. Skills can narrow those permissions; see [tools and policies](tools-and-policies.md).
