# Migration

[Documentation index](index.md)

ClaudeKit is a development alpha. Prefer the current account/harness products for new integrations and check source signatures when upgrading; this documentation does not establish a stable release compatibility policy.

## Legacy API implementation

`ClaudeKitLegacy` and `ClaudeKitLegacyUI` preserve the earlier Messages API approach. Their credential/session contracts are not the harness-backed `AgentRuntime` API. A UI asking for API keys or pasted OAuth tokens is not the default account sign-in flow described here.

Use `ClaudeKit`, `ClaudeKitHarness` and `ClaudeKitUI`, and follow [SDK integration](sdk-integration.md). The existing DemoApp and LibraryDemo projects consume the same harness-backed demo sources; the earlier scheme/bundle identity was preserved so rebuilding can replace the old screen.

## Explicit drivers

Normal apps can replace manual driver construction with the configuration initializer supplied by `ClaudeKitHarness`. Keep explicit drivers for tests/custom transports. Retain any custom storage-directory or macOS Node-path settings in the optional `harness:` configuration.

## Old concurrency lanes

`ClaudeRuntimePool` remains a compatibility facade over one concurrent runtime. The old maximum-lane initializer parameter is removed. Restore imports prior `lane-N.json` snapshots into `state.json` once, retains originals, and rejects conflicting accounts/identities. Do not delete original lane files before confirming migration.

New apps can use `AgentRuntime` directly. Same-thread exclusion remains; unrelated conversations no longer require permanent lane assignment.

## Database formats and outputs

SQLite/Realm can read legacy snapshot records. Current saves place threads/messages in rows and retain metadata separately; lazy projection writes preserve unloaded histories. Back up existing app data before an app release that changes its persistence format. Downgrading to an older reader is not guaranteed.

Use explicit `migrateState(to:)` for changing store adapters, followed by a runtime configured with the destination. Output codec/schema changes use `migrateOutput`; recovery result changes can use `recoveredValue(migrate:)`. Neither migration should silently regenerate a model response.

There is no automatic CodexKit-to-ClaudeKit conversation or account migration. Shared app memory needs explicit app-level identity and record conversion today.
