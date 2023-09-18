import{_ as F}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5e98b21a.js";import{_ as y,u as E,p as i,c as d,w as l,o as C,b as s,d as o,e as c,a as D,r as a,f as m}from"./app-5d529213.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-02cc783c.js";import"./YunCard.vue_vue_type_script_setup_true_lang-5be1cd61.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-a4e979ed.js";import"./index-463abdac.js";const q=JSON.parse('{"title":"使用官方脚本一键安装docker|安装docker-compose","description":"","frontmatter":{"categories":"小技术","date":"2022-04-20T14:29:38.000Z","layout":"post","tags":["linux","docker"],"title":"使用官方脚本一键安装docker|安装docker-compose","updated":"2023-03-07T09:29:38.000Z"},"headers":[{"level":2,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]}],"relativePath":"pages/posts/install-docker-one-key.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/install-docker-one-key.md","lastUpdated":1695001611000}'),n=JSON.parse('{"title":"使用官方脚本一键安装docker|安装docker-compose","description":"","frontmatter":{"categories":"小技术","date":"2022-04-20T14:29:38.000Z","layout":"post","tags":["linux","docker"],"title":"使用官方脚本一键安装docker|安装docker-compose","updated":"2023-03-07T09:29:38.000Z"},"headers":[{"level":2,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]}],"relativePath":"pages/posts/install-docker-one-key.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/install-docker-one-key.md","lastUpdated":1695001611000}'),h={name:"pages/posts/install-docker-one-key.md",data(){return{data:n,frontmatter:n.frontmatter,$frontmatter:n.frontmatter}},setup(){const e=E();e.meta.frontmatter=Object.assign(e.meta.frontmatter,n.frontmatter),i("pageData",n)}},u={id:"安装docker",tabindex:"-1"},k=s("p",null,"docker官方提供了傻瓜式安装脚本，为你做好所有工作，免去了手动安装的繁琐。",-1),g=s("p",null,"本文实测系统环境：debian11",-1),f=s("p",null,"执行以下命令",-1),B=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[s("span",{lang:"en"},"2023-03-07更新"),s("span",{lang:"zh-CN"},"2023-03-07更新")]),s("p",null,[o("不知道从什么时候开始官方脚本已经默认也安装了 "),s("code",null,"docker compose"),o(",不需要后面的手动安装了")]),s("p",null,[o("注意是 "),s("code",null,"docker compose"),o(" 而不是 "),s("code",null,"docker-compose"),o(". 执行命令时候也没有这个杠")])],-1),b=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"curl"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"-fsSL"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"https://get.docker.com"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"bash"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"-s"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"docker")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"curl"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-fsSL"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"https://get.docker.com"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"|"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"bash"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-s"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"docker")])])])],-1),_=s("p",null,[o("可在此命令后附带"),s("code",null,"--mirror"),o("参数设置镜像源，以提高国内服务器下载docker的速度")],-1),x=s("p",null,[s("strong",null,"若登录linux的用户不是root，则需要docker的用户加入 docker 用户组。"),o(" 参考以下命令。")],-1),w=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"groupadd"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#545454","font-style":"italic"}},"# 建立docker用户组")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"sudo"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"usermod"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"-aG"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"docker"),s("span",{style:{color:"#EEFFFF"}}," $USER "),s("span",{style:{color:"#545454","font-style":"italic"}},"#将当前用户加入 docker 组")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"sudo"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"groupadd"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6A737D"}},"# 建立docker用户组")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"sudo"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"usermod"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-aG"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"docker"),s("span",{style:{color:"#24292E"}}," $USER "),s("span",{style:{color:"#6A737D"}},"#将当前用户加入 docker 组")])])])],-1),v=s("p",null,"done",-1),$=s("p",null,[o("重新登录ssh终端，可执行以下命令测试是否正确安装docker "),s("code",null,"docker run hello-world"),o(" 正确安装的输出信息如下：")],-1),T=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Unable"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"find"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"hello-world:latest"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"locally")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"latest:"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Pulling"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"library/hello-world")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"d1725b59e92d:"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Pull"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"complete")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Digest:"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"xxxxxxxxxxxxxxxx")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Status:"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Downloaded"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"newer"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"for"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"hello-world:latest")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Hello"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker!")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"This"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"message"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"shows"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"your"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"installation"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"appears"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"be"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"working"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"correctly.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"To"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"generate"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"this"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"message,"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"took"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"following"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"steps:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"1."),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"client"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"contacted"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"2."),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"pulled"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hello-world"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Hub.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"    "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#FFCB6B"}},"amd64"),s("span",{style:{color:"#89DDFF"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"3."),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"created"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"a"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"new"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"container"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"from"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"which"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"runs"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"    "),s("span",{style:{color:"#FFCB6B"}},"executable"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"produces"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"output"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"you"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"are"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"currently"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"reading.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"4."),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"The"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"daemon"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"streamed"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"that"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"output"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"to"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"the"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"client,"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"which"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"sent"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"it")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"    "),s("span",{style:{color:"#FFCB6B"}},"to"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"your"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"terminal.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"To"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"try"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"something"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"more"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"ambitious,"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"you"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"can"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"run"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"an"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Ubuntu"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"container"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"with:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"$"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"run"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"-it"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"ubuntu"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"bash")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Share"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"images,"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"automate"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"workflows,"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"and"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"more"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"with"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"a"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"free"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"Docker"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"ID:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"https://hub.docker.com/")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"For"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"more"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"examples"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"and"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"ideas,"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"visit:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"https://docs.docker.com/get-started/")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"Unable"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"to"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"find"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"image"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'hello-world:latest'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"locally")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"latest:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Pulling"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"library/hello-world")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"d1725b59e92d:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Pull"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"complete")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"Digest:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"xxxxxxxxxxxxxxxx")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"Status:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Downloaded"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"newer"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"image"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"for"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"hello-world:latest")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"Hello"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker!")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"This"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"message"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"shows"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"that"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"your"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"installation"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"appears"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"to"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"be"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"working"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"correctly.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"To"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"generate"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"this"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"message,"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"took"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"following"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"steps:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"1."),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"The"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"client"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"contacted"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"daemon.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"2."),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"The"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"daemon"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"pulled"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"hello-world"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"image"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Hub.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ("),s("span",{style:{color:"#6F42C1"}},"amd64"),s("span",{style:{color:"#24292E"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"3."),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"The"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"daemon"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"created"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"a"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"container"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"that"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"image"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"which"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"runs"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"executable"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"that"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"produces"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"output"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"you"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"are"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"currently"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"reading.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"4."),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"The"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"daemon"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"streamed"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"that"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"output"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"to"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"the"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"client,"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"which"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"sent"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"it")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"to"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"your"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"terminal.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"To"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"try"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"something"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"more"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"ambitious,"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"you"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"can"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"run"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"an"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Ubuntu"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"container"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"with:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"$"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"run"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-it"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"ubuntu"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"bash")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"Share"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"images,"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"automate"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"workflows,"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"and"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"more"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"with"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"a"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"free"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"Docker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"ID:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"https://hub.docker.com/")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"For"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"more"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"examples"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"and"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"ideas,"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"visit:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"https://docs.docker.com/get-started/")])])])],-1),S={id:"安装docker-compose",tabindex:"-1"},U=s("p",null,"执行以下命令",-1),N=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"curl"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"-L"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"https://github.com/docker/compose/releases/download/v2.14.0/docker-compose-linux-"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#FFCB6B"}},"uname"),s("span",{style:{color:"#C3E88D"}}," -m"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#FFCB6B"}},"./docker-compose")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"curl"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-L"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"https://github.com/docker/compose/releases/download/v2.14.0/docker-compose-linux-`"),s("span",{style:{color:"#6F42C1"}},"uname"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"-m"),s("span",{style:{color:"#032F62"}},"`"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"./docker-compose")])])])],-1),P=s("p",null,"注释：",-1),A=s("li",null,[s("code",null,"uname -m"),o("用于获取本机架构")],-1),L=s("code",null,"/2.14.0/",-1),V=s("p",null,[o("记得授予权限 "),s("code",null,"chmod +x ./docker-compose"),o(" 移动到正确路径 "),s("code",null,"mv ./docker-compose /usr/local/bin/docker-compose")],-1);function H(e,O,Z,R,r,G){const t=m,p=F;return C(),d(p,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":l(()=>[s("h2",u,[o("安装docker "),c(t,{class:"header-anchor",href:"#安装docker","aria-hidden":"true"},{default:l(()=>[o("#")]),_:1})]),k,g,f,B,b,D(" more "),_,x,w,v,$,T,s("h2",S,[o("安装docker-compose "),c(t,{class:"header-anchor",href:"#安装docker-compose","aria-hidden":"true"},{default:l(()=>[o("#")]),_:1})]),U,N,P,s("ul",null,[A,s("li",null,[o("注意将"),L,o("换成所需的版本号，可前往"),c(t,{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noreferrer"},{default:l(()=>[o("docker-compose的仓库")]),_:1}),o("查看详情")])]),V]),"main-header":l(()=>[a(e.$slots,"main-header")]),"main-header-after":l(()=>[a(e.$slots,"main-header-after")]),"main-nav":l(()=>[a(e.$slots,"main-nav")]),"main-content":l(()=>[a(e.$slots,"main-content")]),"main-content-after":l(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":l(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":l(()=>[a(e.$slots,"main-nav-after")]),comment:l(()=>[a(e.$slots,"comment")]),footer:l(()=>[a(e.$slots,"footer")]),aside:l(()=>[a(e.$slots,"aside")]),"aside-custom":l(()=>[a(e.$slots,"aside-custom")]),default:l(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const Q=y(h,[["render",H]]);export{q as __pageData,Q as default};
