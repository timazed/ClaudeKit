#!/usr/bin/env python3
"""Extract the pinned prototype's Bun module graph without running the executable."""
import hashlib,json,struct,sys
from pathlib import Path,PurePosixPath
root=Path(__file__).resolve().parents[1]
binary=Path(sys.argv[1]).read_bytes()
expected=json.loads((root/'pin.json').read_text())['binary_sha256']
assert hashlib.sha256(binary).hexdigest()==expected, 'Unexpected prototype binary'
# Bun Offsets trailer + 52-byte module records. Fail closed on format changes.
trailer=b'\n---- Bun! ----\n'
found=None
cursor=0
while True:
 pos=binary.find(trailer,cursor)
 if pos<0: break
 cursor=pos+1
 if pos<32: continue
 size,offset,length,entry=struct.unpack_from('<QIII',binary,pos-32)
 base=pos-32-size
 if base<0 or length==0 or length%52 or offset+length>size: continue
 count=length//52
 if entry>=count: continue
 records=[]
 try:
  for i in range(count):
   rec=base+offset+i*52
   no,nl,co,cl=struct.unpack_from('<IIII',binary,rec)
   assert no+nl<=size and co+cl<=size
   name=binary[base+no:base+no+nl].decode().rstrip('\0')
   assert name.startswith('/$bunfs/')
   records.append((name,binary[base+co:base+co+cl],struct.unpack_from('<I',binary,rec+48)[0]))
  found=(entry,records); break
 except (AssertionError,UnicodeDecodeError): continue
assert found, 'Unknown Bun module table'
entry,records=found
out=root/'Artifacts/extracted'; out.mkdir(exist_ok=True)
manifest={'version':'2.1.308','binary_sha256':expected,'entry':records[entry][0],'modules':[]}
for name,data,flags in records:
 rel=PurePosixPath(name.removeprefix('/$bunfs/')); assert not rel.is_absolute() and '..' not in rel.parts
 path=out/str(rel); path.parent.mkdir(parents=True,exist_ok=True); path.write_bytes(data)
 manifest['modules'].append({'name':name,'path':str(rel),'flags':flags,'size':len(data),'sha256':hashlib.sha256(data).hexdigest()})
(out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Extracted',len(records),'modules/assets; entry:',manifest['entry'])
