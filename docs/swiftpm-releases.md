# Release ClaudeKit through SwiftPM

ClaudeKit versions identify the Swift SDK. The Claude Code and NodeMobile versions are independent dependency pins. A release tag points at a packaging commit whose parent is the tested source revision. This commit adds the generated harness under the Swift package’s existing resources directory. SwiftPM retrieves NodeMobile from the upstream release URL and verifies the archive checksum from the manifest.

## Test a release candidate

Run the **SwiftPM release** workflow on `main`, enter an unused version such as `0.1.0-alpha.1`, and leave **Publish** unchecked. The workflow prepares the harness from the pinned upstream inputs in a fresh clone. A separate Xcode project resolves the exact tag from that clone, builds the app, and runs a fixture conversation and process-restart check on an iPhone simulator.

To reproduce on a Mac with Xcode, an iOS simulator, Python 3 and the Node version in `.nvmrc`, run these commands from a committed checkout. Choose a new directory for the candidate.

```sh
candidate="$(mktemp -d)/ClaudeKit"
bash Scripts/prepare-spm-release.sh 0.1.0-alpha.1 "$candidate"
python3 Scripts/verify-spm-release.py "file://$candidate" 0.1.0-alpha.1
```

## Publish

The tag distributes the adapted Claude Code modules to everyone with read access to the repository. Anthropic’s published conditions require running its binary as published unless a separate agreement applies. Confirm your agreement covers the adapted runtime before distributing it. [Product conditions](https://code.claude.com/docs/en/legal-and-compliance)

When ready to distribute, run the workflow on `main` with **Publish** checked. It pushes the exact tag that passed the consumer test. Existing versions cannot be overwritten by the workflow. Consumers can then select that version in Xcode or specify it in `Package.swift`. [Install the package](sdk-integration.md#install-a-version-with-swiftpm)
