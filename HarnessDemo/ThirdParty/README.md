# Third-party components

The demo hosts the official, unmodified `@anthropic-ai/claude-code` 2.1.112 npm CLI. Its proprietary license is included with the downloaded package. It is not covered by the demo's or L Shell's license. Vendored binaries and the CLI are ignored by Git and obtained by `scripts/bootstrap.sh`. This is a local development experiment, not an assertion of redistribution permission or App Store eligibility.

NodeMobile comes from [1Conan's nodejs-mobile v18.19.1-ios](https://github.com/1Conan/nodejs-mobile/releases/tag/v18.19.1-ios). See `Nodejs-mobile-LICENSE.txt`, including bundled dependency notices. The stock nodejs-mobile v18.20.4 build was also tested and failed on both simulator and device while parsing a Unicode property regular expression in the official CLI. Its failure evidence is retained.

Seven runtime adapter files under `Runtime/shims` were copied unchanged from [L Shell](https://github.com/ikunluo3-bit/l-shell-ios/tree/e95055e4affc962b32b860704c4f551aaefce052/node-runtime/preload/shims): `fetch.js`, `fs-safe-copy.js`, `intl.js`, `wasm-stub.js`, `process-title.js`, `process-exit.js`, and `child_process.js`. See `L-Shell-LICENSE.txt` (MIT). The Node startup flags and one-runtime-per-process design also draw on that project's `NodeRunner.swift`. Its preflight bypass, terminal, auth implementation, shell interpreter, and command handlers are not included.

SHA-256 values:

| Artifact | SHA-256 |
| --- | --- |
| Claude Code 2.1.112 npm archive | `84379969ea53a0e5fd231a8f77debe4c7cb17dd971f4809d10d33f9aeca5de09` |
| Unmodified `cli.js` | `bc3358282800e3e99daa8e71ac5b7b1566bd0d7ca7eb94f714a7859365d3163f` |
| 1Conan nodejs-mobile v18.19.1-ios ZIP | `e6471b84b3420de0845586c9b564e2cd2f7b6343bb2994706d01a45de6d8de7b` |
| Stock nodejs-mobile v18.20.4 iOS ZIP (failed experiment) | `8c5ca3a0d1e38de7f182a5642593e82593b820efd375a14b3ecafc4bcfee620e` |
