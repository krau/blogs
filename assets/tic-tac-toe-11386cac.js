import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-3f1a8e75.js";import{_ as p,c as _,w as e,o as h,b as t,d as n,e as r,r as s,f as u,p as m}from"./app-77570002.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-53278d38.js";import"./YunCard.vue_vue_type_style_index_0_lang-e116c531.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-9b3acdab.js";const st=JSON.parse('{"title":"某个无聊的人对井字棋的思考","description":"","frontmatter":{"categories":"日常","date":"2020-05-17T17:12:04.000Z","layout":"post","tags":null,"title":"某个无聊的人对井字棋的思考"},"headers":[{"level":2,"title":"one","slug":"one","link":"#one","children":[]},{"level":2,"title":"two","slug":"two","link":"#two","children":[]}],"relativePath":"pages/posts/tic-tac-toe.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/tic-tac-toe.md","lastUpdated":1680189823000}'),a=JSON.parse('{"title":"某个无聊的人对井字棋的思考","description":"","frontmatter":{"categories":"日常","date":"2020-05-17T17:12:04.000Z","layout":"post","tags":null,"title":"某个无聊的人对井字棋的思考"},"headers":[{"level":2,"title":"one","slug":"one","link":"#one","children":[]},{"level":2,"title":"two","slug":"two","link":"#two","children":[]}],"relativePath":"pages/posts/tic-tac-toe.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/tic-tac-toe.md","lastUpdated":1680189823000}'),f={name:"pages/posts/tic-tac-toe.md",data(){return{data:a,frontmatter:a.frontmatter}},setup(){m("pageData",a)}},g=t("p",null,"某个不务正业的咸鱼高中生在午休时和自己下井字棋...然后突然想到一个问题",-1),v=t("p",null,"众所周知，井字棋一般来说都是先下的人（下正中间）容易赢，那么，作为后手，如何最大化自己的胜率？",-1),$=t("p",null,[n("为了探究这个问题，我和先自己一盘一盘的模拟了数局 "),t("s",null,"（人间迷惑行为"),n(" 然后又找到了谷歌娘一比高低，结果也算总结出了一点规律")],-1),w={id:"one",tabindex:"-1"},b=t("p",null,"谷歌的井字棋游戏中有难度设定：‘简单’，‘中等’，‘非常难’。",-1),k=t("p",null,"先把难度设定为‘简单’，玩家作为先者（X方），下到中间格子，然后发现谷歌娘此时的出棋总是与中间格相邻的四个格子，而非四角上的格子",-1),y=t("p",null,[t("img",{src:"https://i.loli.net/2020/05/17/GUz1VkonijYbcIs.png",alt:""})],-1),O=t("p",null,"对于这种情况，X 方非常容易能找到让对方进退两难的出棋，也就是不管对方如何封堵，自己总能有一条路胜利，如下图所示",-1),N=t("p",null,[t("img",{src:"https://i.loli.net/2020/05/17/WSPoQwlYp8J5D2E.png",alt:""})],-1),T=t("p",null,"这样就算胜利了，因为对方不管是堵左上角还是右边都不行",-1),V={id:"two",tabindex:"-1"},j=t("p",null,"接着，把难度设置为非常难（中等难度和简单难度的情况很相似，不再讨论）",-1),S=t("p",null,"这时候，当X方下到中间后，与上一种情况相反，谷歌娘总是会下到四个角（尤其是左上角），而不下相邻的位置",-1),X=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200517171841.png",alt:""})],-1),B=t("p",null,"这时候似乎很难按照前一种情况取胜。",-1),D=t("p",null,[n("于是，我和谷歌娘开始混战起来，"),t("s",null,"决心大战三百回合之后")],-1),J=t("p",null,"但也不是盲目的乱下一气，为了得出规律，我把我的第二次出棋按照从左到右，从上到下的顺序都下了一遍，结果每次都是平局。之后我便发现，这种情况的棋局数是很有限的。",-1),P=t("p",null,"真的很有限，按照一定有规律的顺序，人为都能给它穷举出来（没错我真的这样搞了）",-1),U=t("p",null,"如下图虚线分割线左边，便是对应这种情况的全部棋局",-1),Y=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200517171101.jpg",alt:""})],-1),Z=t("p",null,"↑午休的时候迷迷糊糊画的为了催眠自己，辨识度可能很低",-1),z=t("p",null,"全部可能的棋局数：22",-1),A=t("p",null,"平局数：20",-1),C=t("p",null,"O方胜出数：2",-1),E=t("p",null,"X方胜出数：0",-1),G=t("hr",null,null,-1),I=t("p",null,"如此来看，若先下者开局下到了中央，后下者（O方）胜出的机会是微乎其微的。因为井字棋棋盘是对称的，所以总体上只分为以上两种情况。",-1),L=t("p",null,"第一种情况，O方必输",-1),M=t("p",null,"第二种情况，O方获胜比例1：11",-1),Q=t("p",null,"当然，以上的前提都是在下棋双方都深思熟虑，出最优解的情况下",-1);function W(o,q,x,F,l,H){const i=u,d=c;return h(),_(d,{frontmatter:l.frontmatter,data:l.data},{"main-content-md":e(()=>[g,v,$,t("h2",w,[n("one "),r(i,{class:"header-anchor",href:"#one","aria-hidden":"true"},{default:e(()=>[n("#")]),_:1})]),b,k,y,O,N,T,t("h2",V,[n("two "),r(i,{class:"header-anchor",href:"#two","aria-hidden":"true"},{default:e(()=>[n("#")]),_:1})]),j,S,X,B,D,J,P,U,Y,Z,z,A,C,E,G,I,L,M,Q]),"main-header":e(()=>[s(o.$slots,"main-header")]),"main-header-after":e(()=>[s(o.$slots,"main-header-after")]),"main-nav":e(()=>[s(o.$slots,"main-nav")]),"main-content":e(()=>[s(o.$slots,"main-content")]),"main-content-after":e(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(o.$slots,"main-nav-after")]),comment:e(()=>[s(o.$slots,"comment")]),footer:e(()=>[s(o.$slots,"footer")]),aside:e(()=>[s(o.$slots,"aside")]),"aside-custom":e(()=>[s(o.$slots,"aside-custom")]),default:e(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const nt=p(f,[["render",W]]);export{st as __pageData,nt as default};
