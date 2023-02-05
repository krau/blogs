import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-89d2dc51.js";import{_ as u,c,w as t,o as _,g as e,V as l,q as n,r as s,X as m,p as f}from"./app-5db76dd0.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-4299cd49.js";import"./YunCard.vue_vue_type_style_index_0_lang-176e8a53.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-27a65918.js";const oe=JSON.parse('{"title":"ray-mmd内置天空盒调整参数简介","description":"","frontmatter":{"categories":"小技术","date":"2021-08-12T19:57:39.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd内置天空盒调整参数简介"},"headers":[{"level":2,"title":"第一栏","slug":"第一栏","link":"#第一栏","children":[]},{"level":2,"title":"第二栏","slug":"第二栏","link":"#第二栏","children":[]},{"level":2,"title":"第三栏","slug":"第三栏","link":"#第三栏","children":[]},{"level":2,"title":"第四栏","slug":"第四栏","link":"#第四栏","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-1","link":"#第一栏-1","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-1","link":"#第二栏-1","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-1","link":"#第三栏-1","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-1","link":"#第四栏-1","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-2","link":"#第一栏-2","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-2","link":"#第二栏-2","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-2","link":"#第三栏-2","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-2","link":"#第四栏-2","children":[]}],"relativePath":"pages/posts/mmdray-skyboxs.md","path":"/home/runner/work/blogs-sources/blogs-sources/pages/posts/mmdray-skyboxs.md","lastUpdated":1675603501000}'),d=JSON.parse('{"title":"ray-mmd内置天空盒调整参数简介","description":"","frontmatter":{"categories":"小技术","date":"2021-08-12T19:57:39.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd内置天空盒调整参数简介"},"headers":[{"level":2,"title":"第一栏","slug":"第一栏","link":"#第一栏","children":[]},{"level":2,"title":"第二栏","slug":"第二栏","link":"#第二栏","children":[]},{"level":2,"title":"第三栏","slug":"第三栏","link":"#第三栏","children":[]},{"level":2,"title":"第四栏","slug":"第四栏","link":"#第四栏","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-1","link":"#第一栏-1","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-1","link":"#第二栏-1","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-1","link":"#第三栏-1","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-1","link":"#第四栏-1","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-2","link":"#第一栏-2","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-2","link":"#第二栏-2","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-2","link":"#第三栏-2","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-2","link":"#第四栏-2","children":[]}],"relativePath":"pages/posts/mmdray-skyboxs.md","path":"/home/runner/work/blogs-sources/blogs-sources/pages/posts/mmdray-skyboxs.md","lastUpdated":1675603501000}'),p={name:"pages/posts/mmdray-skyboxs.md",data(){return{data:d,frontmatter:d.frontmatter}},setup(){f("pageData",d)}},g=e("p",null,[l("完成ray渲染的基本流程后，就要开始调各种参数了，本篇介绍ray渲染内置的几个天空盒的参数 "),e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210812200556.png",alt:"内置天空盒"})],-1),k=e("p",null,[l("在"),e("code",null,"模型操作"),l("栏中，选择导入的天空盒，在表情栏即可进行其相关参数调整。")],-1),v=e("p",null,"以下介绍中，把表情四栏按从左到右，从上到下分成 第一栏、第二栏、第三栏、第四栏。",-1),y={id:"helipad-goldenhour",tabindex:"-1"},b={id:"第一栏",tabindex:"-1"},x=e("ul",null,[e("li",null,"Balance 可以看到该栏中有BalanceR+-/G+-/B+-以及Gray+的调整，它们即对应色调红绿蓝（RGB）三色以及灰色的调整。 例如，调高BalanceR+栏，画面将偏红色")],-1),$={id:"第二栏",tabindex:"-1"},S=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),D={id:"第三栏",tabindex:"-1"},B=e("ul",null,[e("li",null,"Diffuse 该栏调整漫反射色调（RGB&Gray）")],-1),T={id:"第四栏",tabindex:"-1"},L=e("ul",null,[e("li",null,"Specular 该栏调整镜面反射色调（与Diffuse同理）")],-1),M={id:"sky-hemisphere",tabindex:"-1"},E=e("p",null,"该天空盒初始为纯白背景，一般适用于实景合成/唯美风渲染",-1),G={id:"第一栏-1",tabindex:"-1"},N=e("ul",null,[e("li",null,"Top 可以看到该栏中有TopH+/S+/V+-，它们调整该天空盒的顶部色调效果")],-1),R={id:"第二栏-1",tabindex:"-1"},V=e("ul",null,[e("li",null,"Medium 与第一栏同理，调整中部色调")],-1),H={id:"第三栏-1",tabindex:"-1"},w=e("ul",null,[e("li",null,"Bottom 与上同理，调整底部色调")],-1),C={id:"第四栏-1",tabindex:"-1"},P=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),F={id:"sky-night",tabindex:"-1"},J=e("p",null,[l("该天空盒与"),e("code",null,"Sky Hemisphere"),l("几乎一样，区别是该天空盒带有夜晚的月亮和流星效果")],-1),O={id:"time-of-day",tabindex:"-1"},U={id:"第一栏-2",tabindex:"-1"},Z=e("ul",null,[e("li",null,"SunRadius 调整太阳半径大小")],-1),j={id:"第二栏-2",tabindex:"-1"},q=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),A={id:"第三栏-2",tabindex:"-1"},I=e("ul",null,[e("li",null,"MiePhase 该参数可以影响丁达尔效应的强弱"),e("li",null,"FogRange 调整雾气距离"),e("li",null,"FogIntensity 该参数可以影响雾气效果强度")],-1),X={id:"第四栏-2",tabindex:"-1"},z=e("ul",null,[e("li",null,"Cloud 云的密度，调高该参数，云将增多"),e("li",null,"CloudSpeed 云的流动速度")],-1),K={id:"time-of-night",tabindex:"-1"},Q=e("p",null,[l("该天空盒具有夜间星空银河与流星效果，参数调整与"),e("code",null,"Time of day"),l("基本一致。 区别是该天空盒第四栏的参数为影响星星的效果")],-1);function W(a,Y,ee,le,o,te){const i=m,r=h;return _(),c(r,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":t(()=>[g,k,v,e("h1",y,[l("Helipad GoldenHour "),n(i,{class:"header-anchor",href:"#helipad-goldenhour","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h2",b,[l("第一栏 "),n(i,{class:"header-anchor",href:"#第一栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),x,e("h2",$,[l("第二栏 "),n(i,{class:"header-anchor",href:"#第二栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),S,e("h2",D,[l("第三栏 "),n(i,{class:"header-anchor",href:"#第三栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),B,e("h2",T,[l("第四栏 "),n(i,{class:"header-anchor",href:"#第四栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),L,e("h1",M,[l("Sky Hemisphere "),n(i,{class:"header-anchor",href:"#sky-hemisphere","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),E,e("h2",G,[l("第一栏 "),n(i,{class:"header-anchor",href:"#第一栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),N,e("h2",R,[l("第二栏 "),n(i,{class:"header-anchor",href:"#第二栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),V,e("h2",H,[l("第三栏 "),n(i,{class:"header-anchor",href:"#第三栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),w,e("h2",C,[l("第四栏 "),n(i,{class:"header-anchor",href:"#第四栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),P,e("h1",F,[l("Sky Night "),n(i,{class:"header-anchor",href:"#sky-night","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),J,e("h1",O,[l("Time of day "),n(i,{class:"header-anchor",href:"#time-of-day","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h2",U,[l("第一栏 "),n(i,{class:"header-anchor",href:"#第一栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),Z,e("h2",j,[l("第二栏 "),n(i,{class:"header-anchor",href:"#第二栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),q,e("h2",A,[l("第三栏 "),n(i,{class:"header-anchor",href:"#第三栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),I,e("h2",X,[l("第四栏 "),n(i,{class:"header-anchor",href:"#第四栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),z,e("h1",K,[l("Time of night "),n(i,{class:"header-anchor",href:"#time-of-night","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),Q]),"main-header":t(()=>[s(a.$slots,"main-header")]),"main-header-after":t(()=>[s(a.$slots,"main-header-after")]),"main-nav":t(()=>[s(a.$slots,"main-nav")]),"main-content":t(()=>[s(a.$slots,"main-content")]),"main-content-after":t(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(a.$slots,"main-nav-after")]),comment:t(()=>[s(a.$slots,"comment")]),footer:t(()=>[s(a.$slots,"footer")]),aside:t(()=>[s(a.$slots,"aside")]),"aside-custom":t(()=>[s(a.$slots,"aside-custom")]),default:t(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const re=u(p,[["render",W]]);export{oe as __pageData,re as default};
