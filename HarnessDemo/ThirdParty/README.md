# Third-party components

The demo and SDK build their harness from Anthropic’s official darwin-arm64 npm archive. The [manifest](claude-code.json) pins release 2.1.330, npm integrity, the original binary hash, and the adapted entry hash. Bootstrap extracts the module graph, transforms it with esbuild, and ships the package’s README and license alongside ws and core-js with their notices. The iOS adaptation changes one Node version check. Generated assets are ignored by Git. This checkout supports local development. See the [adaptation details](../../docs/harness-updates.md).

NodeMobile comes from [1Conan's nodejs-mobile v18.19.1-ios](https://github.com/1Conan/nodejs-mobile/releases/tag/v18.19.1-ios). See `Nodejs-mobile-LICENSE.txt`, including bundled dependency notices. The stock nodejs-mobile v18.20.4 build was also tested and failed on both simulator and device while parsing a Unicode property regular expression in the official CLI. Its failure evidence is retained.

Seven runtime adapter files under `Runtime/shims` were copied unchanged from [L Shell](https://github.com/ikunluo3-bit/l-shell-ios/tree/e95055e4affc962b32b860704c4f551aaefce052/node-runtime/preload/shims): `fetch.js`, `fs-safe-copy.js`, `intl.js`, `wasm-stub.js`, `process-title.js`, `process-exit.js`, and `child_process.js`. See `L-Shell-LICENSE.txt` (MIT). The Node startup flags and one-runtime-per-process design also draw on that project's `NodeRunner.swift`. Its preflight bypass, terminal, auth implementation, shell interpreter, and command handlers are not included.

Bootstrap verifies the extracted package identity and compiled entry before installing the generated runtime.

NodeMobile SHA-256 values:

| Artifact | SHA-256 |
| --- | --- |
| 1Conan nodejs-mobile v18.19.1-ios ZIP | `e6471b84b3420de0845586c9b564e2cd2f7b6343bb2994706d01a45de6d8de7b` |
| Stock nodejs-mobile v18.20.4 iOS ZIP (failed experiment) | `8c5ca3a0d1e38de7f182a5642593e82593b820efd375a14b3ecafc4bcfee620e` |
