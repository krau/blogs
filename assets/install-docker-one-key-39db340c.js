import{_ as C}from"./ValaxyMain.vue_vue_type_style_index_0_lang-af7dfedc.js";import{_ as y,p as D,c as A,w as l,o as i,b as s,d as o,e as t,a as d,r as a,f as E}from"./app-decf7611.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-d1b357f2.js";import"./YunCard.vue_vue_type_style_index_0_lang-d2b8fdc7.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-b4e508fb.js";const R=JSON.parse('{"title":"使用官方脚本一键安装docker|安装docker-compose","description":"","frontmatter":{"categories":"小技术","date":"2022-04-20T14:29:38.000Z","layout":"post","tags":["linux","docker"],"title":"使用官方脚本一键安装docker|安装docker-compose","updated":"2023-03-07T09:29:38.000Z"},"headers":[{"level":2,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]}],"relativePath":"pages/posts/install-docker-one-key.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/install-docker-one-key.md","lastUpdated":1686884068000}'),c=JSON.parse('{"title":"使用官方脚本一键安装docker|安装docker-compose","description":"","frontmatter":{"categories":"小技术","date":"2022-04-20T14:29:38.000Z","layout":"post","tags":["linux","docker"],"title":"使用官方脚本一键安装docker|安装docker-compose","updated":"2023-03-07T09:29:38.000Z"},"headers":[{"level":2,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]}],"relativePath":"pages/posts/install-docker-one-key.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/install-docker-one-key.md","lastUpdated":1686884068000}'),m={name:"pages/posts/install-docker-one-key.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){D("pageData",c)}},h={id:"安装docker",tabindex:"-1"},u=s("p",null,"docker官方提供了傻瓜式安装脚本，为你做好所有工作，免去了手动安装的繁琐。",-1),k=s("p",null,"本文实测系统环境：debian11",-1),F=s("p",null,"执行以下命令",-1),B=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[s("span",{lang:"en"},"2023-03-07更新"),s("span",{lang:"zh-CN"},"2023-03-07更新")]),s("p",null,[o("不知道从什么时候开始官方脚本已经默认也安装了 "),s("code",null,"docker compose"),o(",不需要后面的手动安装了")]),s("p",null,[o("注意是 "),s("code",null,"docker compose"),o(" 而不是 "),s("code",null,"docker-compose"),o(". 执行命令时候也没有这个杠")])],-1),g=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"curl"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-fsSL"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"https://get.docker.com"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"bash"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-s"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"docker")]),o(`
`),s("span",{class:"line"})])])],-1),_=s("p",null,[o("可在此命令后附带"),s("code",null,"--mirror"),o("参数设置镜像源，以提高国内服务器下载docker的速度")],-1),f=s("p",null,[s("strong",null,"若登录linux的用户不是root，则需要docker的用户加入 docker 用户组。"),o(" 参考以下命令。")],-1),b=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"groupadd"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"# 建立docker用户组")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"usermod"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-aG"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"docker"),s("span",{style:{color:"#A6ACCD"}}," $USER "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#将当前用户加入 docker 组")]),o(`
`),s("span",{class:"line"})])])],-1),x=s("p",null,"done",-1),v=s("p",null,[o("重新登录ssh终端，可执行以下命令测试是否正确安装docker "),s("code",null,"docker run hello-world"),o(" 正确安装的输出信息如下：")],-1),w=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Unable"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"find"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"hello-world:latest"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"locally")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"latest:"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Pulling"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"library/hello-world")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"d1725b59e92d:"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Pull"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"complete")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Digest:"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"xxxxxxxxxxxxxxxx")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Status:"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Downloaded"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"newer"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"for"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"hello-world:latest")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Hello"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker!")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"This"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"message"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"shows"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"your"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"installation"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"appears"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"be"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"working"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"correctly.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"To"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"generate"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"this"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"message,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"took"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"following"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"steps:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"1."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"client"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"contacted"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"2."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"pulled"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hello-world"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Hub.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#FFCB6B"}},"amd64"),s("span",{style:{color:"#89DDFF"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"3."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"created"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"a"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"container"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"which"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"runs"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#FFCB6B"}},"executable"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"produces"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"output"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"you"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"are"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"currently"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"reading.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"4."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"streamed"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"output"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"client,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"which"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"sent"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"it")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#FFCB6B"}},"to"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"your"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"terminal.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"To"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"try"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"something"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"more"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ambitious,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"you"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"can"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"run"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"an"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Ubuntu"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"container"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"with:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"$"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"run"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-it"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ubuntu"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"bash")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Share"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"images,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"automate"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"workflows,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"and"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"more"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"with"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"a"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"free"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ID:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"https://hub.docker.com/")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"For"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"more"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"examples"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"and"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"ideas,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"visit:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"https://docs.docker.com/get-started/")]),o(`
`),s("span",{class:"line"})])])],-1),$={id:"安装docker-compose",tabindex:"-1"},T=s("p",null,"执行以下命令",-1),N=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"curl"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-L"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"https://github.com/docker/compose/releases/download/v2.14.0/docker-compose-linux-"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#FFCB6B"}},"uname"),s("span",{style:{color:"#C3E88D"}}," -m"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"./docker-compose")]),o(`
`),s("span",{class:"line"})])])],-1),S=s("p",null,"注释：",-1),U=s("li",null,[s("code",null,"uname -m"),o("用于获取本机架构")],-1),V=s("code",null,"/2.14.0/",-1),P=s("p",null,[o("记得授予权限 "),s("code",null,"chmod +x ./docker-compose"),o(" 移动到正确路径 "),s("code",null,"mv ./docker-compose /usr/local/bin/docker-compose")],-1);function Z(e,L,O,H,r,J){const n=E,p=C;return i(),A(p,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":l(()=>[s("h2",h,[o("安装docker "),t(n,{class:"header-anchor",href:"#安装docker","aria-hidden":"true"},{default:l(()=>[o("#")]),_:1})]),u,k,F,B,g,d(" more "),_,f,b,x,v,w,s("h2",$,[o("安装docker-compose "),t(n,{class:"header-anchor",href:"#安装docker-compose","aria-hidden":"true"},{default:l(()=>[o("#")]),_:1})]),T,N,S,s("ul",null,[U,s("li",null,[o("注意将"),V,o("换成所需的版本号，可前往"),t(n,{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noreferrer"},{default:l(()=>[o("docker-compose的仓库")]),_:1}),o("查看详情")])]),P]),"main-header":l(()=>[a(e.$slots,"main-header")]),"main-header-after":l(()=>[a(e.$slots,"main-header-after")]),"main-nav":l(()=>[a(e.$slots,"main-nav")]),"main-content":l(()=>[a(e.$slots,"main-content")]),"main-content-after":l(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":l(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":l(()=>[a(e.$slots,"main-nav-after")]),comment:l(()=>[a(e.$slots,"comment")]),footer:l(()=>[a(e.$slots,"footer")]),aside:l(()=>[a(e.$slots,"aside")]),"aside-custom":l(()=>[a(e.$slots,"aside-custom")]),default:l(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const j=y(m,[["render",Z]]);export{R as __pageData,j as default};
