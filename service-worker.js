"use strict";var precacheConfig=[["/heroes-and-monsters/index.html","bbf543ac7799fcd9ca0564b25ebb4925"],["/heroes-and-monsters/static/css/main.9a14b3db.css","e90f2af613ca13003fe30ce6305cd01e"],["/heroes-and-monsters/static/js/main.53eefd6c.js","bd28d6364175841753b48dfc2f299566"],["/heroes-and-monsters/static/media/bat.418d07d9.png","418d07d953eb89657616669103501467"],["/heroes-and-monsters/static/media/dragon.c5ac6abe.png","c5ac6abefb362028ffdb571087d12dea"],["/heroes-and-monsters/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/heroes-and-monsters/static/media/ghost.c6e20150.png","c6e20150f2a54d8fbc24a33b56eed633"],["/heroes-and-monsters/static/media/hydra.0d8a425e.png","0d8a425e51ebc7ef461271173ef47ad9"],["/heroes-and-monsters/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/heroes-and-monsters/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/heroes-and-monsters/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/heroes-and-monsters/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/heroes-and-monsters/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/heroes-and-monsters/static/media/imp.732492a2.png","732492a2c9277c9ee997874eaf02dd48"],["/heroes-and-monsters/static/media/logo.7db0bedd.png","7db0bedd855600e2dc24cee377aa8744"],["/heroes-and-monsters/static/media/scorpion.790616a3.png","790616a3c2e0fd8ed995b51242dbb802"],["/heroes-and-monsters/static/media/skeletonKing.47a58598.png","47a58598add5f9c84a8dd3f8a328a9ad"],["/heroes-and-monsters/static/media/snake.1905ea73.png","1905ea737ea18c7cdcdd4928b8271f55"],["/heroes-and-monsters/static/media/spider.53a5d4b1.png","53a5d4b141cbdfa488476333e909cb18"],["/heroes-and-monsters/static/media/zombie.91e0a7ab.png","91e0a7ab6be6058388165d0c84539d4c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var s="/heroes-and-monsters/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});