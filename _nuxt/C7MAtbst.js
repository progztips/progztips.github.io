import{a as d}from"./Cz5p_qvx.js";import{f as l,U as f,j as v,V as p,A as m,W as g,Y as h,G as _,s as r}from"./D9ncn3qP.js";import{_ as y}from"./CRdwtbcp.js";const C=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=f(i),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(i){const t=_(),{navigation:n}=i,o=e=>r(y,{to:e._path},()=>e.title),a=(e,u)=>r("ul",u?{"data-level":u}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,u+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};
