(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var o=a(n("q1tI")),s=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(s.AmpStateContext))}},"/h46":function(t,e,n){n("cHUd")("Map")},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"16Al":function(t,e,n){"use strict";var r=n("WbBG");function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,o,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},"17x9":function(t,e,n){t.exports=n("16Al")()},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"2qu3":function(t,e,n){"use strict";var r=n("ttDY"),a=n("/HRN"),o=n("WaGi"),s=n("p0XB"),i=n("XXOK"),u=n("Qetd"),c=n("eVuF"),l=n("pLtp"),p=n("hfKm"),f=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};p(e,"__esModule",{value:!0});var d=f(n("q1tI")),h=n("8L3h"),m=n("jwwS"),v=[],g=[],y=!1;function b(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}function k(t){var e={loading:!1,loaded:{},error:null},n=[];try{l(t).forEach((function(r){var a=b(t[r]);a.loading?e.loading=!0:(e.loaded[r]=a.loaded,e.error=a.error),n.push(a.promise),a.promise.then((function(t){e.loaded[r]=t})).catch((function(t){e.error=t}))}))}catch(r){e.error=r}return e.promise=c.all(n).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function O(t,e){return d.default.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function w(t,e){var n=u({loader:null,loading:null,delay:200,timeout:null,render:O,webpack:null,modules:null},e),r=null;function a(){if(!r){var e=new N(t,n);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()}if(!y&&"function"===typeof n.webpack){var o=n.webpack();g.push((function(t){var e=!0,n=!1,r=void 0;try{for(var s,u=i(o);!(e=(s=u.next()).done);e=!0){var c=s.value;if(-1!==t.indexOf(c))return a()}}catch(l){n=!0,r=l}finally{try{e||null==u.return||u.return()}finally{if(n)throw r}}}))}var c=function(t,e){a();var o=d.default.useContext(m.LoadableContext),i=h.useSubscription(r);return d.default.useImperativeHandle(e,(function(){return{retry:r.retry}})),o&&s(n.modules)&&n.modules.forEach((function(t){o(t)})),i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,t):null};return c.preload=function(){return a()},c.displayName="LoadableComponent",d.default.forwardRef(c)}var N=function(){function t(e,n){a(this,t),this._loadFn=e,this._opts=n,this._callbacks=new r,this._delay=null,this._timeout=null,this.retry()}return o(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;e.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){t._update(),t._clearTimeouts()})).catch((function(e){t._update(),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=u(u({},this._state),t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return u(u({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function T(t){return w(b,t)}function j(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return c.all(n).then((function(){if(t.length)return j(t,e)}))}T.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(k,t)},T.preloadAll=function(){return new c((function(t,e){j(v).then(t,e)}))},T.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new c((function(e){var n=function(){return y=!0,e()};j(g,t).then(n,n)}))},window.__NEXT_PRELOADREADY=T.preloadReady,e.default=T},"5W5Q":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schedule",function(){return n("NTwR")}])},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,n){t.exports=n("uekQ")},"71sZ":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("q1tI"),c=n.n(u),l=c.a.createElement,p=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return l("div",{className:"event-header"},l("span",{className:"type"},this.props.type),l("span",{className:"time"},this.props.timeStart," - ",this.props.timeEnd))}}]),e}(c.a.Component);e.default=p},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),a=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};a(e,"__esModule",{value:!0});var s=o(n("q1tI")),i=o(n("Xuae")),u=n("lwAK"),c=n("FYa8"),l=n("/0+H");function p(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[s.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===s.default.Fragment?t.concat(s.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=p;var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=s.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(p(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,a={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?s=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?s=!1:e.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var p=o.props[l],f=a[l]||new r;f.has(p)?s=!1:(f.add(p),a[l]=f)}}}return s}}()).reverse().map((function(t,e){var n=t.key||e;return s.default.cloneElement(t,{key:n})}))}var m=i.default();function v(t){var e=t.children;return s.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return s.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return s.default.createElement(m,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)}))}))}v.rewind=m.rewind,e.default=v},"8L3h":function(t,e,n){"use strict";t.exports=n("f/k9")},"9Jkg":function(t,e,n){t.exports=n("oh+g")},B8i6:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("vYYK"),c=(n("VNbw"),n("Owzh")),l=n("NpAb"),p=n("a6RD"),f=n.n(p),d=n("RleV"),h=n("q1tI"),m=n.n(h),v=n("UxUw"),g=m.a.createElement,y=f()((function(){return n.e(31).then(n.bind(null,"dewo"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["dewo"]},modules:["./FavouriteTalkButton"]}}),b=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this;return g("div",{className:"talk ".concat(this.props.visibility?"":"talk-hidden")},g("div",{className:"header"},g("div",{className:"time"},g("div",{className:"wrapper"},g("img",{src:"../../static/clock.svg",width:"24",height:"24"})),g("span",{className:"time-text"},g("span",{className:"time-text-day"},this.props.day,g("br",null)),this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString())),g("div",{className:"room"},g("div",{className:"wrapper"},g(d.default,{className:Object(v.a)(this.props.room)})),g("span",{className:"text room-name"},this.props.room)),g("div",{className:"diff"},g("div",{className:"wrapper"},g(l.default,{difficulty:this.props.difficulty})),g("span",{className:"text diff-name"},this.props.difficulty)),g("div",{className:"heart"},g(y,{talkId:this.props.id,onClick:this.props.onFavoriteChange}))),g("div",{className:"talk-content"},g("p",{className:"day"},this.props.day),g("p",{className:"time-info"},this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString(),g("span",{className:"duration"},"\xa0(",this.props.timeEnd&&this.props.timeStart&&this.props.timeStart.diff(this.props.timeEnd)," min)")),g("p",{className:"type-info"},this.props.type,g("span",{className:"duration"},"\xa0(",this.props.timeEnd&&this.props.timeStart&&this.props.timeStart.diff(this.props.timeEnd)," min)")),g("h1",{className:"title"},this.props.title),this.props.description&&g("p",null,this.props.description),this.props.speaker&&this.props.speaker.map((function(t){return g("div",null,g("p",{className:"speaker"},t.name),g("p",{className:"info"},t.info))})),g("div",{className:"tags"},this.props.tags&&this.props.language&&this.props.tags.concat([this.props.language]).map((function(e){return g(c.default,{key:e,name:e,selected:t.props.selectedTags.indexOf(e)>-1,onClick:function(){return t.props.onToggleTag(e)}})}))),g("hr",{className:"seperator"})))}}]),e}(m.a.Component);Object(u.a)(b,"defaultProps",{visibility:!0}),e.default=b},DacR:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("q1tI"),c=n.n(u),l=n("UxUw"),p=n("RleV"),f=(n("h5s+"),c.a.createElement),d=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=Object(l.a)(this.props.room),e={msGridColumn:this.props.index+1,msGridRow:1};return f(u.Fragment,null,this.props.showRoomHeader&&f("div",{className:"room-header ".concat(this.props.index%2==0?"room-even":"room-odd"),style:e},f(p.default,{className:t,small:!0}),f("div",{className:"room-header-text"},this.props.room)),this.props.children)}}]),e}(u.Component);e.default=d},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var o=a(n("q1tI"));e.HeadManagerContext=o.createContext(null)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),a=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},LX0d:function(t,e,n){t.exports=n("UDep")},M623:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("q1tI"),c=n.n(u),l=n("YFqc"),p=n.n(l),f=(n("jkxm"),c.a.createElement),d=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return f("nav",{role:"navigation"},f("div",{id:"menuToggle"},f("input",{type:"checkbox",className:"menu"}),f("div",{className:"menuButton"},f("span",{className:"top"}),f("span",{className:"middle"}),f("span",{className:"bottom"})),f("div",{id:"filter"}),f("div",{id:"menu"},f("h1",{className:"menuHeader"},"Menu"),f(p.a,{href:"/practicalities"},f("a",{className:"link practicalities"},"Practicalities")),f(p.a,{href:"/schedule"},f("a",{className:"link schedule"},"Schedule")),f(p.a,{href:"/talksAndSpeakers"},f("a",{className:"link talksAndSpeakers"},"Talks and speakers")),f(p.a,{href:"/location"},f("a",{className:"link location"},"Location")),f(p.a,{href:"/codeOfConduct"},f("a",{className:"link codeOfConduct"},"Code of conduct")),f(p.a,{href:"/logo"},f("a",{className:"link logo"},"Logo")),f(p.a,{href:"/static/old/index_2019.html"},f("a",{className:"link"},"Last years program")))))}}]),e}(c.a.Component);e.default=d},NTwR:function(t,e,n){"use strict";n.r(e);var r=n("pLtp"),a=n.n(r),o=n("9Jkg"),s=n.n(o),i=n("0iUn"),u=n("sLSF"),c=n("MI3g"),l=n("a7VT"),p=n("AT/M"),f=n("Tit0"),d=(n("q1vP"),n("zUaL")),h=n("yHM/"),m=n("q1tI"),v=n.n(m),g=n("UI+n"),y=n("s0xL"),b=v.a.createElement,k=function(t){function e(t){var n;Object(i.a)(this,e),n=Object(c.a)(this,Object(l.a)(e).call(this,t));var r=JSON.parse(s()(g.program));return n.state={filteredProgram:r,showOnlyFavorites:!1,tags:[],currentDayIndex:0},n.handleFilterChange=n.handleFilterChange.bind(Object(p.a)(n)),n.handleFavoriteChange=n.handleFavoriteChange.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"getRooms",value:function(t){var e={};return t.slots.reduce((function(t,e){return t.concat(e.rooms)}),[]).forEach((function(t){t&&(e[t.name]=!0)})),a()(e)}},{key:"handleFilterChange",value:function(t){this.setState({tags:t},this.filterProgram)}},{key:"handleFavoriteChange",value:function(t){this.setState({showOnlyFavorites:t},this.filterProgram)}},{key:"handleToggleTag",value:function(t){this.setState((function(e){return e.tags.indexOf(t)>-1?{tags:e.tags.filter((function(e){return e!=t}))}:{tags:e.tags.concat(t)}}),this.filterProgram)}},{key:"filterProgram",value:function(){var t=this,e=JSON.parse(s()(g.program));e.days.forEach((function(e){return e.slots.forEach((function(e){return e.rooms&&e.rooms.forEach((function(e){e.talks.forEach((function(e){var n=e.tags.concat([e.language]);t.state.showOnlyFavorites&&!localStorage.getItem(e.talkId)?e.hide=!0:e.hide=t.state.tags.length>0&&!n.some((function(e){return t.state.tags.indexOf(e)>-1}))}))}))}))})),this.setState({filteredProgram:e})}},{key:"setDay",value:function(t){this.setState({currentDayIndex:t})}},{key:"render",value:function(){var t=this;return b("div",{className:"schedule page"},b(d.default,{title:"Schedule",filter:"small",onTagChange:this.handleFilterChange,onFavoriteChange:this.handleFavoriteChange,showOnlyFavorites:this.state.showOnlyFavorites,selectedTags:this.state.tags,hideLogo:"small",background:!0},b("div",{className:"schedule-document negative-margin"},b("div",{className:"day-selector-top"},this.state.filteredProgram.days.map((function(e,n){return b("span",{key:e.day},0!=n&&b("span",null," | "),b("span",{onClick:function(){return t.setDay(n)},className:"header-day ".concat(t.state.currentDayIndex==n?"selected":"")},e.day))}))),b("div",{className:"schedule-container"},b("div",{className:"header"},b(y.default,{onTagChange:this.handleFilterChange,onFavoriteChange:this.handleFavoriteChange,selectedTags:this.state.tags,showOnlyFavorites:this.state.showOnlyFavorites,className:"hide-small schedule-filter",type:"dropdown"}),b("div",{className:"header-title"},b("h1",{className:"title"},"Schedule"),b("div",{className:"day-selector-header"},this.state.filteredProgram.days.map((function(e,n){return b("span",{key:e.day},0!=n&&b("span",{className:"seperator"}," | "),b("span",{onClick:function(){return t.setDay(n)},className:"header-day ".concat(t.state.currentDayIndex==n?"selected":"")},e.day))}))))),this.state.filteredProgram.days.length>0&&b(h.default,{onToggleTag:function(e){return t.handleToggleTag(e)},tags:this.state.tags,currDay:this.state.filteredProgram.days[this.state.currentDayIndex],slots:this.state.filteredProgram.days[this.state.currentDayIndex]&&this.state.filteredProgram.days[this.state.currentDayIndex].slots})))))}}]),e}(m.Component);e.default=k},NpAb:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=(n("HrOg"),n("q1tI")),c=n.n(u),l=c.a.createElement,p=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return l("div",{className:"difficulty"},l("span",{className:"first active"}),l("span",{className:"second ".concat("Intermediate"==this.props.difficulty||"Advanced"==this.props.difficulty?"active":"")}),l("span",{className:"third ".concat("Advanced"==this.props.difficulty?"active":"")}))}}]),e}(c.a.Component);e.default=p},PQJW:function(t,e,n){var r=n("d04V"),a=n("yLu3");t.exports=function(t){if(a(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},RleV:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("q1tI"),c=n.n(u),l=(n("hu+i"),c.a.createElement),p=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return l("div",{className:"pin ".concat(this.props.small?"small":""," ").concat(this.props.className)},l("div",{className:"top",style:{borderColor:"#FF00FF"}}),l("div",{className:"bottom",style:{borderColor:"#FF00FF transparent transparent  transparent"}}))}}]),e}(c.a.Component);e.default=p},TbGu:function(t,e,n){var r=n("fGSI"),a=n("PQJW"),o=n("2PDY");t.exports=function(t){return r(t)||a(t)||o()}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},UxUw:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("6BQ9");var r=n("UI+n"),a=["room-header-green","room-header-purple","room-header-red","room-header-yellow"],o=function(t){var e=Math.abs(r.program.rooms.indexOf(t)%a.length);return a[e]}},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),s=n("sNwI"),i=n("NwJ3"),u=n("tEej"),c=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,a,p,f=o(t),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,g=0,y=l(f);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==y||d==Array&&i(y))for(n=new d(e=u(f.length));e>g;g++)c(n,g,v?m(f[g],g):f[g]);else for(p=y.call(f),n=new d;!(a=p.next()).done;g++)c(n,g,v?s(p,m,[a.value,g],!0):a.value);return n.length=g,n}})},WbBG:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},XWtR:function(t,e,n){var r=n("5T2Y").parseInt,a=n("oc46").trim,o=n("5pKv"),s=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=a(String(t),3);return r(n,e>>>0||(s.test(n)?16:10))}:r},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),o=n("/+P4"),s=n("K47E"),i=n("WaGi"),u=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var p=n("q1tI"),f=!1;e.default=function(){var t,e=new l;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){function l(t){var i;return r(this,l),i=a(this,o(l).call(this,t)),f&&(e.add(s(i)),n(s(i))),i}return u(l,c),i(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(p.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},Yw23:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("q1tI"),c=n.n(u),l=(n("OQJa"),c.a.createElement),p=function(t){function e(t){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).call(this,t))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this;return l("div",{className:"switch ".concat(this.props.showOnlyFavorites?"on":""),onClick:function(){return t.props.onClick(!t.props.showOnlyFavorites)}},l("div",{className:"ball"}))}}]),e}(u.Component);e.default=p},a6RD:function(t,e,n){"use strict";var r=n("pLtp"),a=n("Qetd"),o=n("eVuF"),s=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};s(e,"__esModule",{value:!0});var u=i(n("q1tI")),c=i(n("2qu3")),l=!1;function p(t,e){if(delete e.webpack,delete e.modules,!l)return t(e);var n=e.loading;return function(){return u.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=p,e.default=function(t,e){var n=c.default,s={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};if(t instanceof o?s.loader=function(){return t}:"function"===typeof t?s.loader=t:"object"===typeof t&&(s=a(a({},s),t)),s=a(a({},s),e),"object"===typeof t&&!(t instanceof o)&&(t.render&&(s.render=function(e,n){return t.render(n,e)}),t.modules)){n=c.default.Map;var i={},u=t.modules();r(u).forEach((function(t){var e=u[t];"function"!==typeof e.then?i[t]=e:i[t]=function(){return e.then((function(t){return t.default||t}))}})),s.loader=i}if(s.loadableGenerated&&delete(s=a(a({},s),s.loadableGenerated)).loadableGenerated,"boolean"===typeof s.ssr){if(!s.ssr)return delete s.ssr,p(n,s);delete s.ssr}return n(s)}},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),a=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),i=n("N9n2"),u=n("5Uuq"),c=n("KI45");e.__esModule=!0,e.default=void 0;var l,p=c(n("LX0d")),f=n("QmWs"),d=u(n("q1tI")),h=(c(n("17x9")),c(n("nOHt"))),m=(n("P5f7"),n("g/15"));function v(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var g=new p.default,y=window.IntersectionObserver;function b(){return l||(y?l=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){function e(t){var n;return r(this,e),(n=o(this,s(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var s=t(a,o);return e=a,n=o,r=s,s}}((function(t,e){return{href:v(t),as:e?v(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,a=e.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,i=o.as;if(function(t){var e=(0,f.parse)(t,!1,!0),n=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var u=window.location.pathname;s=(0,f.resolve)(u,s),i=i?(0,f.resolve)(u,i):s,t.preventDefault();var c=n.props.scroll;null==c&&(c=i.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](s,i,{shallow:n.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return i(e,t),a(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var n=b();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()})))}},{key:"prefetch",value:function(){if(this.p){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(t,e);h.default.prefetch(n)}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var o=d.Children.only(e),s={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||r),d.default.cloneElement(o,s)}}]),e}(d.Component);k.propTypes=void 0;var O=k;e.default=O},d04V:function(t,e,n){t.exports=n("0tVQ")},dEVD:function(t,e,n){var r=n("Y7ZC"),a=n("XWtR");r(r.G+r.F*(parseInt!=a),{parseInt:a})},dVTT:function(t,e,n){n("aPfg")("Map")},"f/k9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;var e={};for(t=0;10>t;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(t,e){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");for(var n,r=Object(t),i=1;i<arguments.length;i++){var u=Object(arguments[i]);for(var c in u)o.call(u,c)&&(r[c]=u[c]);if(a){n=a(u);for(var l=0;l<n.length;l++)s.call(u,n[l])&&(r[n[l]]=u[n[l]])}}return r};e.useSubscription=function(t){var e=t.getCurrentValue,n=t.subscribe,a=r.useState((function(){return{getCurrentValue:e,subscribe:n,value:e()}}));t=a[0];var o=a[1];return a=t.value,t.getCurrentValue===e&&t.subscribe===n||(a=e(),o({getCurrentValue:e,subscribe:n,value:a})),r.useDebugValue(a),r.useEffect((function(){function t(){if(!r){var t=e();o((function(r){return r.getCurrentValue!==e||r.subscribe!==n||r.value===t?r:i({},r,{value:t})}))}}var r=!1,a=n(t);return t(),function(){r=!0,a()}}),[e,n]),a}},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),a=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(a(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(a(this,"Map"),0===t?0:t,e)}},r,!0)},jwwS:function(t,e,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var o=a(n("q1tI"));e.LoadableContext=o.createContext(null)},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var o=a(n("q1tI"));e.AmpStateContext=o.createContext({})},oc46:function(t,e,n){var r=n("Y7ZC"),a=n("Jes0"),o=n("KUxP"),s=n("5pKv"),i="["+s+"]",u=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),l=function(t,e,n){var a={},i=o((function(){return!!s[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),u=a[t]=i?e(p):s[t];n&&(a[n]=u),r(r.P+r.F*i,"String",a)},p=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},"oh+g":function(t,e,n){var r=n("WEpk"),a=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},s0xL:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=(n("2jdu"),n("q1tI")),c=n.n(u),l=n("UI+n"),p=n("Owzh"),f=n("Yw23"),d=c.a.createElement,h=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).state={open:!1},n}return Object(i.a)(e,t),Object(a.a)(e,[{key:"toggle",value:function(){this.setState((function(t){return{open:!t.open}}))}},{key:"addTag",value:function(t){this.props.onTagChange(this.props.selectedTags.concat([t]))}},{key:"removeTag",value:function(t){this.props.onTagChange(this.props.selectedTags.filter((function(e){return e!=t})))}},{key:"render",value:function(){var t=this;return d("div",{className:"filter-container ".concat(this.props.className," ").concat(this.props.type||"slide-left")},d("div",{className:"filter-button ".concat(this.state.open?"open":""),onClick:function(){return t.toggle()}},d("div",{className:"filter-button-container"},d("span",{className:"top"}),d("span",{className:"middle"}),d("span",{className:"bottom"}))),d("div",{className:"filter ".concat(this.state.open?"open":"")},d("img",{src:"../static/close-24px.svg",className:"close",onClick:function(){return t.toggle()}}),d("h1",{className:"header"},"Filter by tag"),d("div",{className:"favorite"},d("p",{className:"subheader"},"Show only favorites: "),d(f.default,{showOnlyFavorites:this.props.showOnlyFavorites,onClick:function(){return t.props.onFavoriteChange(!t.props.showOnlyFavorites)}})),d("div",{className:"active"},d("p",{className:"subheader"},"Active filters:"),this.props.selectedTags&&this.props.selectedTags.map((function(e){return d(p.default,{key:e,name:e,selected:!0,onClick:function(){return t.removeTag(e)}})}))),d("div",{className:"nonActive"},d("p",{className:"subheader"},"Click to select filters"),l.program.tags.concat(l.program.languages).filter((function(e){return t.props.selectedTags&&!t.props.selectedTags.some((function(t){return t==e}))})).map((function(e){return d(p.default,{key:e,name:e,onClick:function(){return t.addTag(e)}})})))))}}]),e}(c.a.Component);e.default=h},uekQ:function(t,e,n){n("dEVD"),t.exports=n("WEpk").parseInt},vYYK:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("hfKm"),a=n.n(r);function o(t,e,n){return e in t?a()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},w77i:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=n("q1tI"),c=n.n(u),l=n("B8i6"),p=n("DacR"),f=n("yNXk"),d=c.a.createElement,h=function(t){function e(t){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).call(this,t))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"createRoom",value:function(t,e){for(var n=this,r=f.a.fromNumber(this.props.slot.timeStart),a=0,o=t.talks.map((function(o){var s={msGridRow:a+2,msGridColumn:e+1},i=r.copy().add(Object(f.b)(o)),u=d("div",{className:"talk-container ".concat(a%2==0?"talk-even":"talk-odd"," ").concat(e%2==0?"room-even":"room-odd"),key:a,style:s},d(l.default,{visibility:!o.hide,day:n.props.day,timeStart:r,timeEnd:i,room:t.name,difficulty:o.difficulty,id:o.talkId,type:o.type,title:o.title,speaker:o.speakers,tags:o.tags,selectedTags:n.props.tags,language:o.language,onToggleTag:n.props.onToggleTag,key:a}));return r=i,o.hide||a++,u})),s=t.talks.filter((function(t){return!t.hide})).length,i=0;i<this.props.trackLength-s;i++){var u=a+i;o.push(d("div",{className:"talk-container empty ".concat(u%2==0?"talk-even":"talk-odd"," ").concat(e%2==0?"room-even":"room-odd"),key:i}))}return o}},{key:"render",value:function(){var t=this;if(this.props.slot&&this.props.slot.rooms&&1==this.props.slot.rooms.length){var e=this.props.slot.rooms[0];return d("div",{className:"rooms single-track"},this.props.slot.rooms&&d(p.default,{key:e.name,showRoomHeader:!1,room:e},this.createRoom(e,0)))}var n={gridTemplateColumns:"repeat(".concat(this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.length,", 1fr)"),gridTemplateRows:"60px ".concat(this.props.trackLength>0?"repeat(".concat(this.props.trackLength,", 1fr)"):""),msGridRows:"60px  ".concat(this.props.trackLength>0?"(1fr)[".concat(this.props.trackLength,"]"):""),msGridColumns:"(1fr) [".concat(this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.length,"]")};return d("div",{className:"rooms multi-track",style:n},this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.map((function(e,n){return d(p.default,{key:e.name,index:n,showRoomHeader:t.props.showRoomHeader,room:e.name},t.createRoom(e,n))})))}}]),e}(u.Component);e.default=h},"yHM/":function(t,e,n){"use strict";n.r(e);var r=n("p0XB"),a=n.n(r);var o=n("d04V"),s=n.n(o),i=n("yLu3"),u=n.n(i);function c(t){return function(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=n("0iUn"),p=n("sLSF"),f=n("MI3g"),d=n("a7VT"),h=n("Tit0"),m=n("q1tI"),v=n.n(m),g=n("71sZ"),y=n("w77i"),b=v.a.createElement,k=function(t){function e(){return Object(l.a)(this,e),Object(f.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"longestTrack",value:function(t){return Math.max.apply(Math,c(t.rooms&&t.rooms.map((function(t){return t.talks&&t.talks.filter((function(t){return!t.hide})).length}))))}},{key:"render",value:function(){var t=this;return b("div",{className:"day"},this.props.slots&&this.props.slots.map((function(e,n){return b("div",{key:n+"slot",className:"slot"},b(g.default,{key:n+"slot",timeStart:e.timeStart,timeEnd:e.timeEnd,type:e.type}),e.rooms&&b(y.default,{day:t.props.currDay.day,onToggleTag:t.props.onToggleTag,tags:t.props.tags,slot:e,showRoomHeader:!0,trackLength:t.longestTrack(e)}))})))}}]),e}(m.Component);e.default=k},yNXk:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c}));var r=n("6BQ9"),a=n.n(r),o=n("0iUn"),s=n("sLSF"),i=n("vYYK"),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";Object(o.a)(this,t),Object(i.a)(this,"hours",void 0),Object(i.a)(this,"minutes",void 0),this.hours=a()(e),this.minutes=a()(n)}return Object(s.a)(t,[{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".";return("0"+this.hours).slice(-2)+t+("0"+this.minutes).slice(-2)}},{key:"add",value:function(t){return this.hours+=t.hours+Math.floor((this.minutes+t.minutes)/60),this.minutes=(this.minutes+t.minutes)%60,this}},{key:"copy",value:function(){var e=new t;return e.add(this),e}},{key:"diff",value:function(t){return Math.abs(60*this.hours+this.minutes-t.minutes-60*t.hours)}}],[{key:"fromString",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",r=e.split(n);return new t(r[0],r[1])}},{key:"fromNumber",value:function(e){return new t(e.toString().substring(0,e.toString().length-2),e.toString().substring(e.toString().length-2,e.toString().length))}}]),t}();function c(t){switch(t.type){case"Lightning talk (10 minutes)":return new u("00","10");case"Short presentation (30 minutes)":return new u("00","30");case"Long presentation (60 minutes)":return new u("01","00");case"Workshop (90 minutes)":return new u("01","30")}return new u}},zUaL:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),u=(n("Jwgg"),n("mLoh"),n("8Kt/")),c=n.n(u),l=n("M623"),p=n("s0xL"),f=n("YFqc"),d=n.n(f),h=n("q1tI"),m=n.n(h),v=m.a.createElement,g=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return v("div",{className:"layout"},v(c.a,null,v("title",null,this.props.title||"Knowit Developer Summit")),v("div",{className:"menuAndHeader"},v("div",{className:"header"},!0!==this.props.hideLogo&&v(d.a,{href:"/"},v("img",{id:"KDSlogo",className:this.props.hideLogo?"hide-".concat(this.props.hideLogo):"",src:"../static/KDSsymbol.svg"})),v("div",{id:"KDSheader"},v("h2",{className:"headline"},"By Developers, For Developers"),v("h3",{className:"header-location"},v("img",{id:"location-img",src:"../static/location.svg"}),"Bergen, Norway 17 - 18 January 2020",v("hr",null)),this.props.header)),v("div",{className:"filter-pos"},this.props.filter&&v(p.default,{onTagChange:this.props.onTagChange,onFavoriteChange:this.props.onFavoriteChange,showOnlyFavorites:this.props.showOnlyFavorites,selectedTags:this.props.selectedTags,className:"string"===typeof this.props.filter?"show-".concat(this.props.filter):""})),v(l.default,null)),this.props.background&&v("img",{src:"../static/code.svg",className:"background"}),v("div",{className:"content"},this.props.children))}}]),e}(m.a.Component);e.default=g}},[["5W5Q",0,1,2]]]);