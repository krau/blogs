import{h as C,q as V,C as d,R as D,o as i,k as c,d as w,f as o,t as s,u as e,au as B,z as F,B as H,l as b,av as h,e as g,g as l,F as L,n as M,aw as N,c as S,w as x,b as Y}from"./app-DQCIvYH8.js";const z={class:"vc-site-live-time"},I={"mx-1":""},P={"mx-1":""},j={"mx-1":""},q={"mx-1":""},E=C({__name:"VCLiveTime",props:{startTime:{}},setup(y){const u=y,{t:a}=V(),r=d(0),t=d(0),m=d(0),v=d(0);function k(){const n=new Date(u.startTime),_=new Date().getTime()-n.getTime(),f=60*1e3,p=60*f,T=24*p;r.value=Math.floor(_/T),t.value=Math.floor(_%T/60/60/1e3),m.value=Math.floor(_%p/60/1e3),v.value=Math.floor(_%f/1e3)}return D(()=>{setInterval(k,1e3)}),(n,$)=>(i(),c("div",z,[w(n.$slots,"live-time-before"),o("span",I,s(e(a)("time.day",r.value)),1),o("span",P,s(e(a)("time.hour",t.value)),1),o("span",j,s(e(a)("time.minute",m.value)),1),o("span",q,s(e(a)("time.second",v.value)),1),w(n.$slots,"live-time-after")]))}}),R={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},A={key:0,class:"beian",m:"y-2"},G={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},J={class:"copyright flex justify-center items-center gap-2",p:"1"},K=["href","title"],O={key:1,class:"powered",m:"2"},Q=["innerHTML"],U=["href","title"],W=C({__name:"YunFooter",setup(y){const{t:u}=V(),a=B(),r=F(),t=H(),m=new Date().getFullYear(),v=b(()=>m===t.value.footer.since),k=b(()=>u("footer.powered",[`<a href="${h.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${h.version}`])),n=b(()=>t.value.footer.icon||{url:h.repository.url,name:"i-ri-cloud-line",title:h.name});return($,_)=>{var f,p;return i(),c("footer",R,[(f=e(t).footer.beian)!=null&&f.enable&&e(t).footer.beian.icp?(i(),c("div",A,[o("a",G,s(e(t).footer.beian.icp),1)])):g("v-if",!0),o("div",J,[o("span",null,[l(" © "),v.value?g("v-if",!0):(i(),c(L,{key:0},[l(s(e(t).footer.since)+" - ",1)],64)),l(" "+s(e(m)),1)]),(p=e(t).footer.icon)!=null&&p.enable?(i(),c("a",{key:0,class:M(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:n.value.url,target:"_blank",title:n.value.title},[o("div",{class:M(n.value.name)},null,2)],10,K)):g("v-if",!0),o("span",null,s(e(r).author.name),1)]),e(t).footer.powered?(i(),c("div",O,[o("span",{innerHTML:k.value},null,8,Q),l(" | "),o("span",null,[l(s(e(u)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(N(e(a).theme)),9,U),l(" v"+s(e(t).pkg.version),1)])])):g("v-if",!0),w($.$slots,"default")])}}}),X=o("span",null,"本站已勉强运行",-1),Z=o("span",null,"(ノ｀Д)ノ",-1),te=C({__name:"YunFooter",setup(y){return(u,a)=>{const r=E;return i(),S(W,null,{default:x(()=>[Y(r,{"start-time":"2020-03-09"},{"live-time-before":x(()=>[X]),"live-time-after":x(()=>[Z]),_:1})]),_:1})}}});export{te as _};
