import{_ as V}from"./YunCard.vue_vue_type_script_setup_true_lang-9KLhSeC6.js";import{_ as j}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-dwg4wWvT.js";import{g as q,h as E,u as A,k as $,C as P,q as L,az as N,P as U,l as R,o as t,j as r,b as _,t as b,v as l,F as g,m as K,aA as x,c as y,w as p,a as S,e as m,y as D,K as F,aB as T,an as W,av as H,aw as M,r as O,ax as G,au as J}from"./app-V7sBZOCc.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-ZA6nJ4XU.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ne=q({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,f=E(),n=A(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=P(u.collapsable),{t:i}=L(),{locale:k}=L();function z(e){const c=k.value==="zh-CN"?"zh":k.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=P(),{show:s}=N(d);function C(e){f.push({query:{category:e}}),s()}return U(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const h=R("YunCategory",!0),w=R("RouterLink");return t(),r(g,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=a=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=a=>C(e.parentKey))},b(e.category.name==="Uncategorized"?l(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?S("v-if",!0):(t(),r("ul",ee,[(t(!0),r(g,null,K(e.category.children.values(),(a,B)=>(t(),r("li",{key:B,class:"post-list-item",m:"l-4"},[l(x)(a)?(t(),y(h,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),r(g,{key:1},[a.title?(t(),y(w,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(z(a)),1)]),_:2},1032,["to"])):S("v-if",!0)],64))]))),128))]))],64)}}}),ae=q({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=A(),f=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=ne;return t(!0),r(g,null,K(n.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!f.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},ue=q({__name:"categories",setup(Y){const{t:u}=L(),f=D(),n=F(),v=A(),o=$(()=>v.query.category||""),i=T(),k=$(()=>f.postList.filter(s=>s.categories&&o.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===o.value:s.categories.join("/").startsWith(o.value)&&s.categories[0]===o.value.split("/")[0]:!s.categories&&o.value==="Uncategorized"?s.categories===void 0:!1)),z=W(n);return H([M({"@type":"CollectionPage"})]),(d,s)=>{const C=J,e=Q,c=ae,h=R("RouterView"),w=j,a=V;return t(),r(g,null,[d.$slots["sidebar-child"]?(t(),y(C,{key:0},{default:p(()=>[O(d.$slots,"sidebar-child")]),_:3})):(t(),y(C,{key:1})),m(h,null,{default:p(({Component:B})=>[(t(),y(G(B),null,{"main-header":p(()=>[m(e,{title:l(z)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":p(()=>[_("div",se,b(l(u)("counter.categories",Array.from(l(i).children).length)),1),m(c,{categories:l(i).children},null,8,["categories"]),m(h)]),"main-nav-before":p(()=>[o.value?(t(),y(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?l(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(w,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):S("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ue as default};
