async function e(...e){Array.isArray(e[0])&&(e=e[0]);return function(...e){return Array.isArray(e[0])&&(e=e[0]),e.slice(0,-1).every(((r,t)=>r===e[t+1]))}(await Promise.all(e.map((e=>new Promise((async(r,t)=>{try{/(\?.*)$/.test(e)?e+="&t="+ +new Date:e+="?t="+ +new Date;const t=await async function(e){const r=await fetch(e,{mode:"cors",cache:"no-cache"});if(!r.ok)throw Error(`${e} could not be loaded, response status is ${r.status}`);return r.blob()}(e),a=await async function(e){return new Promise(((r,t)=>{const a=new FileReader;a.addEventListener("load",(()=>r(a.result))),a.addEventListener("error",(()=>t(a.error))),a.readAsBinaryString(e.slice(0,e.size))}))}(t);r(a)}catch(e){t(e)}}))))))}export{e as default};
