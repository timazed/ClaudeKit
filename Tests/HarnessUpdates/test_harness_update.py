import base64
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tarfile
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('updater', Path(__file__).resolve().parents[2] / 'Scripts/harness-update.py')
updater = importlib.util.module_from_spec(spec)
spec.loader.exec_module(updater)


class UpdateTests(unittest.TestCase):
    def metadata(self, version='2.1.113', entry='cli.js'):
        return {'name': updater.PACKAGE, 'version': version, 'bin': {'claude': entry}}

    def test_current_does_not_download_archive(self):
        with patch.object(updater, 'download', return_value=json.dumps(self.metadata('2.1.112')).encode()) as fetch:
            report, pin = updater.candidate({'version': '2.1.112'})
        self.assertEqual(report['status'], 'current')
        self.assertIsNone(pin)
        self.assertEqual(fetch.call_count, 1)

    def test_native_release_is_blocked(self):
        with patch.object(updater, 'download', return_value=json.dumps(self.metadata(entry='bin/claude.exe')).encode()) as fetch:
            report, pin = updater.candidate({'version': '2.1.112'})
        self.assertEqual(report['status'], 'blocked')
        self.assertIsNone(pin)
        self.assertEqual(fetch.call_count, 1)

    def test_blocked_cli_preserves_pin_and_reports_status(self):
        for flags, expected in [([], 2), (['--allow-blocked'], 0)]:
            with self.subTest(flags=flags), tempfile.TemporaryDirectory() as directory:
                pin = Path(directory) / 'pin.json'
                report = Path(directory) / 'report.json'
                original = '{"version": "2.1.112"}\n'
                pin.write_text(original)
                args = ['harness-update.py', 'check', '--write-candidate', '--report', str(report), *flags]
                with patch.object(updater, 'PIN', pin), patch('sys.argv', args), \
                     patch.object(updater, 'download', return_value=json.dumps(self.metadata(entry='bin/claude.exe')).encode()), \
                     patch('sys.stdout', new_callable=io.StringIO):
                    self.assertEqual(updater.main(), expected)
                self.assertEqual(pin.read_text(), original)
                self.assertEqual(json.loads(report.read_text())['status'], 'blocked')

    def test_allow_blocked_does_not_hide_errors(self):
        malformed = self.metadata()
        del malformed['bin']
        for response in [OSError('Registry unavailable'), b'not json', json.dumps(malformed).encode()]:
            with self.subTest(response=response), tempfile.TemporaryDirectory() as directory:
                pin = Path(directory) / 'pin.json'
                report = Path(directory) / 'report.json'
                original = '{"version": "2.1.112"}\n'
                pin.write_text(original)
                args = ['harness-update.py', 'check', '--allow-blocked', '--write-candidate', '--report', str(report)]
                with patch.object(updater, 'PIN', pin), patch('sys.argv', args), \
                     patch.object(updater, 'download', side_effect=[response]):
                    with self.assertRaises((OSError, ValueError)):
                        updater.main()
                self.assertFalse(report.exists())
                self.assertEqual(pin.read_text(), original)

    def test_candidate_hashes_verified_archive(self):
        package = self.metadata()
        output = io.BytesIO()
        with tarfile.open(fileobj=output, mode='w:gz') as archive:
            for name in updater.FILES:
                data = json.dumps(package).encode() if name == 'package.json' else b'fixture'
                member = tarfile.TarInfo('package/' + name)
                member.size = len(data)
                archive.addfile(member, io.BytesIO(data))
        data = output.getvalue()
        package['dist'] = {'tarball': 'https://registry.npmjs.org/example.tgz', 'integrity': 'sha512-' + base64.b64encode(hashlib.sha512(data).digest()).decode()}
        with patch.object(updater, 'download', side_effect=[json.dumps(package).encode(), data]):
            report, pin = updater.candidate({'version': '2.1.112'})
        self.assertEqual(report['status'], 'candidate')
        self.assertEqual(pin['cli_sha256'], hashlib.sha256(b'fixture').hexdigest())
        package['dist']['integrity'] = 'sha512-invalid'
        with patch.object(updater, 'download', side_effect=[json.dumps(package).encode(), data]):
            with self.assertRaisesRegex(ValueError, 'integrity'):
                updater.candidate({'version': '2.1.112'})

    def test_install_bundles_verified_pin_for_both_runtimes(self):
        package = self.metadata()
        output = io.BytesIO()
        with tarfile.open(fileobj=output, mode='w:gz') as archive:
            for name in updater.FILES:
                data = json.dumps(package).encode() if name == 'package.json' else b'fixture'
                member = tarfile.TarInfo('package/' + name)
                member.size = len(data)
                archive.addfile(member, io.BytesIO(data))
        data = output.getvalue()
        pin = dict(package=updater.PACKAGE, version=package['version'],
                   tarball='https://registry.npmjs.org/example.tgz',
                   archive_sha256=hashlib.sha256(data).hexdigest(),
                   cli_sha256=hashlib.sha256(b'fixture').hexdigest())
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            with patch.object(updater, 'ROOT', root), patch.object(updater, 'download', return_value=data):
                updater.install(pin)
            for relative in ('HarnessDemo/Runtime', 'Sources/ClaudeKitHarness/Resources/Runtime'):
                installed = root / relative / 'vendor/claude-code'
                self.assertEqual(json.loads((installed / 'harness-pin.json').read_text()), pin)
                self.assertEqual(hashlib.sha256((installed / 'cli.js').read_bytes()).hexdigest(), pin['cli_sha256'])

    def test_downgrade_rejected(self):
        with patch.object(updater, 'download', return_value=json.dumps(self.metadata('2.1.100')).encode()):
            with self.assertRaisesRegex(ValueError, 'downgrade'):
                updater.candidate({'version': '2.1.112'})

    def test_non_registry_download_rejected(self):
        with self.assertRaises(ValueError):
            updater.download('https://example.com/package.tgz')


if __name__ == '__main__':
    unittest.main()
