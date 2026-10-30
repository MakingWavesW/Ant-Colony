WFPlatform.local=true;WFPlatform.name='standalone';
try{for(let k of ['underroot_colony_v1','underroot_colony_v1_before_frontier','underroot_scout_v2','underroot_explorer_lesson']){let v=window.localStorage.getItem(k);if(v!==null)WFMemory.set(k,v)}}catch(e){WFPlatform.initError='Browser storage is unavailable. Progress lasts only for this session.';WFPlatform.local=false}
WFPlatform.persist=async()=>{if(!WFPlatform.local)throw Error('Browser storage unavailable')};WFPlatform.ready=Promise.resolve();
