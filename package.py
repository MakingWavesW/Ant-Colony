"""Create isolated release archives with index.html at each ZIP root."""
from pathlib import Path
import zipfile,json,hashlib
R=Path(__file__).resolve().parent
names={'standalone':'Standalone','playgama':'Playgama','youtube':'YouTube_Playables'}
manifest=[]
for target,label in names.items():
 folder=R/'dist'/target;out=R/'dist'/f'UNDERROOT_Wild_Frontier_{label}.zip'
 with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
  for p in sorted(folder.iterdir()):
   if p.is_file():z.write(p,p.name)
  for name in ['README_BEGINNER.md','PUBLISHING_GUIDE.md','IMPLEMENTATION_AND_TEST_REPORT.md','MONETIZATION_AND_TEST_REPORT.md']:z.write(R/name,name)
 with zipfile.ZipFile(out) as z:
  assert z.testzip() is None and 'index.html' in z.namelist()
  total=sum(i.file_size for i in z.infolist());assert total<250*1024*1024
  assert max(i.file_size for i in z.infolist())<30*1024*1024
 manifest.append({'target':target,'file':out.name,'zipBytes':out.stat().st_size,'totalUncompressedBytes':total,'sha256':hashlib.sha256(out.read_bytes()).hexdigest()})
(R/'tests/package-results.json').write_text(json.dumps(manifest,indent=2))
print(json.dumps(manifest,indent=2))
