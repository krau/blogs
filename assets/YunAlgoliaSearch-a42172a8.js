import{useAddonAlgolia as c}from"valaxy-addon-algolia";import{g as r,a5 as p,h as l,k as i,o as d,c as m,a as f}from"./app-e6729504.js";const A=r({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a,{loaded:e,load:n,dispatchEvent:t}=c();return p(()=>o.open,()=>{o.open&&n(),e&&t()}),(h,u)=>{const s=l("AlgoliaSearchBox");return i(e)?(d(),m(s,{key:0,class:"hidden"})):f("v-if",!0)}}});export{A as default};
