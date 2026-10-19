# ClaudeKit documentation

[ClaudeKit README](../README.md)

ClaudeKit embeds the official Claude Code harness and exposes a Swift application API. These guides describe the current development alpha. They document implemented behavior rather than assuming every CodexKit API has a Claude equivalent.

## Start here

1. [Install and integrate the SDK](sdk-integration.md).
2. [Connect Claude-account sign-in](authentication.md).
3. [Send messages and manage executions](messaging.md).
4. [Add native tools and approvals](tools-and-policies.md).

For a working app, use the [library demo](../LibraryDemo/README.md). For exact test coverage, read [verification](verification.md).

## Feature guides

| Guide | What you will learn |
| --- | --- |
| [SDK integration](sdk-integration.md) | Package products, bootstrap, runtime ownership, iOS/macOS setup |
| [Authentication](authentication.md) | Account login, browser cancellation, disconnect, logout, account isolation |
| [Messaging and concurrency](messaging.md) | Threads, context, ephemeral requests, event consumption, cancellation, steering |
| [Tools, personas and policies](tools-and-policies.md) | Registration, approval, parallel execution, policy composition, live search |
| [Typed streaming output](streaming-output.md) | Text, JSON, JSONL, XML, provisional events, validation and saved outputs |
| [Persistence](persistence.md) | File/SQLite/Realm, lazy activation, paging, redaction, context, migration |
| [Memory](memory.md) | Explicit records, retrieval, harness memory tools, embeddings, attribution |
| [Structured recovery](structured-request-recovery.md) | Frozen requests, authorization, retries, receipts and expiry |
| [Models and usage](models-and-usage.md) | Discovery, thinking budgets, token receipts and optional rate-limit telemetry |
| [Remote execution](remote-execution.md) | Prepared submissions, parent jobs, polling, cancellation and completion notifications |
| [Apple integrations](apple-integrations.md) | SwiftUI observation, finite background time, imports, App Intents |
| [Troubleshooting](troubleshooting.md) | Errors, storage failures, missing dependencies and diagnostic boundaries |
| [Architecture](runtime-architecture.md) | Ownership of the model loop, worker sessions and persistence boundaries |
| [Migration](migration.md) | Legacy API products, old lane stores and database formats |
| [Verification](verification.md) | Reproducible checks and what fixture tests establish |

## Core concepts

| Type | Responsibility |
| --- | --- |
| `AgentRuntime` | Account-bound app state, turn lifecycle, policies and native tool execution |
| `AgentThread` | App conversation identity, model configuration and official session reference |
| `Request` | One turn's input, context, memory selection and behavior overrides |
| `AgentExecution` | One execution's identity, event stream and cancellation handle |
| `ToolDefinition` / `AnyToolExecutor` | Model-visible schema and app-owned implementation |
| `StoredRuntimeState` | App projection: threads, messages, memory, outputs and telemetry |
| `AgentMemoryRecord` | A saved fact/preference with optional thread scope and provenance |
| `AgentOutputFormat` | Decoding, validation, event limits and output persistence contract |
| `AgentRecoveryRecord` | Durable attempt state and completed structured result |

## Status and design material

The [capability matrix](feature-parity.md) compares ClaudeKit with the local CodexKit baseline. The [concurrency audit](concurrency-audit.md) records removed restrictions and remaining differences. The [original implementation plan](plans/claudekit-harness-library.md) and [iOS investigation](investigations/official-claude-code-on-ios.md) are historical design material, not integration instructions.

Memory/storage extraction into shared packages has been discussed but is **not implemented**. The guides describe the current ClaudeKit-owned stores and records.
