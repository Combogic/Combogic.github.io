import{a2 as f,a9 as v,d as g,aa as d,ab as l,ac as h,a6 as _,a8 as r}from"./entry.0a8b6649.js";import{u as y}from"./asyncData.f4983a0c.js";import{q as C,w as m,h as p,e as w,s as P,j as $,u as N}from"./query.800f7faa.js";import{_ as j}from"./nuxt-link.da0f9e85.js";import{u as T}from"./preview.33f48c2a.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.2d130a61.js"),["./client-db.2d130a61.js","./entry.0a8b6649.js","./query.800f7faa.js","./preview.33f48c2a.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=E;export{R as default};
