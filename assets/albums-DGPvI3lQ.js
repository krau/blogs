import{h as m,o as t,c as r,w as l,f as c,u as a,t as f,x as $,k as i,F as h,m as k,q as A,K as C,ar as Y,aA as B,aB as w,l as L,r as P,d as S,b as u,aC as V,az as F}from"./app-C5vwTkLK.js";import{o as z}from"./index-C7yU5XnD.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-QOAOwRac.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,n)=>{const s=$;return t(),r(s,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(z)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),R={class:"yun-album-list"},q=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,n)=>{const s=N;return t(),i("div",R,[(t(!0),i(h,null,k(e.albums,o=>(t(),r(s,{key:o.url,album:o},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},j=m({__name:"albums",setup(_){const{t:e}=A(),n=C(),s=Y(n);B([w({"@type":"CollectionPage"})]);const o=L(()=>n.value.albums||[]);return(p,K)=>{const b=F,g=D,y=q,d=P("RouterView");return t(),i(h,null,[p.$slots["sidebar-child"]?(t(),r(b,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(b,{key:1})),u(d,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(g,{title:a(s)||a(e)("title.album"),icon:a(n).icon||"i-ri-gallery-line",color:a(n).color},null,8,["title","icon","color"])]),"main-content":l(()=>[c("div",H,f(a(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(d)]),_:2},1024))]),_:1})],64)}}});export{j as default};
