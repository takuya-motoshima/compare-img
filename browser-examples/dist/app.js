(()=>{var d=Object.create;var p=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var b=e=>p(e,"__esModule",{value:!0});var T=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var A=(e,n,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of w(n))!$.call(e,s)&&s!=="default"&&p(e,s,{get:()=>n[s],enumerable:!(a=y(n,s))||a.enumerable});return e},v=e=>A(b(p(e!=null?d(h(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var c=T((g,l)=>{(function(e,n){typeof g=="object"&&typeof l!="undefined"?l.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis!="undefined"?globalThis:e||self).compareImg=n()})(g,function(){"use strict";return async function(...e){return Array.isArray(e[0])&&(e=e[0]),function(...n){return Array.isArray(n[0])&&(n=n[0]),n.slice(0,-1).every((a,s)=>a===n[s+1])}(await Promise.all(e.map(n=>new Promise(async(a,s)=>{try{/(\?.*)$/.test(n)?n+="&t="+ +new Date:n+="?t="+ +new Date;let m=await async function(i){let o=await fetch(i,{mode:"cors",cache:"no-cache"});if(!o.ok)throw Error(`${i} could not be loaded, response status is ${o.status}`);return o.blob()}(n),f=await async function(i){return new Promise((o,u)=>{let r=new FileReader;r.addEventListener("load",()=>o(r.result)),r.addEventListener("error",()=>u(r.error)),r.readAsBinaryString(i.slice(0,i.size))})}(m);a(f)}catch(m){s(m)}}))))}})});var t=v(c());(async()=>{try{let e=await(0,t.default)("img/sample-1.png","img/sample-1.png");console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png' is ${e}`),e=await(0,t.default)("img/sample-1.png","img/sample-2.png"),console.log(`The comparison result of 'img/sample-1.png', 'img/sample-2.png' is ${e}`),e=await(0,t.default)("img/sample-1.png","img/sample-1.png","img/sample-2.png"),console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${e}`),e=await(0,t.default)(["img/sample-1.png","img/sample-1.png","img/sample-2.png"]),console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${e}`)}catch(e){console.error(e),alert(e.message)}})();})();
//# sourceMappingURL=app.js.map
