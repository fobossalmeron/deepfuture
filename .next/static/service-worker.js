try{self["workbox:core:5.1.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const c=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let c,a=i&&i.handler;if(!a&&this.s&&(a=this.s),a){try{c=a.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this.i&&(c=c.catch(n=>this.i.handle({url:s,request:e,event:t}))),c}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const c=i.match({url:e,request:t,event:s});if(c)return n=c,(Array.isArray(c)&&0===c.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new a,r.addFetchListener(),r.addCacheListener()),r);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=e,this.u=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:c=!1}={}){return await this.transaction([e],"readonly",(a,r)=>{const o=a.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(c?e:e.value),i&&u.length>=i?r(u):e.continue()):r(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const c=this.o.transaction(e,t);c.onabort=()=>i(c.error),c.oncomplete=()=>n(),s(c,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const c=s.objectStore(t),a=c[e].apply(c,n);a.onsuccess=()=>i(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class m{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),c=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?c.push(s.value):a++),s.continue()}else n(c)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+g(e)}}class b{constructor(e,t={}){this.R=!1,this._=!1,this.U=t.maxEntries,this.L=t.maxAgeSeconds,this.m=e,this.j=new m(e)}async expireEntries(){if(this.R)return void(this._=!0);this.R=!0;const e=this.L?Date.now()-1e3*this.L:0,t=await this.j.expireEntries(e,this.U),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.R=!1,this._&&(this._=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.j.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.L){return await this.j.getTimestamp(e)<Date.now()-1e3*this.L}return!1}async delete(){this._=!1,await this.j.expireEntries(1/0)}}try{self["workbox:cacheable-response:5.1.3"]&&_()}catch(e){}class v{constructor(e={}){this.N=e.statuses,this.k=e.headers}isResponseCacheable(e){let t=!0;return this.N&&(t=this.N.includes(e.status)),this.k&&t&&(t=Object.keys(this.k).some(t=>e.headers.get(t)===this.k[t])),t}}const q=(e,t)=>e.filter(e=>t in e),R=async({request:e,mode:t,plugins:s=[]})=>{const n=q(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},x=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const c=await self.caches.open(e),a=await R({plugins:i,request:t,mode:"read"});let r=await c.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;r=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:a})}return r},U=async({cacheName:e,request:s,response:n,event:i,plugins:a=[],matchOptions:r})=>{const o=await R({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:c(o.url)});const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,c=!1;for(const t of n)if("cacheWillUpdate"in t){c=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return c||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:a,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=q(a,"cacheDidUpdate"),f=l.length>0?await x({cacheName:e,matchOptions:r,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:h,request:o})},L=x,E=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const c=q(i,"fetchDidFail"),a=c.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of c)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}const j={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let N;async function k(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,c=function(){if(void 0===N){const e=new Response("");if("body"in e)try{new Response(e.body),N=!0}catch(e){N=!1}N=!1}return N}()?s.body:await s.blob();return new Response(c,i)}try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}function O(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),c=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:c.href}}class P{constructor(e){this.m=l(e),this.O=new Map,this.P=new Map,this.C=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=O(n),c="string"!=typeof n&&n.revision?"reload":"default";if(this.O.has(i)&&this.O.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.O.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.C.has(e)&&this.C.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.C.set(e,n.integrity)}if(this.O.set(i,e),this.P.set(i,c),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),c=await i.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this.O)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const i=this.C.get(s),c=this.P.get(n);return this.S({cacheKey:s,cacheMode:c,event:e,integrity:i,plugins:t,url:n})});return await Promise.all(r),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.O.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async S({cacheKey:e,url:s,cacheMode:n,event:i,plugins:c,integrity:a}){const r=new Request(s,{integrity:a,cache:n,credentials:"same-origin"});let o,h=await E({event:i,plugins:c,request:r});for(const e of c||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:r,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await k(h)),await U({event:i,plugins:c,response:h,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.O}getCachedURLs(){return[...this.O.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.O.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let C;const S=()=>(C||(C=new P),C);const T=(e,t)=>{const s=S().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(c,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:c});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let M=!1;function K(e){M||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",c=>{const a=T(c.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let r=self.caches.open(i).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(r)})})(e),M=!0)}const D=[],I={get:()=>D,add(e){D.push(...e)}},A=e=>{const t=S(),s=I.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},Q=e=>{const t=S();e.waitUntil(t.activate())};var W;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),W={},function(e){S().addToCacheList(e),e.length>0&&(self.addEventListener("install",A),self.addEventListener("activate",Q))}([{url:"_next/static/chunks/052e4e281afe72c131c5f2e929aa7bcc6ecce42a.495f4d7731ec7b190523.js",revision:"67c126f76d7f95f9fa58e6b0ff3a68a4"},{url:"_next/static/chunks/052e4e281afe72c131c5f2e929aa7bcc6ecce42a.495f4d7731ec7b190523.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"_next/static/chunks/068702fcea95ba3f2e44804f439406bfaa19f66d.d5a0fddf952cf11b6ecc.js",revision:"a6cc79554a427cc7949223ffbd60f570"},{url:"_next/static/chunks/cbaf0265efe0b15a352c51c0da02cb7e7debce0a.a3e4605b4041cd7466b1.js",revision:"83cc200148df2448448f5c68df493e5c"},{url:"_next/static/chunks/e9ad1ade4c554a17745bd687c36ab19a434afe4c.b50a31b9e106c2488862.js",revision:"2f46e0f1767482544d89b9d6c08cc8a5"},{url:"_next/static/chunks/framework.4dd1003cc9c949c7fcd3.js",revision:"e8988b5ba0afe1fe2b6047e82ee3fbc6"},{url:"_next/static/chunks/framework.4dd1003cc9c949c7fcd3.js.LICENSE.txt",revision:"c7c771c7a9ea0b2f7e6b82ef94cc9f76"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/pages/_app.js",revision:"3927fadd8c3fea66cc066fce8de78371"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/pages/_app.js.LICENSE.txt",revision:"39cc7ccb0f954463c5e080514a489614"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/pages/_error.js",revision:"be50d76aaf2f07814b3a1af7b8e1a4a9"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/pages/beta.js",revision:"962d6ec7752b8e6c891b93f88ab94d05"},{url:"_next/static/p9P1kC77wj2QSE6rgoO5b/pages/index.js",revision:"d3684bd89cd521c92380f2ec57de2804"},{url:"_next/static/runtime/main-f055ae32cdfcb4d65fb2.js",revision:"2281eb8d464710e1877c49b93fe07119"},{url:"_next/static/runtime/polyfills-42651cc75ef14fa3642d.js",revision:"095e56de66408c1feb86b80266d5463a"},{url:"_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"}]),K(W),function(e,s,c){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,c)}else if(e instanceof RegExp)a=new i(e,s,c);else if("function"==typeof e)a=new n(e,s,c);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}o().registerRoute(a)}(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.T=t?e.plugins:[j,...e.plugins]}else this.T=[j];this.M=e.networkTimeoutSeconds||0,this.K=e.fetchOptions,this.D=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let c;if(this.M){const{id:t,promise:a}=this.I({request:s,event:e,logs:n});c=t,i.push(a)}const a=this.A({timeoutId:c,request:s,event:e,logs:n});i.push(a);let r=await Promise.race(i);if(r||(r=await a),!r)throw new t("no-response",{url:s.url});return r}I({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.W({request:e,event:s}))},1e3*this.M)}),id:n}}async A({timeoutId:e,request:t,logs:s,event:n}){let i,c;try{c=await E({request:t,event:n,fetchOptions:this.K,plugins:this.T})}catch(e){i=e}if(e&&clearTimeout(e),i||!c)c=await this.W({request:t,event:n});else{const e=c.clone(),s=U({cacheName:this.m,request:t,response:e,event:n,plugins:this.T});if(n)try{n.waitUntil(s)}catch(e){}}return c}W({event:e,request:t}){return L({cacheName:this.m,request:t,event:e,matchOptions:this.D,plugins:this.T})}}({cacheName:"https-calls",networkTimeoutSeconds:15,plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.B(n),c=this.F(s);d(c.expireEntries());const a=c.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.F(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.H=e,this.L=e.maxAgeSeconds,this.G=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}F(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.G.get(e);return s||(s=new b(e,this.H),this.G.set(e,s)),s}B(e){if(!this.L)return!0;const t=this.J(e);return null===t||t>=Date.now()-1e3*this.L}J(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.G)await self.caches.delete(e),await t.delete();this.G=new Map}}({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this.V.isResponseCacheable(e)?e:null,this.V=new v(e)}}({statuses:[0,200]})]}),"GET");
