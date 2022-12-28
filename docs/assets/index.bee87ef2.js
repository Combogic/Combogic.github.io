import{S as w,s as o}from"./swiper-customize.7fc8c222.js";import"./main.1a73ff16.js";const c={_origin:"https://api.emailjs.com"},S=(e,t="https://api.emailjs.com")=>{c._userID=e,c._origin=t},v=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class g{constructor(t){this.status=t.status,this.text=t.responseText}}const L=(e,t,n={})=>new Promise((a,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:i})=>{const l=new g(i);l.status===200||l.text==="OK"?a(l):r(l)}),s.addEventListener("error",({target:i})=>{r(new g(i))}),s.open("POST",c._origin+e,!0),Object.keys(n).forEach(i=>{s.setRequestHeader(i,n[i])}),s.send(t)}),y=(e,t,n,a)=>{const r=a||c._userID;v(r,e,t);const s={lib_version:"3.7.0",user_id:r,service_id:e,template_id:t,template_params:n};return L("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},T=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},P=(e,t,n,a)=>{const r=a||c._userID,s=T(n);v(r,e,t);const i=new FormData(s);return i.append("lib_version","3.7.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",r),L("/api/v1.0/email/send-form",i)},_={init:S,send:y,sendForm:P};function q(){const e=["Android","webOS","iPhone","iPad","iPod","BlackBerry","Windows Phone"];let t=!1;return e.forEach(n=>{navigator.userAgent.match(n)&&(t=!0)}),t}const x=document.querySelectorAll(".com-paint-animate").length,d=(e="")=>document.querySelector(`.com-paint-animate${e}`),B=()=>{let e=d(".--show").getAttribute("paint-id");e=Number(e),e+1>=x?e=0:e++,d(".--show").classList.remove("--show"),d(`[paint-id="${e}"]`).classList.add("--show")};setInterval(()=>B(),3e3);let f=[];document.querySelectorAll(".com-whychap-content > h3").forEach(e=>f.push(e.innerHTML));new w("#whyChapSwiper",{slidesPerView:1,spaceBetween:20,autoplay:{delay:7e3},loop:!0,pagination:{el:".swiper-pagination-custom",clickable:!0,renderBullet:(e,t)=>`<span class="${t} com-whychap-btn">
                    ${f[e]}
                </span>`}});const E=document.querySelectorAll(".com-member"),u=E.length,M=e=>{e.target.classList.add("--show")},V=e=>{e.target.classList.remove("--show")},k=e=>{e.target.classList.toggle("--show")};E.forEach(e=>{q()?e.addEventListener("click",k):e.addEventListener("mouseenter",M),e.addEventListener("mouseleave",V)});new w("#memberSwiper",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:"#memberNext",prevEl:"#memberPrev"},breakpoints:{640:{slidesPerView:o(u,2)},768:{slidesPerView:o(u,3)},1280:{slidesPerView:o(u,5)}}});const p=document.querySelectorAll(".com-blog").length;new w("#blogSwiper",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:"#blogNext",prevEl:"#blogPrev"},breakpoints:{640:{slidesPerView:o(p,1)},768:{slidesPerView:o(p,2)},1280:{slidesPerView:o(p,3)}}});const h=document.getElementById("contactSubmit"),m=document.getElementById("contactSubmitText"),b=[{element:document.getElementById("contactName"),ruleList:[{rule:e=>e!=="",alert:{ch:"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D\uFF01",en:"This is a required field!"}}]},{element:document.getElementById("contactCom"),ruleList:[{rule:e=>e!=="",alert:{ch:"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D\uFF01",en:"This is a required field!"}}]},{element:document.getElementById("contactEmail"),ruleList:[{rule:e=>e!=="",alert:{ch:"\u6B64\u70BA\u5FC5\u586B\u6B04\u4F4D\uFF01",en:"This is a required field!"}},{rule:e=>e.search(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)!==-1,alert:{ch:"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4\uFF01",en:"E-mail invalid!"}}]}];h.addEventListener("click",()=>{j(b)&&C()});const j=e=>{let t=!0;return e.forEach(n=>{if(n.element.previousElementSibling.innerHTML="",n.ruleList)for(let a=0;a<n.ruleList.length;a++){let r=n.ruleList[a],s=n.element;if(!r.rule(s.value)){H(s,r.alert),t=!1;break}}}),t},H=(e,t)=>{let n=window.location.pathname;switch(!0){case n.search("en")!==-1:t=t.en;break;default:t=t.ch;break}e.previousElementSibling.innerHTML='<svg viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>'+t},C=()=>{let e={};b.forEach(t=>{e[t.element.getAttribute("name")]=t.element.value}),I(e)},I=e=>{const t=m.innerHTML;h.classList.add("--load"),_.send("service_6itzjbh","template_wuh5nji",e,"shRGcJbp-Jih1XMuR").then(()=>{b.forEach(n=>n.element.value=""),m.innerHTML="SUCCESS"}).catch(n=>{console.error(n),m.innerHTML="ERROR"}).finally(()=>{h.classList.remove("--load"),setTimeout(()=>m.innerHTML=t,2e3)})};
