import{_ as F}from"./ValaxyMain.vue_vue_type_style_index_0_lang-fe21370d.js";import{_ as y,c as D,w as o,o as i,b as l,d as s,e as t,r as e,f as d,p as A}from"./app-75d947ba.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-fb12fb7c.js";import"./YunCard.vue_vue_type_style_index_0_lang-d09f1f3a.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-1142ab4d.js";const O=JSON.parse('{"title":"为 valaxy 博客 yun 主题添加 artitalk 说说页面","description":"","frontmatter":{"layout":"post","title":"为 valaxy 博客 yun 主题添加 artitalk 说说页面","date":"2023-01-20T00:53:46.000Z","tags":["博客"],"categories":["小技术"],"cover":"/photo/post-pics/add-artitalk-for-valaxy-yun/add-artitalk-for-valaxy-yun_01-20-00-55-40.webp"},"headers":[{"level":2,"title":"Artitalk","slug":"artitalk","link":"#artitalk","children":[]},{"level":2,"title":"注册并配置 Leancloud","slug":"注册并配置-leancloud","link":"#注册并配置-leancloud","children":[]},{"level":2,"title":"配置 valaxy","slug":"配置-valaxy","link":"#配置-valaxy","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]}],"relativePath":"pages/posts/add-artitalk-for-valaxy-yun.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/add-artitalk-for-valaxy-yun.md","lastUpdated":1681104776000}'),r=JSON.parse('{"title":"为 valaxy 博客 yun 主题添加 artitalk 说说页面","description":"","frontmatter":{"layout":"post","title":"为 valaxy 博客 yun 主题添加 artitalk 说说页面","date":"2023-01-20T00:53:46.000Z","tags":["博客"],"categories":["小技术"],"cover":"/photo/post-pics/add-artitalk-for-valaxy-yun/add-artitalk-for-valaxy-yun_01-20-00-55-40.webp"},"headers":[{"level":2,"title":"Artitalk","slug":"artitalk","link":"#artitalk","children":[]},{"level":2,"title":"注册并配置 Leancloud","slug":"注册并配置-leancloud","link":"#注册并配置-leancloud","children":[]},{"level":2,"title":"配置 valaxy","slug":"配置-valaxy","link":"#配置-valaxy","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]}],"relativePath":"pages/posts/add-artitalk-for-valaxy-yun.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/add-artitalk-for-valaxy-yun.md","lastUpdated":1681104776000}'),C={name:"pages/posts/add-artitalk-for-valaxy-yun.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){A("pageData",r)}},u={id:"artitalk",tabindex:"-1"},h=l("blockquote",null,[l("p",null,"由于构建上的一些问题，我把它暂时移除了")],-1),m={id:"注册并配置-leancloud",tabindex:"-1"},f={id:"配置-valaxy",tabindex:"-1"},v=l("p",null,"在博客根目录下，新建 index.heml，写入以下内容",-1),k=l("div",{class:"language-html"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<!"),l("span",{style:{color:"#F07178"}},"DOCTYPE"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"html"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"html"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"en"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"head"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"meta"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"charset"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"utf-8"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"meta"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"http-equiv"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"X-UA-Compatible"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"content"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"IE=edge"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"meta"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"name"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"viewport"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"content"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"width=device-width,initial-scale=1.0"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"link"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"rel"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"icon"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"href"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"favicon.ico"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"title"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"<%= htmlWebpackPlugin.options.title %>"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"title"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"head"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"body"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"noscript"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"strong"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue."),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"strong"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"noscript"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"id"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"app"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"      <"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"src"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"https://cdn.jsdelivr.net/npm/artitalk"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"body"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"html"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),g=l("p",null,"然后在 /components/ 目录下，新建 Artitalk.vue ，写入以下内容",-1),E=l("div",{class:"language-vue"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"id"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"artitalk_main"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"mounted"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"addScript"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"url"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#C792EA"}},"var"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"s"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"document"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"createElement"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"script"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"s"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"id"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"at"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"url"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"indexOf"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"appId"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#89DDFF"}},"=="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"-"),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"?"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"s"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"src"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"url"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"s"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"innerHTML"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"url"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"document"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"appendChild"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"s"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#82AAFF"}},"addScript"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"`")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"      new Artitalk({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"          appId: '你的appid',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"          appKey: '你的key',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"          shuoPla: '',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"          bgImg: 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"          atEmoji: {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"              huaji: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"              baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"              bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"              bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"              chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png'          ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"          },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"      })")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C3E88D"}},"    "),l("span",{style:{color:"#89DDFF"}},"`"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"destroyed"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"document")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"querySelectorAll"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"#at"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"forEach"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"element"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"element"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"parentNode"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"removeChild"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"element"),l("span",{style:{color:"#F07178"}},"))"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"delete"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"window"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"AV"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),_=l("p",null,[s("这样就可以啦。在你想要显示说说的页面(.md文件)里，写上"),l("code",null,"<Artitalk />"),s(" 就可以显示了。")],-1),b={id:"问题",tabindex:"-1"},x=l("p",null,"目前 Artitalk 只支持以 Leancloud 作为数据库，并且 cdn 用的还是 jsdeliver，速度感人。我提了 issue 希望能支持更多部署方式，不过看起来作者已经失踪有一段时间了...",-1),j=l("p",null,[s("可惜我不会 js，只能等大佬实现啦。"),l("s",null,"现在又不是不能用")],-1);function w(a,$,S,L,c,P){const n=d,p=F;return i(),D(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":o(()=>[l("h2",u,[s("Artitalk "),t(n,{class:"header-anchor",href:"#artitalk","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("p",null,[t(n,{href:"https://artitalk.js.org/",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Artitalk")]),_:1}),s(" 是一个基于 Leancloud 的简单说说 js，具体参见官方文档。")]),l("p",null,[s("我成功将它接入了我的博客，"),t(n,{href:"https://krau.top/about",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("点这里看看")]),_:1}),s("。下面简单介绍一下接入方法。")]),h,l("h2",m,[s("注册并配置 Leancloud "),t(n,{class:"header-anchor",href:"#注册并配置-leancloud","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),l("p",null,[s("这一步与官方文档完全相同，"),t(n,{href:"https://artitalk.js.org/doc.html#%F0%9F%8C%88-leancloud-%E7%9A%84%E7%9B%B8%E5%85%B3%E5%87%86%E5%A4%87",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("点击查看")]),_:1})]),l("h2",f,[s("配置 valaxy "),t(n,{class:"header-anchor",href:"#配置-valaxy","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),v,k,g,E,_,l("h2",b,[s("问题 "),t(n,{class:"header-anchor",href:"#问题","aria-hidden":"true"},{default:o(()=>[s("#")]),_:1})]),x,j]),"main-header":o(()=>[e(a.$slots,"main-header")]),"main-header-after":o(()=>[e(a.$slots,"main-header-after")]),"main-nav":o(()=>[e(a.$slots,"main-nav")]),"main-content":o(()=>[e(a.$slots,"main-content")]),"main-content-after":o(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":o(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":o(()=>[e(a.$slots,"main-nav-after")]),comment:o(()=>[e(a.$slots,"comment")]),footer:o(()=>[e(a.$slots,"footer")]),aside:o(()=>[e(a.$slots,"aside")]),"aside-custom":o(()=>[e(a.$slots,"aside-custom")]),default:o(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const q=y(C,[["render",w]]);export{O as __pageData,q as default};
