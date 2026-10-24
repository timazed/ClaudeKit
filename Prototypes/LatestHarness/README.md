# Latest official harness: isolated iPhone prototype

This experiment ports the official Claude Code **2.1.308** module graph to the existing NodeMobile 18.19.1 host. It has its own app ID, `ai.claudekit.latestharnesslab`, and does not change the shipping package, its runtime resources, or its 2.1.112 pin.

On 23 October 2026, the prototype passed on an actual **iPhone 16 Pro Max running iOS 27.0.1**, launched without a debugger:

| Check | Result |
| --- | --- |
| Harness and native Swift host in the same process | Passed |
| NodeMobile with JIT disabled | Passed |
| Local fixture model requests | 3 |
| Swift write/read tool calls | 1 write, 1 read |
| Harness permission requests | 2, approved by the fixture host |
| Streaming events | 28 |
| Fixture verifies the actual written note | Passed |
| App restart and session resume | Same session, different process, 0 repeated tools, 11 stream events |

Reports: [tool loop](Evidence/iphone-tool-loop.json), [resume](Evidence/iphone-resume.json). Their adjacent JSONL files contain the event traces. The model responses come from a deterministic loopback fixture; the real latest harness owns the agent loop, tool dispatch, permissions, streaming and transcripts. This is not a live-model or account-authentication test.

## What was adapted

1. The official macOS ARM64 package is pinned in `pin.json`. Download verifies npm SHA-512 integrity and the binary SHA-256. No native desktop executable is run.
2. `scripts/extract.py` reads the Bun module table and preserves 2,776 source modules/assets and their identities under ignored `Artifacts/extracted`. The original JavaScript is not committed.
3. `scripts/prepare.cjs` verifies source hashes and converts the JavaScript modules to CommonJS for Node 18. This handles the current bundle's mixed ESM/require cycles. Original extracted files remain unchanged. Desktop native `.node` addons are omitted from the device runtime.
4. `Runtime/bun.cjs` maps Bun virtual paths and text assets, provides the small host API subset needed by this path, and loads core-js standard JavaScript polyfills. Unimplemented Bun properties remain absent so upstream feature detection can use its fallbacks. Missing-property accesses are logged. This is not full Bun compatibility.
5. **One explicit prototype-only harness edit:** the generated `chunk-nj41373t.js` version guard permits iOS to continue below Node 22. The original guard is checked before replacement. Runtime evidence still reports the actual Node 18.19.1 and `nodeVersionGateException: true`. This bypass is a feasibility experiment, not proof that Node 18 satisfies the current harness's runtime requirements.
6. `CLAUDE_CODE_TMPDIR` points at the app's writable temporary directory. Dedicated pipes and native tools are reused from HarnessDemo in isolated source copies.

The resulting artifact is an **adapted current official harness**, not an unmodified supported Anthropic iOS distribution. Device logs contain optional Bun API fallback messages and a managed-preferences warning because iOS cannot read macOS's `/Library/Managed Preferences` path. These limitations were not hidden or treated as supported features.

## Reproduce

Prerequisites: macOS/Xcode, Python 3, npm/Node for build tools, and the existing verified `HarnessDemo/Vendor/NodeMobile.xcframework`. Use your own signing team if different from this checkout.

```sh
bash Prototypes/LatestHarness/scripts/bootstrap.sh
node Prototypes/LatestHarness/scripts/tool-loop.cjs
xcodebuild -project Prototypes/LatestHarness/HarnessDemo.xcodeproj \
  -scheme HarnessDemo -destination 'id=YOUR_IPHONE_UDID' \
  -derivedDataPath /tmp/latest-harness-device -allowProvisioningUpdates build
xcrun devicectl device install app --device YOUR_IPHONE_UDID \
  /tmp/latest-harness-device/Build/Products/Debug-iphoneos/HarnessDemo.app
xcrun devicectl device process launch --terminate-existing --device YOUR_IPHONE_UDID \
  ai.claudekit.latestharnesslab -- --smoke
```

Run again with `--resume-smoke` to test persisted session continuation. Retrieve `Documents/Results` from this app's data container for reports. The app defaults to fixture mode; no real account is needed. The Xcode project's UI test also checks the basic tool loop.

Downloaded originals, converted modules, dependencies and build outputs are ignored by Git. `npm ci --ignore-scripts` uses the committed dependency lock. The build-time esbuild binary stays outside app resources; only ws and core-js are copied into the runtime.

## Remaining qualification

A modern iOS Node runtime or a fully audited compatibility layer is still needed before considering production adoption. Built-in shell tools, native addons, live authentication, policy management, subagents, compaction, cancellation, multiworker concurrency, resource pressure and future releases were not qualified here. The scheduled updater should remain blocked for native packages until an extraction-and-device-validation path is deliberately integrated.

Runtime shims copied from HarnessDemo retain their original attribution; the L Shell MIT notice is in `ThirdParty`. The extracted official harness remains subject to its own license. See the repository's third-party provenance documentation.
