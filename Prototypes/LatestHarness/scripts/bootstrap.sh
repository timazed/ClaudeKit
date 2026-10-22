#!/bin/bash
set -euo pipefail
prototype_root="$(cd "$(dirname "$0")/.." && pwd)"
python3 "$prototype_root/scripts/download.py"
python3 "$prototype_root/scripts/extract.py" "$prototype_root/Artifacts/claude-native"
npm ci --prefix "$prototype_root" --ignore-scripts --no-audit --no-fund
node "$prototype_root/scripts/prepare.cjs"
python3 "$prototype_root/scripts/generate-project.py"
