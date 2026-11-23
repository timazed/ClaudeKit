#!/usr/bin/env python3
"""Verify the pinned native npm archive and materialize the inputs for extraction."""
import base64
import hashlib
import json
import tarfile
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[1]
pin = json.loads((root.parents[1] / 'HarnessDemo/ThirdParty/claude-code.json').read_text())
artifacts = root / 'Artifacts'
artifacts.mkdir(exist_ok=True)
archive = artifacts / 'claude-native.tgz'
package_name = '@anthropic-ai/claude-code-darwin-arm64'
tarball = f"https://registry.npmjs.org/{package_name}/-/claude-code-darwin-arm64-{pin['version']}.tgz"
if pin['package'] != package_name or pin['tarball'] != tarball:
    raise ValueError('Unexpected native package or tarball URL')


def integrity(path):
    return 'sha512-' + base64.b64encode(hashlib.sha512(path.read_bytes()).digest()).decode()

if not archive.exists() or integrity(archive) != pin['integrity']:
    urllib.request.urlretrieve(pin['tarball'], archive)
if integrity(archive) != pin['integrity']:
    raise ValueError('Native archive integrity mismatch')
with tarfile.open(archive) as source:
    package = json.load(source.extractfile('package/package.json'))
    if (package['name'], package['version']) != (pin['package'], pin['version']):
        raise ValueError('Unexpected native package identity')
    binary = source.extractfile('package/claude').read()
    if hashlib.sha256(binary).hexdigest() != pin['binary_sha256']:
        raise ValueError('Native executable checksum mismatch')
    (artifacts / 'claude-native').write_bytes(binary)
    for name in ('LICENSE.md', 'README.md'):
        (artifacts / name).write_bytes(source.extractfile('package/' + name).read())
