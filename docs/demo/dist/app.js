(()=>{var T=Object.create;var m=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var D=s=>m(s,"__esModule",{value:!0});var B=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var E=(s,e,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of x(e))!k.call(s,t)&&t!=="default"&&m(s,t,{get:()=>e[t],enumerable:!(a=C(e,t))||a.enumerable});return s},I=s=>E(D(m(s!=null?T(A(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);var p=B((d,f)=>{(function(s,e){typeof d=="object"&&typeof f!="undefined"?f.exports=e():typeof define=="function"&&define.amd?define(e):(s=typeof globalThis!="undefined"?globalThis:s||self).compareImg=e()})(d,function(){"use strict";return async function(...s){return Array.isArray(s[0])&&(s=s[0]),function(...e){return Array.isArray(e[0])&&(e=e[0]),e.slice(0,-1).every((a,t)=>a===e[t+1])}(await Promise.all(s.map(e=>new Promise(async(a,t)=>{try{/(\?.*)$/.test(e)?e+="&t="+ +new Date:e+="?t="+ +new Date;let o=await async function(r){let i=await fetch(r,{mode:"cors",cache:"no-cache"});if(!i.ok)throw Error(`${r} could not be loaded, response status is ${i.status}`);return i.blob()}(e),c=await async function(r){return new Promise((i,w)=>{let n=new FileReader;n.addEventListener("load",()=>i(n.result)),n.addEventListener("error",()=>w(n.error)),n.readAsBinaryString(r.slice(0,r.size))})}(o);a(c)}catch(o){t(o)}}))))}})});var u=I(p());function g(s){let e=$("<div />",{class:"list-group-item border-0 position-relative"}),a=$('<a href="#!" class="position-absolute p-1"><i class="fas fa-2x fa-times"></i></a>').appendTo(e),t=$('<div class="fa-3x position-absolute translate-middle top-50 start-50"><i class="fas fa-circle-notch fa-spin" style="color: #1fda9a;"></i></div>').appendTo(e);$("<img />",{src:s,class:"img-thumbnail"}).appendTo(e).on("load",()=>t.remove()),a.on("click",c=>{c.preventDefault();let r=$(c.currentTarget).closest(".list-group-item");r.fadeOut("fast").queue(()=>{r.remove(),l.find("img").length<2&&v.prop("disabled",!0)})}),l.append(e)}function h(){y.addClass("show");let s=[];for(let e of l.find("img"))s.push(e.src);(0,u.default)(s).then(e=>{y.removeClass("show"),e?b.removeClass("text-danger").addClass("text-success").html('<i class="fas fa-check"></i> The images are all the same'):b.addClass("text-danger").removeClass("text-success").html('<i class="fas fa-times"></i> The images are not all the same')})}var l=$("#timgs"),b=$("#rslt"),y=$("#spnr"),v=$("#frmCompare").find('[type="submit"]');$("#frmUpload").on("keyup blur","input",s=>{let e=$(s.currentTarget).closest("form");e.find("button[type=submit]").prop("disabled",!e.valid())}).validate({rules:{url:{required:!0,url:!0}},submitHandler:s=>{let e=$(s).find('[name="url"]');g(e.val()),l.find("img").length>1&&v.prop("disabled",!1)}});$("#frmCompare").on("submit",s=>{s.preventDefault(),h()});for(let s of["src/img/sample-1.png","src/img/sample-2.png","src/img/sample-3.png"])g(s);h();})();
//# sourceMappingURL=app.js.map
