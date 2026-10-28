#!/usr/bin/env python3
"""Check official releases without executing downloaded code; install only a pinned archive."""
import argparse
import base64
import hashlib
import io
import json
from pathlib import Path
import re
import shutil
import tarfile
import tempfile
import urllib.request
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
PIN = ROOT / 'HarnessDemo/ThirdParty/claude-code.json'
PACKAGE = '@anthropic-ai/claude-code'
FILES = ('cli.js', 'package.json', 'README.md', 'LICENSE.md')


def download(url):
    parsed = urlparse(url)
    if parsed.scheme != 'https' or parsed.netloc != 'registry.npmjs.org':
        raise ValueError('Only the official npm registry is allowed')
    with urllib.request.urlopen(url, timeout=60) as response:
        if urlparse(response.url).netloc != 'registry.npmjs.org':
            raise ValueError('Unexpected registry redirect')
        data = response.read(128 * 1024 * 1024 + 1)
    if len(data) > 128 * 1024 * 1024:
        raise ValueError('Archive exceeds download limit')
    return data


def contents(archive, version):
    with tarfile.open(fileobj=io.BytesIO(archive), mode='r:gz') as tar:
        result = {}
        for name in FILES:
            member = tar.getmember('package/' + name)
            if not member.isfile() or member.size > 128 * 1024 * 1024:
                raise ValueError('Invalid archive member: ' + name)
            result[name] = tar.extractfile(member).read()
    package = json.loads(result['package.json'])
    if package.get('name') != PACKAGE or package.get('version') != version:
        raise ValueError('Archive package identity does not match metadata')
    if package.get('bin', {}).get('claude') not in ('cli.js', './cli.js'):
        raise ValueError('Release does not expose the embedded JavaScript harness')
    return result


def candidate(current):
    metadata = json.loads(download('https://registry.npmjs.org/@anthropic-ai%2fclaude-code/latest'))
    version = metadata['version']
    if metadata.get('name') != PACKAGE or not re.fullmatch(r'\d+\.\d+\.\d+', version):
        raise ValueError('Unexpected package identity or non-stable version')
    report = {'current': current['version'], 'latest': version, 'status': 'current'}
    if version == current['version']:
        return report, None
    if tuple(map(int, version.split('.'))) < tuple(map(int, current['version'].split('.'))):
        raise ValueError('Latest tag is older than the pin; refusing a downgrade')
    entry = metadata.get('bin', {}).get('claude')
    if not isinstance(entry, str) or not entry.strip():
        raise ValueError('Release metadata is missing a valid Claude executable entry')
    if entry not in ('cli.js', './cli.js'):
        report.update(status='blocked', reason='Latest release uses a native executable; the embedded iOS host requires cli.js.')
        return report, None
    dist = metadata['dist']
    archive = download(dist['tarball'])
    integrity = dist.get('integrity', '')
    expected = 'sha512-' + base64.b64encode(hashlib.sha512(archive).digest()).decode()
    if integrity != expected:
        raise ValueError('npm archive integrity mismatch')
    files = contents(archive, version)
    pin = dict(package=PACKAGE, version=version, tarball=dist['tarball'],
               archive_sha256=hashlib.sha256(archive).hexdigest(),
               cli_sha256=hashlib.sha256(files['cli.js']).hexdigest())
    report['status'] = 'candidate'
    return report, pin


def install(pin):
    if pin['package'] != PACKAGE:
        raise ValueError('Unexpected pinned package')
    archive = download(pin['tarball'])
    if hashlib.sha256(archive).hexdigest() != pin['archive_sha256']:
        raise ValueError('Pinned archive checksum mismatch')
    files = contents(archive, pin['version'])
    if hashlib.sha256(files['cli.js']).hexdigest() != pin['cli_sha256']:
        raise ValueError('Pinned CLI checksum mismatch')
    for relative in ('HarnessDemo/Runtime/vendor/claude-code', 'Sources/ClaudeKitHarness/Resources/Runtime/vendor/claude-code'):
        destination = ROOT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(dir=destination.parent) as temporary:
            stage = Path(temporary) / 'claude-code'
            stage.mkdir()
            for name, data in files.items():
                (stage / name).write_bytes(data)
            (stage / "harness-pin.json").write_text(json.dumps(pin, indent=2) + "\n")
            if destination.exists():
                shutil.rmtree(destination)
            stage.rename(destination)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['check', 'install'])
    parser.add_argument('--write-candidate', action='store_true', help='Update the pin only for a structurally compatible candidate; tests must still pass.')
    parser.add_argument('--report', type=Path)
    parser.add_argument('--allow-blocked', action='store_true', help='Report known incompatibilities without a failing exit code; unexpected errors still fail.')
    args = parser.parse_args()
    pin = json.loads(PIN.read_text())
    if args.command == 'install':
        install(pin)
        return 0
    report, update = candidate(pin)
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps(report, indent=2))
    if update and args.write_candidate:
        PIN.write_text(json.dumps(update, indent=2) + '\n')
    return 2 if report['status'] == 'blocked' and not args.allow_blocked else 0


if __name__ == '__main__':
    raise SystemExit(main())
