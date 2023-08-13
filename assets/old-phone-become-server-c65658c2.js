import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-396c859f.js";import{_ as u,u as p,p as h,c as _,w as s,o as v,a as y,b as e,d as l,e as t,r as n,f}from"./app-262cb9cc.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-638d7401.js";import"./YunCard.vue_vue_type_script_setup_true_lang-be60b976.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-42288653.js";const _l=JSON.parse('{"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载","description":"","frontmatter":{"categories":"小技术","date":"2022-01-24T19:34:31.000Z","layout":"post","tags":["linux","DIY"],"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"安装linuxdeploy并配置","slug":"安装linuxdeploy并配置","link":"#安装linuxdeploy并配置","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"引导设置","slug":"引导设置","link":"#引导设置","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"声音服务","slug":"声音服务","link":"#声音服务","children":[]},{"level":3,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]}]},{"level":2,"title":"安装并配置cloudreve","slug":"安装并配置cloudreve","link":"#安装并配置cloudreve","children":[]},{"level":2,"title":"通过aria2实现离线下载","slug":"通过aria2实现离线下载","link":"#通过aria2实现离线下载","children":[{"level":3,"title":"安装并配置aria2","slug":"安装并配置aria2","link":"#安装并配置aria2","children":[]},{"level":3,"title":"守护cloudreve与aria2进程","slug":"守护cloudreve与aria2进程","link":"#守护cloudreve与aria2进程","children":[]},{"level":3,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]}]},{"level":2,"title":"配置cloudreve离线下载功能","slug":"配置cloudreve离线下载功能","link":"#配置cloudreve离线下载功能","children":[]}],"relativePath":"pages/posts/old-phone-become-server.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/old-phone-become-server.md","lastUpdated":1691921469000}'),a=JSON.parse('{"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载","description":"","frontmatter":{"categories":"小技术","date":"2022-01-24T19:34:31.000Z","layout":"post","tags":["linux","DIY"],"title":"将旧手机通过Linuxdeploy改造为linux服务器|搭建cloudreve个人网盘|实现离线下载"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"安装linuxdeploy并配置","slug":"安装linuxdeploy并配置","link":"#安装linuxdeploy并配置","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"引导设置","slug":"引导设置","link":"#引导设置","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"声音服务","slug":"声音服务","link":"#声音服务","children":[]},{"level":3,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]}]},{"level":2,"title":"安装并配置cloudreve","slug":"安装并配置cloudreve","link":"#安装并配置cloudreve","children":[]},{"level":2,"title":"通过aria2实现离线下载","slug":"通过aria2实现离线下载","link":"#通过aria2实现离线下载","children":[{"level":3,"title":"安装并配置aria2","slug":"安装并配置aria2","link":"#安装并配置aria2","children":[]},{"level":3,"title":"守护cloudreve与aria2进程","slug":"守护cloudreve与aria2进程","link":"#守护cloudreve与aria2进程","children":[]},{"level":3,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]}]},{"level":2,"title":"配置cloudreve离线下载功能","slug":"配置cloudreve离线下载功能","link":"#配置cloudreve离线下载功能","children":[]}],"relativePath":"pages/posts/old-phone-become-server.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/old-phone-become-server.md","lastUpdated":1691921469000}'),g={name:"pages/posts/old-phone-become-server.md",data(){return{data:a,frontmatter:a.frontmatter,$frontmatter:a.frontmatter}},setup(){const r=p();r.meta.frontmatter=Object.assign(r.meta.frontmatter,a.frontmatter),h("pageData",a)}},m=e("p",null,"最近因疫情闲在家，就折腾起了自己的旧手机",-1),D={id:"准备",tabindex:"-1"},C=e("ol",null,[e("li",null,[l("一部已经获得root权限的手机 "),e("s",null,"若是ov华等无法获取root的手机，建议拿去换盆"),l(" ，本文以redmi note7 pro为例，已刷机安卓11类原生")]),e("li",null,"一台能够使用ssh终端的设备")],-1),A={id:"安装linuxdeploy并配置",tabindex:"-1"},F=e("blockquote",null,[e("p",null,"请确保安装的linuxdeploy版本≥2.0，否则需要首先安装busybox。而2.0以上的linuxdeploy内置了busybox")],-1),b=e("p",null,"打开linuxdeploy软件，点击左上角按钮，选择设置，勾选【锁定wi-fi】与【CPU唤醒】，其他选项按需配置，亦可保持默认",-1),k=e("p",null,"回到上一级页面，点击右下角按钮，进行以下配置：",-1),x={id:"配置",tabindex:"-1"},E={id:"引导设置",tabindex:"-1"},B=e("li",null,"【发行版GNU/Linux】 建议选择Debian或centos，它们在linuxdeploy运行的兼容性更好",-1),w=e("li",null,"【架构】一般都选择arm64（Debian）或aarch64（centos），软件也会自动识别适合你的手机的架构，若特殊情况请搜索关键词 ‘{你手机的cpu}+架构’",-1),$=e("li",null,"【发行版GNU/Linux版本】按需选择，一般选择buster或stable",-1),N=e("li",null,"【安装类型】按需设置，建议选择镜像文件，因为它是一个单镜像文件",-1),S=e("li",null,[l("【安装路径】默认为"),e("code",null,"${EXTERNAL_STORAGE}/linux.img"),l("，一般保持默认即可")],-1),T=e("li",null,"【镜像大小】按需设置，若需搭建网盘服务，建议设置较大大小，可以使文件有足够的空间存储在linux镜像空间内，省去挂载手机存储的麻烦",-1),P=e("li",null,"【文件系统】ext4",-1),R=e("li",null,"【用户名】自行设置，建议设置为 root",-1),z=e("li",null,"【用户密码】自行设置",-1),L=e("li",null,"【特权用户】按需设置，一般保持默认",-1),O=e("li",null,"【本地化】简体中文选择zh_CN.UTF-8，按需设置",-1),V=e("li",null,"【DNS】按需设置，或保持默认",-1),U={id:"初始化",tabindex:"-1"},X=e("ul",null,[e("li",null,"【启用】勾选以启用初始化功能"),e("li",null,"【初始化系统】选择sysv"),e("li",null,"【初始化设置】视情况设置，或保持默认")],-1),H={id:"挂载",tabindex:"-1"},j=e("p",null,"Source：手机目录 Target：Linux目录 使用能够查看到真实路径的文件浏览器，复制需要挂载的目录到挂载点列表，填入第一行即可",-1),I={id:"ssh",tabindex:"-1"},G=e("p",null,"务必勾选启用SSH服务器，SSH设置按需配置",-1),M={id:"声音服务",tabindex:"-1"},J=e("p",null,"按需配置",-1),Y={id:"图形界面",tabindex:"-1"},Z=e("p",null,"按需配置",-1),q=e("hr",null,null,-1),K=e("p",null,[l("配置完成后，返回上一级，点击右上角按钮，点击安装，等待出现"),e("code",null,"<<< deploy"),l("即安装完成。")],-1),Q=e("p",null,[l("点击停止按钮并确定，再点击启动，出现"),e("code",null,"<<< start"),l("即启动成功")],-1),W=e("p",null,"然后即可使用同一局域网下的ssh工具连接 为了防止旧手机的内网ip地址变更，在路由设置页面进行ip与MAC绑定，并把手机wifi连接中的隐私设置相关选项改为 使用设备MAC",-1),ee=e("p",null,"连接后，使用以下命令安装常用工具",-1),le=e("p",null,[e("code",null,"apt install wget vim curl zip -y")],-1),se=e("code",null,"sudo apt-get --purge remove",-1),oe={id:"安装并配置cloudreve",tabindex:"-1"},te=e("p",null,"执行以下命令",-1),re=e("p",null,"切换到用户目录",-1),ne=e("p",null,[e("code",null,"cd /opt")],-1),ae=e("p",null,"创建文件夹并切换",-1),ie=e("p",null,[e("code",null,"mkdir cloudreve&&cd cloudreve")],-1),ce=e("p",null,"下载cloudreve",-1),de=e("p",null,[e("code",null,"wget https://github.com/cloudreve/Cloudreve/releases/download/3.4.2/cloudreve_3.4.2_linux_arm64.tar.gz")],-1),ue=e("p",null,"根据需求自行选择下载的版本并替换wget后的链接",-1),pe=e("p",null,[l("解压 "),e("code",null,"tar -zxvf cloudreve_3.4.2_linux_arm64.tar.gz"),l(" 赋予权限 "),e("code",null,"chmod +x ./cloudreve"),l(" 启动 "),e("code",null,"./cloudreve")],-1),he=e("p",null,"需要注意的是，在配置使用本机存储策略的用户组时，若存储目录在镜像空间内，要确保【初始容量】小于【镜像大小】，否则会无法上传任何文件",-1),_e={id:"通过aria2实现离线下载",tabindex:"-1"},ve=e("p",null,"cloudreve内置了依赖于aria2的离线下载功能，因此需先进行aria2的配置",-1),ye={id:"安装并配置aria2",tabindex:"-1"},fe=e("code",null,"apt install aria2 -y",-1),ge=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#82AAFF"}},"cd")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"wget"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"https://github.com/P3TERX/aria2.conf/archive/master.zip")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"unzip"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"master.zip")])])])],-1),me=e("code",null,"mv aria2.conf-master .aria2",-1),De=e("code",null,"cd .aria2&&vim aria2.conf",-1),Ce=e("strong",null,"下载目录",-1),Ae=e("strong",null,"RPC密钥",-1),Fe=e("strong",null,"BT监听端口",-1),be=e("code",null,"./tracker.sh",-1),ke=e("code",null,"aria2.conf",-1),xe=e("code",null,"bt-tracker",-1),Ee=e("p",null,[l("创建aria2.session文件 "),e("code",null,"touch aria2.session")],-1),Be=e("p",null,[l("测试aria2能否成功启动 "),e("code",null,"aria2c --conf-path=/root/.aria2/aria2.conf"),l(" 第一次启动需要指定配置文件，日后启动只需使用"),e("code",null,"aria2c"),l("即可")],-1),we=e("p",null,"若启动成功，关闭即可，接下来进行进程保护配置，方便后续操作",-1),$e={id:"守护cloudreve与aria2进程",tabindex:"-1"},Ne=e("p",null,[l("cloudreve与aria2运行后，若关闭ssh终端，二者也会随之停止运行，因此需要进行进程守护，本文是使用 "),e("code",null,"supervisor")],-1),Se=e("p",null,"安装",-1),Te=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"apt"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"install"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"python-setuptools"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-y")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"apt"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"install"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"supervisor"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"-y")])])])],-1),Pe={id:"保护cloudreve进程",tabindex:"-1"},Re=e("p",null,[l("为cloudreve创建配置并打开配置文件 "),e("code",null,"sudo vim /etc/supervisor/conf.d/cloudreve.conf")],-1),ze=e("div",{class:"language-ini"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"[program:cloudreve]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"directory"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/opt/cloudreve")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"command"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/opt/cloudreve/cloudreve")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"autostart"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"true")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"autorestart"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"true")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"stderr_logfile"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/var/log/supervisor/cloudreve.err")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"stdout_logfile"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/var/log/supervisor/cloudreve.log")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"environment"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}},"CODENATION_ENV"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"prod")])])])],-1),Le=e("p",null,"以上内容备注： 程序目录=/opt/cloudreve 运行命令(绝对路径)=/opt/cloudreve/cloudreve 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1),Oe={id:"保护aria2进程",tabindex:"-1"},Ve=e("code",null,"sudo vim /etc/supervisor/conf.d/aria2.conf",-1),Ue=e("div",{class:"language-ini"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"[program:aria2]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"directory"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/root/.aria2")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"command"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"aria2c --"),e("span",{style:{color:"#F07178"}},"conf-path"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/root/.aria2/aria2.conf")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"autostart"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"true")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"autorestart"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"true")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"stderr_logfile"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/var/log/supervisor/aria2.err")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"stdout_logfile"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"/var/log/supervisor/aria2.log")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"environment"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#F07178"}},"CODENATION_ENV"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"prod")])])])],-1),Xe=e("p",null,"以上内容备注： 程序目录=/root/.aria2 运行命令(绝对路径)=aria2c --conf-path=/root/.aria2/aria2.conf 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1),He=e("hr",null,null,-1),je=e("p",null,[l("启动supervisor "),e("code",null,"supervisord -c /etc/supervisor/supervisord.conf"),l(" 至此便完成了进程守护配置 如需管理supervisor内进程，参考以下指令：")],-1),Ie=e("div",{class:"language-shell"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"sudo"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"supervisorctl"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"start"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"cloudreve"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#启动    ")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"sudo"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"supervisorctl"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"stop"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"cloudreve"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#停止    ")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"sudo"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"supervisorctl"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"status"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"cloudreve"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#状态")])])])],-1),Ge=e("p",null,"附.网页管理supervisor进程配置： 在supervisor配置文件中（/etc/supervisor/supervisord.conf），添加以下内容",-1),Me=e("div",{class:"language-ini"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"[inet_http_server]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"port"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#A6ACCD"}},"127.0.0.1:8888")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"username"),e("span",{style:{color:"#89DDFF"}},"=")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"password"),e("span",{style:{color:"#89DDFF"}},"=")])])])],-1),Je=e("p",null,"其中port、username、password参数可自行设置，若需外部访问，可将port设置为0.0.0.0:8888",-1),Ye={id:"配置开机自启动",tabindex:"-1"},Ze=e("p",null,"若在linuxdeploy中，初始化系统选择了sysv，则无需额外配置即可自启动supervisor及其中的程序 若使用run-parts初始化，需额外配置，自行查询不再赘述",-1),qe={id:"配置cloudreve离线下载功能",tabindex:"-1"},Ke=e("p",null,[l("登录cloudreve管理页面，选择 离线下载节点 ，修改 主机（本机） 节点 "),e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103835.png",alt:""})],-1),Qe=e("ol",null,[e("li",null,"启用离线下载"),e("li",null,"参考配置"),e("li",{prot:""},"RPC服务地址，由于cloudreve与aria2运行在同一台服务器（旧手机）上，故填写127.0.0.1:")],-1),We=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103937.png",alt:""}),l(" 4. RPC令牌，与 Aria2 配置文件中rpc-secret保持一致 5. 临时下载目录，填写绝对路径，并保证cloudreve具有此目录的权限 6. 额外参数配置，一般保持默认")],-1),el=e("p",null,"完成配置后，点击下一步，修改杂项信息，再点击下一步，即可保存该节点配置",-1),ll=e("p",null,[l("然后点击用户组，编辑用户组配置，允许进行离线下载 "),e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125104705.png",alt:""})],-1),sl=e("hr",null,null,-1),ol=e("p",null,"至此，所有配置完成，可在同一局域网下，打开cloudreve页面测试是否成功实现了个人云盘与离线下载功能",-1);function tl(r,rl,nl,al,i,il){const o=f,c=d;return v(),_(c,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":s(()=>[m,y(" more "),e("h2",D,[l("准备 "),t(o,{class:"header-anchor",href:"#准备","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),C,e("h2",A,[l("安装linuxdeploy并配置 "),t(o,{class:"header-anchor",href:"#安装linuxdeploy并配置","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("p",null,[l("下载"),t(o,{href:"https://github.com/meefik/linuxdeploy/releases",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("linuxdeploy")]),_:1}),l("，安装到旧手机")]),F,b,k,e("h2",x,[l("配置 "),t(o,{class:"header-anchor",href:"#配置","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("h3",E,[l("引导设置 "),t(o,{class:"header-anchor",href:"#引导设置","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("ul",null,[B,w,$,e("li",null,[l("【源地址】建议改为以下地址："),t(o,{href:"http://mirrors.163.com/debian",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("http://mirrors.163.com/debian")]),_:1}),l(" ，保持默认亦可")]),N,S,T,P,R,z,L,O,V]),e("h3",U,[l("初始化 "),t(o,{class:"header-anchor",href:"#初始化","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),X,e("h3",H,[l("挂载 "),t(o,{class:"header-anchor",href:"#挂载","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),j,e("h3",I,[l("SSH "),t(o,{class:"header-anchor",href:"#ssh","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),G,e("h3",M,[l("声音服务 "),t(o,{class:"header-anchor",href:"#声音服务","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),J,e("h3",Y,[l("图形界面 "),t(o,{class:"header-anchor",href:"#图形界面","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),Z,q,K,Q,W,ee,le,e("p",null,[l("附： 卸载命令 "),se,l(" xshell工具家庭/学校版下载连接 "),t(o,{href:"https://www.xshell.com/zh/free-for-home-school/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("https://www.xshell.com/zh/free-for-home-school/")]),_:1})]),e("h2",oe,[l("安装并配置cloudreve "),t(o,{class:"header-anchor",href:"#安装并配置cloudreve","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("p",null,[l("项目发行地址："),t(o,{href:"https://github.com/cloudreve/Cloudreve/releases",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("cloudreve")]),_:1}),l(" 截止到撰写本文（2022.01），最新版本为3.4.2")]),te,re,ne,ae,ie,ce,de,ue,pe,e("p",null,[l("在终端中会给出初始管理员账号与密码，使用该账号登录"),t(o,{href:"http://%7B%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E7%BD%91ip%7D:%7Bport(default",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("http://{服务器内网ip}:{port(default")]),_:1}),l(" is 5212)} 若无法访问，考虑配置防火墙开放端口")]),e("p",null,[l("进入cloudreve后，点击右上角头像，进入管理面板，即可进行相关设置，具体参见"),t(o,{href:"https://docs.cloudreve.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("cloudreve官方文档")]),_:1})]),he,e("h2",_e,[l("通过aria2实现离线下载 "),t(o,{class:"header-anchor",href:"#通过aria2实现离线下载","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),ve,e("h3",ye,[l("安装并配置aria2 "),t(o,{class:"header-anchor",href:"#安装并配置aria2","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("p",null,[l("安装 "),fe,l(" 下载由"),t(o,{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("P3TERX")]),_:1}),l("提供的aria2配置文件（亦可选择其他配置或参考"),t(o,{href:"https://aria2.github.io/",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("aria2官方文档")]),_:1}),l("自行创建）")]),ge,e("p",null,[l("将解压出的文件夹重命名为.aria2 "),me,l(" 修改aria2配置文件 "),De,t(o,{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("P3TERX")]),_:1}),l("的配置文件包含了中文注释，根据注释按需修改即可，一般需要改动的是"),Ce,l("、"),Ae,l("与"),Fe,l("，其他保持默认即可")]),e("p",null,[l("配置修改完成后，在.aria2目录内，执行"),be,l("即可更新tracker 若更新失败，可进行手动更新，参考以下tracker列表 "),t(o,{href:"https://trackerslist.com/all_aria2.txt",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("https://trackerslist.com/all_aria2.txt")]),_:1}),l(" 将列表内容复制到"),ke,l("中的"),xe,l("参数后即可")]),Ee,Be,we,e("h3",$e,[l("守护cloudreve与aria2进程 "),t(o,{class:"header-anchor",href:"#守护cloudreve与aria2进程","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),Ne,Se,Te,e("h4",Pe,[l("保护cloudreve进程 "),t(o,{class:"header-anchor",href:"#保护cloudreve进程","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),Re,e("p",null,[l("将以下内容按需修改后，写入cloudreve的supervisor配置文件，具体参见"),t(o,{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("supervisor官方文档")]),_:1})]),ze,Le,e("h4",Oe,[l("保护aria2进程 "),t(o,{class:"header-anchor",href:"#保护aria2进程","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("p",null,[l("与上同理，但为保证叙述清楚以及按需查阅，分别具体叙述 为aria2创建配置并打开配置文件 "),Ve,l(" 将以下内容按需修改后，写入aria2的supervisor配置文件，具体参见"),t(o,{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("supervisor官方文档")]),_:1})]),Ue,Xe,He,je,Ie,Ge,Me,Je,e("h3",Ye,[l("配置开机自启动 "),t(o,{class:"header-anchor",href:"#配置开机自启动","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),Ze,e("h2",qe,[l("配置cloudreve离线下载功能 "),t(o,{class:"header-anchor",href:"#配置cloudreve离线下载功能","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),Ke,Qe,We,el,ll,sl,ol]),"main-header":s(()=>[n(r.$slots,"main-header")]),"main-header-after":s(()=>[n(r.$slots,"main-header-after")]),"main-nav":s(()=>[n(r.$slots,"main-nav")]),"main-content":s(()=>[n(r.$slots,"main-content")]),"main-content-after":s(()=>[n(r.$slots,"main-content-after")]),"main-nav-before":s(()=>[n(r.$slots,"main-nav-before")]),"main-nav-after":s(()=>[n(r.$slots,"main-nav-after")]),comment:s(()=>[n(r.$slots,"comment")]),footer:s(()=>[n(r.$slots,"footer")]),aside:s(()=>[n(r.$slots,"aside")]),"aside-custom":s(()=>[n(r.$slots,"aside-custom")]),default:s(()=>[n(r.$slots,"default")]),_:3},8,["frontmatter","data"])}const vl=u(g,[["render",tl]]);export{_l as __pageData,vl as default};
