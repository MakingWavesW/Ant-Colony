/* Playgama Bridge v2 only. Storage is always routed through Bridge. */
WFPlatform.name='playgama';
WFPlatform.ready=(async()=>{if(typeof bridge==='undefined')throw Error('Bridge SDK unavailable');await bridge.initialize();
 WFPlatform.language=bridge.platform.language||'en';WFPlatform.audioAllowed=bridge.platform.isAudioEnabled!==false;
 bridge.platform.on(bridge.EVENT_NAME.AUDIO_STATE_CHANGED,v=>{WFPlatform.audioAllowed=v;WFPlatform.notifyState()});bridge.platform.on(bridge.EVENT_NAME.PAUSE_STATE_CHANGED,v=>{WFPlatform.paused=v;WFPlatform.notifyState()});
 let keys=['underroot_colony_v1','underroot_colony_v1_before_frontier','underroot_scout_v2','underroot_explorer_lesson'],data=await bridge.storage.get(keys);for(let i=0;i<keys.length;i++)if(data[i]!=null)WFMemory.set(keys[i],typeof data[i]==='string'?data[i]:JSON.stringify(data[i]));
 WFPlatform.persist=async()=>{let keys=[...WFMemory.keys()];await bridge.storage.set(keys,keys.map(k=>WFMemory.get(k)))};
 let busy=false,settle=null,earned=false,waitTimer=null;
 bridge.advertisement.on(bridge.EVENT_NAME.REWARDED_STATE_CHANGED,state=>{if(!busy)return;if(state==='opened'){WFPlatform.adShowing=true;WFPlatform.notifyState()}if(state==='rewarded'){earned=true;settle?.(true);settle=null}if(state==='failed'||state==='closed'){settle?.(earned);settle=null;busy=false;WFPlatform.adShowing=false;WFPlatform.notifyState();clearTimeout(waitTimer)}});
 WFPlatform.adsAvailable=()=>!busy&&bridge.advertisement.isRewardedSupported===true&&bridge.platform.id!=='mock';
 WFPlatform.requestAd=id=>new Promise((resolve,reject)=>{if(!WFPlatform.adsAvailable()){resolve(false);return}busy=true;earned=false;WFPlatform.adShowing=true;WFPlatform.notifyState();let done=false;settle=value=>{if(done)return;done=true;resolve(value)};waitTimer=setTimeout(()=>{settle?.(false);settle=null;busy=false;WFPlatform.adShowing=false;WFPlatform.notifyState()},90000);try{let p=bridge.advertisement.showRewarded(id);if(p?.catch)p.catch(()=>{settle?.(false);settle=null;busy=false;WFPlatform.adShowing=false;WFPlatform.notifyState();clearTimeout(waitTimer)})}catch(e){settle?.(false);settle=null;busy=false;WFPlatform.adShowing=false;WFPlatform.notifyState();clearTimeout(waitTimer)}});
 let ready=false;WFPlatform.gameReady=()=>{if(!ready){ready=true;bridge.platform.sendMessage('game_ready')}};
})().catch(e=>{WFPlatform.initError='Playgama could not load. Please reload with a connection, or use the offline edition.';throw e});
