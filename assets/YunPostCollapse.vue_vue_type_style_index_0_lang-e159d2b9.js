import{g,h as C,q as _,af as b,a7 as h,W as w,i as D,o as s,j as a,b as o,t as c,l as v,F as m,k as f,ag as B,a as N,e as V,w as E,d as F}from"./app-bd5c3040.js";const I={class:"post-collapse px-10 lt-sm:px-5",relative:""},L={w:"full",text:"center",class:"yun-text-light",p:"2"},M={class:"post-collapse-action",text:"center"},P={key:0,"i-ri-sort-desc":""},$={key:1,"i-ri-sort-asc":""},j={class:"collection-title","m-0":"",relative:""},q=["id"],S={class:"post-header",flex:"","items-center":"",relative:""},T={class:"post-meta"},W={key:0,class:"post-time",font:"mono",opacity:"80"},z={class:"post-title","inline-flex":"","items-center":"",font:"serif black"},G=g({__name:"YunPostCollapse",props:{posts:{}},setup(y){const p=y,{t:x}=C(),d=_([]),i=_({});b(()=>p.posts,()=>{i.value={},d.value=[],p.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=Number.parseInt(h(t.date,"YYYY"));i.value[e]?i.value[e].push(t):(d.value.push(e),i.value[e]=[t])}})},{immediate:!0});const l=_(!0),k=w(()=>{const e=d.value.sort((u,n)=>n-u);return l.value?e:e.reverse()});return(t,e)=>{const u=D("router-link");return s(),a("div",I,[o("div",L,c(v(x)("counter.archives",t.posts.length)),1),o("div",M,[o("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=n=>l.value=!l.value)},[l.value?(s(),a("div",P)):(s(),a("div",$))])]),(s(!0),a(m,null,f(k.value,n=>(s(),a("div",{key:n,m:"b-6"},[o("div",j,[o("h2",{id:`#archive-year-${n}`,class:"archive-year",text:"4xl",p:"y-2"},c(n),9,q)]),(s(!0),a(m,null,f(v(B)(i.value[n],l.value),(r,Y)=>(s(),a("article",{key:Y,class:"post-item",relative:""},[o("header",S,[o("div",T,[r.date?(s(),a("time",W,c(v(h)(r.date,"MM-DD")),1)):N("v-if",!0)]),o("h2",z,[V(u,{to:r.path||"",class:"post-title-link"},{default:E(()=>[F(c(r.title),1)]),_:2},1032,["to"])])])]))),128))]))),128))])}}});export{G as _};
