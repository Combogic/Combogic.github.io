import{_ as O}from"./client-only.3660703e.js";import{d as L,u as P,a as H,r as w,c as R,o as l,e as r,f as e,g as n,F as g,l as I,t as C,A as $,h as _,i as D,a3 as E,p as S,n as T,j as F}from"./entry.2fb24141.js";import{_ as b}from"./_plugin-vue_export-helper.c27b6911.js";const U=""+new URL("combogic-logo-en.0d5fbc7f.svg",import.meta.url).href,i=t=>(S("data-v-7ca0d079"),t=t(),T(),t),Y={class:"com-container header-container"},j=["href"],z=["src"],G={class:"header-body"},M={class:"header-link-list"},q=["href"],J={class:"header-locale-label"},K=i(()=>e("p",{class:"com-seo"}," 語言 ",-1)),Q={class:"header-locale-list"},W=["href","onClick"],X=i(()=>e("span",null,null,-1)),Z=i(()=>e("span",null,null,-1)),ee=i(()=>e("span",null,null,-1)),oe=i(()=>e("p",{class:"com-seo"}," 選單 ",-1)),te=[X,Z,ee,oe],se=L({name:"Header",inheritAttrs:!1,__name:"Header",setup(t){const{locales:d}=P(),a=H(),h=d.value,u=y=>{E({htmlAttrs:{lang:y}})},B=[{name:"PRODUCT",href:"index",hash:"#product"},{name:"TEAM",href:"index",hash:"#team"},{name:"BLOG",href:"blog",hash:""},{name:"CONTACT US",href:"index",hash:"#contact"}],m=w(!1),x=()=>{m.value=!m.value},c=()=>{m.value=!1},p=w(!1),k=()=>{p.value=!p.value};return(y,s)=>{const V=R("FontAwesomeIcon"),N=O;return l(),r("header",{class:$(["header",{"header-active":n(m)}])},[e("div",{class:"header-overlay",onClick:s[0]||(s[0]=(...o)=>c&&c(...o))}),e("div",Y,[e("a",{class:"header-head",href:n(a)({name:"index",hash:"#hero"}),onClick:s[1]||(s[1]=(...o)=>c&&c(...o))},[e("img",{src:n(U),alt:"Combogic 櫛構科技",height:"48",width:"214"},null,8,z)],8,j),e("nav",G,[e("ul",M,[(l(),r(g,null,I(B,({name:o,href:f,hash:v})=>e("li",{key:o},[e("a",{class:"com-btn-text header-link-item",href:n(a)({name:f,hash:v}),onClick:s[2]||(s[2]=(...A)=>c&&c(...A))},C(o),9,q)])),64))]),e("button",{class:$(["header-locale",{"header-locale-active":n(p)}]),onClick:s[3]||(s[3]=(...o)=>k&&k(...o))},[e("div",J,[K,_(N,null,{default:D(()=>[_(V,{icon:"fa-solid fa-globe"})]),_:1})]),e("div",Q,[(l(!0),r(g,null,I(n(h),({code:o,name:f,iso:v})=>(l(),r("a",{class:"header-locale-item",key:o,href:o==="tw"?"/":`/${o}`,onClick:A=>u(v)},C(f),9,W))),128))])],2)]),e("button",{class:"header-burger",onClick:s[4]||(s[4]=(...o)=>x&&x(...o)),type:"button"},te)])],2)}}});const ne=b(se,[["__scopeId","data-v-7ca0d079"]]),ae=t=>(S("data-v-9d18170b"),t=t(),T(),t),ce={class:"footer"},le={class:"com-container footer-container"},re=["href"],_e=ae(()=>e("br",{class:"block sm:hidden"},null,-1)),ie=L({name:"Footer",inheritAttrs:!1,__name:"Footer",setup(t){const d=H(),a=new Date().getFullYear();return(h,u)=>(l(),r("footer",ce,[e("span",le,[F(" Copyright "+C(n(a))+" © ",1),e("a",{class:"footer-link",href:n(d)("/")}," Combogic Technology Co., Ltd. ",8,re),_e,F("  All Rights Reserved. ")])]))}});const de=b(ie,[["__scopeId","data-v-9d18170b"]]),he={},ue={class:"flex flex-col min-h-screen"};function me(t,d){const a=ne,h=R("RouterView"),u=de;return l(),r(g,null,[_(a),e("div",ue,[_(h)]),_(u)],64)}const ge=b(he,[["render",me]]);export{ge as default};