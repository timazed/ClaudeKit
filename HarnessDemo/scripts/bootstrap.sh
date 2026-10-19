#!/bin/bash
set -euo pipefail
demo_root="$(cd "$(dirname "$0")/.." && pwd)"
demo_tmp="$(mktemp -d "${TMPDIR:-/tmp}/harness-demo-download.XXXXXX")"
trap 'rm -rf "$demo_tmp"' EXIT

verify_sha() {
  local actual
  actual="$(shasum -a 256 "$1" | awk '{print $1}')"
  if [ "$actual" != "$2" ]; then
    echo "Checksum mismatch: $1" >&2
    exit 1
  fi
}

mkdir -p "$demo_root/Vendor" "$demo_root/Runtime/vendor/claude-code"
if [ ! -d "$demo_root/Vendor/NodeMobile.xcframework" ]; then
  curl -fL --retry 2 'https://github.com/1Conan/nodejs-mobile/releases/download/v18.19.1-ios/NodeMobile.xcframework.zip' -o "$demo_tmp/node.zip"
  verify_sha "$demo_tmp/node.zip" 'e6471b84b3420de0845586c9b564e2cd2f7b6343bb2994706d01a45de6d8de7b'
  unzip -qo "$demo_tmp/node.zip" 'NodeMobile.xcframework/*' -d "$demo_root/Vendor"
fi
verify_sha "$demo_root/Vendor/NodeMobile.xcframework/ios-arm64/NodeMobile.framework/NodeMobile" 'f1b545ad4a8c700277883eb8cdc11361102514a66b889aefdc82ad8bc5e73322'
verify_sha "$demo_root/Vendor/NodeMobile.xcframework/ios-arm64-simulator/NodeMobile.framework/NodeMobile" 'a8d4559542fea25f17820633a6b1e68b1e4e73643fc25dec4b41c8d079797ff8'
if [ ! -f "$demo_root/Runtime/vendor/claude-code/cli.js" ]; then
  curl -fL --retry 2 'https://registry.npmjs.org/@anthropic-ai/claude-code/-/claude-code-2.1.112.tgz' -o "$demo_tmp/claude.tgz"
  verify_sha "$demo_tmp/claude.tgz" '84379969ea53a0e5fd231a8f77debe4c7cb17dd971f4809d10d33f9aeca5de09'
  tar -xzf "$demo_tmp/claude.tgz" -C "$demo_tmp" package/cli.js package/package.json package/README.md package/LICENSE.md
  cp "$demo_tmp/package/cli.js" "$demo_tmp/package/package.json" "$demo_tmp/package/README.md" "$demo_tmp/package/LICENSE.md" "$demo_root/Runtime/vendor/claude-code/"
fi
verify_sha "$demo_root/Runtime/vendor/claude-code/cli.js" 'bc3358282800e3e99daa8e71ac5b7b1566bd0d7ca7eb94f714a7859365d3163f'
python3 "$demo_root/scripts/generate-project.py"
echo 'Pinned runtime ready. Open HarnessDemo.xcodeproj and run HarnessDemo.'
