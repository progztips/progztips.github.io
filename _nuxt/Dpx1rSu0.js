import{h as b,ax as l,ab as I,A as O,ay as N,a1 as $,N as v,az as D,a0 as F,I as B,o as d,b as g,a as x,T as y,j as u,R as P,i as j,e as q}from"./ByTwCugv.js";import{a as M}from"./BMLslee8.js";import{A as V}from"./CC7D5923.js";function _(s,e,t){const[a={},o]=typeof e=="string"?[{},e]:[e,t],r=b(()=>l(s)),i=a.key||I([o,typeof r.value=="string"?r.value:"",...G(a)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const c=i===o?"$f"+i:i;if(!a.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:R,lazy:w,default:E,transform:U,pick:L,watch:f,immediate:C,getCachedData:A,deep:z,dedupe:T,...S}=a,h=O({...N,...S,cache:typeof a.cache=="boolean"?void 0:a.cache}),k={server:R,lazy:w,default:E,transform:U,pick:L,immediate:C,getCachedData:A,deep:z,dedupe:T,watch:f===!1?[]:[h,r,...f||[]]};let n;return M(c,()=>{var m;(m=n==null?void 0:n.abort)==null||m.call(n),n=typeof AbortController<"u"?new AbortController:{};const p=l(a.timeout);return p&&setTimeout(()=>n.abort(),p),(a.$fetch||globalThis.$fetch)(r.value,{signal:n.signal,...h})},k)}function G(s){var t;const e=[((t=l(s.method))==null?void 0:t.toUpperCase())||"GET",l(s.baseURL)];for(const a of[s.params||s.query]){const o=l(a);if(!o)continue;const r={};for(const[i,c]of Object.entries(o))r[l(i)]=l(c);e.push(r)}return e}async function H(s,e={}){var c;const{getSession:t}=useAuth(),a=v(),o=await t(),r={method:"GET",baseURL:a.public.apiUrl??"http://localhost:8090",headers:{Authorization:`Bearer ${(c=o==null?void 0:o.token)==null?void 0:c.access_token}`},lazy:!0,server:!1},i=$(e,r);return _(s,i,"$UqgiltlUfE")}const K=v(),W=D("user",{actions:{async LOAD_PROFILE_PICTURE_BLOB(s){this.profilePicture&&(await new Promise(e=>{try{URL.revokeObjectURL(this.profilePicture)}catch{}finally{e()}}),await new Promise(e=>{this.profilePicture=null,e()})),this.profilePicture=URL.createObjectURL(s)},async FETCH_PROFILE_PICTURE(){var t,a,o;this.loadingProfilePicture=!0;const{getSession:s}=useAuth(),e=await s();(a=(t=e==null?void 0:e.session)==null?void 0:t.user)!=null&&a.image&&_(e.session.user.image,{responseType:"blob",baseURL:K.public.apiUrl??"http://localhost:8090",key:"user-profile-picture",server:!0,lazy:!1,headers:{Authorization:`Bearer ${(o=e==null?void 0:e.token)==null?void 0:o.access_token}`}},"$vpSqNedazv").then(r=>{this.LOAD_PROFILE_PICTURE_BLOB(r.data.value)}).catch(r=>{console.error("There was a problem loading the profile picture. %o",r)}).finally(()=>{this.loadingProfilePicture=!1})},async UPDATE_PROFILE_PICTURE(s){if(useAuth(),this.loadingProfilePicture=!0,!!s)try{console.log("We have a file: %o",s),await new Promise(t=>setTimeout(t,1e3));const e=new FormData;e.append("image",s),H("/user/profile/picture",{method:"post",body:e}).then(t=>{console.log("Pinia Response: %o",t)}).catch(t=>{console.log("Pinia Error: %o",t)}).finally(()=>{this.loadingProfilePicture=!1})}catch{}finally{}}},getters:{shouldRememberUser(s){return s.rememberMe}},state:()=>({loadingProfilePicture:!0,profilePicture:null,rememberMe:!1})}),J=["alt","src"],te={__name:"SimpleUserProfilePicture",props:{elevation:{type:[String,Number],requireD:!1,default(){return 2}},iconSize:{type:String,default(){return"lg"},validator(s){return V.includes(s)}},overlayIconClasses:{default(){return null}},overlayColor:{type:String,required:!1,default(){return"rgba(0, 0, 0, 0.8)"}},size:{type:[String,Number],requireD:!1,default(){return"2.1rem"}},animationMode:{type:String,default(){return"spin"},validator(s){return["pulse","spin"].includes(s)}}},setup(s){const e=W(),t=s,a=b(()=>{const o=[`fa-${t.animationMode}`,`fa-${t.iconSize}`];return t.overlayIconClasses&&o.push(t.overlayIconClasses),o});return e.FETCH_PROFILE_PICTURE(),F(()=>{console.log("Is Mounted")}),(o,r)=>{const i=B("fa-icon");return d(),g("div",{class:"position-relative",style:P({height:Number.isNaN(t.size)?t.size+"px":t.size,width:Number.isNaN(t.size)?t.size+"px":t.size,margin:`.15rem 0 .15rem ${(t.elevation||1)*2/10}rem`})},[x("img",{ref:"image",alt:o.$t("GENERAL.LABEL.USER_AVATAR"),class:y(["img-circle",`elevation-${s.elevation}`,"m-0"]),src:u(e).profilePicture||"/images/user-placeholder.png",style:{"object-fit":"cover",height:"100%",width:"100%"}},null,10,J),u(e).loadingProfilePicture?(d(),g("div",{key:0,class:"position-absolute d-flex align-items-center justify-content-around text-success rounded-circle",style:P({top:0,left:0,width:"100%",height:"100%","background-color":s.overlayColor})},[j(i,{icon:"spinner",class:y(u(a))},null,8,["class"])],4)):q("",!0)],4)}}};export{te as default};
//# sourceMappingURL=Dpx1rSu0.js.map
