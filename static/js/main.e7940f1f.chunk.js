(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){e.exports=t(27)},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),i=t.n(a),c=t(3),s=t(1),l=t(9),u=t(10),d=t(11),h=t(12),f=t(13),p=t(14),b=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},g=function(e){var n=e.robots;return o.a.createElement("div",{className:"container"},n.map((function(e){return o.a.createElement(b,{key:e.id,id:e.id,name:e.name,email:e.email})})))},v=function(e){var n=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{className:"search-field",type:"search",placeholder:"search robots",onChange:n}))},E=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"72vh"}},e.children)},m=function(e){Object(p.a)(t,e);var n=Object(f.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,i=e.error,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return i?o.a.createElement("h1",null,"Error: ",i.message):a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("main",null,o.a.createElement("h1",null,"RoboFriends"),o.a.createElement(v,{searchChange:t}),o.a.createElement(E,null,o.a.createElement(g,{robots:c})))}}]),t}(o.a.Component),w=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(m),R=(t(26),{searchField:""}),y={isPending:!1,robots:[],error:null},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=Object(s.combineReducers)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),j=[l.a],_=Object(s.createStore)(C,Object(u.composeWithDevTools)(s.applyMiddleware.apply(void 0,j)));i.a.render(o.a.createElement(c.a,{store:_},o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriend-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriend-pwa","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.e7940f1f.chunk.js.map