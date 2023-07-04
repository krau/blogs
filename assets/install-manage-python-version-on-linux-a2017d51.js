import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-6a55f952.js";import{_ as h,p as d,c as u,w as s,o as y,a as _,b as l,d as n,e as t,r as a,f as m}from"./app-37ed1459.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-67f0379b.js";import"./YunCard.vue_vue_type_style_index_0_lang-143ec6ad.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-febcad81.js";const C="/photo/post-pics/install-manage-python-version-on-linux/install-manage-python-version-on-linux_04-13-15-38-10.webp",g="/photo/post-pics/install-manage-python-version-on-linux/install-manage-python-version-on-linux_04-13-15-52-08.webp",v="/photo/post-pics/install-manage-python-version-on-linux/install-manage-python-version-on-linux_04-13-15-57-12.webp",A="/photo/post-pics/install-manage-python-version-on-linux/install-manage-python-version-on-linux_04-13-16-21-43.webp",D="/photo/post-pics/install-manage-python-version-on-linux/install-manage-python-version-on-linux_04-13-16-25-55.webp",f="/photo/post-pics/install-manage-python-version-on-linux/install-manage-python-version-on-linux_04-13-16-54-47.webp",Ll=JSON.parse('{"title":"Debian11/Linux安装最新Python版本及多版本环境管理","description":"","frontmatter":{"title":"Debian11/Linux安装最新Python版本及多版本环境管理","date":"2023-04-13T15:27:27.000Z","updated":"2023-04-13T15:27:27.000Z","tags":["Python","Linux"],"categories":"小技术","hide":null},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"下载Python源码","slug":"下载python源码","link":"#下载python源码","children":[]},{"level":3,"title":"配置构建","slug":"配置构建","link":"#配置构建","children":[]},{"level":3,"title":"编译安装","slug":"编译安装","link":"#编译安装","children":[]}]},{"level":2,"title":"环境管理","slug":"环境管理","link":"#环境管理","children":[{"level":3,"title":"虚拟环境","slug":"虚拟环境","link":"#虚拟环境","children":[]},{"level":3,"title":"默认版本","slug":"默认版本","link":"#默认版本","children":[]}]}],"relativePath":"pages/posts/install-manage-python-version-on-linux.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/install-manage-python-version-on-linux.md","lastUpdated":1688467562000}'),i=JSON.parse('{"title":"Debian11/Linux安装最新Python版本及多版本环境管理","description":"","frontmatter":{"title":"Debian11/Linux安装最新Python版本及多版本环境管理","date":"2023-04-13T15:27:27.000Z","updated":"2023-04-13T15:27:27.000Z","tags":["Python","Linux"],"categories":"小技术","hide":null},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"下载Python源码","slug":"下载python源码","link":"#下载python源码","children":[]},{"level":3,"title":"配置构建","slug":"配置构建","link":"#配置构建","children":[]},{"level":3,"title":"编译安装","slug":"编译安装","link":"#编译安装","children":[]}]},{"level":2,"title":"环境管理","slug":"环境管理","link":"#环境管理","children":[{"level":3,"title":"虚拟环境","slug":"虚拟环境","link":"#虚拟环境","children":[]},{"level":3,"title":"默认版本","slug":"默认版本","link":"#默认版本","children":[]}]}],"relativePath":"pages/posts/install-manage-python-version-on-linux.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/install-manage-python-version-on-linux.md","lastUpdated":1688467562000}'),b={name:"pages/posts/install-manage-python-version-on-linux.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){d("pageData",i)}},x=l("p",null,"Python 的环境管理确实烦,而且会出现版本之间不兼容的情况,所以有必要知道如何安装不同版本的 Python 并管理其环境.",-1),k=l("p",null,"本文系统环境为 Debian11, 虚拟环境工具使用的是 venv, 采用编译安装的方法. 截止此文创建时, Python 最新版本为 3.11.3",-1),E={id:"安装",tabindex:"-1"},P={id:"下载python源码",tabindex:"-1"},F=l("p",null,[l("img",{src:C,alt:"图 3"})],-1),w=l("p",null,"使用 wget 下载:",-1),B=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"wget"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"https://www.python.org/ftp/python/3.11.3/Python-3.11.3.tar.xz")]),n(`
`),l("span",{class:"line"})])])],-1),$={id:"配置构建",tabindex:"-1"},z=l("p",null,"下载完成后, 将其解压:",-1),L=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"tar"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-xf"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"Python-3.11.3.tar.xz")]),n(`
`),l("span",{class:"line"})])])],-1),N=l("p",null,"安装必要的依赖软件:",-1),T=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"apt"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"update")]),n(`
`),l("span",{class:"line"}),n(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"apt"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build-essential"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"zlib1g-dev"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"libncurses5-dev"),l("span",{style:{color:"#A6ACCD"}}," \\")]),n(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"libgdbm-dev "),l("span",{style:{color:"#C3E88D"}},"libnss3-dev"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"libssl-dev"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"libsqlite3-dev"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pkg-config"),l("span",{style:{color:"#A6ACCD"}}," \\")]),n(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"libreadline-dev "),l("span",{style:{color:"#C3E88D"}},"libffi-dev"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"curl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"libbz2-dev"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"curl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-y")]),n(`
`),l("span",{class:"line"})])])],-1),V=l("p",null,"进入 Python 源码文件夹, 并配置",-1),Z=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"Python-3.11.3")]),n(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"./configure"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--enable-optimizations"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--with-lto")]),n(`
`),l("span",{class:"line"})])])],-1),O={class:"tip custom-block"},S=l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"注意"),l("span",{lang:"zh-CN"},"注意")],-1),j=l("p",null,[l("code",null,"configure"),n(" 后的 "),l("code",null,"--enable-optimizations"),n(),l("code",null,"--with-lto"),n(" 两个参数是为了提高性能, 但它会使得 Python 编译过程变慢, 你可以选择不启用它们. 如果你遇到了问题, 可以尝试只开启 "),l("code",null,"--enable-optimizations"),n(", 或者二者都不使用")],-1),J=l("p",null,"如果上面命令的输出没有错误, 那么就可以开始编译了.",-1),M=l("p",null,[l("img",{src:g,alt:"图 4"})],-1),U=l("p",null,"若提示缺少某个依赖, 请手动安装它",-1),q={id:"编译安装",tabindex:"-1"},H=l("p",null,[n("运行 "),l("code",null,"make"),n(" 即可开始构建 Python , 若你有多个 cpu 核心, 可以加上 "),l("code",null,"-j"),n(" 参数来多核编译, "),l("code",null,"-j"),n(" 后是你的 cpu 核心数, 可以使用 "),l("code",null,"nproc"),n(" 获取")],-1),I=l("p",null,"若你机器的性能不佳, 这一过程可能十分漫长(几十分钟甚至更久), 你可以使用 screen 或 tmux 使其在后台运行",-1),G=l("p",null,[l("img",{src:v,alt:"图 5"})],-1),K=l("p",null,[n("完成后, 使用 "),l("code",null,"sudo make altinstall"),n(" 安装(可能也很漫长,但比上一步要快), 之后你就可以使用 Python3.11:")],-1),Q=l("p",null,[l("img",{src:A,alt:"图 6"})],-1),R=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"python3.11"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"--version")]),n(`
`),l("span",{class:"line"})])])],-1),W=l("p",null,[l("img",{src:D,alt:"图 7"})],-1),X={id:"环境管理",tabindex:"-1"},Y={id:"虚拟环境",tabindex:"-1"},ll={id:"创建",tabindex:"-1"},nl=l("p",null,"Python 的虚拟环境可以将项目与全局环境相互隔离,可以避免污染你的系统环境,并方便得使多个 Python 版本共存与切换.",-1),sl=l("p",null,"安装 venv:",-1),el=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"apt"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"python3-venv")]),n(`
`),l("span",{class:"line"})])])],-1),tl=l("p",null,"使用以下命令在当前目录下创建虚拟环境:",-1),ol=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"python3.11"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-m"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"venv"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"myenv")]),n(`
`),l("span",{class:"line"})])])],-1),al=l("p",null,[n("这个命令会在你当前目录下创建 "),l("code",null,"myenv"),n(' 文件夹, 它就是一个"虚拟环境", 其中包含了你所指定的 '),l("code",null,"Python3.11"),n(" 版本, 未来在虚拟环境中安装的第三方库等文件也会在此文件夹内.")],-1),il=l("p",null,[n("显然, 如果你想创建一个其他 Python 版本的虚拟环境, 那么只需要将前面的 "),l("code",null,"python3.11"),n(" 改成你需要的版本且已经安装的即可")],-1),cl={id:"使用",tabindex:"-1"},rl=l("p",null,"创建完成后,要进入到虚拟环境,需要激活它,使用以下命令.",-1),pl=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"source"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"myenv/bin/activate")]),n(`
`),l("span",{class:"line"})])])],-1),hl=l("p",null,"这时你的终端应该会有一些标识来提示你处在虚拟环境中,如下",-1),dl=l("p",null,[l("img",{src:f,alt:"图 10"})],-1),ul=l("p",null,[n("在虚拟环境中, "),l("code",null,"python"),n(),l("code",null,"python3.11"),n(),l("code",null,"python3"),n(" 命令都可以打开 python ,并且版本都是 python3.11")],-1),yl=l("p",null,"在其中使用 pip 安装的包也都在虚拟环境中",-1),_l=l("p",null,[n("使用 "),l("code",null,"deactive"),n(" 命令可退出虚拟环境")],-1),ml={id:"删除",tabindex:"-1"},Cl=l("p",null,"使用 venv 工具创建的虚拟环境实际上就是一个文件夹, 删除它就是删除了环境",-1),gl={id:"默认版本",tabindex:"-1"},vl=l("p",null,"始终建议使用官方软件源提供的 python 作为默认版本, 如果你真的想要替换默认版本, 那么可以使用下面的命令",-1),Al=l("div",{class:"language-shell"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"ln"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-sf"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/usr/bin/python3.11"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/usr/bin/python")]),n(`
`),l("span",{class:"line"})])])],-1),Dl=l("p",null,"这条命令将 python3.11 的可执行文件链接到 linux PATH 的默认搜索路径中, 此时系统的默认版本就是 3.11",-1),fl=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"TIP"),l("span",{lang:"zh-CN"},"提示")]),l("p",null,"即使默认版本就是你想要使用的 Python 版本, 你也应该在你的项目里创建虚拟环境, 除非你想把自己的系统环境搞得乱七八糟")],-1);function bl(o,xl,kl,El,c,Pl){const e=m,r=p;return y(),u(r,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":s(()=>[x,k,_(" more "),l("h2",E,[n("安装 "),t(e,{class:"header-anchor",href:"#安装","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),l("h3",P,[n("下载Python源码 "),t(e,{class:"header-anchor",href:"#下载python源码","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),l("p",null,[n("去往 "),t(e,{href:"https://www.python.org/downloads/",target:"_blank",rel:"noreferrer"},{default:s(()=>[n("Python 官网")]),_:1}),n(" 下载你想安装的版本的源码, 以目前最新的 Python3.11 为例")]),F,w,B,l("h3",$,[n("配置构建 "),t(e,{class:"header-anchor",href:"#配置构建","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),z,L,N,T,V,Z,l("div",O,[S,j,l("p",null,[n("关于配置参数的更多信息, 可以参阅"),t(e,{href:"https://docs.python.org/zh-cn/3/using/configure.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[n("官方文档")]),_:1})])]),J,M,U,l("h3",q,[n("编译安装 "),t(e,{class:"header-anchor",href:"#编译安装","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),H,I,G,K,Q,R,W,l("h2",X,[n("环境管理 "),t(e,{class:"header-anchor",href:"#环境管理","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),l("h3",Y,[n("虚拟环境 "),t(e,{class:"header-anchor",href:"#虚拟环境","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),l("h4",ll,[n("创建 "),t(e,{class:"header-anchor",href:"#创建","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),nl,l("p",null,[n("本文使用的虚拟环境工具是 "),t(e,{href:"https://docs.python.org/3/library/venv.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[n("venv")]),_:1}),n(" , 它是 Python 官方推荐的工具.")]),l("p",null,[n("但其实更现代的工具是 "),t(e,{href:"https://python-poetry.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[n("poetry")]),_:1}),n(" , 然而其使用比较复杂,且主要面向 pypl 模块开发者, 如有兴趣你可以自行了解.")]),sl,el,tl,ol,al,il,l("h4",cl,[n("使用 "),t(e,{class:"header-anchor",href:"#使用","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),rl,pl,hl,dl,ul,yl,_l,l("h4",ml,[n("删除 "),t(e,{class:"header-anchor",href:"#删除","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),Cl,l("h3",gl,[n("默认版本 "),t(e,{class:"header-anchor",href:"#默认版本","aria-hidden":"true"},{default:s(()=>[n("#")]),_:1})]),vl,Al,Dl,fl]),"main-header":s(()=>[a(o.$slots,"main-header")]),"main-header-after":s(()=>[a(o.$slots,"main-header-after")]),"main-nav":s(()=>[a(o.$slots,"main-nav")]),"main-content":s(()=>[a(o.$slots,"main-content")]),"main-content-after":s(()=>[a(o.$slots,"main-content-after")]),"main-nav-before":s(()=>[a(o.$slots,"main-nav-before")]),"main-nav-after":s(()=>[a(o.$slots,"main-nav-after")]),comment:s(()=>[a(o.$slots,"comment")]),footer:s(()=>[a(o.$slots,"footer")]),aside:s(()=>[a(o.$slots,"aside")]),"aside-custom":s(()=>[a(o.$slots,"aside-custom")]),default:s(()=>[a(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Nl=h(b,[["render",bl]]);export{Ll as __pageData,Nl as default};
