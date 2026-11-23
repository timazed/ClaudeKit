#!/bin/bash
# Create a local, consumer-ready version tag in a new clone. Never pushes a ref.
set -euo pipefail
if [[ $# != 2 || ! $1 =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-(alpha|beta|rc)\.(0|[1-9][0-9]*))?$ ]]; then
  echo 'Usage: prepare-spm-release.sh VERSION NEW_DIRECTORY (e.g. 0.1.0-alpha.1)' >&2
  exit 2
fi
root="$(cd "$(dirname "$0")/.." && pwd)"
version="$1"
destination="$2"
if [[ -e "$destination" ]]; then
  echo 'Choose a new directory for the local release repository.' >&2
  exit 1
fi
source_commit="$(git -C "$root" rev-parse HEAD)"
git clone --quiet --no-local --no-tags "$root" "$destination"
git -C "$destination" switch --quiet --detach "$source_commit"
(
  cd "$destination"
  # Always build from this exact revision and lockfile in the clean clone.
  python3 Scripts/harness-update.py install
  git add --force -- Sources/ClaudeKitHarness/Resources/Runtime/vendor/claude-code
  git -c user.name=ClaudeKit -c user.email=release@users.noreply.github.com \
    commit --quiet -m "Package embedded runtime for ClaudeKit $version"
  git tag "$version"
)
