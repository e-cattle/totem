(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],d=0,v=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);f&&f(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function n(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e5edf957"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=n(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,a[1](c)}r[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"159c":function(t,e,a){"use strict";var s=a("7bd0"),r=a.n(s);r.a},"1f26":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=a("f309");s["a"].use(r["a"]);var o=new r["a"]({icons:{iconfont:"md"},theme:{dark:!0,options:{customProperties:!0}}}),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("router-view"),a("v-bottom-navigation",{attrs:{"input-value":"/"!=this.$route.path,app:"",fixed:"",light:"",grow:""}},[a("v-btn",{on:{click:function(e){return t.go("dashboard")}}},[a("span",[t._v("Painel")]),a("v-icon",[t._v("poll")])],1),a("v-btn",{on:{click:function(e){return t.go("device")}}},[a("span",[t._v("Sensores")]),a("v-icon",[t._v("router")])],1),a("v-btn",[a("span",[t._v("Aplicativos")]),a("v-icon",[t._v("phonelink")])],1),a("v-btn",[a("span",[t._v("Sincronizar")]),a("v-icon",[t._v("cloud_upload")])],1),a("v-btn",[a("span",[t._v("Ajustes")]),a("v-icon",[t._v("tune")])],1),a("v-btn",{staticClass:"px-4 pt-0",attrs:{disabled:"",width:"1000"}},[a("span",{staticClass:"title font-weight-black",staticStyle:{color:"#111"}},[t._v("\n        "+t._s(t.ip)),a("br"),a("v-chip",{staticClass:"pl-1 pr-2",attrs:{label:"",small:"",color:"teal","text-color":"white"}},[a("v-avatar",[a("v-icon",{staticClass:"my-0 py-0"},[t._v("update")])],1),t._v("\n           "+t._s(t.version)+"\n        ")],1)],1)])],1)],1)},i=[],l=a("bc3a"),c=a("9224"),d={name:"App",data:function(){return{active:0,ip:"Obtendo o IP...",version:c.version,interval:null}},methods:{getIp:function(){var t=this;l.get("http://localhost:3000/status").then((function(e){t.ip=e.data.ips[0].ip}))},go:function(t){this.$route.path!=="/"+t&&this.$router.push(t)}},mounted:function(){var t=this;this.interval=setInterval((function(){t.getIp()}),1e4)},beforeDestroy:function(){clearInterval(this.interval)}},f=d,v=a("2877"),u=a("6544"),p=a.n(u),b=a("7496"),m=a("8212"),h=a("b81c"),g=a("8336"),x=a("cc20"),j=a("132d"),C=Object(v["a"])(f,n,i,!1,null,null,null),y=C.exports;p()(C,{VApp:b["a"],VAvatar:m["a"],VBottomNavigation:h["a"],VBtn:g["a"],VChip:x["a"],VIcon:j["a"]});var k=a("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"screensaver",on:{click:function(e){return t.$router.push("dashboard")}}},[s("img",{ref:"logo",staticClass:"logo",staticStyle:{top:"10px",left:"10px"},attrs:{src:a("7bf1"),width:"256"}})])},w=[],P={data:function(){return{interval:null}},methods:{cycle:function(){var t=this;this.interval=setInterval((function(){var e=20,a=window.innerWidth-299-e,s=window.innerHeight-171-e,r=Math.floor(Math.random()*a)+10,o=Math.floor(Math.random()*s)+10;t.$refs["logo"].style.left=r+"px",t.$refs["logo"].style.top=o+"px"}),1e4)}},mounted:function(){this.cycle()},beforeDestroy:function(){clearInterval(this.interval)}},D=P,A=(a("6f44"),Object(v["a"])(D,_,w,!1,null,"bcf5ac1c",null)),T=A.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{id:"wrapper","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"px-1 py-2",attrs:{xs3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"purple"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-icon",{attrs:{dark:"",left:"","x-large":""}},[t._v("flash_on")])],1),a("v-flex",{attrs:{xs9:""}},[a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.cpu)+"%")]),a("div",{staticClass:"subtitle-2"},[t._v("Uso da CPU")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-1 py-2",attrs:{xs3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"teal"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-icon",{attrs:{dark:"",left:"","x-large":""}},[t._v("memory")])],1),a("v-flex",{attrs:{xs9:""}},[a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.memory)+"%")]),a("div",{staticClass:"subtitle-2"},[t._v("Uso de Memória")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-1 py-2",attrs:{xs3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-icon",{attrs:{dark:"",left:"","x-large":""}},[t._v("network_check")])],1),a("v-flex",{attrs:{xs9:""}},[a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.network)+" Mbps")]),a("div",{staticClass:"subtitle-2"},[t._v("Tráfego na Rede")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-1 py-2",attrs:{xs3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"brown"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-icon",{attrs:{dark:"",left:"","x-large":""}},[t._v("power")])],1),a("v-flex",{attrs:{xs9:""}},[a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.uptime)+" horas")]),a("div",{staticClass:"subtitle-2"},[t._v("Uptime")])])])],1)],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("doughnut-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("pie-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("custom-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("bar-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("radar-example")],1)],1)],1),a("v-flex",{staticClass:"px-2 py-2",attrs:{md6:"",xs12:""}},[a("v-card",[a("v-card-text",[a("scatter-example")],1)],1)],1),a("v-flex",{staticClass:"py-8",attrs:{xs12:""}})],1)},B=[],S=a("1fca"),M={extends:S["a"],mounted:function(){this.renderChart({labels:["Jun/17","Jul/17","Ago/17","Set/17","Out/17","Nov/17","Dez/17","Jan/18","Fev/18","Mar/18","Abr/18","Mai/18"],datasets:[{label:"Dados Obtidos (em MB)",backgroundColor:"#7979f8",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},O=a("30ef"),z=a.n(O);z.a.defaults.LineWithLine=z.a.defaults.line,z.a.controllers.LineWithLine=z.a.controllers.line.extend({draw:function(t){if(z.a.controllers.line.prototype.draw.call(this,t),this.chart.tooltip._active&&this.chart.tooltip._active.length){var e=this.chart.tooltip._active[0],a=this.chart.ctx,s=e.tooltipPosition().x,r=this.chart.scales["y-axis-0"].top,o=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(s,r),a.lineTo(s,o),a.lineWidth=2,a.strokeStyle="#07C",a.stroke(),a.restore()}}});var E=Object(S["g"])("line-with-chart","LineWithLine"),I={extends:E,mounted:function(){this.renderChart({labels:["30/4","1/5","2/5","3/5","4/5","5/5","6/5"],datasets:[{label:"Dados Enviados (em quantidade)",backgroundColor:"#f87979",data:[40,39,10,40,39,80,40]}]},{responsive:!0,maintainAspectRatio:!1,tooltips:{intersect:!1},legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},F=a("bc3a"),L={extends:S["b"],data:function(){return{interval:null}},methods:{graph:function(){var t=this;F.get("http://localhost:3000/totem/disk").then((function(e){var a=5,s=5;a=Math.round(e.data.used/1048576),s=Math.round(e.data.free/1048576),t.renderChart({labels:["Espaço Ocupado","Espaço Disponível"],datasets:[{backgroundColor:["#DD1B16","#41B883"],data:[a,s]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}}})}))}},mounted:function(){var t=this;this.graph(),this.interval=setInterval((function(){t.graph()}),6e4)},beforeDestroy:function(){clearInterval(this.interval)}},$={extends:S["d"],mounted:function(){this.renderChart({labels:["Fisiológicos","Comportamentais","Micro-Clima","Contextuais"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[348932,25435,123456,12345]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}}})}},H={extends:S["e"],mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},R={extends:S["f"],mounted:function(){this.renderChart({datasets:[{label:"Scatter Dataset 1",fill:!1,borderColor:"#f87979",backgroundColor:"#f87979",data:[{x:-2,y:4},{x:-1,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:4}]},{label:"Scatter Dataset 2",fill:!1,borderColor:"#7acbf9",backgroundColor:"#7acbf9",data:[{x:-2,y:-4},{x:-1,y:-1},{x:0,y:1},{x:1,y:-1},{x:2,y:-4}]}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})}},N=a("bc3a"),U={components:{BarExample:M,CustomExample:I,DoughnutExample:L,PieExample:$,RadarExample:H,ScatterExample:R},data:function(){return{cpu:0,memory:0,uptime:0,network:0,interval:null}},methods:{system:function(){var t=this;N.get("http://localhost:3000/totem/system").then((function(e){t.uptime=Math.floor(e.data.uptime/3600),t.cpu=Math.round(100*e.data.cpu),t.memory=Math.floor(e.data.memory)}))}},mounted:function(){var t=this;this.system(),this.interval=setInterval((function(){t.system()}),5e3)},beforeDestroy:function(){clearInterval(this.interval)}},G=U,W=(a("159c"),a("b0af")),J=a("99d9"),Y=a("a523"),q=a("0e8f"),X=a("a722"),Z=Object(v["a"])(G,V,B,!1,null,"2340c889",null),K=Z.exports;p()(Z,{VCard:W["a"],VCardText:J["a"],VContainer:Y["a"],VFlex:q["a"],VIcon:j["a"],VLayout:X["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-toolbar",{attrs:{dense:""}},[a("v-toolbar-title",[t._v("Dispositivos Sensoriais")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{small:"",text:""}},[a("v-icon",{attrs:{left:""}},[t._v("refresh")]),t._v("\n        Atualizar\n      ")],1)],1)],1),a("v-data-table",{attrs:{headers:t.headers,items:t.devices,"sort-by":t.pagination.sortBy,"sort-desc":"",page:t.pagination.page,"items-per-page":t.pagination.rowsPerPage,"hide-default-footer":""},on:{"update:sortBy":function(e){return t.$set(t.pagination,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.pagination,"sortBy",e)},"update:page":function(e){return t.$set(t.pagination,"page",e)}},scopedSlots:t._u([{key:"item.mac",fn:function(e){var s=e.item;return[a("span",{staticClass:"plain"},[t._v(t._s(s.mac))])]}},{key:"item.active",fn:function(e){var s=e.item;return[a("v-chip",{attrs:{label:"",color:s.active?"green":"red",dark:""}},[t._v(t._s(s.active?"Sim":"Não"))])]}},{key:"item.action",fn:function(e){var s=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.open(s)}}},[a("v-icon",[t._v("settings")])],1)]}}])}),a("div",{staticClass:"text-xs-center py-2"},[a("v-pagination",{attrs:{length:t.pages},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[t._v(t._s(t.device.name))]),a("v-chip",{staticClass:"ml-3 pl-1",attrs:{label:"",color:t.device.active?"green":"red","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v(t._s(t.device.active?"check_circle":"cancel"))])],1),t._v("\n           "+t._s(t.device.active?"Ativo":"Inativo")+"\n        ")],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{text:"",color:t.device.active?"red":"green"},on:{click:function(e){t.dialog=!1}}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.device.active?"wifi_off":"wifi"))]),t._v("\n            "+t._s(t.device.active?"Desativar":"Ativar")+"\n          ")],1),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",{attrs:{left:""}},[t._v("close")]),t._v("\n            Fechar\n          ")],1)],1)],1),a("v-layout",{staticClass:"mx-1 mt-1",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-card",{staticClass:"white--text mx-2 my-2",attrs:{color:"blue-grey darken-3"}},[a("v-card-title",{staticClass:"title",attrs:{primary:""}},[t._v("Informações Técnicas")]),a("v-card-text",[a("div",[a("div",{staticClass:"subheading mb-1"},[t._v("Descrição:")]),a("div",{staticClass:"plain"},[t._v(t._s(t.device.description))])])]),a("v-card-text",[a("div",[a("div",{staticClass:"subheading mb-1"},[t._v("Fornecedor:")]),a("div",{staticClass:"plain"},[t._v(t._s(t.device.branch)+" ("+t._s(t.device.model)+")")])])]),a("v-divider",{attrs:{light:""}}),a("v-card-text",[a("div",[a("div",{staticClass:"subheading mb-1"},[t._v("Endereço MAC:")]),a("div",{staticClass:"plain"},[t._v(t._s(t.device.mac))])])]),a("v-divider",{attrs:{light:""}}),a("v-card-text",[a("div",[a("div",{staticClass:"subheading mb-1"},[t._v("Localização:")]),a("div",{staticClass:"plain"},[t._v(t._s(t.device.local))])])]),a("v-divider",{attrs:{light:""}}),a("v-card-text",[a("div",[a("div",{staticClass:"subheading mb-1"},[t._v("Data do Registro:")]),a("div",{staticClass:"plain"},[t._v(t._s(t.device.date))])])])],1)],1),a("v-flex",{attrs:{xs6:""}},[a("v-card",{staticClass:"white--text mx-2 my-2",attrs:{color:"teal darken-3"}},[a("v-card-title",{staticClass:"title",attrs:{primary:""}},[t._v("Aferições")]),t._l(t.device.sensors,(function(e,s){return[a("v-card-text",{key:"t"+s},[a("div",[a("div",{staticClass:"subheading mb-1"},[t._v("Sensor "+t._s(e.name))]),a("div",{staticClass:"plain"},[t._v(t._s(e.descriptor))])])]),a("v-divider",{key:"d"+s,attrs:{light:""}})]}))],2)],1),a("v-flex",{attrs:{xs12:""}},[t.dialog?a("device-chart",{attrs:{data:t.device.chart}}):t._e()],1)],1)],1)],1)],1)},tt=[],et={extends:S["c"],props:{data:{type:Array,default:null}},data:function(){return{gradients:[],gradient1:null,gradient2:null,colors:[{border:"#B71C1C",base:"183, 28, 28"},{border:"#4A148C",base:"74, 20, 140"},{border:"#81B1FF",base:"129, 177, 255"},{border:"#004D40",base:"0, 77, 64"},{border:"#1C5E20",base:"28, 94, 32"},{border:"#E65000",base:"230, 80, 0"},{border:"#3E2723",base:"62, 39, 35"},{border:"#263339",base:"38, 51, 57"},{border:"#827618",base:"130, 118, 24"},{border:"#005F63",base:"0, 95, 99"}]}},mounted:function(){this.generateGradients(this.data.length);for(var t=[],e=0;e<this.data.length;e++){var a={label:this.data[e].label,borderColor:this.colors[e%10].border,pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"white",backgroundColor:this.gradients[e],data:this.data[e].data};t.push(a)}this.renderChart({labels:["14/7","15/7","16/7","17/7","18/7","19/7","Hoje"],datasets:t},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#ffffff"}},scales:{yAxes:[{ticks:{fontColor:"#fff"}}],xAxes:[{ticks:{fontColor:"#fff"}}]}})},methods:{generateGradients:function(t){for(var e=0;e<t;e++){var a=e%10,s=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450);s.addColorStop(0,"rgba("+this.colors[a].base+", 0.6)"),s.addColorStop(.5,"rgba("+this.colors[a].base+", 0.3)"),s.addColorStop(1,"rgba("+this.colors[a].base+", 0)"),this.gradients.push(s)}}}},at={components:{DeviceChart:et},data:function(){return{pagination:{rowsPerPage:6,sortBy:"date",descending:!0},dialog:!1,device:{name:"",local:"",date:"",mac:""},headers:[{text:"Nome",align:"left",value:"name"},{text:"Local",align:"left",value:"local"},{text:"Registro",align:"left",value:"date"},{text:"MAC",align:"left",value:"mac",sortable:!1},{text:"Ativo",align:"left",value:"active",sortable:!1},{text:"",value:"action",sortable:!1}],devices:[{name:"BalPass 2.0",description:"Weighing device of field animals identified with RFID.",local:"Picket from south cove (near the animal retreat).",date:"2019-06-13 19:43",mac:"00:22:18:fb:7a:12",branch:"Coimma",model:"BP-2.18.8",active:!0,chart:[{label:"Temperatura",data:[40,39,10,40,39,80,40]},{label:"Úmidade",data:[60,55,32,10,2,12,53]},{label:"Peso",data:[6,23,64,43,27,61,14]}],sensors:[{name:"DHT22",descriptor:"Temperature (from -40º to 125ºC, with ±0,5ºC accuracy)."},{name:"DHT22",descriptor:"Humidity (from 0 to 100%, with 5% accuracy)."},{name:"YGX-DYZ011",descriptor:"Weight (up to 80t, with 2% accuracy)."}]},{name:"Snooper 1.0",local:"Area 12 with iLPF (CCN program certified).",date:"2019-04-21 09:12",mac:"af:43:2c:ff:7b:d3",branch:"Embrapa",model:"1.16.12",active:!0,chart:[{label:"Temperatura",data:[40,39,10,40,39,80,40]},{label:"Úmidade",data:[60,55,32,10,2,12,53]},{label:"Iluminância",data:[25,32,18,4,34,83,12]},{label:"Pressão",data:[10,2,60,55,32,12,74]},{label:"Ventilação",data:[32,10,2,12,60,55,2]},{label:"Radiação UV",data:[55,32,67,10,2,12,41]},{label:"Ponto de Orvalho",data:[6,23,10,37,8,82,34]}],sensors:[{name:"DHT22",descriptor:"Temperatura (-40º a 125ºC, com precisão de ±0,5ºC)."},{name:"DHT22",descriptor:"Úmidade (0 a 100%, com precisão de 5%)."},{name:"TSL2561",descriptor:"Iluminância (0,1-40.000+ Lux)."},{name:"BMP180",descriptor:"Pressão atmosférica (300 à 1100hPa ou +9000 à -500 metros)."},{name:"3PS57",descriptor:"Ventilação (entre 100 rpm e 6000 rpm)."},{name:"UVM-30A",descriptor:"Radiação Ultravioleta (200 a 370nm, com exatidão de ±1UV)."},{name:"FA515",descriptor:"Ponto de orvalho (-80° a 20° Ctd)."}]},{name:"BalPass 1.0",local:"Picket from north cove (near the source of the creek).",date:"2018-04-11 11:22",mac:"11:34:a2:fb:7c:56",branch:"Coimma",model:"BP-1.16.3",active:!1,chart:[{label:"Temperatura",data:[40,39,10,40,39,80,40]},{label:"Úmidade",data:[60,55,32,10,2,12,53]},{label:"Peso",data:[6,23,64,43,27,61,14]}],sensors:[{name:"DHT22",descriptor:"Temperatura (-40º a 125ºC, com precisão de ±0,5ºC)."},{name:"DHT22",descriptor:"Úmidade (0 a 100%, com precisão de 5%)."},{name:"YGX-DYZ011",descriptor:"Massa/peso (até 80t, com precisão de 2%)."}]},{name:"BalPass 2.0",local:"Picket from handling hose (near the farmhouse).",date:"2017-12-23 08:12",mac:"41:f2:5b:fb:8a:98",branch:"Coimma",model:"BP-2.18.8",active:!0,chart:[{label:"Temperatura",data:[40,39,10,40,39,80,40]},{label:"Úmidade",data:[60,55,32,10,2,12,53]},{label:"Peso",data:[6,23,64,43,27,61,14]}],sensors:[{name:"DHT22",descriptor:"Temperatura (-40º a 125ºC, com precisão de ±0,5ºC)."},{name:"DHT22",descriptor:"Úmidade (0 a 100%, com precisão de 5%)."},{name:"YGX-DYZ011",descriptor:"Massa/peso (até 80t, com precisão de 2%)."}]}]}},computed:{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?1:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}},methods:{open:function(t){this.device=t,this.dialog=!0}}},st=at,rt=(a("61e6"),a("a75b")),ot=a("8fea"),nt=a("169a"),it=a("ce7e"),lt=a("891e"),ct=a("2fa4"),dt=a("71d9"),ft=a("2a7f"),vt=Object(v["a"])(st,Q,tt,!1,null,"038d7c51",null),ut=vt.exports;p()(vt,{VAvatar:m["a"],VBtn:g["a"],VCard:W["a"],VCardText:J["a"],VCardTitle:J["b"],VChip:x["a"],VContent:rt["a"],VDataTable:ot["a"],VDialog:nt["a"],VDivider:it["a"],VFlex:q["a"],VIcon:j["a"],VLayout:X["a"],VPagination:lt["a"],VSpacer:ct["a"],VToolbar:dt["a"],VToolbarItems:ft["a"],VToolbarTitle:ft["b"]}),s["a"].use(k["a"]);var pt=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"screensaver",component:T},{path:"/dashboard",name:"dashboard",component:K},{path:"/device",name:"device",component:ut},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),bt=a("9483");Object(bt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d1e7");s["a"].config.productionTip=!1,new s["a"]({router:pt,vuetify:o,render:function(t){return t(y)}}).$mount("#app")},"613c":function(t,e,a){},"61e6":function(t,e,a){"use strict";var s=a("1f26"),r=a.n(s);r.a},"6f44":function(t,e,a){"use strict";var s=a("613c"),r=a.n(s);r.a},"7bd0":function(t,e,a){},"7bf1":function(t,e,a){t.exports=a.p+"img/screensaver.530b2690.png"},9224:function(t){t.exports=JSON.parse('{"name":"ecattle-bigboxx-totem","version":"0.19.10-4","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"axios":"^0.19.0","chart.js":"^2.8.0","core-js":"^2.6.10","material-design-icons-iconfont":"^5.0.1","register-service-worker":"^1.6.2","vue":"^2.6.10","vue-chartjs":"^3.4.2","vue-router":"^3.0.3","vuetify":"^2.1.3"},"devDependencies":{"@vue/cli-plugin-babel":"^3.12.0","@vue/cli-plugin-eslint":"^3.12.0","@vue/cli-plugin-pwa":"^3.12.0","@vue/cli-service":"^3.12.0","@vue/eslint-config-standard":"^4.0.0","ajv":"^6.10.2","babel-eslint":"^10.0.1","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","sass":"^1.23.0","sass-loader":"^7.1.0","vue-cli-plugin-vuetify":"^0.5.0","vue-template-compiler":"^2.6.10","vuetify-loader":"^1.0.5"}}')}});
//# sourceMappingURL=app.4f46cddc.js.map