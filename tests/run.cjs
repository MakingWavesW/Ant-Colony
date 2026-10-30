const fs=require('fs'),os=require('os'),path=require('path'),{spawnSync}=require('child_process');
const repo=path.resolve(__dirname,'..'),temp=fs.mkdtempSync(path.join(os.tmpdir(),'underroot-tests-'));
fs.symlinkSync(repo,path.join(temp,'underroot'),'dir');fs.mkdirSync(path.join(temp,'upload'));fs.copyFileSync(path.join(repo,'original/phase3.html'),path.join(temp,'upload/index (1).html'));
try{for(let script of ['core.cjs','platforms.cjs','extended.cjs']){let r=spawnSync(process.execPath,[path.join(repo,'tests',script)],{cwd:temp,stdio:'inherit',env:process.env});if(r.status!==0)process.exitCode=r.status||1}}finally{fs.rmSync(temp,{recursive:true,force:true})}
