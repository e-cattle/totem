(function(e){function t(t){for(var s,n,l=t[0],i=t[1],c=t[2],d=0,b=[];d<l.length;d++)n=l[d],r[n]&&b.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},r={app:0},o=[];function n(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0151f9f2"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,s){a=r[e]=[t,s]});t.push(a[2]=s);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=n(e),o=function(t){i.onerror=i.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,n=new Error("Loading chunk "+e+" failed.\n("+s+": "+o+")");n.type=s,n.request=o,a[1](n)}r[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4171:function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=a("bb71");a("da64");s["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("router-view"),a("v-bottom-nav",{attrs:{app:"",fixed:"",light:"",value:!0}},[a("v-btn",[a("span",[e._v("Painel")]),a("v-icon",[e._v("poll")])],1),a("v-btn",[a("span",[e._v("Sensores")]),a("v-icon",[e._v("router")])],1),a("v-btn",[a("span",[e._v("Aplicativos")]),a("v-icon",[e._v("phonelink")])],1),a("v-btn",[a("span",[e._v("Sincronizar")]),a("v-icon",[e._v("cloud")])],1),a("v-btn",[a("span",[e._v("Configurações")]),a("v-icon",[e._v("tune")])],1),a("v-btn",{staticClass:"px-5",attrs:{disabled:""}},[a("span",{staticClass:"title"},[e._v(e._s(e.ip))])])],1)],1)},n=[],l=a("b9fc"),i={name:"App",data(){return{ip:l.address()}}},c=i,d=a("2877"),f=a("6544"),b=a.n(f),u=a("7496"),p=a("887a"),v=a("8336"),j=a("132d"),h=Object(d["a"])(c,o,n,!1,null,null,null),m=h.exports;b()(h,{VApp:u["a"],VBottomNav:p["a"],VBtn:v["a"],VIcon:j["a"]});var x=a("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"screensaver",on:{click:e.dashboard}},[s("img",{ref:"logo",staticClass:"logo",staticStyle:{top:"10px",left:"10px"},attrs:{src:a("7bf1"),width:"256"}})])},y=[],C={name:"App",data(){return{interval:null}},methods:{cycle(){this.interval=setInterval(()=>{let e=20,t=window.innerWidth-299-e,a=window.innerHeight-171-e,s=Math.floor(Math.random()*t)+10,r=Math.floor(Math.random()*a)+10;this.$refs["logo"].style.left=s+"px",this.$refs["logo"].style.top=r+"px"},1e4)},dashboard(){this.$router.push("dashboard")}},mounted(){this.cycle()},beforeDestroy(){clearInterval(this.interval)}},k=C,w=(a("8fb1"),Object(d["a"])(k,g,y,!1,null,"5758ef0b",null)),_=w.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{id:"wrapper","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"px-2 py-2",attrs:{md3:"",xs6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"purple"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-icon",{attrs:{dark:"",right:"","x-large":""}},[e._v("flash_on")])],1),a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[e._v("37%")]),a("div",[e._v("Uso da CPU")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md3:"",xs6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-icon",{attrs:{dark:"",right:"","x-large":""}},[e._v("memory")])],1),a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[e._v("94%")]),a("div",[e._v("Uso de Memória")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md3:"",xs6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-icon",{attrs:{dark:"",right:"","x-large":""}},[e._v("network_check")])],1),a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[e._v("53 Mbps")]),a("div",[e._v("Tráfego na Rede")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md3:"",xs6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"brown"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-icon",{attrs:{dark:"",right:"","x-large":""}},[e._v("power")])],1),a("v-flex",{attrs:{xs7:""}},[a("div",[a("div",{staticClass:"headline"},[e._v("743 horas")]),a("div",[e._v("Uptime")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("doughnut-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("pie-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("custom-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("bar-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("radar-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("scatter-example")],1)],1)],1)],1)},A=[],O=a("1fca"),E={extends:O["a"],mounted(){this.renderChart({labels:["Jun/17","Jul/17","Ago/17","Set/17","Out/17","Nov/17","Dez/17","Jan/18","Fev/18","Mar/18","Abr/18","Mai/18"],datasets:[{label:"Dados Obtidos (em MB)",backgroundColor:"#7979f8",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},S=a("30ef"),B=a.n(S);B.a.defaults.LineWithLine=B.a.defaults.line,B.a.controllers.LineWithLine=B.a.controllers.line.extend({draw:function(e){if(B.a.controllers.line.prototype.draw.call(this,e),this.chart.tooltip._active&&this.chart.tooltip._active.length){let e=this.chart.tooltip._active[0],t=this.chart.ctx,a=e.tooltipPosition().x,s=this.chart.scales["y-axis-0"].top,r=this.chart.scales["y-axis-0"].bottom;t.save(),t.beginPath(),t.moveTo(a,s),t.lineTo(a,r),t.lineWidth=2,t.strokeStyle="#07C",t.stroke(),t.restore()}}});const D=Object(O["f"])("line-with-chart","LineWithLine");var M={extends:D,mounted(){this.renderChart({labels:["30/4","1/5","2/5","3/5","4/5","5/5","6/5"],datasets:[{label:"Dados Enviados (em quantidade)",backgroundColor:"#f87979",data:[40,39,10,40,39,80,40]}]},{responsive:!0,maintainAspectRatio:!1,tooltips:{intersect:!1},legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},P={extends:O["b"],mounted(){this.renderChart({labels:["Espaço Ocupado","Espaço Disponível"],datasets:[{backgroundColor:["#DD1B16","#41B883"],data:[67,33]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}}})}},T={extends:O["c"],mounted(){this.renderChart({labels:["Fisiológicos","Comportamentais","Micro-Clima","Contextuais"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[348932,25435,123456,12345]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}}})}},V={extends:O["d"],mounted(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},F={extends:O["e"],mounted(){this.renderChart({datasets:[{label:"Scatter Dataset 1",fill:!1,borderColor:"#f87979",backgroundColor:"#f87979",data:[{x:-2,y:4},{x:-1,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:4}]},{label:"Scatter Dataset 2",fill:!1,borderColor:"#7acbf9",backgroundColor:"#7acbf9",data:[{x:-2,y:-4},{x:-1,y:-1},{x:0,y:1},{x:1,y:-1},{x:2,y:-4}]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},L={name:"welcome",components:{BarExample:E,CustomExample:M,DoughnutExample:P,PieExample:T,RadarExample:V,ScatterExample:F},methods:{open(e){this.$electron.shell.openExternal(e)}}},R=L,$=(a("b9a0"),a("b0af")),N=a("99d9"),U=a("a523"),q=a("0e8f"),H=a("a722"),J=Object(d["a"])(R,z,A,!1,null,"e2eaf156",null),W=J.exports;b()(J,{VCard:$["a"],VCardText:N["a"],VContainer:U["a"],VFlex:q["a"],VIcon:j["a"],VLayout:H["a"]}),s["a"].use(x["a"]);var I=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"screensaver",component:_},{path:"/dashboard",name:"dashboard",component:W},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),G=a("9483");Object(G["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});a("d1e7");s["a"].config.productionTip=!1,new s["a"]({router:I,render:function(e){return e(m)}}).$mount("#app")},"7bf1":function(e,t,a){e.exports=a.p+"img/screensaver.530b2690.png"},"85b3":function(e,t,a){},"8fb1":function(e,t,a){"use strict";var s=a("4171"),r=a.n(s);r.a},b9a0:function(e,t,a){"use strict";var s=a("85b3"),r=a.n(s);r.a}});
//# sourceMappingURL=app.a0e1602c.js.map