import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-f3d04b09.js";import{_ as d,u,p as h,c as _,w as s,o as y,a as F,b as l,d as e,e as t,r as n,f as v}from"./app-d8f36d80.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-b6bd7474.js";import"./YunCard.vue_vue_type_script_setup_true_lang-8a781710.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-370919c4.js";import"./index-e7cdf475.js";const ye=JSON.parse('{"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载","description":"","frontmatter":{"categories":"小技术","date":"2022-01-24T19:34:31.000Z","layout":"post","tags":["linux","DIY"],"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"安装linuxdeploy并配置","slug":"安装linuxdeploy并配置","link":"#安装linuxdeploy并配置","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"引导设置","slug":"引导设置","link":"#引导设置","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"声音服务","slug":"声音服务","link":"#声音服务","children":[]},{"level":3,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]}]},{"level":2,"title":"安装并配置cloudreve","slug":"安装并配置cloudreve","link":"#安装并配置cloudreve","children":[]},{"level":2,"title":"通过aria2实现离线下载","slug":"通过aria2实现离线下载","link":"#通过aria2实现离线下载","children":[{"level":3,"title":"安装并配置aria2","slug":"安装并配置aria2","link":"#安装并配置aria2","children":[]},{"level":3,"title":"守护cloudreve与aria2进程","slug":"守护cloudreve与aria2进程","link":"#守护cloudreve与aria2进程","children":[]},{"level":3,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]}]},{"level":2,"title":"配置cloudreve离线下载功能","slug":"配置cloudreve离线下载功能","link":"#配置cloudreve离线下载功能","children":[]}],"relativePath":"pages/posts/old-phone-become-server.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/old-phone-become-server.md","lastUpdated":1694137023000}'),r=JSON.parse('{"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载","description":"","frontmatter":{"categories":"小技术","date":"2022-01-24T19:34:31.000Z","layout":"post","tags":["linux","DIY"],"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"安装linuxdeploy并配置","slug":"安装linuxdeploy并配置","link":"#安装linuxdeploy并配置","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"引导设置","slug":"引导设置","link":"#引导设置","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"声音服务","slug":"声音服务","link":"#声音服务","children":[]},{"level":3,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]}]},{"level":2,"title":"安装并配置cloudreve","slug":"安装并配置cloudreve","link":"#安装并配置cloudreve","children":[]},{"level":2,"title":"通过aria2实现离线下载","slug":"通过aria2实现离线下载","link":"#通过aria2实现离线下载","children":[{"level":3,"title":"安装并配置aria2","slug":"安装并配置aria2","link":"#安装并配置aria2","children":[]},{"level":3,"title":"守护cloudreve与aria2进程","slug":"守护cloudreve与aria2进程","link":"#守护cloudreve与aria2进程","children":[]},{"level":3,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]}]},{"level":2,"title":"配置cloudreve离线下载功能","slug":"配置cloudreve离线下载功能","link":"#配置cloudreve离线下载功能","children":[]}],"relativePath":"pages/posts/old-phone-become-server.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/old-phone-become-server.md","lastUpdated":1694137023000}'),g={name:"pages/posts/old-phone-become-server.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const a=u();a.meta.frontmatter=Object.assign(a.meta.frontmatter,r.frontmatter),h("pageData",r)}},E=l("p",null,"最近因疫情闲在家，就折腾起了自己的旧手机",-1),m={id:"准备",tabindex:"-1"},f=l("ol",null,[l("li",null,[e("一部已经获得root权限的手机 "),l("s",null,"若是ov华等无法获取root的手机，建议拿去换盆"),e(" ，本文以redmi note7 pro为例，已刷机安卓11类原生")]),l("li",null,"一台能够使用ssh终端的设备")],-1),D={id:"安装linuxdeploy并配置",tabindex:"-1"},k=l("blockquote",null,[l("p",null,"请确保安装的linuxdeploy版本≥2.0，否则需要首先安装busybox。而2.0以上的linuxdeploy内置了busybox")],-1),b=l("p",null,"打开linuxdeploy软件，点击左上角按钮，选择设置，勾选【锁定wi-fi】与【CPU唤醒】，其他选项按需配置，亦可保持默认",-1),C=l("p",null,"回到上一级页面，点击右下角按钮，进行以下配置：",-1),x={id:"配置",tabindex:"-1"},A={id:"引导设置",tabindex:"-1"},N=l("li",null,"【发行版GNU/Linux】 建议选择Debian或centos，它们在linuxdeploy运行的兼容性更好",-1),B=l("li",null,"【架构】一般都选择arm64（Debian）或aarch64（centos），软件也会自动识别适合你的手机的架构，若特殊情况请搜索关键词 ‘{你手机的cpu}+架构’",-1),w=l("li",null,"【发行版GNU/Linux版本】按需选择，一般选择buster或stable",-1),T=l("li",null,"【安装类型】按需设置，建议选择镜像文件，因为它是一个单镜像文件",-1),$=l("li",null,[e("【安装路径】默认为"),l("code",null,"${EXTERNAL_STORAGE}/linux.img"),e("，一般保持默认即可")],-1),S=l("li",null,"【镜像大小】按需设置，若需搭建网盘服务，建议设置较大大小，可以使文件有足够的空间存储在linux镜像空间内，省去挂载手机存储的麻烦",-1),z=l("li",null,"【文件系统】ext4",-1),P=l("li",null,"【用户名】自行设置，建议设置为 root",-1),O=l("li",null,"【用户密码】自行设置",-1),R=l("li",null,"【特权用户】按需设置，一般保持默认",-1),L=l("li",null,"【本地化】简体中文选择zh_CN.UTF-8，按需设置",-1),V=l("li",null,"【DNS】按需设置，或保持默认",-1),X={id:"初始化",tabindex:"-1"},I=l("ul",null,[l("li",null,"【启用】勾选以启用初始化功能"),l("li",null,"【初始化系统】选择sysv"),l("li",null,"【初始化设置】视情况设置，或保持默认")],-1),U={id:"挂载",tabindex:"-1"},H=l("p",null,"Source：手机目录 Target：Linux目录 使用能够查看到真实路径的文件浏览器，复制需要挂载的目录到挂载点列表，填入第一行即可",-1),j={id:"ssh",tabindex:"-1"},G=l("p",null,"务必勾选启用SSH服务器，SSH设置按需配置",-1),M={id:"声音服务",tabindex:"-1"},J=l("p",null,"按需配置",-1),Y={id:"图形界面",tabindex:"-1"},Z=l("p",null,"按需配置",-1),q=l("hr",null,null,-1),K=l("p",null,[e("配置完成后，返回上一级，点击右上角按钮，点击安装，等待出现"),l("code",null,"<<< deploy"),e("即安装完成。")],-1),Q=l("p",null,[e("点击停止按钮并确定，再点击启动，出现"),l("code",null,"<<< start"),e("即启动成功")],-1),W=l("p",null,"然后即可使用同一局域网下的ssh工具连接 为了防止旧手机的内网ip地址变更，在路由设置页面进行ip与MAC绑定，并把手机wifi连接中的隐私设置相关选项改为 使用设备MAC",-1),ll=l("p",null,"连接后，使用以下命令安装常用工具",-1),el=l("p",null,[l("code",null,"apt install wget vim curl zip -y")],-1),sl=l("code",null,"sudo apt-get --purge remove",-1),ol={id:"安装并配置cloudreve",tabindex:"-1"},tl=l("p",null,"执行以下命令",-1),al=l("p",null,"切换到用户目录",-1),nl=l("p",null,[l("code",null,"cd /opt")],-1),rl=l("p",null,"创建文件夹并切换",-1),cl=l("p",null,[l("code",null,"mkdir cloudreve&&cd cloudreve")],-1),il=l("p",null,"下载cloudreve",-1),pl=l("p",null,[l("code",null,"wget https://github.com/cloudreve/Cloudreve/releases/download/3.4.2/cloudreve_3.4.2_linux_arm64.tar.gz")],-1),dl=l("p",null,"根据需求自行选择下载的版本并替换wget后的链接",-1),ul=l("p",null,[e("解压 "),l("code",null,"tar -zxvf cloudreve_3.4.2_linux_arm64.tar.gz"),e(" 赋予权限 "),l("code",null,"chmod +x ./cloudreve"),e(" 启动 "),l("code",null,"./cloudreve")],-1),hl=l("p",null,"需要注意的是，在配置使用本机存储策略的用户组时，若存储目录在镜像空间内，要确保【初始容量】小于【镜像大小】，否则会无法上传任何文件",-1),_l={id:"通过aria2实现离线下载",tabindex:"-1"},yl=l("p",null,"cloudreve内置了依赖于aria2的离线下载功能，因此需先进行aria2的配置",-1),Fl={id:"安装并配置aria2",tabindex:"-1"},vl=l("code",null,"apt install aria2 -y",-1),gl=l("div",{class:"language-shell vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"cd")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"wget"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"https://github.com/P3TERX/aria2.conf/archive/master.zip")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"unzip"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"master.zip")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#005CC5"}},"cd")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"wget"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"https://github.com/P3TERX/aria2.conf/archive/master.zip")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"unzip"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"master.zip")])])])],-1),El=l("code",null,"mv aria2.conf-master .aria2",-1),ml=l("code",null,"cd .aria2&&vim aria2.conf",-1),fl=l("strong",null,"下载目录",-1),Dl=l("strong",null,"RPC密钥",-1),kl=l("strong",null,"BT监听端口",-1),bl=l("code",null,"./tracker.sh",-1),Cl=l("code",null,"aria2.conf",-1),xl=l("code",null,"bt-tracker",-1),Al=l("p",null,[e("创建aria2.session文件 "),l("code",null,"touch aria2.session")],-1),Nl=l("p",null,[e("测试aria2能否成功启动 "),l("code",null,"aria2c --conf-path=/root/.aria2/aria2.conf"),e(" 第一次启动需要指定配置文件，日后启动只需使用"),l("code",null,"aria2c"),e("即可")],-1),Bl=l("p",null,"若启动成功，关闭即可，接下来进行进程保护配置，方便后续操作",-1),wl={id:"守护cloudreve与aria2进程",tabindex:"-1"},Tl=l("p",null,[e("cloudreve与aria2运行后，若关闭ssh终端，二者也会随之停止运行，因此需要进行进程守护，本文是使用 "),l("code",null,"supervisor")],-1),$l=l("p",null,"安装",-1),Sl=l("div",{class:"language-shell vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"apt"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"python-setuptools"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-y")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"apt"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"supervisor"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-y")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"apt"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"install"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"python-setuptools"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-y")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"apt"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"install"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"supervisor"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-y")])])])],-1),zl={id:"保护cloudreve进程",tabindex:"-1"},Pl=l("p",null,[e("为cloudreve创建配置并打开配置文件 "),l("code",null,"sudo vim /etc/supervisor/conf.d/cloudreve.conf")],-1),Ol=l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"[program:cloudreve]")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"directory"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/opt/cloudreve")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"command"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/opt/cloudreve/cloudreve")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"autostart"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"autorestart"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"stderr_logfile"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/var/log/supervisor/cloudreve.err")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"stdout_logfile"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/var/log/supervisor/cloudreve.log")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"environment"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}},"CODENATION_ENV"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"prod")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"[program:cloudreve]")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"directory"),l("span",{style:{color:"#24292E"}},"=/opt/cloudreve")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"command"),l("span",{style:{color:"#24292E"}},"=/opt/cloudreve/cloudreve")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"autostart"),l("span",{style:{color:"#24292E"}},"=true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"autorestart"),l("span",{style:{color:"#24292E"}},"=true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"stderr_logfile"),l("span",{style:{color:"#24292E"}},"=/var/log/supervisor/cloudreve.err")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"stdout_logfile"),l("span",{style:{color:"#24292E"}},"=/var/log/supervisor/cloudreve.log")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"environment"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#D73A49"}},"CODENATION_ENV"),l("span",{style:{color:"#24292E"}},"=prod")])])])],-1),Rl=l("p",null,"以上内容备注： 程序目录=/opt/cloudreve 运行命令(绝对路径)=/opt/cloudreve/cloudreve 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1),Ll={id:"保护aria2进程",tabindex:"-1"},Vl=l("code",null,"sudo vim /etc/supervisor/conf.d/aria2.conf",-1),Xl=l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"[program:aria2]")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"directory"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/root/.aria2")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"command"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"aria2c --"),l("span",{style:{color:"#F07178"}},"conf-path"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/root/.aria2/aria2.conf")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"autostart"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"autorestart"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"stderr_logfile"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/var/log/supervisor/aria2.err")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"stdout_logfile"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"/var/log/supervisor/aria2.log")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"environment"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}},"CODENATION_ENV"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"prod")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"[program:aria2]")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"directory"),l("span",{style:{color:"#24292E"}},"=/root/.aria2")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"command"),l("span",{style:{color:"#24292E"}},"=aria2c --"),l("span",{style:{color:"#D73A49"}},"conf-path"),l("span",{style:{color:"#24292E"}},"=/root/.aria2/aria2.conf")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"autostart"),l("span",{style:{color:"#24292E"}},"=true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"autorestart"),l("span",{style:{color:"#24292E"}},"=true")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"stderr_logfile"),l("span",{style:{color:"#24292E"}},"=/var/log/supervisor/aria2.err")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"stdout_logfile"),l("span",{style:{color:"#24292E"}},"=/var/log/supervisor/aria2.log")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"environment"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#D73A49"}},"CODENATION_ENV"),l("span",{style:{color:"#24292E"}},"=prod")])])])],-1),Il=l("p",null,"以上内容备注： 程序目录=/root/.aria2 运行命令(绝对路径)=aria2c --conf-path=/root/.aria2/aria2.conf 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1),Ul=l("hr",null,null,-1),Hl=l("p",null,[e("启动supervisor "),l("code",null,"supervisord -c /etc/supervisor/supervisord.conf"),e(" 至此便完成了进程守护配置 如需管理supervisor内进程，参考以下指令：")],-1),jl=l("div",{class:"language-shell vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"supervisorctl"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"start"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"cloudreve"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#545454","font-style":"italic"}},"#启动    ")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"supervisorctl"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"stop"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"cloudreve"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#545454","font-style":"italic"}},"#停止    ")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"supervisorctl"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"status"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"cloudreve"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#545454","font-style":"italic"}},"#状态")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"sudo"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"supervisorctl"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"start"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"cloudreve"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6A737D"}},"#启动    ")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"sudo"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"supervisorctl"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"stop"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"cloudreve"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6A737D"}},"#停止    ")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"sudo"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"supervisorctl"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"status"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"cloudreve"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6A737D"}},"#状态")])])])],-1),Gl=l("p",null,"附.网页管理supervisor进程配置： 在supervisor配置文件中（/etc/supervisor/supervisord.conf），添加以下内容",-1),Ml=l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"[inet_http_server]")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"port"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#EEFFFF"}},"127.0.0.1:8888")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"username"),l("span",{style:{color:"#89DDFF"}},"=")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"password"),l("span",{style:{color:"#89DDFF"}},"=")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"[inet_http_server]")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"port"),l("span",{style:{color:"#24292E"}},"=127.0.0.1:8888")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"username"),l("span",{style:{color:"#24292E"}},"=")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"password"),l("span",{style:{color:"#24292E"}},"=")])])])],-1),Jl=l("p",null,"其中port、username、password参数可自行设置，若需外部访问，可将port设置为0.0.0.0:8888",-1),Yl={id:"配置开机自启动",tabindex:"-1"},Zl=l("p",null,"若在linuxdeploy中，初始化系统选择了sysv，则无需额外配置即可自启动supervisor及其中的程序 若使用run-parts初始化，需额外配置，自行查询不再赘述",-1),ql={id:"配置cloudreve离线下载功能",tabindex:"-1"},Kl=l("p",null,[e("登录cloudreve管理页面，选择 离线下载节点 ，修改 主机（本机） 节点 "),l("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103835.png",alt:""})],-1),Ql=l("ol",null,[l("li",null,"启用离线下载"),l("li",null,"参考配置"),l("li",{prot:""},"RPC服务地址，由于cloudreve与aria2运行在同一台服务器（旧手机）上，故填写127.0.0.1:")],-1),Wl=l("p",null,[l("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103937.png",alt:""}),e(" 4. RPC令牌，与 Aria2 配置文件中rpc-secret保持一致 5. 临时下载目录，填写绝对路径，并保证cloudreve具有此目录的权限 6. 额外参数配置，一般保持默认")],-1),le=l("p",null,"完成配置后，点击下一步，修改杂项信息，再点击下一步，即可保存该节点配置",-1),ee=l("p",null,[e("然后点击用户组，编辑用户组配置，允许进行离线下载 "),l("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125104705.png",alt:""})],-1),se=l("hr",null,null,-1),oe=l("p",null,"至此，所有配置完成，可在同一局域网下，打开cloudreve页面测试是否成功实现了个人云盘与离线下载功能",-1);function te(a,ae,ne,re,c,ce){const o=v,i=p;return y(),_(i,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":s(()=>[E,F(" more "),l("h2",m,[e("准备 "),t(o,{class:"header-anchor",href:"#准备","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),f,l("h2",D,[e("安装linuxdeploy并配置 "),t(o,{class:"header-anchor",href:"#安装linuxdeploy并配置","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("p",null,[e("下载"),t(o,{href:"https://github.com/meefik/linuxdeploy/releases",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("linuxdeploy")]),_:1}),e("，安装到旧手机")]),k,b,C,l("h2",x,[e("配置 "),t(o,{class:"header-anchor",href:"#配置","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("h3",A,[e("引导设置 "),t(o,{class:"header-anchor",href:"#引导设置","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("ul",null,[N,B,w,l("li",null,[e("【源地址】建议改为以下地址："),t(o,{href:"http://mirrors.163.com/debian",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("http://mirrors.163.com/debian")]),_:1}),e(" ，保持默认亦可")]),T,$,S,z,P,O,R,L,V]),l("h3",X,[e("初始化 "),t(o,{class:"header-anchor",href:"#初始化","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),I,l("h3",U,[e("挂载 "),t(o,{class:"header-anchor",href:"#挂载","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),H,l("h3",j,[e("SSH "),t(o,{class:"header-anchor",href:"#ssh","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),G,l("h3",M,[e("声音服务 "),t(o,{class:"header-anchor",href:"#声音服务","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),J,l("h3",Y,[e("图形界面 "),t(o,{class:"header-anchor",href:"#图形界面","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),Z,q,K,Q,W,ll,el,l("p",null,[e("附： 卸载命令 "),sl,e(" xshell工具家庭/学校版下载连接 "),t(o,{href:"https://www.xshell.com/zh/free-for-home-school/",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("https://www.xshell.com/zh/free-for-home-school/")]),_:1})]),l("h2",ol,[e("安装并配置cloudreve "),t(o,{class:"header-anchor",href:"#安装并配置cloudreve","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("p",null,[e("项目发行地址："),t(o,{href:"https://github.com/cloudreve/Cloudreve/releases",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("cloudreve")]),_:1}),e(" 截止到撰写本文（2022.01），最新版本为3.4.2")]),tl,al,nl,rl,cl,il,pl,dl,ul,l("p",null,[e("在终端中会给出初始管理员账号与密码，使用该账号登录"),t(o,{href:"http://%7B%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E7%BD%91ip%7D:%7Bport(default",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("http://{服务器内网ip}:{port(default")]),_:1}),e(" is 5212)} 若无法访问，考虑配置防火墙开放端口")]),l("p",null,[e("进入cloudreve后，点击右上角头像，进入管理面板，即可进行相关设置，具体参见"),t(o,{href:"https://docs.cloudreve.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("cloudreve官方文档")]),_:1})]),hl,l("h2",_l,[e("通过aria2实现离线下载 "),t(o,{class:"header-anchor",href:"#通过aria2实现离线下载","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),yl,l("h3",Fl,[e("安装并配置aria2 "),t(o,{class:"header-anchor",href:"#安装并配置aria2","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("p",null,[e("安装 "),vl,e(" 下载由"),t(o,{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("P3TERX")]),_:1}),e("提供的aria2配置文件（亦可选择其他配置或参考"),t(o,{href:"https://aria2.github.io/",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("aria2官方文档")]),_:1}),e("自行创建）")]),gl,l("p",null,[e("将解压出的文件夹重命名为.aria2 "),El,e(" 修改aria2配置文件 "),ml,t(o,{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("P3TERX")]),_:1}),e("的配置文件包含了中文注释，根据注释按需修改即可，一般需要改动的是"),fl,e("、"),Dl,e("与"),kl,e("，其他保持默认即可")]),l("p",null,[e("配置修改完成后，在.aria2目录内，执行"),bl,e("即可更新tracker 若更新失败，可进行手动更新，参考以下tracker列表 "),t(o,{href:"https://trackerslist.com/all_aria2.txt",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("https://trackerslist.com/all_aria2.txt")]),_:1}),e(" 将列表内容复制到"),Cl,e("中的"),xl,e("参数后即可")]),Al,Nl,Bl,l("h3",wl,[e("守护cloudreve与aria2进程 "),t(o,{class:"header-anchor",href:"#守护cloudreve与aria2进程","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),Tl,$l,Sl,l("h4",zl,[e("保护cloudreve进程 "),t(o,{class:"header-anchor",href:"#保护cloudreve进程","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),Pl,l("p",null,[e("将以下内容按需修改后，写入cloudreve的supervisor配置文件，具体参见"),t(o,{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("supervisor官方文档")]),_:1})]),Ol,Rl,l("h4",Ll,[e("保护aria2进程 "),t(o,{class:"header-anchor",href:"#保护aria2进程","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),l("p",null,[e("与上同理，但为保证叙述清楚以及按需查阅，分别具体叙述 为aria2创建配置并打开配置文件 "),Vl,e(" 将以下内容按需修改后，写入aria2的supervisor配置文件，具体参见"),t(o,{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[e("supervisor官方文档")]),_:1})]),Xl,Il,Ul,Hl,jl,Gl,Ml,Jl,l("h3",Yl,[e("配置开机自启动 "),t(o,{class:"header-anchor",href:"#配置开机自启动","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),Zl,l("h2",ql,[e("配置cloudreve离线下载功能 "),t(o,{class:"header-anchor",href:"#配置cloudreve离线下载功能","aria-hidden":"true"},{default:s(()=>[e("#")]),_:1})]),Kl,Ql,Wl,le,ee,se,oe]),"main-header":s(()=>[n(a.$slots,"main-header")]),"main-header-after":s(()=>[n(a.$slots,"main-header-after")]),"main-nav":s(()=>[n(a.$slots,"main-nav")]),"main-content":s(()=>[n(a.$slots,"main-content")]),"main-content-after":s(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[n(a.$slots,"main-nav-after")]),comment:s(()=>[n(a.$slots,"comment")]),footer:s(()=>[n(a.$slots,"footer")]),aside:s(()=>[n(a.$slots,"aside")]),"aside-custom":s(()=>[n(a.$slots,"aside-custom")]),default:s(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Fe=d(g,[["render",te]]);export{ye as __pageData,Fe as default};
