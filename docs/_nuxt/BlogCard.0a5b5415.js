import{$ as i,a3 as d,d as l,a as g,o as m,e as _,f as o,g as r,t as c}from"./entry.7685e2f0.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";const $=({title:e,description:t,image:a})=>{const{BASE_URL:s}=i().public,n=a&&a.startsWith("http")?a:s+a;d({...e?{title:e}:"",meta:[...e?[{name:"og:title",content:e},{name:"og:site_name",content:e},{name:"twitter:title",content:e}]:"",...t?[{name:"description",content:t},{name:"og:description",content:t},{name:"twitter:description",content:t}]:"",...a?[{name:"og:image",content:n},{name:"twitter:image",content:n}]:""]})},k=e=>e.map(({title:t,description:a,image:s,_path:n})=>({title:t,description:a,image:s||"/images/combogic.png",href:`/blog/${n.split("/")[2]}`})),u={class:"com-card blog-card"},f={class:"blog-card-container"},b={class:"blog-card-head"},p=["src","alt"],B={class:"blog-card-body"},y={class:"blog-card-title"},v=["href"],C={class:"blog-card-desc"},S=["href"],q=l({name:"BlogCard",inheritAttrs:!1,__name:"BlogCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,required:!0},href:{type:String,required:!0}},setup(e){const t=g();return(a,s)=>(m(),_("div",u,[o("div",f,[o("div",b,[o("img",{class:"blog-card-img",src:e.image,alt:e.title,width:"443",height:"249"},null,8,p)]),o("div",B,[o("h3",y,[o("a",{href:r(t)(e.href)},c(e.title),9,v)]),o("p",C,c(e.description),1)])]),o("a",{class:"com-btn-square",href:r(t)(e.href)},c(a.$t("blog.read")),9,S)]))}});const A=h(q,[["__scopeId","data-v-33b90254"]]);export{A as B,k as a,$ as u};
