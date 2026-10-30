/* Official YouTube Playables only. No other ad or storage SDK. */
WFPlatform.name='youtube';
WFPlatform.ready=(async()=>{if(typeof ytgame==='undefined'||!ytgame.IN_PLAYABLES_ENV){WFPlatform.name='youtube-preview';WFPlatform.local=true;try{for(let k of ['underroot_colony_v1','underroot_scout_v2','underroot_explorer_lesson']){let v=window.localStorage.getItem(k);if(v)WFMemory.set(k,v)}}catch(e){WFPlatform.local=false}return}
 WFPlatform.audioAllowed=ytgame.system.isAudioEnabled();ytgame.system.onAudioEnabledChange(v=>{WFPlatform.audioAllowed=v;WFPlatform.notifyState()});ytgame.system.onPause(()=>{WFPlatform.paused=true;WFPlatform.notifyState()});ytgame.system.onResume(()=>{WFPlatform.paused=false;WFPlatform.audioAllowed=ytgame.system.isAudioEnabled();WFPlatform.notifyState()});
 let data=await ytgame.game.loadData();if(data){let d=JSON.parse(data);if(d.wfStorage)wfSeedStorage(d.wfStorage);else if(d.state)WFMemory.set('underroot_colony_v1',data)}WFPlatform.language=await ytgame.system.getLanguage();
 WFPlatform.persist=async()=>{let data=JSON.stringify({wfStorage:wfStorageObject()});if(data.length*2>=3*1024*1024)throw Error('Cloud save exceeds three MiB');await ytgame.game.saveData(data)};
 WFPlatform.adsAvailable=()=>!!ytgame.ads?.requestRewardedAd;
 WFPlatform.requestAd=async id=>await ytgame.ads.requestRewardedAd('underroot_'+id)===true;
 let frame=false,ready=false;WFPlatform.firstFrame=()=>{if(!frame){ytgame.game.firstFrameReady();frame=true}};WFPlatform.gameReady=()=>{if(!ready){WFPlatform.firstFrame();ytgame.game.gameReady();ready=true}};
})().catch(e=>{WFPlatform.initError='Platform loading failed. Reload to retry before starting.';throw e});
