(function(e){function t(t){for(var n,c,o=t[0],i=t[1],f=t[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,f||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="weathersite/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var u=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"199c":function(e,t){},"23be":function(e,t,s){"use strict";var n=s("199c"),a=s.n(n);t["default"]=a.a},"3dfd":function(e,t,s){"use strict";var n=s("d222"),a=s("23be"),r=(s("034f"),s("2877")),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("3dfd"),r=s("8c4f"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("nav",{staticClass:"dateday",attrs:{div:""}},[e._v(e._s(e.moment().format("MMM Do YY")))]),s("div",{staticClass:"col-6 offset-3"},[s("div",{staticClass:"maindiv vh-100"},[s("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[s("b-input-group-text",{staticClass:"cursorPointer",on:{click:e.checkWeather}},[e._v("Search")])]},proxy:!0},{key:"append",fn:function(){return[s("b-dropdown",{staticClass:"navbutton",attrs:{text:"Country",variant:"primary"},on:{change:function(t){return e.checkWeather()}},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}},[s("b-dropdown-item",{on:{click:function(t){e.city="Sweden"}}},[e._v("Sweden")]),s("b-dropdown-item",{on:{click:function(t){e.city="England"}}},[e._v("England")]),s("b-dropdown-item",{on:{click:function(t){e.city="USA"}}},[e._v("USA")]),s("b-dropdown-item",{on:{click:function(t){e.city="Australia"}}},[e._v("Australia")])],1)]},proxy:!0}])},[s("b-form-input",{model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),e.weatherResult?s("div",[s("weatherbox",{attrs:{weatherresult:e.weatherResult}})],1):e._e()],1)])])},o=[],i=(s("4de4"),s("d3b7"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-card",{staticClass:"mb-2",staticStyle:{"margin-top":"5px"},attrs:{title:"Weather","img-top":"",tag:"article"}},[s("b-card-text",[e._v(" Temperature "+e._s(e.weatherresult.current.feelslike_c)+" C "),s("br"),e._v(" Humidity "+e._s(e.weatherresult.current.humidity)+" ")])],1)],1)}),f=[],u={props:["weatherresult"],created:function(){console.log(this.weatheresult)}},d=u,l=s("2877"),b=Object(l["a"])(d,i,f,!1,null,null,null),j=b.exports,h=s("c1df"),p={name:"Home",components:{weatherbox:j},data:function(){return{moment:h,weatherResult:null,city:""}},methods:{checkWeather:function(){var e=this;fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q="+this.city+"&days=3",{method:"GET",headers:{"x-rapidapi-key":"b439b67740msh370f0ca1f7f80d8p148b74jsn26ad6f4ca21e","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(t){e.weatherResult=t,e.$store.commit("addSearch",{city:e.city,result:t})})).catch((function(e){console.error(e)}))}},computed:{searches:function(){return this.$store.getters.searches},result:function(){var e=this;return this.searches.filter((function(t){return t.city==e.city}))[0]}}},m=p,v=Object(l["a"])(m,c,o,!1,null,null,null),g=v.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Recent-search"},[s("h2",[e._v("Recently searched")]),s("div",{staticClass:"row"},e._l(e.searches,(function(e,t){return s("div",{key:t,staticClass:"col-md-4"},[s("weatherbox",{attrs:{weatherresult:e.result}})],1)})),0)])},w=[],k={data:function(){return{}},components:{weatherbox:j},methods:{},created:function(){},computed:{searches:function(){return this.$store.getters.searches}}},_=k,x=Object(l["a"])(_,y,w,!1,null,null,null),z=x.exports;n["default"].use(r["a"]);var O=[{path:"/",name:"Home",component:g},{path:"/recent-search",name:"recent-search",component:z}],S=new r["a"]({routes:O,mode:"hash",base:"Weathersite-project"}),C=S,E=s("2f62"),W=function(e){e.subscribe((function(e,t){localStorage.setItem("items",JSON.stringify(t))}))};n["default"].use(E["a"]);var M=new E["a"].Store({plugins:[W],getters:{searches:function(e){return e.items}},state:{items:[]},mutations:{initializeStore:function(){var e=localStorage.getItem("items");e&&this.replaceState(Object.assign(this.state,JSON.parse(e)))},addSearch:function(e,t){e.items.push(t)}},actions:{},modules:{}}),N=s("5f5b"),P=s("b1e0"),$=(s("f9e3"),s("2dd8"),s("9483"));Object($["a"])("".concat("weathersite/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].use(N["a"]),n["default"].use(P["a"]),n["default"].config.productionTip=!1,new n["default"]({router:C,store:M,created:function(){M.commit("initializeStore")},render:function(e){return e(a["default"])}}).$mount("#app")},"85ec":function(e,t,s){},d222:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark"}},[s("b-navbar-brand",{attrs:{href:"/Weathersite-project/"}},[e._v("Home")]),s("b-navbar-brand",{attrs:{href:"/Weathersite-project/#/recent-search"}},[e._v("Recent search")]),s("div",{staticClass:"header"},[s("h1",[s("img",{attrs:{src:"/Weathersite-project/img/icons/weather.png",width:"40px"}}),e._v(" WeatherNow ")])]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav"),s("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)],1),s("router-view")],1)},a=[]}});
//# sourceMappingURL=app.5e7a1616.js.map