import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-B9Wp_4oo.js";import{c as p,w as s,u as k,a as c,p as l,o as g,e as f,d as i,f as e,g as a}from"./app-DQCIvYH8.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CKLjbNwI.js";import"./YunCard.vue_vue_type_script_setup_true_lang-QqWTzIt_.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-C8oKP9ii.js";import"./index-C7yU5XnD.js";const F="/assets/use-sharex-and-mdimage-for-efficiency_01-16-19-19-40-Dq6pT-3E.webp",u="/assets/use-sharex-and-mdimage-for-efficiency_01-16-19-24-22-C94-chFp.webp",_="/assets/use-sharex-and-mdimage-for-efficiency_01-16-19-26-14-CIUICsW_.webp",y=e("p",null,[a("之前我曾安利过 "),e("a",{href:"http://localhost:4859/posts/pasteimage-in-vs",target:"_blank",rel:"noreferrer"},"PasteImage"),a(" 这个插件，用 VSCode 写博客/文档的时候，用它可以很快捷地在md文档中插入图片。")],-1),D=e("p",null,[a("受某个友人影响，我也开始尝试 "),e("s",null,"拥抱 webp"),a("了，近期的文章内的图片都已经压缩成了 webp 格式。但是 PasteImage 却不支持 webp 格式，于是我又想办法整出了今天这个解决方案，实现完全自动化的 压缩+插入图片。")],-1),b=e("h2",{id:"配置-sharex",tabindex:"-1"},[a("配置 ShareX "),e("a",{class:"header-anchor",href:"#配置-sharex","aria-label":'Permalink to "配置 ShareX"'},"​")],-1),w=e("p",null,[e("a",{href:"https://getsharex.com/",target:"_blank",rel:"noreferrer"},"sharex"),a(" 是一个强大的截屏、录屏、分享软件，开源免费，支持高度自定义的自动化，")],-1),E=e("p",null,[a("然后还要安装 "),e("a",{href:"https://ffmpeg.org/",target:"_blank",rel:"noreferrer"},"ffmpeg"),a(" ，它在本文的作用是通过命令调用来压缩图片。如果你没了解过它的话不妨去搜索一下，也是一个十分强大的工具。")],-1),$=e("p",null,"然后在 sharex 的动作设置中，添加一个动作",-1),v=e("figure",null,[e("img",{src:F,alt:"图 2",loading:"lazy",decoding:"async"})],-1),C=e("ul",null,[e("li",null,"名称: 随意"),e("li",null,"文件路径: ffmpeg 的安装路径，要指定到 ffmpeg 可执行文件"),e("li",null,[a("参数: "),e("code",null,'-i "$input" -q 75 "$output"'),a(" 其中 -q 75 是以75%质量压缩")]),e("li",null,"输出文件扩展名: webp"),e("li",null,"扩展名筛选: png")],-1),x=e("p",null,"勾上下面的 隐藏窗口 和 删除输入文件",-1),M=e("p",null,[e("img",{src:u,alt:"图 3"}),a(" 然后在截图后的任务里选中这些项(添加图像特效可视情况自行添加)")],-1),I=e("figure",null,[e("img",{src:_,alt:"图 4",loading:"lazy",decoding:"async"})],-1),S=e("h2",{id:"配置-markdown-image",tabindex:"-1"},[a("配置 Markdown Image "),e("a",{class:"header-anchor",href:"#配置-markdown-image","aria-label":'Permalink to "配置 Markdown Image"'},"​")],-1),P=e("p",null,[e("a",{href:"https://marketplace.visualstudio.com/items?itemName=hancel.markdown-image",target:"_blank",rel:"noreferrer"},"Markdown Image"),a(" 是一个 VSCode 插件，支持将剪贴板中的图片保存在指定路径下(或指定图床中)，并自动生成 markdown 格式的引用。")],-1),V=e("p",null,[a("我的博客的文章图片是按照 "),e("code",null,"/public/photo/post-pics/文章名/文章名_时间"),a(" 的格式和路径保存在本地的，所以按照下面这样配置")],-1),N=e("div",{class:"language-json vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"markdown-image.base.fileNameFormat"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"${mdname}/${mdname}_${MM}-${DD}-${HH}-${mm}-${ss}"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"markdown-image.local.path"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"../../public/photo/post-pics/"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"markdown-image.local.referencePath"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"/photo/post-pics/${mdname}/"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},",")])])]),e("button",{class:"collapse"})],-1),X=e("p",null,[a("更详细的配置，参照 "),e("a",{href:"https://github.com/imlinhanchao/vsc-markdown-image/blob/HEAD/README.zh-cn.md",target:"_blank",rel:"noreferrer"},"Markdown Image 的官方文档")],-1),T=e("p",null,[a("这样就完成啦。现在使用 sharex 截屏时会自动调用 ffmpeg 将文件压缩为 webp 格式并保存在剪贴板中，然后在 VSCode 中使用 "),e("code",null,"Alt + Shift + V"),a(" 粘贴即可。")],-1),U={__name:"index",setup(W,{expose:h}){const n=JSON.parse('{"title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","description":"","frontmatter":{"layout":"post","title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","date":"2023-01-16T18:04:11.000Z","tag":["博客","效率","安利"],"categories":["小技术"]},"headers":[{"level":2,"title":"配置 ShareX","slug":"配置-sharex","link":"#配置-sharex","children":[]},{"level":2,"title":"配置 Markdown Image","slug":"配置-markdown-image","link":"#配置-markdown-image","children":[]}],"relativePath":"pages/posts/use-sharex-and-mdimage-for-efficiency/index.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/use-sharex-and-mdimage-for-efficiency/index.md","lastUpdated":1711529902000}'),o=c(),r=n.frontmatter||{};return o.meta.frontmatter=Object.assign(o.meta.frontmatter||{},n.frontmatter||{}),l("pageData",n),l("valaxy:frontmatter",r),globalThis.$frontmatter=r,h({frontmatter:{layout:"post",title:"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档",date:"2023-01-16T18:04:11.000Z",tag:["博客","效率","安利"],categories:["小技术"]}}),(t,q)=>{const d=m;return g(),p(d,{frontmatter:k(r)},{"main-content-md":s(()=>[y,D,f(" more "),b,w,E,$,v,C,x,M,I,S,P,V,N,X,T]),"main-header":s(()=>[i(t.$slots,"main-header")]),"main-header-after":s(()=>[i(t.$slots,"main-header-after")]),"main-nav":s(()=>[i(t.$slots,"main-nav")]),"main-content":s(()=>[i(t.$slots,"main-content")]),"main-content-after":s(()=>[i(t.$slots,"main-content-after")]),"main-nav-before":s(()=>[i(t.$slots,"main-nav-before")]),"main-nav-after":s(()=>[i(t.$slots,"main-nav-after")]),comment:s(()=>[i(t.$slots,"comment")]),footer:s(()=>[i(t.$slots,"footer")]),aside:s(()=>[i(t.$slots,"aside")]),"aside-custom":s(()=>[i(t.$slots,"aside-custom")]),default:s(()=>[i(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{U as default};
