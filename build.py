"""Build one maintained gameplay source into isolated platform bundles. No dependencies."""
from pathlib import Path
import re,json,zipfile,hashlib
ROOT=Path(__file__).resolve().parent
base=(ROOT/'src/base.html').read_text()
base=base.replace('MAP=2100','MAP=4700')
# The old full-map raster is superseded by viewport chunk caching. Keep startup lean.
a=base.index('function makeFloor()');b=base.index('function arrange()',a)
base=base[:a]+"function makeFloor(){return null}\n"+base[b:]
# Every persistence access goes through the target's own storage bridge.
base=base.replace('localStorage','WFStorage')
css=(ROOT/'src/frontier.css').read_text()
js=(ROOT/'src/frontier.js').read_text()+'\n'+(ROOT/'src/navigation.js').read_text()
for target in ['standalone','playgama','youtube']:
 adapter=(ROOT/'src/platform-common.js').read_text()+'\n'+(ROOT/f'src/platform-{target}.js').read_text() if (ROOT/f'src/platform-{target}.js').exists() else "window.WFPlatform={name:'standalone',ready:Promise.resolve(),adsAvailable:()=>false};const WFStorage=window.localStorage;"
 sdk={'standalone':'','playgama':'<script src="https://bridge.playgama.com/v2/stable/playgama-bridge.js"></script>','youtube':'<script src="https://www.youtube.com/game_api/v1"></script>'}[target]
 rewards=(ROOT/'src/rewards.js').read_text() if (ROOT/'src/rewards.js').exists() else ''
 # Platform adapters must initialize before any original game code.
 doc=base.replace('<head>','<head>'+sdk+'<script>'+adapter+'</script>',1)
 doc=doc.replace('</head>','<style>'+css+'</style></head>',1)
 doc=doc.replace('</body>','<script>'+js+'\n'+rewards+'</script></body>')
 if target!='standalone':
  scripts=re.findall(r'<script>([\s\S]*?)</script>',doc)
  # Keep the head adapter outside the delayed gameplay bootstrap.
  body_scripts=scripts[1:]
  for body_script in body_scripts:doc=doc.replace('<script>'+body_script+'</script>','',1)
  boot="WFPlatform.ready.then(()=>{\n"+'\n;\n'.join(body_scripts)+"\n}).catch(()=>{document.getElementById('begin').disabled=true;document.getElementById('intro').querySelector('p').textContent=WFPlatform.initError||'Platform unavailable. Reload to retry.'});"
  doc=doc.replace('</body>','<script>'+boot+'</script></body>')
 if target=='playgama':doc=doc.replace("k==='Escape'","k==='F8'").replace("e.key==='Escape'","e.key==='F8'")
 if target=='standalone':assert 'ytgame' not in doc and 'bridge.playgama' not in doc
 if target=='playgama':assert 'ytgame' not in doc
 if target=='youtube':assert 'bridge.playgama' not in doc
 out=ROOT/'dist'/target;out.mkdir(parents=True,exist_ok=True);(out/'index.html').write_text(doc)
 if target=='playgama':(out/'playgama-bridge-config.json').write_text(json.dumps({'advertisement':{'rewarded':{'placements':[{'id':k} for k in ['food','leaves','seeds','nectar','soil','rush']]}}},indent=2))
 if target=='standalone':(ROOT/'index.html').write_text(doc)
 print(target,len(doc.encode()),hashlib.sha256(js.encode()).hexdigest()[:12])
