import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c36ffcef.js";import{_ as d,c as h,w as l,o as p,g as e,V as t,q as n,h as f,r as s,X as m,p as _}from"./app-1f4046ef.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-88b8bb6a.js";import"./YunCard.vue_vue_type_style_index_0_lang-ccf54dbb.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-ce547152.js";const R=JSON.parse('{"title":"使用Kotodama更优雅地管理waline评论系统后台","description":"","frontmatter":{"categories":"小技术","date":"2022-11-13T12:37:28.000Z","layout":"post","tags":["waline","博客"],"title":"使用Kotodama更优雅地管理waline评论系统后台","updated":"2022-11-13T12:37:28.000Z"},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[]},{"level":2,"title":"自行部署","slug":"自行部署","link":"#自行部署","children":[{"level":3,"title":"自行构建","slug":"自行构建","link":"#自行构建","children":[]},{"level":3,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Waline 403 Authorization 错误","slug":"waline-403-authorization-错误","link":"#waline-403-authorization-错误","children":[]}]}],"relativePath":"pages/posts/kotodama.md","path":"/home/runner/work/blogs-sources/blogs-sources/pages/posts/kotodama.md","lastUpdated":1675666848000}'),r=JSON.parse('{"title":"使用Kotodama更优雅地管理waline评论系统后台","description":"","frontmatter":{"categories":"小技术","date":"2022-11-13T12:37:28.000Z","layout":"post","tags":["waline","博客"],"title":"使用Kotodama更优雅地管理waline评论系统后台","updated":"2022-11-13T12:37:28.000Z"},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[]},{"level":2,"title":"自行部署","slug":"自行部署","link":"#自行部署","children":[{"level":3,"title":"自行构建","slug":"自行构建","link":"#自行构建","children":[]},{"level":3,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Waline 403 Authorization 错误","slug":"waline-403-authorization-错误","link":"#waline-403-authorization-错误","children":[]}]}],"relativePath":"pages/posts/kotodama.md","path":"/home/runner/work/blogs-sources/blogs-sources/pages/posts/kotodama.md","lastUpdated":1675666848000}'),g={name:"pages/posts/kotodama.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){_("pageData",r)}},k=e("p",null,"不少博主已经在用waline作为评论系统了吧，但是众所周知，waline的后台管理属实不能说是好用。无论是界面构建还是交互设计都有点复古陈旧的感觉。",-1),b=e("p",null,"以下是官方文档",-1),v=e("hr",null,null,-1),y=e("p",null,[t("kotodama 是一个纯静态的站点，您可以 fork 其自行部署，也可以直接使用已部署的 "),e("code",null,"kotodama.yunyoujun.cn"),t(" | "),e("code",null,"kotodama.vercel.app"),t(" 站点。")],-1),w=e("blockquote",null,[e("p",null,[e("code",null,"kotodama.yunyoujun.cn"),t(" 纯静态托管于 GitHub Pages，代码将始终保持开源，不会也无法获取您的用户名密码，请放心使用。")])],-1),A={id:"features",tabindex:"-1"},C=e("s",null,"未来可能适配更多评论系统，假的",-1),D={id:"waline",tabindex:"-1"},$=e("ul",null,[e("li",null,"已实现基础的登录、评论预览、翻页、删除功能"),e("li",null,"Todo: 编辑评论、细节优化、GitHub 登录、批量删除、审核")],-1),F={id:"自行部署",tabindex:"-1"},B=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# fork 或直接 clone 本项目")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"git"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"clone"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"https://github.com/YunYouJun/kotodama")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"cp"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},".env.example"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},".env")]),t(`
`),e("span",{class:"line"})])])],-1),E=e("p",null,[t("配置 "),e("code",null,".env"),t(" 中的 "),e("code",null,"VITE_API_BASE_URL"),t(" 环境变量为您的 Waline 后台地址，例如 "),e("code",null,"https://waline.xxx.xxx"),t("。")],-1),W={id:"自行构建",tabindex:"-1"},j=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 安装依赖")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"npm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"install")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# 构建产物")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"npm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"run"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"build")]),t(`
`),e("span",{class:"line"})])])],-1),q=e("p",null,[t("将 "),e("code",null,"dist"),t(" 下的静态文件托管于您的服务器。")],-1),x={id:"github-actions",tabindex:"-1"},z=e("p",null,"Fork 本项目。",-1),V=e("p",null,[t("进入 "),e("code",null,"Settings/Pages"),t(" Source 设置 Branch 为 "),e("code",null,"gh-pages"),t("，以启用 GitHub Pages。")],-1),P=e("p",null,[t("进入 "),e("code",null,"Actions"),t("，触发 GitHub Page Workflow run。")],-1),G=e("blockquote",null,[e("p",null,[e("code",null,".github/workflows/gh-pages.yml"),t(" 文件将会自动触发构建，并将构建产物推送至 "),e("code",null,"gh-pages"),t(" 分支。")])],-1),H=e("p",null,[t("如果您需要自定义域名，请修改项目中 "),e("code",null,"public/CNAME"),t(" 文件内容为您自己的域名。")],-1),N={id:"faq",tabindex:"-1"},T={id:"waline-403-authorization-错误",tabindex:"-1"},S=e("p",null,[t("如果您无法正常连接您的 Waline 后台 API，您可能需要配置一下安全域名。 将 "),e("code",null,"kotodama.yunyoujun.cn"),t(" 添加至您的安全域名中。")],-1);function Y(o,J,K,Z,i,I){const a=m,u=c;return p(),h(u,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":l(()=>[k,e("p",null,[t("还好有"),n(a,{href:"https://github.com/YunYouJun",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("云游君")]),_:1}),t("开发了"),n(a,{href:"https://github.com/YunYouJun/kotodama",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("kotadama")]),_:1}),t("，适配了waline的后端管理。用它作为waline的后端管理再好不过。")]),e("p",null,[t("要使用kotadama，直接打开网址登录使用即可："),n(a,{href:"https://kotodama.vercel.app",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("https://kotodama.vercel.app")]),_:1})]),f(" more "),b,v,y,w,e("h2",A,[t("Features "),n(a,{class:"header-anchor",href:"#features","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),e("ul",null,[e("li",null,[t("💬 目前只适配 "),n(a,{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("Waline")]),_:1}),t("（"),C,t("）")]),e("li",null,[t("⚡️ "),n(a,{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("Vue 3")]),_:1}),t(", "),n(a,{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("Vite 2")]),_:1}),t(", "),n(a,{href:"https://pnpm.js.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("pnpm")]),_:1}),t(", "),n(a,{href:"https://github.com/element-plus/element-plus",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("element-plus")]),_:1}),t(" - ("),n(a,{href:"https://github.com/antfu/vitesse/",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("vitesse")]),_:1}),t(") born for future")])]),e("h2",D,[t("Waline "),n(a,{class:"header-anchor",href:"#waline","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),e("ul",null,[e("li",null,[t("适配 "),n(a,{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("Waline")]),_:1}),t(" 后台管理（开发中...） "),$])]),e("blockquote",null,[e("p",null,[t("More info see "),n(a,{href:"https://github.com/walinejs/waline/issues/552",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("#552 | Waline")]),_:1})])]),e("h2",F,[t("自行部署 "),n(a,{class:"header-anchor",href:"#自行部署","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),e("blockquote",null,[e("p",null,[t("推荐直接使用 "),n(a,{href:"https://kotodama.yunyoujun.cn",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("kotodama.yunyoujun.cn")]),_:1}),t(" 或 "),n(a,{href:"https://kotodama.vercel.app",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("kotodama.vercel.app")]),_:1}),t("。如果您不放心，也可以自行部署，但可能需要自己记得更新。")])]),B,E,e("h3",W,[t("自行构建 "),n(a,{class:"header-anchor",href:"#自行构建","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),j,q,e("h3",x,[t("GitHub Actions "),n(a,{class:"header-anchor",href:"#github-actions","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),z,V,P,G,H,e("h2",N,[t("FAQ "),n(a,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),e("h3",T,[t("Waline 403 Authorization 错误 "),n(a,{class:"header-anchor",href:"#waline-403-authorization-错误","aria-hidden":"true"},{default:l(()=>[t("#")]),_:1})]),S,e("blockquote",null,[e("p",null,[n(a,{href:"https://waline.js.org/reference/server.html#securedomains",target:"_blank",rel:"noreferrer"},{default:l(()=>[t("secureDomains | Waline")]),_:1})])])]),"main-header":l(()=>[s(o.$slots,"main-header")]),"main-header-after":l(()=>[s(o.$slots,"main-header-after")]),"main-nav":l(()=>[s(o.$slots,"main-nav")]),"main-content":l(()=>[s(o.$slots,"main-content")]),"main-content-after":l(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":l(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":l(()=>[s(o.$slots,"main-nav-after")]),comment:l(()=>[s(o.$slots,"comment")]),footer:l(()=>[s(o.$slots,"footer")]),aside:l(()=>[s(o.$slots,"aside")]),"aside-custom":l(()=>[s(o.$slots,"aside-custom")]),default:l(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const X=d(g,[["render",Y]]);export{R as __pageData,X as default};
