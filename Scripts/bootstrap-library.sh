#!/bin/bash
set -euo pipefail
library_root="$(cd "$(dirname "$0")/.." && pwd)"
bash "$library_root/HarnessDemo/scripts/bootstrap.sh"
mkdir -p "$library_root/Sources/ClaudeKitHarness/Resources/Runtime/vendor"
cp -R "$library_root/HarnessDemo/Runtime/vendor/claude-code" "$library_root/Sources/ClaudeKitHarness/Resources/Runtime/vendor/"
python3 "$library_root/LibraryDemo/scripts/generate-project.py"
echo 'Open LibraryDemo/LibraryDemo.xcodeproj. The app consumes the local Swift package.'
