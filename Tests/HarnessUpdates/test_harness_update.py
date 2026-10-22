import base64
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tarfile
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

    def test_downgrade_rejected(self):
        with patch.object(updater, 'download', return_value=json.dumps(self.metadata('2.1.100')).encode()):
            with self.assertRaisesRegex(ValueError, 'downgrade'):
                updater.candidate({'version': '2.1.112'})

    def test_non_registry_download_rejected(self):
        with self.assertRaises(ValueError):
            updater.download('https://example.com/package.tgz')


if __name__ == '__main__':
    unittest.main()
