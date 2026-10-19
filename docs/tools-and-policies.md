# Tools, personas and policies

[Documentation index](index.md)

The official harness decides when to call a tool. ClaudeKit validates and authorizes each call before invoking the app's executor. Tool descriptions guide the model; schemas and execution policies enforce the app contract.

## Register a native tool

```swift
try await runtime.registerTool(.init(
    name: "read_note", description: "Read the selected note.",
    inputSchema: .object([
        "type": .string("object"),
        "properties": .object([:]),
        "additionalProperties": .bool(false)
    ]), approvalPolicy: .requiresApproval
), executor: .init { invocation, context in
    .success(invocation: invocation, text: "App-owned note content")
})
```

Registration/replacement/removal require idle state. Tool names must be unique. `replaceTool` and `unregisterTool(named:)` support deliberate changes between executions.

Root input schemas must describe objects. Tool inputs use the same JSON Schema validator as typed output; unsupported assertions fail closed. Arguments and text results are bounded at 4 MiB, with at most 256 result blocks. Avoid placing large documents into tool descriptions or unbounded results.

## Approval and cancellation

Use `ApprovalInbox` with `approvalPolicy: .requiresApproval` to render pending requests. Call `approve` or `deny` with the request's ID. Denial prevents the native executor from running; it does not merely tell the model to avoid the action. The [demo approval panel](../LibraryDemo/Sources/LibraryDemoApp.swift) shows the complete binding.

Automatic approval is appropriate only where the host deliberately permits execution without a prompt. Executors should check cancellation around expensive work and before irreversible side effects. A cancelled task cannot undo a side effect that already completed. Make externally visible operations idempotent where your app needs safe retries.

## Parallel tools and conversations

Set `allowsParallelExecution: true` on definitions that may safely overlap. Tools without that opt-in run serially within their execution. The runtime's default parallel-tool ceiling is four and can be changed; there is no hard maximum of sixteen. Different conversations have independent counters and barriers.

Skill sequences force serial execution. The effective policy intersects allowed tools and narrows total calls, per-tool calls, tool rounds and concurrency. A request cannot use a turn skill to grant permissions denied by a thread skill. Required tools must fit the allowlist/budgets. Setting `request.disableTools = true` while requiring tools fails before generation.

## Personas and skills

```swift
let persona = AgentPersonaStack(layers: [
    .init(name: "Editor", instructions: "Prefer concise, concrete language.")
])
let skill = AgentSkill(id: "notes", name: "Notes", instructions: "Read the note before answering.",
    executionPolicy: .init(allowedToolNames: ["read_note"], requiredToolNames: ["read_note"], maxToolCalls: 2))
let configured = try await runtime.createThread(configuration: .init(
    model: selectedModelID, personaStack: persona, skills: [skill]
))
```

A nonempty persona replaces the base-instruction fallback. A nonempty turn persona overrides the thread persona; thread skills precede turn skills in compilation. Memory and format instructions are then appended by their respective integrations.

Use `previewInstructions(for:in:)` to inspect compiled instructions and `effectivePolicy(for:in:)` to inspect allowed/required tools, budgets, sequence and search enablement before sending. Preview is useful for debugging; instruction text alone is not the policy enforcement boundary. There is no CodexKit-style remote definition loader in this API.

## Hosted search

Enable `allowHostedSearch: true` in runtime configuration, then opt a request into live search:

```swift
var request = Request(text: "Find the current documentation.")
request.webSearch = .init(mode: .live, allowedDomains: ["example.com"], maximumCalls: 3)
```

Configuration, thread skills and turn settings constrain the effective policy. Domain restrictions intersect using subdomain relationships; a narrower subdomain can survive intersection with its parent. The adapter enforces the allowed-domain input and optional call budget at the harness permission boundary. There is no implicit five-call maximum.

Only disabled/live modes are represented. Cached/indexed search modes from CodexKit are not available here. Embedded shell, plugin subprocesses and spawned subprocess agents are not exposed as ordinary iOS tools; provide app-defined native capabilities through MCP.
