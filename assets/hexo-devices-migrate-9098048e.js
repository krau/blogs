import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5e98b21a.js";import{_ as m,u as p,p as d,c as u,w as a,o as c,a as g,r as o,b as e,d as n}from"./app-5d529213.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-02cc783c.js";import"./YunCard.vue_vue_type_script_setup_true_lang-5be1cd61.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-a4e979ed.js";import"./index-463abdac.js";const V=JSON.parse('{"title":"hexo设备迁移","description":"","frontmatter":{"categories":"小技术","date":"2020-07-15T11:06:26.000Z","updated":null,"layout":"post","tags":["hexo","博客"],"title":"hexo设备迁移","cover":"https://api.luvying.com/acgimg"},"headers":[],"relativePath":"pages/posts/hexo-devices-migrate.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/hexo-devices-migrate.md","lastUpdated":1695001611000}'),s=JSON.parse('{"title":"hexo设备迁移","description":"","frontmatter":{"categories":"小技术","date":"2020-07-15T11:06:26.000Z","updated":null,"layout":"post","tags":["hexo","博客"],"title":"hexo设备迁移","cover":"https://api.luvying.com/acgimg"},"headers":[],"relativePath":"pages/posts/hexo-devices-migrate.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/hexo-devices-migrate.md","lastUpdated":1695001611000}'),h={name:"pages/posts/hexo-devices-migrate.md",data(){return{data:s,frontmatter:s.frontmatter,$frontmatter:s.frontmatter}},setup(){const t=p();t.meta.frontmatter=Object.assign(t.meta.frontmatter,s.frontmatter),d("pageData",s)}},f=e("ol",null,[e("li",null,[e("p",null,"备份整个blog文件夹（除 node_modules 文件夹以及一些临时文件）")]),e("li",null,[e("p",null,"在新设备上安装 node.js 、npm、git")]),e("li",null,[e("p",null,"使用npm全局安装hexo")]),e("li",null,[e("p",null,[n("在博客文件夹下执行"),e("code",null,"npm install"),n("安装依赖")])]),e("li",null,[e("p",null,"配置ssh密钥"),e("p",null,[e("code",null,'ssh-keygen -t rsa -C "example@email.com"'),n(" 生成密钥后复制内容粘贴到代码托管网站的个人密钥设置中 github>settings>SSH and GPG keys>New SSH key")])]),e("li",null,[e("p",null,"设置git全局身份"),e("p",null,[e("code",null,'git config --global user.name "your user name"')]),e("p",null,[e("code",null,'git config --global user.email "example@email.com"')])]),e("li",null,[e("p",null,"定位到备份下来的blog文件夹，执行hexo d部署尝试，可能会遇到以下错误提示："),e("p",null,"“Warning: Permanently added the RSA host key for IP address 'i.p.i.p' to the list of known hosts.”"),e("p",null,"并会询问是否仍要建立连接（yes/no） yes 就可以了")])],-1);function v(t,y,$,x,l,b){const r=i;return c(),u(r,{frontmatter:l.frontmatter,data:l.data},{"main-content-md":a(()=>[g(" more "),f]),"main-header":a(()=>[o(t.$slots,"main-header")]),"main-header-after":a(()=>[o(t.$slots,"main-header-after")]),"main-nav":a(()=>[o(t.$slots,"main-nav")]),"main-content":a(()=>[o(t.$slots,"main-content")]),"main-content-after":a(()=>[o(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[o(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[o(t.$slots,"main-nav-after")]),comment:a(()=>[o(t.$slots,"comment")]),footer:a(()=>[o(t.$slots,"footer")]),aside:a(()=>[o(t.$slots,"aside")]),"aside-custom":a(()=>[o(t.$slots,"aside-custom")]),default:a(()=>[o(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const B=m(h,[["render",v]]);export{V as __pageData,B as default};
