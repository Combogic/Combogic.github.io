import{d as g,aa as C,ab as b,a2 as S,a4 as Q,a6 as _,a8 as $}from"./entry.0a8b6649.js";import{u as k}from"./asyncData.f4983a0c.js";import{h as A,q as m}from"./query.800f7faa.js";import"./preview.33f48c2a.js";const N=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:o,where:u,sort:f,limit:l,skip:d,locale:s,find:p}=C(i),y=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!S().public.content.experimental.advanceQuery;Q(()=>i,()=>n(),{deep:!0});const a=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await k(`content-query-${A(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),f.value&&(e=e.sort(f.value)),l.value&&(e=e.limit(l.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),p.value==="one"?e.findOne().then(a):p.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(a):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(a)):e.find().then(a)});return{isPartial:y,data:v,refresh:n}},render(i){var c;const t=_(),{data:r,refresh:o,isPartial:u,path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:a,find:v}=i,n={path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:a,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:u,props:n,...this.$attrs}):((w,q)=>$("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:u})}}),O=N,B=O;export{B as default};
