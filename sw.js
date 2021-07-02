importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0715a30e9b2eb6ae5ec9.js",
    "revision": "d0f9dfcd15577f637b50006006f293c3"
  },
  {
    "url": "/_nuxt/1cf6fb9242a406ddcfc5.js",
    "revision": "8a1e9cb4f7a947c940ea39af2fea9d1c"
  },
  {
    "url": "/_nuxt/258e256b6e87f0054fda.css",
    "revision": "ed57c4bbaa04e3b6e99553d8b0ef94e2"
  },
  {
    "url": "/_nuxt/3c4cd3635f38def32e5e.css",
    "revision": "75ea1c3f1992a8e3671ea920397a4b2c"
  },
  {
    "url": "/_nuxt/5ab1277bee3a6d311e0c.js",
    "revision": "9d65afd641353d4323f1903d8a305775"
  },
  {
    "url": "/_nuxt/5ff76096aeaf28f7f156.js",
    "revision": "8080ca81b30de2afe610ed99d74bb9fe"
  },
  {
    "url": "/_nuxt/62039e7a0a341bfc39be.js",
    "revision": "941e090363e04d9aa219d4475aea6a0e"
  },
  {
    "url": "/_nuxt/77047454e63df3431012.js",
    "revision": "79243c758b4652883ad7476437065416"
  },
  {
    "url": "/_nuxt/7c98e3f3598738145a8f.js",
    "revision": "2cebdcb27baf8c299d7b1d3e0114a312"
  },
  {
    "url": "/_nuxt/871628d158178b8b27c2.js",
    "revision": "6a125401c7a384a0cd41c306dcb36434"
  },
  {
    "url": "/_nuxt/b0fe6bd2e6f8a79c1acb.js",
    "revision": "aa8a767c942b9ea799f7f78379edc809"
  },
  {
    "url": "/_nuxt/b3797b5e9338ee0c69eb.js",
    "revision": "6d779283e9ead10228ed22032865f5ae"
  },
  {
    "url": "/_nuxt/bfdd393b69a4c9037d3f.js",
    "revision": "531ab05af684a6f3f6bcd7f8aa17b116"
  },
  {
    "url": "/_nuxt/c9c4a4bbbb939bb8c26f.css",
    "revision": "44243c0e2bb76719613e9faf221fed0b"
  },
  {
    "url": "/_nuxt/f7314f31b74c23d26d42.css",
    "revision": "8fdfb6714ac2f9f441b070e9b7900cde"
  }
], {
  "cacheId": "adidas-github-io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
