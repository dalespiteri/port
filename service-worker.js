"use strict";var precacheConfig=[["/index.html","832d3d2dda005ff8bee009d95f233c1e"],["/static/css/main.f6b7c688.css","3279de4bc6f9e2db572d374f7cf8ec36"],["/static/js/main.a1666c79.js","a0d36fe66535a742349abd6df0e4a199"],["/static/media/aboutHead.c432bd75.png","c432bd75d7ebc92df8779e9895238943"],["/static/media/aboutHeadTwo.a3391ee7.png","a3391ee7e433a28c13107bfdd27a9407"],["/static/media/bobsBurgers.aba19e6f.jpg","aba19e6fb5efea3baf8c5b230a66f9c1"],["/static/media/gitHub.4ed87c12.svg","4ed87c1276d0b926b48f98ff6a521fa3"],["/static/media/googlePlus.1f6df693.svg","1f6df693e631788f9005ec7773455402"],["/static/media/illInterface.05d32913.png","05d32913dae9af37e348526f1f3fab65"],["/static/media/illLogo.39f8e8d6.svg","39f8e8d6f218756aba3cb83f1b233107"],["/static/media/lanParty.02e626e8.jpg","02e626e805fc72bfb1bb32ce7d6655c6"],["/static/media/linkedIn.3eda29e3.svg","3eda29e35f6c35bdad84c53bad09dc9f"],["/static/media/logoBandW.3f22e36c.svg","3f22e36cab78f857d781e9e3d6b5ba0f"],["/static/media/lordsOfWar.a72f2e9e.jpg","a72f2e9e5f6568b46156fd4ba3cd6587"],["/static/media/muscles.0ff9cf72.png","0ff9cf723b2831e5f04087608f4469df"],["/static/media/pixelLogo.fa1c52ed.svg","fa1c52ed3345e8767a445b01b919340b"],["/static/media/psInterface.c6153f9c.png","c6153f9c538aada7178f63935cf0e02f"],["/static/media/psLogo.198df80e.svg","198df80e003b169c43341c3196263de5"],["/static/media/react.5a3c88bd.svg","5a3c88bdfe018abe78d62c9b92deffa2"],["/static/media/scoreKeeper.9adfeed0.png","9adfeed0b7c1dc9ebe4fe55815778cc8"],["/static/media/skin.c0a62671.png","c0a6267110c791f5b435dbab0294b123"],["/static/media/skull.7516e90e.png","7516e90e20457462eb8a5052f4d894f6"],["/static/media/trivia.d4cbfffa.png","d4cbfffa5e2a210b77655adc5e26e4e8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});