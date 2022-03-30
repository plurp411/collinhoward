/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{311:function(e,t,n){"use strict";var r,o,c=n(312),f=n(319),l=n(328),h=n(330),d=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r["invalid-log-argument"]="First argument to `onLog` must be null or a function.",r),v=new f.b("app","Firebase",d),m="@firebase/app",y="[DEFAULT]",_=((o={})[m]="fire-core",o["@firebase/analytics"]="fire-analytics",o["@firebase/auth"]="fire-auth",o["@firebase/database"]="fire-rtdb",o["@firebase/functions"]="fire-fn",o["@firebase/installations"]="fire-iid",o["@firebase/messaging"]="fire-fcm",o["@firebase/performance"]="fire-perf",o["@firebase/remote-config"]="fire-rc",o["@firebase/storage"]="fire-gcs",o["@firebase/firestore"]="fire-fst",o["fire-js"]="fire-js",o["firebase-wrapper"]="fire-js-all",o),w=new h.a("@firebase/app"),O=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=Object(f.h)(e),this.container=new l.b(t.name),this._addComponent(new l.a("app",(function(){return r}),"PUBLIC")),this.firebase_.INTERNAL.components.forEach((function(component){return r._addComponent(component)}))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t=y),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=y),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(component){try{this.container.addComponent(component)}catch(e){w.debug("Component "+component.name+" failed to register with FirebaseApp "+this.name,e)}},e.prototype._addOrOverwriteComponent=function(component){this.container.addOrOverwriteComponent(component)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw v.create("app-deleted",{appName:this.name_})},e}();O.prototype.name&&O.prototype.options||O.prototype.delete||console.log("dc");var E=function e(){var t=function(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,o){void 0===o&&(o={}),"object"==typeof o&&null!==o||(o={name:o});var c=o;void 0===c.name&&(c.name=y);var l=c.name;if("string"!=typeof l||!l)throw v.create("bad-app-name",{appName:String(l)});if(Object(f.f)(t,l))throw v.create("duplicate-app",{appName:l});var h=new e(n,c,r);return t[l]=h,h},app:o,registerVersion:function(e,t,n){var r,o=null!==(r=_[e])&&void 0!==r?r:e;n&&(o+="-"+n);var f=o.match(/\s|\//),h=t.match(/\s|\//);if(f||h){var d=['Unable to register library "'+o+'" with version "'+t+'":'];return f&&d.push('library name "'+o+'" contains illegal characters (whitespace or "/")'),f&&h&&d.push("and"),h&&d.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void w.warn(d.join(" "))}c(new l.a(o+"-version",(function(){return{library:o,version:t}}),"VERSION"))},setLogLevel:h.b,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw v.create("invalid-log-argument");Object(h.c)(e,t)},apps:null,SDK_VERSION:"8.2.9",INTERNAL:{registerComponent:c,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){return"serverAuth"===t?null:t}}};function o(e){if(e=e||y,!Object(f.f)(t,e))throw v.create("no-app",{appName:e});return t[e]}function c(component){var c=component.name;if(n.has(c))return w.debug("There were multiple attempts to register component "+c+"."),"PUBLIC"===component.type?r[c]:null;if(n.set(c,component),"PUBLIC"===component.type){var l=function(e){if(void 0===e&&(e=o()),"function"!=typeof e[c])throw v.create("invalid-app-argument",{appName:c});return e[c]()};void 0!==component.serviceProps&&Object(f.i)(l,component.serviceProps),r[c]=l,e.prototype[c]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,c).apply(this,component.multipleInstances?e:[])}}for(var h=0,d=Object.keys(t);h<d.length;h++){var m=d[h];t[m]._addComponent(component)}return"PUBLIC"===component.type?r[c]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),o.App=e,r}(O);return t.INTERNAL=Object(c.a)(Object(c.a)({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(f.i)(t,e)},createSubscribe:f.g,ErrorFactory:f.b,deepExtend:f.i}),t}(),I=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var component=e.getComponent();return"VERSION"===(null==component?void 0:component.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();if(Object(f.j)()&&void 0!==self.firebase){w.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var N=self.firebase.SDK_VERSION;N&&N.indexOf("LITE")>=0&&w.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var j=E.initializeApp;E.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(f.m)()&&w.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),j.apply(void 0,e)};var S=E;!function(e,t){e.INTERNAL.registerComponent(new l.a("platform-logger",(function(e){return new I(e)}),"PRIVATE")),e.registerVersion(m,"0.6.15",t),e.registerVersion("fire-js","")}(S),t.a=S},312:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return v}));var r=function(e,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])})(e,b)};function o(e,b){function t(){this.constructor=e}r(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}var c=function(){return(c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)};function f(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{h(r.next(e))}catch(e){c(e)}}function l(e){try{h(r.throw(e))}catch(e){c(e)}}function h(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,l)}h((r=r.apply(e,t||[])).next())}))}function l(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}}function h(e){var s="function"==typeof Symbol&&Symbol.iterator,t=s&&e[s],i=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function v(){for(var e=[],i=0;i<arguments.length;i++)e=e.concat(d(arguments[i]));return e}},319:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return y}));var r=n(312),o=function(e){for(var t=[],p=0,i=0;i<e.length;i++){var n=e.charCodeAt(i);n<128?t[p++]=n:n<2048?(t[p++]=n>>6|192,t[p++]=63&n|128):55296==(64512&n)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[p++]=n>>18|240,t[p++]=n>>12&63|128,t[p++]=n>>6&63|128,t[p++]=63&n|128):(t[p++]=n>>12|224,t[p++]=n>>6&63|128,t[p++]=63&n|128)}return t};function c(e){return f(void 0,e)}function f(e,source){if(!(source instanceof Object))return source;switch(source.constructor){case Date:return new Date(source.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return source}for(var t in source)source.hasOwnProperty(t)&&"__proto__"!==t&&(e[t]=f(e[t],source[t]));return e}var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();function h(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function d(){return"object"==typeof self&&self.self===self}function v(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function m(){return"indexedDB"in self&&null!=indexedDB}function y(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",o=window.indexedDB.open(r);o.onsuccess=function(){o.result.close(),n||window.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=function(){n=!1},o.onerror=function(){var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function _(){return!(!navigator||!navigator.cookieEnabled)}var w=function(e){function t(code,n,r){var o=e.call(this,n)||this;return o.code=code,o.customData=r,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,O.prototype.create),o}return Object(r.c)(t,e),t}(Error),O=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(code){for(var data=[],e=1;e<arguments.length;e++)data[e-1]=arguments[e];var t=data[0]||{},n=this.service+"/"+code,template=this.errors[code],r=template?E(template,t):"Error",o=this.serviceName+": "+r+" ("+n+").",c=new w(n,o,t);return c},e}();function E(template,data){return template.replace(I,(function(e,t){var n=data[t];return null!=n?String(n):"<"+t+"?>"}))}var I=/\{\$([^}]+)}/g;function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var i=1;i<this.blockSize;++i)this.pad_[i]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var o,c,a=this.chain_[0],b=this.chain_[1],f=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(o=l^b&(f^l),c=1518500249):(o=b^f^l,c=1859775393):i<60?(o=b&f|l&(b|f),c=2400959708):(o=b^f^l,c=3395469782);r=(a<<5|a>>>27)+o+h+c+n[i]&4294967295;h=l,l=f,f=4294967295&(b<<30|b>>>2),b=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+b&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,o=this.buf_,c=this.inbuf_;r<t;){if(0===c)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[c]=e.charCodeAt(r),++r,++c===this.blockSize){this.compress_(o),c=0;break}}else for(;r<t;)if(o[c]=e[r],++r,++c===this.blockSize){this.compress_(o),c=0;break}}this.inbuf_=c,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(i=0;i<5;i++)for(var r=24;r>=0;r-=8)e[n]=this.chain_[i]>>r&255,++n;return e}}();function j(e,t){var n=new S(e,t);return n.subscribe.bind(n)}var S=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);var c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}})),this.observers.push(r),c},e.prototype.unsubscribeOne=function(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var i=0;i<this.observers.length;i++)this.sendOne(i,e)},e.prototype.sendOne=function(i,e){var t=this;this.task.then((function(){if(void 0!==t.observers&&void 0!==t.observers[i])try{e(t.observers[i])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function L(){}function A(e,t,n){void 0===t&&(t=1e3),void 0===n&&(n=2);var r=t*Math.pow(n,e),o=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+o)}}).call(this,n(35))},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var r=n(312),o=n(319),c=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),f="[DEFAULT]",l=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=f);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new o.a;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=Object(r.a)({identifier:f,optional:!1},e),n=t.identifier,o=t.optional,c=this.normalizeInstanceIdentifier(n);try{var l=this.getOrInitializeService(c);if(!l){if(o)return null;throw Error("Service "+this.name+" is not available")}return l}catch(e){if(o)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(component){var e,t;if(component.name!==this.name)throw Error("Mismatching Component "+component.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=component,function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService(f)}catch(e){}try{for(var n=Object(r.g)(this.instancesDeferred.entries()),o=n.next();!o.done;o=n.next()){var c=Object(r.e)(o.value,2),l=c[0],h=c[1],d=this.normalizeInstanceIdentifier(l);try{var v=this.getOrInitializeService(d);h.resolve(v)}catch(e){}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=f),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r.b)(this,void 0,void 0,(function(){var e;return Object(r.d)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r.f)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=f),this.instances.has(e)},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return e===f?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:f:e},e}();var h=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(component){var e=this.getProvider(component.name);if(e.isComponentSet())throw new Error("Component "+component.name+" has already been registered with "+this.name);e.setComponent(component)},e.prototype.addOrOverwriteComponent=function(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new l(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},330:function(e,t,n){"use strict";function r(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t}var o;n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return _}));var c,f=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(c||(c={}));var l={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},h=c.INFO,d=((o={})[c.DEBUG]="log",o[c.VERBOSE]="log",o[c.INFO]="info",o[c.WARN]="warn",o[c.ERROR]="error",o),v=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if(!(t<e.logLevel)){var c=(new Date).toISOString(),f=d[t];if(!f)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[f].apply(console,r(["["+c+"]  "+e.name+":"],n))}},m=function(){function e(e){this.name=e,this._logLevel=h,this._logHandler=v,this._userLogHandler=null,f.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in c))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?l[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,c.DEBUG],e)),this._logHandler.apply(this,r([this,c.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,c.VERBOSE],e)),this._logHandler.apply(this,r([this,c.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,c.INFO],e)),this._logHandler.apply(this,r([this,c.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,c.WARN],e)),this._logHandler.apply(this,r([this,c.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,c.ERROR],e)),this._logHandler.apply(this,r([this,c.ERROR],e))},e}();function y(e){f.forEach((function(t){t.setLogLevel(e)}))}function _(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=l[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var o=[],f=2;f<arguments.length;f++)o[f-2]=arguments[f];var l=o.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:c[n].toLowerCase(),message:l,args:o,type:t.name})}},r=0,o=f;r<o.length;r++){n(o[r])}}}}]);