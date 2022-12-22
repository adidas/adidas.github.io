importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0715a30e9b2eb6ae5ec9.js",
    "revision": "d0f9dfcd15577f637b50006006f293c3"
  },
  {
    "url": "/_nuxt/19290a523954cbecc533.js",
    "revision": "5f363d7e6de6592e6ee286923134723c"
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
    "url": "/_nuxt/5cd3a6c873a58c06215c.js",
    "revision": "44e782c8c388ee7f4ed41575de0b025a"
  },
  {
    "url": "/_nuxt/6a9fc1db4cb4de40887a.js",
    "revision": "8dfe02c346e3c12de89f967a9d3d7cff"
  },
  {
    "url": "/_nuxt/737ad2b700123b4c9e1e.js",
    "revision": "21ca96acd05ebf8e09d42b6a8c47b7ff"
  },
  {
    "url": "/_nuxt/77047454e63df3431012.js",
    "revision": "79243c758b4652883ad7476437065416"
  },
  {
    "url": "/_nuxt/9dc649c4508c7eda97bd.js",
    "revision": "40bbaccba19e26b90f1bdea69ce42ba7"
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
    "url": "/_nuxt/d0d86abe78e956d69be4.js",
    "revision": "bf5f6981667d1de4d13e2a4ff37d32c3"
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
