import{m as A,p as _,V as Q,W as T,Y as R,l as L,K as S,Z as M,h as C,a0 as w,f as N,C as k,a1 as W,o as B,b as D,j as y,Q as E,N as K}from"./GNIMKNr4.js";import{_ as j}from"./DlAUqK2U.js";function F(o,e){let a,c,l;const d=A(!0),t=()=>{d.value=!0,l()};_(o,t,{flush:"sync"});const u=typeof e=="function"?e:e.get,n=typeof e=="function"?void 0:e.set,s=Q((f,g)=>(c=f,l=g,{get(){return d.value&&(a=u(),d.value=!1),c(),a},set(p){n==null||n(p)}}));return Object.isExtensible(s)&&(s.trigger=t),s}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function H(o){const e=L(),a=F(()=>null,()=>e.proxy.$el);return T(a.trigger),R(a.trigger),a}function O(o){const e=S().public.googleAdsense,a=M(o,e),c=a.adClient??a.id,l=a.test?"on":null,d=Math.random(),t=H(),u=A(""),n=A(!1),s=C(()=>n.value?`page-${Math.random()}`:null),f=C(()=>{var i;return((i=t.value)==null?void 0:i.getAttribute("data-ad-status"))==="unfilled"}),g=U("path"),p=U("query"),b=C(()=>n.value?null:"");async function v(){n.value=!1,await k(),m()}async function m(){var i;if(n.value=!0,await k(),!((i=t.value)!=null&&i.innerHTML))try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(h){console.error(h)}}return _([g,p],(i,h)=>{const r=P(i,h,a.includeQuery);t.value&&!t.value.isConnected||r&&v()}),w(()=>{!t.value||!t.value.isConnected||(n.value?t.value.innerHTML="":t.value.innerHTML=" ")}),a.hideUnfilled&&w(()=>f.value&&(u.value="hide-unfilled")),R(()=>m()),{adClass:u,dataAdClient:c,dataAdRegion:s,dataAdTest:l,dataAnalyticsDomainName:a.analyticsDomainName,dataAnalyticsUacct:a.analyticsUacct,isUnfilled:f,key:d,status:b,updateAd:v,showAd:m}}function U(o){const e=N();return C(()=>e[o])}function P(o,e,a){const[c,l]=o,[d,t]=e;if(c!==d)return!0;if(!a)return;const u=Object.keys(l),n=Object.keys(t);return u.length!==n.length||u.some(s=>l[s]!==t[s])}const q=["data-ad-client","data-ad-slot","data-ad-format","data-ad-region","data-ad-layout","data-ad-layout-key","data-page-url","data-analytics-uacct","data-analytics-domain-name","data-adtest","data-adsbygoogle-status","data-ad-full-width-responsive"],z=W({__name:"Adsbygoogle",props:{adClient:{default:void 0},adSlot:{default:null},adFormat:{},adLayout:{default:null},adLayoutKey:{default:null},adStyle:{default:()=>({display:"block"})},adFullWidthResponsive:{type:Boolean,default:!1},hideUnfilled:{type:Boolean,default:void 0},pageUrl:{default:null},analyticsUacct:{},analyticsDomainName:{},includeQuery:{type:Boolean}},setup(o,{expose:e}){const{adClient:a,analyticsDomainName:c,analyticsUacct:l,hideUnfilled:d,includeQuery:t}=o,{adClass:u,dataAdClient:n,dataAdRegion:s,dataAdTest:f,dataAnalyticsDomainName:g,dataAnalyticsUacct:p,isUnfilled:b,key:v,status:m,updateAd:i,showAd:h}=O({adClient:a,analyticsDomainName:c,analyticsUacct:l,hideUnfilled:d,includeQuery:t});return e({isUnfilled:b,updateAd:i,showAd:h}),(r,G)=>(B(),D("ins",{ref:"ad",key:y(v),class:E(["adsbygoogle",y(u)]),style:K(r.adStyle),"data-ad-client":y(n),"data-ad-slot":r.adSlot,"data-ad-format":r.adFormat,"data-ad-region":y(s),"data-ad-layout":r.adLayout,"data-ad-layout-key":r.adLayoutKey,"data-page-url":r.pageUrl,"data-analytics-uacct":y(p),"data-analytics-domain-name":y(g),"data-adtest":y(f),"data-adsbygoogle-status":y(m),"data-ad-full-width-responsive":r.adFullWidthResponsive},null,14,q))}}),x=j(z,[["__scopeId","data-v-101bfb4a"]]);export{x as _};
//# sourceMappingURL=1Lb7XS9t.js.map
