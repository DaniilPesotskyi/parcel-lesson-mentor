var t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const r=new Uint8Array(16);function o(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(r)}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));function a(t,e=0){return(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase()}var s=function(e,r,n){if(t.randomUUID&&!r&&!e)return t.randomUUID();const s=(e=e||{}).random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,r){n=n||0;for(let t=0;t<16;++t)r[n+t]=s[t];return r}return a(s)};const c={form:document.querySelector(".todo"),list:document.querySelector(".todo__items")};var i={save:(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(t){console.error("Set state error: ",t.message)}},load:t=>{try{const e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Get state error: ",t.message)}}};let d={};!function(){const t=i.load("form-data");if(t){d=t;for(const t in d)c.form.elements[t].value=d[t]}}(),c.form.addEventListener("input",(function(t){const{name:e,value:r}=t.target;d[e]=r,d.id=s(),i.save("form-data",d)})),c.form.addEventListener("submit",(function(t){if(t.preventDefault(),""===d.text||""===d.priority)return void alert("Заповніть усі поля!");console.log(d);const e=`<li>todo:${d.text}, priority ${d.priority}</li>`;c.list.insertAdjacentHTML("afterbegin",e),c.form.reset(),i.remove("form-data"),Object.keys(d).forEach((t=>d[t]=""))}));
//# sourceMappingURL=index.3e35a043.js.map
