import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-fe21370d.js";import{_ as h,c as m,w as e,o as c,b as t,d as a,e as l,r as s,f as u,p as _}from"./app-75d947ba.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-fb12fb7c.js";import"./YunCard.vue_vue_type_style_index_0_lang-d09f1f3a.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-1142ab4d.js";const C=JSON.parse('{"title":"MMD中导出带alpha通道视频的方法","description":"","frontmatter":{"categories":"小技术","date":"2020-04-07T20:33:29.000Z","layout":"post","tags":["MMD","3D"],"title":"MMD中导出带alpha通道视频的方法"},"headers":[],"relativePath":"pages/posts/mmdray-output-videos-with-alpha.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-output-videos-with-alpha.md","lastUpdated":1681104776000}'),r=JSON.parse('{"title":"MMD中导出带alpha通道视频的方法","description":"","frontmatter":{"categories":"小技术","date":"2020-04-07T20:33:29.000Z","layout":"post","tags":["MMD","3D"],"title":"MMD中导出带alpha通道视频的方法"},"headers":[],"relativePath":"pages/posts/mmdray-output-videos-with-alpha.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-output-videos-with-alpha.md","lastUpdated":1681104776000}'),f={name:"pages/posts/mmdray-output-videos-with-alpha.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){_("pageData",r)}},g={id:"前言",tabindex:"-1"},M=t("p",null,"闲来无事在摸MMD，然后看到了这个",-1),v=t("p",null,[t("a",{href:"https://www.bilibili.com/video/BV1r7411u7ST",target:"_blank",rel:"noreferrer"},"【PV背景配布/动作配布】九尾三妈式初音 - お気に召すまま ")],-1),b=t("p",null,"感觉这个配布的挺不错，想摸一个。 但是碰到点问题：60fps的背景是单独的视频，需要通过后期软件把人物和背景的视频叠加起来，这就要一个带有alpha通道（透明）的人物视频，去网上找了一些方法，依旧踩了不少坑。",-1),w={id:"通过一个mme实现",tabindex:"-1"},$=t("p",null,[a("下载之后"),t("strong",null,"保持乱码状态解压")],-1),y=t("p",null,[a("然后在"),t("code",null,"RewriteAlpha"),a("文件夹中，往MMD里加入这个"),t("code",null,"RewriteAlpha.x")],-1),D=t("p",null,[a("在MMD>背景>绘制附件中，把"),t("code",null,"RewriteAlpha.x"),a("放到最后一位")],-1),k=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200407205316.png",alt:""})],-1),V=t("p",null,[a("然后打开MME面板，找到"),t("code",null,"alphamap"),a("栏，把skybox和stage的渲染关闭（取消勾选），人物模型的渲染开启，并勾选上RewriteAlpha.x的渲染")],-1),x=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200407205639.png",alt:""})],-1),A=t("p",null,[a("这样就算完成了，导出的时候将会导出只有人物渲染，且背景是透明通道的视频，也可以先导出一张png看看效果。"),t("s",null,"别渲染了半天发现不是透明通道，问就是血泪史")],-1),E=t("p",null,[t("img",{src:"https://img.asnet.top/i/2020/04/07/yrrxxj.png",alt:""})],-1),N=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/alphammd.png",alt:""})],-1);function j(o,B,R,S,i,T){const n=u,p=d;return c(),m(p,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":e(()=>[t("h1",g,[a("前言 "),l(n,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),M,v,b,t("h1",w,[a("通过一个MME实现 "),l(n,{class:"header-anchor",href:"#通过一个mme实现","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),t("p",null,[a("找了很多方法，感觉就这个最简单方便。 首先去下载这个MME："),l(n,{href:"https://bowlroll.net/file/27004",target:"_blank",rel:"noreferrer"},{default:e(()=>[a("https://bowlroll.net/file/27004")]),_:1}),a(" 这个MME可以让你随心所欲的加花里花哨的全局MME，而不会丢失透明通道")]),$,y,D,k,V,x,A,E,N]),"main-header":e(()=>[s(o.$slots,"main-header")]),"main-header-after":e(()=>[s(o.$slots,"main-header-after")]),"main-nav":e(()=>[s(o.$slots,"main-nav")]),"main-content":e(()=>[s(o.$slots,"main-content")]),"main-content-after":e(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(o.$slots,"main-nav-after")]),comment:e(()=>[s(o.$slots,"comment")]),footer:e(()=>[s(o.$slots,"footer")]),aside:e(()=>[s(o.$slots,"aside")]),"aside-custom":e(()=>[s(o.$slots,"aside-custom")]),default:e(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const L=h(f,[["render",j]]);export{C as __pageData,L as default};
