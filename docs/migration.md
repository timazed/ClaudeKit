# Migration

[Documentation index](index.md)

ClaudeKit is a development alpha. Prefer the current account/harness products for new integrations and check source signatures when upgrading; this documentation does not establish a stable release compatibility policy.

## Current API

This library is unreleased. The earlier Messages API products and compatibility wrappers have been removed. Use `ClaudeKit` and optional `ClaudeKitUI`, following [SDK integration](sdk-integration.md).

## Explicit drivers

Normal apps can replace manual driver construction with the configuration initializer supplied by `ClaudeKit`. Keep explicit drivers for tests/custom transports. Retain any custom storage-directory or macOS Node-path settings in the optional `harness:` configuration.

## Database formats and outputs

SQLite/Realm support only the current row-based format and retain metadata separately; lazy projection writes preserve unloaded histories. Back up existing app data before an app release that changes its persistence format. Downgrading to an older reader is not guaranteed.

Use explicit `migrateState(to:)` for changing store adapters, followed by a runtime configured with the destination. Output codec/schema changes use `migrateOutput`; recovery result changes can use `recoveredValue(migrate:)`. Neither migration should silently regenerate a model response.

There is no automatic CodexKit-to-ClaudeKit conversation or account migration. Shared app memory needs explicit app-level identity and record conversion today.
