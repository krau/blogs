import{g as d,a2 as g,u as h,A as f,U as v,a7 as y,a8 as C,R as b,D as k,E as x,h as P,o as w,c as R,w as l,e as s,k as t,b as o,t as A,a6 as B,G as D}from"./app-6b3dfcab.js";import{_ as E}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-358175c1.js";const V={text:"center",class:"yun-text-light",p:"2"},G={class:"page-action",text:"center"},I=["title"],L=o("div",{"i-ri-arrow-go-back-line":""},null,-1),N=[L],H=d({__name:"gallery",setup(O){const c=g(),{t:n}=h(),e=f(),r=v(e);y([C({"@type":"CollectionPage"})]);const a=b(()=>e.value.photos||[]),u=k().value.addons["valaxy-addon-lightgallery"]?x(()=>D(()=>import("./YunGallery-033d4b35.js"),["assets/YunGallery-033d4b35.js","assets/app-6b3dfcab.js","assets/index-17611029.css"])):()=>null;return(T,i)=>{const _=E,p=P("router-view"),m=B;return w(),R(m,null,{"main-header":l(()=>[s(_,{title:t(r)||t(n)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color},null,8,["title","icon","color"])]),"main-content":l(()=>[o("div",V,A(t(n)("counter.photos",a.value.length)),1),o("div",G,[o("a",{class:"yun-icon-btn",title:t(n)("accessibility.back"),onClick:i[0]||(i[0]=()=>t(c).back())},N,8,I)]),s(t(u),{photos:a.value},null,8,["photos"]),s(p)]),_:1})}}});export{H as default};
