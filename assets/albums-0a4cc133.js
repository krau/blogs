import{g as c,o as a,c as i,w as u,b as l,l as n,t as p,f as h,j as _,F as v,k as y,h as $,B as k,$ as A,af as L,ag as Y,X as B,i as w,e as r,ae as C}from"./app-d8f36d80.js";import{o as P}from"./index-e7cdf475.js";import{_ as F}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-370919c4.js";const x=["title"],E=["src","alt","on-error"],I=c({__name:"YunAlbum",props:{album:{}},setup(m){return(e,t)=>{const o=h;return a(),i(o,{class:"yun-album-list-item",to:e.album.url},{default:u(()=>[l("figure",{title:e.album.desc},[l("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":n(P)},null,40,E),l("figcaption",null," 「"+p(e.album.caption)+"」 ",1)],8,x)]),_:1},8,["to"])}}}),N={class:"yun-album-list"},S=c({__name:"YunAlbumList",props:{albums:{}},setup(m){return(e,t)=>{const o=I;return a(),_("div",N,[(a(!0),_(v,null,y(e.albums,s=>(a(),i(o,{key:s.url,album:s},null,8,["album"]))),128))])}}});const V={text:"center",class:"yun-text-light",p:"2"},T=c({__name:"albums",setup(m){const{t:e}=$(),t=k(),o=A(t);L([Y({"@type":"CollectionPage"})]);const s=B(()=>t.value.albums||[]);return(j,z)=>{const b=F,d=S,f=w("router-view"),g=C;return a(),i(g,null,{"main-header":u(()=>[r(b,{title:n(o)||n(e)("title.album"),icon:n(t).icon||"i-ri-gallery-line",color:n(t).color},null,8,["title","icon","color"])]),"main-content":u(()=>[l("div",V,p(n(e)("counter.albums",s.value.length)),1),r(d,{albums:s.value},null,8,["albums"]),r(f)]),_:1})}}});export{T as default};
