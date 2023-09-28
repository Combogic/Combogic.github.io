import{$ as y,ap as q,d as S,ab as x,aq as k,r as C,v as T,ar as R,a8 as _,c as A,as as N,at as w,a7 as B,ak as E,au as L}from"./entry.0a8b6649.js";const g=globalThis.requestIdleCallback||(t=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(s)},1)}),I=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=y();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{g(t)}):g(t)};async function P(t,a=q()){const{path:s,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>P(t,a));a._routePreloaded.add(s);const i=e.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of i){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>l.splice(l.indexOf(o)));l.push(o)}await Promise.all(l)}const D=(...t)=>t.find(a=>a!==void 0),U="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function V(t){const a=t.componentName||"NuxtLink",s=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?B:E;if(typeof e=="string")return i(e,!0);const n="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(n,!0)}};return S({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=q(),n=x(()=>{const r=e.to||e.href||"";return s(r,i.resolve)}),o=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||k(n.value,{acceptRelative:!0})),v=C(!1),f=C(null),b=r=>{var d;f.value=e.custom?(d=r==null?void 0:r.$el)==null?void 0:d.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const d=y();let h,u=null;T(()=>{const p=j();O(()=>{h=g(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=p.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:i.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!o.value&&P(n.value,i).catch(()=>{})]),v.value=!0}))})})}),R(()=>{h&&I(h),u==null||u(),u=null})}return()=>{var p,m;if(!o.value){const c={ref:b,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(A("RouterLink"),c,l.default)}const r=typeof n.value=="object"?((p=i.resolve(n.value))==null?void 0:p.href)??null:n.value||null,d=e.target||null,h=e.noRel?null:D(e.rel,t.externalRelAttribute,r?U:"")||null,u=()=>L(r,{replace:e.replace});return e.custom?l.default?l.default({href:r,navigate:u,get route(){if(!r)return;const c=N(r);return{path:c.pathname,fullPath:c.pathname,get query(){return w(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:h,target:d,isExternal:o.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:r,rel:h,target:d},(m=l.default)==null?void 0:m.call(l))}}})}const z=V({componentName:"NuxtLink"});function j(){const t=y();if(t._observer)return t._observer;let a=null;const s=new Map,e=(i,n)=>(a||(a=new IntersectionObserver(o=>{for(const v of o){const f=s.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),s.set(i,n),a.observe(i),()=>{s.delete(i),a.unobserve(i),s.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{z as _};
