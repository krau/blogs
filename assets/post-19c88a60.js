import{d as f,u as x,N as $,Q as g,o as s,b as c,g as n,t as m,f as e,h as u,j as S,F as z,e as V,R as L,n as k,c as d,a1 as P,B,y as M,af as N,w as y,a4 as T,q as v,r as j}from"./app-1f4046ef.js";import{a as F,b as R,_ as U}from"./YunPostMeta.vue_vue_type_style_index_0_lang-7bd1e247.js";const q={class:"post-copyright"},H={class:"post-copyright-author"},W={key:0,class:"post-copyright-link"},A=["href"],Q={class:"post-copyright-license"},D=["innerHTML"],E=f({__name:"ValaxyCopyright",props:{url:{default:""}},setup(a){const{t:o,locale:l}=x(),t=$(),i=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",r=g(()=>{const h=t.value.license.language?t.value.license.language:l.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${i}/deed.${h}`}),p=g(()=>o("post.copyright.license_content",[`<a href="${r.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${i}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(h,C)=>(s(),c("ul",q,[n("li",H,[n("strong",null,m(e(o)("post.copyright.author")+e(o)("symbol.colon")),1),n("span",null,m(e(t).author.name),1)]),a.url?(s(),c("li",W,[n("strong",null,m(e(o)("post.copyright.link")+e(o)("symbol.colon")),1),n("a",{href:a.url},m(a.url),9,A)])):u("v-if",!0),n("li",Q,[n("strong",null,m(e(o)("post.copyright.license_title")+e(o)("symbol.colon")),1),n("span",{innerHTML:e(p)},null,8,D)])]))}});const I={class:"yun-sponsor-container flex-center flex-col"},G=["title"],J=n("div",{"i-ri-heart-line":""},null,-1),K=[J],O=["href"],X=["src","title"],Z=f({__name:"YunSponsor",setup(a){const{t:o}=x(),l=$(),t=S(!1);return(i,_)=>(s(),c("div",I,[n("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:e(o)("reward.donate"),text:"red-400",onClick:_[0]||(_[0]=r=>t.value=!t.value)},K,8,G),n("div",{class:k(["qrcode-container qrcode flex justify-around",t.value&&"show"]),m:"y-4"},[(s(!0),c(z,null,V(e(l).sponsor.methods,(r,p)=>(s(),c("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:r.url,target:"_blank",style:L(`color:${r.color}`)},[n("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:r.url,title:r.name},null,8,X),n("div",{text:"xl",m:"2",class:k(r.icon)},null,2)],12,O))),128))],2)]))}});const ee={class:"inline-flex",text:"sm",py:"1"},te={key:1,mx:"2"},ne=f({__name:"YunPostCategoriesAndTags",props:{frontmatter:null},setup(a){return(o,l)=>{const t=F,i=R;return s(),c("div",ee,[a.frontmatter.categories?(s(),d(t,{key:0,categories:a.frontmatter.categories},null,8,["categories"])):u("v-if",!0),a.frontmatter.categories&&a.frontmatter.tags?(s(),c("span",te,"-")):u("v-if",!0),a.frontmatter.tags?(s(),d(i,{key:2,tags:a.frontmatter.tags},null,8,["tags"])):u("v-if",!0)])}}}),oe={key:0,flex:"~",text:"sm",py:"1"},se=["title"],ae=n("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),le=["data-path"],ie=["title"],re=n("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),ce=["data-path"],ue=f({__name:"YunWalineMeta",setup(a){const o=P(),l=B(),t=g(()=>l.value.addons["valaxy-addon-waline"]),{t:i}=x();return(_,r)=>e(t)&&e(t).options?(s(),c("div",oe,[e(t).options.pageview?(s(),c("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(i)("post.pageview_count")},[ae,n("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":e(o).path},null,8,le)],8,se)):u("v-if",!0),e(t).options.comment?(s(),c("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(i)("post.comment_count")},[re,n("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":e(o).path},null,8,ce)],8,ie)):u("v-if",!0)])):u("v-if",!0)}}),me=f({__name:"post",setup(a){const o=$(),l=M(),t=N(),i=g(()=>typeof l.value.sponsor=="boolean"?l.value.sponsor:o.value.sponsor.enable);return(_,r)=>{const p=U,h=ue,C=ne,b=Z,w=E,Y=T;return s(),d(Y,null,{"main-header-after":y(()=>[v(p,{frontmatter:e(l)},null,8,["frontmatter"]),v(h),v(C,{frontmatter:e(l)},null,8,["frontmatter"])]),"main-content-after":y(()=>[e(i)?(s(),d(b,{key:0,m:"t-6"})):u("v-if",!0),e(l).copyright||e(o).license.enabled?(s(),d(w,{key:1,url:e(t),m:"y-4"},null,8,["url"])):u("v-if",!0)]),"aside-custom":y(()=>[j(_.$slots,"aside-custom")]),_:3})}}});export{me as default};
