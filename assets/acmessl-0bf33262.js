import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-396c859f.js";import{_ as d,u as h,p as m,c as C,w as l,o as u,b as e,d as s,e as n,a as y,r as t,f as _}from"./app-262cb9cc.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-638d7401.js";import"./YunCard.vue_vue_type_script_setup_true_lang-be60b976.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-42288653.js";const A="/photo/post-pics/acmessl/acmessl1.webp",pe=JSON.parse('{"title":"使用ACME脚本申请并配置SSL证书","description":"","frontmatter":{"categories":"小技术","date":"2022-04-22T16:48:01.000Z","layout":"post","tags":["SSL"],"title":"使用ACME脚本申请并配置SSL证书","updated":"2022-04-22T16:48:01.000Z"},"headers":[{"level":2,"title":"前言|为什么选择ACME方法","slug":"前言-为什么选择acme方法","link":"#前言-为什么选择acme方法","children":[]},{"level":2,"title":"准备工作与脚本安装","slug":"准备工作与脚本安装","link":"#准备工作与脚本安装","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"证书申请","slug":"证书申请","link":"#证书申请","children":[{"level":3,"title":"监听80端口申请证书","slug":"监听80端口申请证书","link":"#监听80端口申请证书","children":[]},{"level":3,"title":"通过Nginx服务申请","slug":"通过nginx服务申请","link":"#通过nginx服务申请","children":[]}]},{"level":2,"title":"安装证书到指定路径","slug":"安装证书到指定路径","link":"#安装证书到指定路径","children":[]},{"level":2,"title":"善后工作","slug":"善后工作","link":"#善后工作","children":[]}],"relativePath":"pages/posts/acmessl.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/acmessl.md","lastUpdated":1691921469000}'),c=JSON.parse('{"title":"使用ACME脚本申请并配置SSL证书","description":"","frontmatter":{"categories":"小技术","date":"2022-04-22T16:48:01.000Z","layout":"post","tags":["SSL"],"title":"使用ACME脚本申请并配置SSL证书","updated":"2022-04-22T16:48:01.000Z"},"headers":[{"level":2,"title":"前言|为什么选择ACME方法","slug":"前言-为什么选择acme方法","link":"#前言-为什么选择acme方法","children":[]},{"level":2,"title":"准备工作与脚本安装","slug":"准备工作与脚本安装","link":"#准备工作与脚本安装","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"证书申请","slug":"证书申请","link":"#证书申请","children":[{"level":3,"title":"监听80端口申请证书","slug":"监听80端口申请证书","link":"#监听80端口申请证书","children":[]},{"level":3,"title":"通过Nginx服务申请","slug":"通过nginx服务申请","link":"#通过nginx服务申请","children":[]}]},{"level":2,"title":"安装证书到指定路径","slug":"安装证书到指定路径","link":"#安装证书到指定路径","children":[]},{"level":2,"title":"善后工作","slug":"善后工作","link":"#善后工作","children":[]}],"relativePath":"pages/posts/acmessl.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/acmessl.md","lastUpdated":1691921469000}'),D={name:"pages/posts/acmessl.md",data(){return{data:c,frontmatter:c.frontmatter,$frontmatter:c.frontmatter}},setup(){const a=h();a.meta.frontmatter=Object.assign(a.meta.frontmatter,c.frontmatter),m("pageData",c)}},g={id:"前言-为什么选择acme方法",tabindex:"-1"},f=e("p",null,"要想通过TLS/https协议访问自己域名下的服务，就必须申请SSL证书。类似宝塔这种面板提供了简单快捷的方法一键申请，但终究不是良好的解决方案。一来宝塔过于臃肿，二来其需要手机实名验证。使用各大云服务商提供的【免费证书】则还需要登录网页、申请、导入证书，未免操作繁琐。更何况这些云服务商提供的ssl证书只能给你很少的自由选择性。",-1),E=e("p",null,"而ACME则很好地解决了这些问题。",-1),v=e("p",null,"系统环境：Debian",-1),k={id:"准备工作与脚本安装",tabindex:"-1"},F=e("p",null,"在开始之前，首先将域名解析到服务器的ip上。",-1),x={id:"安装",tabindex:"-1"},B=e("p",null,"首先安装socat，它是acme所需的组件",-1),b=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"apt"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"update")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"apt"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"install"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"socat"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-y")])])])],-1),S=e("p",null,"然后安装acme脚本",-1),$=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"curl"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"https://get.acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"|"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#FFCB6B"}},"sh")])])])],-1),L=e("p",null,[s("脚本安装在用户目录下的"),e("code",null,".acme.sh"),s("（隐藏）文件夹内，使用 "),e("code",null,". .bashrc"),s(" 让acme.sh命令生效")],-1),M=e("p",null,"接下来使用脚本申请证书",-1),N={id:"证书申请",tabindex:"-1"},T=e("p",null,"首先注册CA账户，将下列命令中的邮箱改为自己的邮箱地址",-1),w=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--register-account"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-m"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"xxxx@xxxx.com")])])])],-1),V=e("p",null,"注册成功的输出结果如下",-1),Z=e("p",null,[e("img",{src:A,alt:"1"}),s("_注册成功")],-1),O=e("p",null,"然后申请证书，接下来的方法有多种，根据自己情况选择可用的一种即可",-1),j={id:"监听80端口申请证书",tabindex:"-1"},J=e("p",null,"如果服务器的80端口空闲，且能够访问，可以让acme临时监听80端口，完成验证。执行以下命令即可。将domain.com改为自己的域名",-1),P=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--issue"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-d"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"domain.com"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--standalone")])])])],-1),U={id:"通过nginx服务申请",tabindex:"-1"},R=e("p",null,"如果服务器上已经安装了nginx，且网页能够正常打开，执行以下命令即可通过nginx验证并申请证书。",-1),q=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--issue"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-d"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"mydomain.com"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--nginx")])])])],-1),z=e("hr",null,null,-1),G=e("p",null,"如果成功申请了证书，将会看到的输出结果是一长串自己的证书和证书文件存放路径。",-1),H={id:"安装证书到指定路径",tabindex:"-1"},I=e("p",null,"生成的证书文件默认存放在与acme.sh脚本相同文件夹内，大多数情况下不应直接使用该路径下的证书文件，而使用以下命令安装证书到指定路径。",-1),K=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--install-cert"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-d"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"domain.com"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--key-file"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#C3E88D"}},"pat"),e("span",{style:{color:"#A6ACCD"}},"h"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#C3E88D"}},"privkey.pem"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--fullchain-file"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#C3E88D"}},"pat"),e("span",{style:{color:"#A6ACCD"}},"h"),e("span",{style:{color:"#89DDFF"}},">"),e("span",{style:{color:"#C3E88D"}},"fullchain.pem")])])])],-1),Q=e("p",null,[s("其中"),e("code",null,"--key-file <path>privkey.pem"),s("指定的为私钥文件，"),e("code",null,"--fullchain-file <path>fullchain.pem"),s("为证书文件。")],-1),W=e("p",null,"done",-1),X={id:"善后工作",tabindex:"-1"},Y=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--upgrade"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--auto-upgrade"),e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#开启acme的自动更新")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"acme.sh"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--upgrade"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--auto-upgrade"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"0"),e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#关闭自动更新")])])])],-1);function ee(a,se,le,ae,r,te){const o=_,i=p;return u(),C(i,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":l(()=>[e("h2",g,[s("前言|为什么选择ACME方法 "),n(o,{class:"header-anchor",href:"#前言-为什么选择acme方法","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),f,E,y(" more "),v,e("h2",k,[s("准备工作与脚本安装 "),n(o,{class:"header-anchor",href:"#准备工作与脚本安装","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),F,e("h3",x,[s("安装 "),n(o,{class:"header-anchor",href:"#安装","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),B,b,S,$,L,M,e("h2",N,[s("证书申请 "),n(o,{class:"header-anchor",href:"#证书申请","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),T,w,V,Z,O,e("h3",j,[s("监听80端口申请证书 "),n(o,{class:"header-anchor",href:"#监听80端口申请证书","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),J,P,e("h3",U,[s("通过Nginx服务申请 "),n(o,{class:"header-anchor",href:"#通过nginx服务申请","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),R,q,z,G,e("h2",H,[s("安装证书到指定路径 "),n(o,{class:"header-anchor",href:"#安装证书到指定路径","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),I,K,Q,W,e("h2",X,[s("善后工作 "),n(o,{class:"header-anchor",href:"#善后工作","aria-hidden":"true"},{default:l(()=>[s("#")]),_:1})]),e("p",null,[s("在安装acme.sh脚本时，它自动为创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书。 但由于acme 协议和 letsencrypt CA 都在频繁的更新, 因此 "),n(o,{href:"http://acme.sh",target:"_blank",rel:"noreferrer"},{default:l(()=>[s("acme.sh")]),_:1}),s(" 也应当经常更新以保持同步。参考以下命令")]),Y]),"main-header":l(()=>[t(a.$slots,"main-header")]),"main-header-after":l(()=>[t(a.$slots,"main-header-after")]),"main-nav":l(()=>[t(a.$slots,"main-nav")]),"main-content":l(()=>[t(a.$slots,"main-content")]),"main-content-after":l(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(a.$slots,"main-nav-after")]),comment:l(()=>[t(a.$slots,"comment")]),footer:l(()=>[t(a.$slots,"footer")]),aside:l(()=>[t(a.$slots,"aside")]),"aside-custom":l(()=>[t(a.$slots,"aside-custom")]),default:l(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const de=d(D,[["render",ee]]);export{pe as __pageData,de as default};
