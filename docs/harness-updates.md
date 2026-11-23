# Official harness updates

The [scheduled workflow](../.github/workflows/harness-update.yml) checks the official `@anthropic-ai/claude-code` npm `latest` tag daily at 21:23 UTC, and can be run manually from GitHub Actions. It becomes active once committed to the default branch. Enable Actions and “Allow GitHub Actions to create and approve pull requests” in the repository settings for automated draft PR creation. No external credentials or model API keys are required.

The version, download URL and SHA-256 checksums live in [claude-code.json](../HarnessDemo/ThirdParty/claude-code.json). Both bootstrap entry points use this manifest. Bootstrap bundles the verified pin with each runtime so startup checks and version evidence follow the selected release. Downloads are verified before replacing the demo and SDK copies, preventing stale cached files from surviving an update.

The current pin uses the official ARM64 native archive. Bootstrap checks its npm SHA-512 integrity, package identity and executable SHA-256. It extracts the Bun graph without executing the desktop binary, converts JavaScript modules to CommonJS with pinned esbuild, and bundles the resulting graph with the Bun adapter, ws, core-js and upstream notices. Startup checks the compiled entry’s SHA-256. iOS uses a narrowly scoped exception to the upstream Node 22 version guard on NodeMobile 18.19.1. The build also translates the logout path’s Unicode emoji expression for Node 18 using pinned regexpu-core. macOS and CI use Node 24.14.0.

## Scheduled release checks

1. Reads official registry metadata without executing package install scripts.
2. Reports **blocked** in the run summary if the release no longer exposes `cli.js`. The check succeeds, leaves the pin unchanged, and skips qualification and PR creation. Each new native release needs a reviewed extraction and compatibility patch before updating the pin.
3. Verifies the candidate archive against npm's SHA-512 integrity, checks package identity and required files, and records archive/CLI SHA-256 checksums.
4. Runs Swift tests with the official-harness fixtures enabled, JavaScript tests, worker/session-resume checks, and unsigned iOS device and arm64 simulator builds. The desktop fixtures use the Node version in `.nvmrc`.
5. Opens one draft PR per version only after those checks pass. A failed qualification never changes the default branch. Existing open or closed PRs for the same version are not recreated.

Review the run summary for the pinned version, latest version, and any compatibility blocker. GitHub Actions has no dedicated blocked conclusion: a known incompatibility produces a successful check with a **blocked** summary, so it does not send daily failure emails. For a native release, review the module layout and version guard in the preparation script, then qualify the SDK and demo against the new pin. Unexpected errors, including registry/network failures, malformed metadata, checksum mismatches, and failed qualification, still fail visibly.

Before merging, complete simulator UI acceptance and physical-device/live-account checks in [verification](verification.md). CI does not prove embedded runtime execution or real account refresh. Draft PRs are never automatically merged. The PR links its qualification run; subsequent PR workflows may require approval under GitHub's token-trigger rules.

Use nvm to select the desktop host used by CI.

```sh
nvm install
nvm use
python3 Scripts/harness-update.py check
python3 Scripts/harness-update.py check --write-candidate --report /tmp/harness-update.json
bash Scripts/bootstrap-library.sh
python3 -m unittest discover -s Tests/HarnessUpdates -v
```

`check` exits 2 for an incompatible latest release and leaves the manifest unchanged. The workflow passes `--allow-blocked` to return success for this known condition while preserving the `blocked` report. Other errors still exit nonzero. `--write-candidate` updates only a structurally compatible candidate; it does not qualify it. Run the verification suite before accepting that change.

The [verification workflow](../.github/workflows/verify.yml) also runs qualification against the checked-in pin for pull requests and pushes to `main`. It does not query or adopt the latest release.
