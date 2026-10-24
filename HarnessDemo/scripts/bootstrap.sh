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
python3 "$demo_root/../Scripts/harness-update.py" install
python3 "$demo_root/scripts/generate-project.py"
echo 'Pinned runtime ready. Open HarnessDemo.xcodeproj and run HarnessDemo.'
