#!/usr/bin/env python3
import base64,hashlib,io,json,tarfile,urllib.request
from pathlib import Path
root=Path(__file__).resolve().parents[1]
pin=json.loads((root/'pin.json').read_text())
out=root/'Artifacts/claude-native';out.parent.mkdir(exist_ok=True)
if out.exists() and hashlib.sha256(out.read_bytes()).hexdigest()==pin['binary_sha256']:
    print('Verified cached binary')
else:
    data=urllib.request.urlopen(pin['tarball'],timeout=120).read()
    assert 'sha512-'+base64.b64encode(hashlib.sha512(data).digest()).decode()==pin['integrity'], 'Archive integrity mismatch'
    with tarfile.open(fileobj=io.BytesIO(data),mode='r:gz') as archive:
        member=archive.getmember('package/claude');assert member.isfile()
        binary=archive.extractfile(member).read()
    assert hashlib.sha256(binary).hexdigest()==pin['binary_sha256'], 'Binary checksum mismatch'
    out.write_bytes(binary)
    print('Downloaded and verified',pin['version'])
