/* Per-target storage cache. Remote targets never write directly to browser storage. */
const WFMemory=new Map();
const WFStorage={getItem:k=>WFMemory.get(k)??null,setItem:(k,v)=>{WFMemory.set(k,String(v));if(window.WFPlatform?.local){window.localStorage.setItem(k,String(v))}},removeItem:k=>{WFMemory.delete(k);if(window.WFPlatform?.local)window.localStorage.removeItem(k)}};
window.WFPlatform={name:'standalone',local:false,paused:false,audioAllowed:true,adLock:false,adShowing:false,language:'en',initError:null,adsAvailable:()=>false,requestAd:async()=>false,persist:async()=>{},firstFrame(){},gameReady(){},notifyState(){window.dispatchEvent?.(new Event('wf-platform-state'))}};
function wfSeedStorage(obj){if(!obj||typeof obj!=='object')return;for(let [k,v]of Object.entries(obj))if(typeof v==='string')WFMemory.set(k,v)}
function wfStorageObject(){return Object.fromEntries(WFMemory)}
