import{g as h,h as T,i as I,o as i,j as d,F as A,k as K,l as n,b as e,t as g,c as k,a as m,n as C,_ as D,m as L,q as b,s as H,v as q,x as M,y as Q,e as f,z as U,A as Z,B as E,C as G,r as u,D as J,E as X,G as P,H as S,w as $,I as tt,J as N,K as et,L as R,M as nt,N as ot,d as st,O as at,P as rt,Q as lt,R as it,S as ct,T as ut,U as O,V as _t,W as V,X as dt,Y as mt,Z as pt,$ as ft,a0 as vt}from"./app-262cb9cc.js";import{_ as yt}from"./YunFooter.vue_vue_type_script_setup_true_lang-638d7401.js";import{_ as z}from"./YunCard.vue_vue_type_script_setup_true_lang-be60b976.js";import{_ as ht}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-42288653.js";const $t=["lang"],gt=["href"],kt=h({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(_){const{locale:o}=T();return(s,l)=>{const c=I("YunOutlineItem",!0);return i(),d("ul",{class:C(s.root?"root":"nested")},[(i(!0),d(A,null,K(s.headers,({children:a,link:r,title:p,lang:t})=>(i(),d("li",{key:r,class:"va-toc-item",lang:t||n(o)},[e("a",{class:"outline-link",href:r,onClick:l[0]||(l[0]=(...x)=>s.onClick&&s.onClick(...x))},g(p),9,gt),a!=null&&a.length?(i(),k(c,{key:0,headers:a,"on-click":s.onClick},null,8,["headers","on-click"])):m("v-if",!0)],8,$t))),128))],2)}}});const wt=D(kt,[["__scopeId","data-v-00264c1d"]]),bt=_=>(U("data-v-75b693dc"),_=_(),Z(),_),Ct={class:"content"},xt={class:"outline-title"},Yt={"aria-labelledby":"doc-outline-aria-label"},Ot=bt(()=>e("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Tt=h({__name:"YunOutline",setup(_){const o=L(),s=b(),l=b();H(s,l);const{headers:c,handleClick:a}=q();return(r,p)=>{const t=wt;return M((i(),d("div",{ref_key:"container",ref:s},[e("div",Ct,[e("div",xt,g(n(o).outlineTitle||"On this page"),1),e("div",{ref_key:"marker",ref:l,class:"outline-marker"},null,512),e("nav",Yt,[Ot,f(t,{class:"va-toc relative z-1 css-i18n-toc",headers:n(c),"on-click":n(a),root:""},null,8,["headers","on-click"])])])],512)),[[Q,n(c).length]])}}});const Vt=D(Tt,[["__scopeId","data-v-75b693dc"]]),It=e("div",{"i-ri-file-list-line":""},null,-1),Pt=[It],St={class:"aside-container",flex:"~ col"},At={key:0,m:"t-6 b-2",font:"serif black"},Dt=e("div",{class:"flex-grow"},null,-1),Mt={key:2,class:"custom-container"},Et=h({__name:"YunAside",setup(_){const o=E(),{t:s}=T(),l=G();return(c,a)=>{const r=J,p=Vt;return i(),d(A,null,[e("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=t=>n(l).toggleRightSidebar())},Pt),f(r,{show:n(l).isRightSidebarOpen,onClick:a[1]||(a[1]=t=>n(l).toggleRightSidebar())},null,8,["show"]),m("  "),e("aside",{class:C(["va-card yun-aside",n(l).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[e("div",St,[n(o).toc!==!1?(i(),d("h2",At,g(n(s)("sidebar.toc")),1)):m("v-if",!0),n(o).toc!==!1?(i(),k(p,{key:1})):m("v-if",!0),Dt,c.$slots.default?(i(),d("div",Mt,[u(c.$slots,"default")])):m("v-if",!0)])],2)],64)}}});const Nt=h({__name:"YunComment",setup(_){const o=X(),s=o.value.addons["valaxy-addon-waline"]?P(()=>S(()=>import("./YunWaline-bf4cb333.js"),["assets/YunWaline-bf4cb333.js","assets/app-262cb9cc.js","assets/index-be1485d0.css","assets/YunWaline-8d60d49a.css"])):()=>null,l=o.value.addons["valaxy-addon-twikoo"]?P(()=>S(()=>import("./YunTwikoo-80b51c99.js"),["assets/YunTwikoo-80b51c99.js","assets/app-262cb9cc.js","assets/index-be1485d0.css"])):()=>null;return(c,a)=>{const r=I("ClientOnly"),p=z;return i(),k(p,{w:"full",p:"4",class:"comment sm:p-6 lg:px-12 xl:px-16"},{default:$(()=>[f(r,null,{default:$(()=>[f(n(s)),f(n(l))]),_:1})]),_:1})}}});const Rt={class:"post-nav"},zt={class:"post-nav-item"},Wt=e("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),Bt={class:"title truncate",text:"sm"},Ft={class:"post-nav-item"},jt={class:"title truncate",text:"sm"},Kt=e("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),Lt=h({__name:"YunPostNav",setup(_){const[o,s]=tt();return(l,c)=>{const a=I("router-link");return i(),d("div",Rt,[e("div",zt,[n(o)?(i(),k(a,{key:0,class:"post-nav-prev",to:n(o).path||"",title:n(o).title},{default:$(()=>[Wt,e("span",Bt,g(n(o).title),1)]),_:1},8,["to","title"])):m("v-if",!0)]),e("div",Ft,[n(s)?(i(),k(a,{key:0,to:n(s).path||"",title:n(s).title,class:"post-nav-next"},{default:$(()=>[e("span",jt,g(n(s).title),1),Kt]),_:1},8,["to","title"])):m("v-if",!0)])])}}});const Ht={key:0,"w-full":"","pt-14":"","pb-10":""},qt={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},Qt=["onKeyup"],Ut={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},Zt=e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[e("span",null,"Web Crypto API")],-1),Gt={key:1},Jt=h({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(_){const o=_,s=b(""),l=b(""),c=b(!1),a=N("onContentUpdated"),{decrypt:r}=et();async function p(){const v=o.encryptedContent;if(v)try{const y=await r(s.value,v);l.value=y||"",setTimeout(()=>{var w;(w=a.value)==null||w.call(a)},16)}catch{c.value=!0}}function t(){l.value="",s.value="",setTimeout(()=>{var v;(v=a.value)==null||v.call(a)},16)}const x=h({name:"ValaxyDeprecatedContent",props:{html:String},render(){const v=`<div>${this.html}</div>`;return at({setup:()=>({frontmatter:E()}),template:v})}}),Y=b(!1);return R(()=>{location.protocol!=="https:"&&(Y.value=!0)}),(v,y)=>(i(),d("div",null,[l.value?(i(),d("div",Gt,[f(n(x),{html:l.value},null,8,["html"]),e("div",{"w-full":"","text-center":"","mt-8":""},[e("button",{"m-auto":"",class:"btn","font-bold":"",onClick:t}," Encrypt Again ")])])):(i(),d("div",Ht,[e("div",qt,[M(e("input",{"onUpdate:modelValue":y[0]||(y[0]=w=>s.value=w),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:C(c.value&&"border-red"),onInput:y[1]||(y[1]=w=>c.value=!1),onKeyup:ot(p,["enter"])},null,42,Qt),[[nt,s.value]]),e("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:p}),Y.value?(i(),d("div",Ut,[Zt,st(" Only works in HTTPS ")])):m("v-if",!0)])]))]))}}),Xt={key:2,text:"center"},te=["href"],ee={m:"y-4",class:"end flex justify-center items-center"},ne=e("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),oe={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},se=e("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),ae=h({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(_){const o=_,s=N("onContentUpdated"),{t:l}=T(),c=b();function a(){var r;ut(c.value),(r=s.value)==null||r.call(s)}return R(()=>{a()}),o.frontmatter.aplayer&&rt(),o.frontmatter.codepen&&lt(),it(),(typeof o.frontmatter.medium_zoom>"u"||o.frontmatter.medium_zoom)&&ct(),(r,p)=>{const t=Jt;return r.$slots.default?(i(),d("article",{key:0,class:C(r.frontmatter.markdown!==!1&&"markdown-body")},[r.frontmatter.encryptedContent?(i(),k(t,{key:0,"encrypted-content":r.frontmatter.encryptedContent},null,8,["encrypted-content"])):u(r.$slots,"default",{key:1,ref_key:"contentRef",ref:c,onVnodeUpdated:a}),r.frontmatter.url?(i(),d("div",Xt,[e("a",{href:r.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},g(n(l)("post.view_link")),9,te)])):m("v-if",!0),r.frontmatter.end!==void 0?u(r.$slots,"end",{key:3},()=>[e("div",ee,[ne,e("span",oe,g(r.frontmatter.end?"Q.E.D.":"To Be Continued."),1),se])]):m("v-if",!0)],2)):m("v-if",!0)}}});const re={key:0,op:"80"},le=h({__name:"YunMdTimeWarning",props:{frontmatter:{}},setup(_){const o=_;O.extend(_t);const{t:s}=T(),l=V(()=>{const c=O().valueOf()-O(o.frontmatter.updated).valueOf();return typeof o.frontmatter.time_warning=="number"?c>o.frontmatter.time_warning:o.frontmatter.time_warning||c>30*24*60*60*1e3});return(c,a)=>l.value?(i(),d("blockquote",re,g(n(s)("post.time_warning",{ago:n(O)(c.frontmatter.updated).fromNow()})),1)):m("v-if",!0)}}),ie={class:"yun-main lt-md:ml-0",flex:"~"},ce={w:"full",flex:"~"},ue={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},fe=h({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(_){const o=_,s=dt(),{styles:l,icon:c,color:a}=mt(o.frontmatter.type),r=pt(V(()=>o.frontmatter)),p=V(()=>o.frontmatter.aside!==!1);return(t,x)=>{const Y=ht,v=le,y=ae,w=z,W=Lt,B=Nt,F=yt,j=Et;return i(),d("main",ie,[e("div",ce,[u(t.$slots,"main",{},()=>[e("div",{class:C(["content",!p.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[f(w,{cover:t.frontmatter.cover,m:"0",class:"relative",style:vt(n(l))},{default:$(()=>[u(t.$slots,"main-header",{},()=>[f(Y,{class:"mb-2",title:n(r),icon:t.frontmatter.icon||n(c),color:t.frontmatter.color||n(a),cover:t.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(t.$slots,"main-header-after"),e("div",ue,[u(t.$slots,"main-content",{},()=>[f(ft,{appear:""},{default:$(()=>[f(y,{frontmatter:t.frontmatter},{default:$(()=>[f(v,{frontmatter:t.frontmatter},null,8,["frontmatter"]),u(t.$slots,"main-content-md"),u(t.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),u(t.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(t.$slots,"main-nav-before"),u(t.$slots,"main-nav",{},()=>[t.frontmatter.nav!==!1?(i(),k(W,{key:0})):m("v-if",!0)]),u(t.$slots,"main-nav-after"),n(s).comment.enable&&t.frontmatter.comment!==!1?u(t.$slots,"comment",{key:0},()=>[f(B,{class:C(t.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):m("v-if",!0),u(t.$slots,"main-footer-before"),f(F),u(t.$slots,"main-footer-after")],2)]),u(t.$slots,"aside",{},()=>[p.value?(i(),k(j,{key:0},{default:$(()=>[u(t.$slots,"aside-custom")]),_:3})):m("v-if",!0)])])])}}});export{fe as _};
