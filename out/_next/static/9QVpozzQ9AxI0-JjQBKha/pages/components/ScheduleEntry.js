(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+iuc":function(t,e,r){r("wgeU"),r("FlQf"),r("bBy9"),r("B9jh"),r("dL40"),r("xvv9"),r("V+O7"),t.exports=r("WEpk").Set},"2qu3":function(t,e,r){"use strict";var n=r("ttDY"),o=r("/HRN"),a=r("WaGi"),i=r("p0XB"),s=r("XXOK"),u=r("Qetd"),l=r("eVuF"),c=r("pLtp"),p=r("hfKm"),d=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};p(e,"__esModule",{value:!0});var f=d(r("q1tI")),h=r("8L3h"),m=r("jwwS"),v=[],g=[],y=!1;function b(t){var e=t(),r={loading:!0,loaded:null,error:null};return r.promise=e.then((function(t){return r.loading=!1,r.loaded=t,t})).catch((function(t){throw r.loading=!1,r.error=t,t})),r}function k(t){var e={loading:!1,loaded:{},error:null},r=[];try{c(t).forEach((function(n){var o=b(t[n]);o.loading?e.loading=!0:(e.loaded[n]=o.loaded,e.error=o.error),r.push(o.promise),o.promise.then((function(t){e.loaded[n]=t})).catch((function(t){e.error=t}))}))}catch(n){e.error=n}return e.promise=l.all(r).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function _(t,e){return f.default.createElement((r=t)&&r.__esModule?r.default:r,e);var r}function w(t,e){var r=u({loader:null,loading:null,delay:200,timeout:null,render:_,webpack:null,modules:null},e),n=null;function o(){if(!n){var e=new N(t,r);n={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var a=r.webpack();g.push((function(t){var e=!0,r=!1,n=void 0;try{for(var i,u=s(a);!(e=(i=u.next()).done);e=!0){var l=i.value;if(-1!==t.indexOf(l))return o()}}catch(c){r=!0,n=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}}))}var l=function(t,e){o();var a=f.default.useContext(m.LoadableContext),s=h.useSubscription(n);return f.default.useImperativeHandle(e,(function(){return{retry:n.retry}})),a&&i(r.modules)&&r.modules.forEach((function(t){a(t)})),s.loading||s.error?f.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:n.retry}):s.loaded?r.render(s.loaded,t):null};return l.preload=function(){return o()},l.displayName="LoadableComponent",f.default.forwardRef(l)}var N=function(){function t(e,r){o(this,t),this._loadFn=e,this._opts=r,this._callbacks=new n,this._delay=null,this._timeout=null,this.retry()}return a(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,r=this._opts;e.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){t._update(),t._clearTimeouts()})).catch((function(e){t._update(),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=u(u({},this._state),t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return u(u({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function O(t){return w(b,t)}function S(t,e){for(var r=[];t.length;){var n=t.pop();r.push(n(e))}return l.all(r).then((function(){if(t.length)return S(t,e)}))}O.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(k,t)},O.preloadAll=function(){return new l((function(t,e){S(v).then(t,e)}))},O.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new l((function(e){var r=function(){return y=!0,e()};S(g,t).then(r,r)}))},window.__NEXT_PRELOADREADY=O.preloadReady,e.default=O},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,r){t.exports=r("uekQ")},B8i6:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=(r("VNbw"),r("Owzh")),l=r("NpAb"),c=r("a6RD"),p=r.n(c),d=r("RleV"),f=r("q1tI"),h=r.n(f),m=r("UxUw"),v=h.a.createElement,g=p()((function(){return r.e(30).then(r.bind(null,"dewo"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["dewo"]},modules:["./FavouriteTalkButton"]}}),y=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return v("div",{className:"talk"},v("div",{className:"header"},v("div",{className:"time"},v("div",{className:"wrapper"},v("img",{src:"../../static/clock.svg",width:"24",height:"24"})),v("span",{className:"time-text"},v("span",{className:"time-text-day"},this.props.day,v("br",null)),this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString())),v("div",{className:"room"},v("div",{className:"wrapper"},v(d.default,{className:Object(m.a)(this.props.room)})),v("span",{className:"text room-name"},"Room ",this.props.room)),v("div",{className:"diff"},v("div",{className:"wrapper"},v(l.default,{difficulty:this.props.difficulty})),v("span",{className:"text diff-name"},this.props.difficulty)),v("div",{className:"heart"},v(g,{talkId:this.props.id,onClick:this.props.onFavoriteChange}))),v("div",{className:"talk-content"},v("p",{className:"day"},this.props.day),v("p",{className:"time-info"},this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString(),v("span",{className:"duration"},"\xa0(",this.props.timeEnd&&this.props.timeStart&&this.props.timeStart.diff(this.props.timeEnd)," min)")),v("p",{className:"type-info"},this.props.type,v("span",{className:"duration"},"\xa0(",this.props.timeEnd&&this.props.timeStart&&this.props.timeStart.diff(this.props.timeEnd)," min)")),v("h1",{className:"title"},this.props.title),this.props.speaker&&this.props.speaker.map((function(t){return v("div",null,v("p",{className:"speaker"},t.name),v("p",{className:"info"},t.info))})),v("div",{className:"tags"},this.props.tags&&this.props.language&&this.props.tags.concat([this.props.language]).map((function(e){return v(u.default,{key:e,name:e,selected:t.props.selectedTags.indexOf(e)>-1,onClick:function(){return t.props.onToggleTag(e)}})}))),v("hr",{className:"seperator"})))}}]),e}(h.a.Component);e.default=y},B9jh:function(t,e,r){"use strict";var n=r("Wu5q"),o=r("n3ko");t.exports=r("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return n.def(o(this,"Set"),t=0===t?0:t,t)}},n)},DacR:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=r("UxUw"),p=r("RleV"),d=(r("h5s+"),l.a.createElement),f=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=Object(c.a)(this.props.room),e={msGridColumn:this.props.index+1,msGridRow:1};return d(u.Fragment,null,this.props.showRoomHeader&&d("div",{className:"room-header ".concat(this.props.index%2==0?"room-even":"room-odd"),style:e},d(p.default,{className:t,small:!0})," ",d("div",{className:"room-header-text"},this.props.room)),this.props.children)}}]),e}(u.Component);e.default=f},NpAb:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=(r("HrOg"),r("q1tI")),l=r.n(u),c=l.a.createElement,p=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c("div",{className:"difficulty"},c("span",{className:"first active"}),c("span",{className:"second ".concat("Intermediate"==this.props.difficulty||"Advanced"==this.props.difficulty?"active":"")}),c("span",{className:"third ".concat("Advanced"==this.props.difficulty?"active":"")}))}}]),e}(l.a.Component);e.default=p},RleV:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=(r("hu+i"),l.a.createElement),p=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c("div",{className:"pin ".concat(this.props.small?"small":""," ").concat(this.props.className)},c("div",{className:"top",style:{borderColor:this.props.color}}),c("div",{className:"bottom",style:{borderColor:"".concat(this.props.color," transparent transparent  transparent")}}))}}]),e}(l.a.Component);e.default=p},UxUw:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("6BQ9");var n=r("UI+n"),o=["room-header-green","room-header-purple","room-header-red","room-header-yellow"],a=function(t){var e=Math.abs(n.program.rooms.indexOf(t)%o.length);return o[e]}},"V+O7":function(t,e,r){r("aPfg")("Set")},XWtR:function(t,e,r){var n=r("5T2Y").parseInt,o=r("oc46").trim,a=r("5pKv"),i=/^[-+]?0[xX]/;t.exports=8!==n(a+"08")||22!==n(a+"0x16")?function(t,e){var r=o(String(t),3);return n(r,e>>>0||(i.test(r)?16:10))}:n},Z2Vs:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ScheduleEntry",function(){return r("w77i")}])},a6RD:function(t,e,r){"use strict";var n=r("pLtp"),o=r("Qetd"),a=r("eVuF"),i=r("hfKm"),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var u=s(r("q1tI")),l=s(r("2qu3")),c=!1;function p(t,e){if(delete e.webpack,delete e.modules,!c)return t(e);var r=e.loading;return function(){return u.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=p,e.default=function(t,e){var r=l.default,i={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};if(t instanceof a?i.loader=function(){return t}:"function"===typeof t?i.loader=t:"object"===typeof t&&(i=o(o({},i),t)),i=o(o({},i),e),"object"===typeof t&&!(t instanceof a)&&(t.render&&(i.render=function(e,r){return t.render(r,e)}),t.modules)){r=l.default.Map;var s={},u=t.modules();n(u).forEach((function(t){var e=u[t];"function"!==typeof e.then?s[t]=e:s[t]=function(){return e.then((function(t){return t.default||t}))}})),i.loader=s}if(i.loadableGenerated&&delete(i=o(o({},i),i.loadableGenerated)).loadableGenerated,"boolean"===typeof i.ssr){if(!i.ssr)return delete i.ssr,p(r,i);delete i.ssr}return r(i)}},dEVD:function(t,e,r){var n=r("Y7ZC"),o=r("XWtR");n(n.G+n.F*(parseInt!=o),{parseInt:o})},dL40:function(t,e,r){var n=r("Y7ZC");n(n.P+n.R,"Set",{toJSON:r("8iia")("Set")})},jwwS:function(t,e,r){"use strict";var n=r("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};n(e,"__esModule",{value:!0});var a=o(r("q1tI"));e.LoadableContext=a.createContext(null)},oc46:function(t,e,r){var n=r("Y7ZC"),o=r("Jes0"),a=r("KUxP"),i=r("5pKv"),s="["+i+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(t,e,r){var o={},s=a((function(){return!!i[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),u=o[t]=s?e(p):i[t];r&&(o[r]=u),n(n.P+n.F*s,"String",o)},p=c.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},ttDY:function(t,e,r){t.exports=r("+iuc")},uekQ:function(t,e,r){r("dEVD"),t.exports=r("WEpk").parseInt},vYYK:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("hfKm"),o=r.n(n);function a(t,e,r){return e in t?o()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},w77i:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=r("B8i6"),p=r("DacR"),d=r("6BQ9"),f=r.n(d),h=r("vYYK"),m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";Object(n.a)(this,t),Object(h.a)(this,"hours",void 0),Object(h.a)(this,"minutes",void 0),this.hours=f()(e),this.minutes=f()(r)}return Object(o.a)(t,[{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".";return("0"+this.hours).slice(-2)+t+("0"+this.minutes).slice(-2)}},{key:"add",value:function(t){return this.hours+=t.hours+Math.floor((this.minutes+t.minutes)/60),this.minutes=(this.minutes+t.minutes)%60,this}},{key:"copy",value:function(){var e=new t;return e.add(this),e}},{key:"diff",value:function(t){return Math.abs(60*this.hours+this.minutes-t.minutes-60*t.hours)}}],[{key:"fromString",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=e.split(r);return new t(n[0],n[1])}},{key:"fromNumber",value:function(e){return new t(e.toString().substring(0,e.toString().length-2),e.toString().substring(e.toString().length-2,e.toString().length))}}]),t}();var v=l.a.createElement,g=function(t){function e(t){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).call(this,t))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"createRoom",value:function(t,e){for(var r=this,n=m.fromNumber(this.props.slot.timeStart),o=0,a=t.talks.map((function(a){var i=n.copy().add(function(t){switch(t.type){case"Lightning talk (10 minutes)":return new m("00","10");case"Short presentation (30 minutes)":return new m("00","30");case"Long presentation (60 minutes)":return new m("01","00");case"Workshop (90 minutes)":return new m("01","30")}return new m}(a)),s={msGridRow:o+2,msGridColumn:e+1},u=v("div",{className:"talk-container ".concat(o%2==0?"talk-even":"talk-odd"," ").concat(e%2==0?"room-even":"room-odd"),key:o,style:s},v(c.default,{title:a.title,speaker:a.speakers,room:t.name,type:a.type,language:a.language,difficulty:a.difficulty,id:a.talkId,key:o,day:r.props.day,tags:a.tags,timeStart:n,timeEnd:i,selectedTags:r.props.tags,onToggleTag:r.props.onToggleTag}));return n=i,a.hide||o++,a.hide?"":u})),i=t.talks.filter((function(t){return!t.hide})).length,s=0;s<this.props.trackLength-i;s++){var u=o+s;a.push(v("div",{className:"talk-container empty ".concat(u%2==0?"talk-even":"talk-odd"," ").concat(e%2==0?"room-even":"room-odd"),key:s}))}return a}},{key:"render",value:function(){var t=this;if(this.props.slot&&this.props.slot.rooms&&1==this.props.slot.rooms.length){var e=this.props.slot.rooms[0];return v("div",{className:"rooms single-track"},this.props.slot.rooms&&v(p.default,{key:e.name,showRoomHeader:!1,room:e},this.createRoom(e,0)))}var r={gridTemplateColumns:"repeat(".concat(this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.length,", 1fr)"),gridTemplateRows:"60px ".concat(this.props.trackLength>0?"repeat(".concat(this.props.trackLength,", 1fr)"):""),msGridRows:"60px  ".concat(this.props.trackLength>0?"(1fr)[".concat(this.props.trackLength,"]"):""),msGridColumns:"(1fr) [".concat(this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.length,"]")};return v("div",{className:"rooms multi-track",style:r},this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.map((function(e,r){return v(p.default,{key:e.name,index:r,showRoomHeader:t.props.showRoomHeader,room:e.name},t.createRoom(e,r))})))}}]),e}(u.Component);e.default=g},xvv9:function(t,e,r){r("cHUd")("Set")}},[["Z2Vs",0,1,2]]]);