#!/bin/bash
set -euo pipefail
library_root="$(cd "$(dirname "$0")/.." && pwd)"
bash "$library_root/HarnessDemo/scripts/bootstrap.sh"
python3 "$library_root/LibraryDemo/scripts/generate-project.py"
echo 'Open LibraryDemo/LibraryDemo.xcodeproj. The app consumes the local Swift package.'
