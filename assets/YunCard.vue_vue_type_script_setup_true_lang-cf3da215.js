import{g as n,o as s,j as o,a as t,b as a,r}from"./app-d601d265.js";const c={class:"yun-card flex-center rounded",flex:"col","min-h":"100px",bg:"$va-c-bg-light"},l=["src"],d={key:1,class:"yun-card-header"},i={key:2,class:"yun-card-content",w:"full"},f=n({__name:"YunCard",props:{cover:{}},setup(u){return(e,h)=>(s(),o("div",c,[e.cover?(s(),o("img",{key:0,width:"640",height:"360",class:"object-cover select-none",h:"64 md:sm",w:"full",src:e.cover},null,8,l)):t("v-if",!0),e.$slots.header?(s(),o("div",d,[a("header",null,[r(e.$slots,"header")])])):t("v-if",!0),r(e.$slots,"default"),e.$slots.content?(s(),o("div",i,[r(e.$slots,"content")])):t("v-if",!0)]))}});export{f as _};
