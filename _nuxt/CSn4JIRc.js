import{_ as C,D as y,$ as w,a0 as b,a1 as O,a2 as B,E as z,a3 as _,a4 as E,a5 as M,j as H,J as R,a6 as S}from"./DjgqbzGE.js";const j=e=>e==="defer"||e===!1;function K(...e){var m;const r=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(r);let[t,l,a={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=E(),p=l,v=()=>null,g=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];a.server=a.server??!0,a.default=a.default??v,a.getCachedData=a.getCachedData??g,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??C.deep,a.dedupe=a.dedupe??"cancel";const d=()=>a.getCachedData(t,s)!=null;if(!s._asyncData[t]||!a.immediate){(m=s.payload._errors)[t]??(m[t]=null);const i=a.deep?y:w;s._asyncData[t]={data:i(a.getCachedData(t,s)??a.default()),pending:y(!d()),error:b(s.payload._errors,t),status:y("idle")}}const n={...s._asyncData[t]};n.refresh=n.execute=(i={})=>{if(s._asyncDataPromises[t]){if(j(i.dedupe??a.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if((i._initial||s.isHydrating&&i._initial!==!1)&&d())return Promise.resolve(a.getCachedData(t,s));n.pending.value=!0,n.status.value="pending";const u=new Promise((c,o)=>{try{c(p(s))}catch(f){o(f)}}).then(async c=>{if(u.cancelled)return s._asyncDataPromises[t];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=T(o,a.pick)),s.payload.data[t]=o,n.data.value=o,n.error.value=null,n.status.value="success"}).catch(c=>{if(u.cancelled)return s._asyncDataPromises[t];n.error.value=M(c),n.data.value=H(a.default()),n.status.value="error"}).finally(()=>{u.cancelled||(n.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=u,s._asyncDataPromises[t]},n.clear=()=>N(s,t);const D=()=>n.refresh({_initial:!0}),P=a.server!==!1&&s.payload.serverRendered;{const i=R();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;O(()=>{o.forEach(f=>{f()}),o.splice(0,o.length)}),B(()=>o.splice(0,o.length))}P&&s.isHydrating&&(n.error.value||d())?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const u=S();if(a.watch){const o=z(a.watch,()=>n.refresh());u&&_(o)}const c=s.hook("app:data:refresh",async o=>{(!o||o.includes(t))&&await n.refresh()});u&&_(c)}const h=Promise.resolve(s._asyncDataPromises[t]).then(()=>n);return Object.assign(h,n),h}function I(...e){const r=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(r);const[t,l,a={}]=e;return K(t,l,{...a,lazy:!0},null)}function N(e,r){r in e.payload.data&&(e.payload.data[r]=void 0),r in e.payload._errors&&(e.payload._errors[r]=null),e._asyncData[r]&&(e._asyncData[r].data.value=void 0,e._asyncData[r].error.value=null,e._asyncData[r].pending.value=!1,e._asyncData[r].status.value="idle"),r in e._asyncDataPromises&&(e._asyncDataPromises[r].cancelled=!0,e._asyncDataPromises[r]=void 0)}function T(e,r){const t={};for(const l of r)t[l]=e[l];return t}export{K as a,I as u};
//# sourceMappingURL=CSn4JIRc.js.map
