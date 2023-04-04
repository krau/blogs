import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ebfadf65.js";import{_ as d,c,w as l,o as u,b as e,d as a,e as s,r as n,f as m,p as _}from"./app-b6bf6c9f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-dfc85554.js";import"./YunCard.vue_vue_type_style_index_0_lang-f610db89.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-28c83974.js";const U=JSON.parse('{"title":"简单明了理解alpha通道","description":"","frontmatter":{"categories":["小技术"],"date":"2020-03-15T21:33:00.000Z","layout":"post","tags":["平面"],"title":"简单明了理解alpha通道"},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[]}],"relativePath":"pages/posts/know-alpha-channel.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/know-alpha-channel.md","lastUpdated":1680571703000}'),r=JSON.parse('{"title":"简单明了理解alpha通道","description":"","frontmatter":{"categories":["小技术"],"date":"2020-03-15T21:33:00.000Z","layout":"post","tags":["平面"],"title":"简单明了理解alpha通道"},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[]}],"relativePath":"pages/posts/know-alpha-channel.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/know-alpha-channel.md","lastUpdated":1680571703000}'),f={name:"pages/posts/know-alpha-channel.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){_("pageData",r)}},g={id:"前言",tabindex:"-1"},k=e("p",null,[e("strong",null,"Alpha通道"),a("在计算机图形学中是一个常见术语，在Ps，Ae等动画创作类软件中常有身影，那么它究竟为何物？")],-1),b=e("p",null,"身为非专业人士不需要特别深入了解，但需要知道它的基本概念和应用",-1),A={id:"概念",tabindex:"-1"},v=e("p",null,"图像一般有RGB三个彩色通道（red，green，blue），这种图像被称为RGB图像。而Alpha通道并不属于彩色通道，它是用来存储图像的透明/半透明信息的，包含有alpha通道的图像通常被称为RGB/A图像。",-1),w=e("p",null,[e("strong",null,"但需要注意的是，alpha通道只是最终的作用效果表现为透明度，它本质上和透明度没有关系。")],-1),$=e("p",null,[e("strong",null,"alpha通道本质上是存储了一个取值 0到1 的数字，0代表完全透明，1代表完全不透明，中间值就是半透明，以此可以存储图像的透明度信息，于是alpha通道最终表现为透明度")],-1),y={id:"应用",tabindex:"-1"},E=e("blockquote",null,[e("ul",null,[e("li",null,"大家熟知的3DMAX动画软件中提供了动画作品后期合成的工作环境（即VIDEO POST），利用VIDEO POST的图像合成功能可以实现一次处理许多不同层次的图像文件与动画场景合成的设定。其中使用最频繁的合成方式Alpha composing就是靠Alpha通道来实现的。 3DMAX能根据文件的输出格式产生包含Alpha通道的32位文件格式（特别是32位的Targa图像文件）。当进行渲染时，任何不含物体的区域的Alpha值为0，实色的物体的Alpha值为255，而透明材质的Alpha值介于0～255间。利用3DMAX的这一特性可在该软件或其它软件中实现各种透明重叠的图像或动画效果。")])],-1),B=e("blockquote",null,[e("ul",null,[e("li",null,"Flash矢量动画中同样具有Alpha通道功能的运用。Alpha是Flash动画场景中图形符号（graphic）的一个主要属性，改变其值（0～100之间）便可改变对象符号的透明程度。如在各关键帧设定某图形符号以不同的Alpha值，则该图形符号就呈现出动态变化的透明效果。通过编写动作脚本（Action scripting），用户交互式地改Alpha值，更能使动画作品生动有趣。")])],-1),T=e("blockquote",null,[e("ul",null,[e("li",null,"在视频处理软件中，通常要将多个视频片段按照要求重叠在一起形成透明或半透明效果。Premiere电影编辑软件里提供了多达97个视频高叠轨道用以实现影像片段的合成。在高叠片段的video Option命令中有一个专门用于合成的透明设置选项Transparency，它提供了许多key Type基本（透明）类型。其中Alpha channel key就是利用影像或图片的Alpha通道在片段上选定区域形成透明效果。")])],-1),D=e("ul",null,[e("li",null,"我的新坑：在运用AE与PS中运用alpha通道叠加模式，做出badapple视频效果。")],-1),O=e("p",null,"效果预览：",-1),P=e("iframe",{src:"//player.bilibili.com/player.html?aid=45232264&cid=79193066&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"640px",height:"460px"}}," ",-1),S=e("p",null,"这种风格的特效视频非常多，实际上方法基本就是一种，那就是alpha通道的巧妙运用。",-1),V=e("p",null,[e("s",null,"有空就写教程，敬请期待")],-1),q={id:"引用",tabindex:"-1"},N=e("p",null,[e("s",null,"又氵一篇，真好")],-1);function x(t,C,F,M,i,G){const o=m,h=p;return u(),c(h,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":l(()=>[e("h3",g,[a("前言 "),s(o,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),k,b,e("h3",A,[a("概念 "),s(o,{class:"header-anchor",href:"#概念","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),e("blockquote",null,[e("p",null,[s(o,{href:"https://www.cnblogs.com/suogasus/p/5311264.html",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("来自东篱雪 - 博客园")]),_:1}),a(" ：Alpha通道是计算机图形学中的术语，指的是特别的通道，意思是“非彩色”通道，主要是用来保存选区和编辑选区。")])]),e("blockquote",null,[e("p",null,[s(o,{href:"https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E6%B3%95%E9%80%9A%E9%81%93",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("来自维基百科")]),_:1}),a(" ： 阿尔法通道（α Channel或Alpha Channel）是指一张图片的透明和半透明度。")])]),v,w,$,e("h3",y,[a("应用 "),s(o,{class:"header-anchor",href:"#应用","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),E,B,T,D,O,P,S,V,e("h3",q,[a("引用 "),s(o,{class:"header-anchor",href:"#引用","aria-hidden":"true"},{default:l(()=>[a("#")]),_:1})]),e("ol",null,[e("li",null,[e("p",null,[s(o,{href:"https://www.cnblogs.com/suogasus/p/5311264.html",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("来自东篱雪 - 博客园：一个也许很傻的问题,在图像处理中alpha到底是什么？")]),_:1})])]),e("li",null,[e("p",null,[s(o,{href:"https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E6%B3%95%E9%80%9A%E9%81%93",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("来自维基百科：alpha通道")]),_:1})])])]),N]),"main-header":l(()=>[n(t.$slots,"main-header")]),"main-header-after":l(()=>[n(t.$slots,"main-header-after")]),"main-nav":l(()=>[n(t.$slots,"main-nav")]),"main-content":l(()=>[n(t.$slots,"main-content")]),"main-content-after":l(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[n(t.$slots,"main-nav-after")]),comment:l(()=>[n(t.$slots,"comment")]),footer:l(()=>[n(t.$slots,"footer")]),aside:l(()=>[n(t.$slots,"aside")]),"aside-custom":l(()=>[n(t.$slots,"aside-custom")]),default:l(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const Z=d(f,[["render",x]]);export{U as __pageData,Z as default};
