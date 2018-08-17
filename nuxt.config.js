const config = require('./config/config');
const routes = require('./config/routes');
const buildConfig = require('./config/build');

module.exports = {
  srcDir: './src',
  build: buildConfig,
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: [{ code: 'en', iso: 'en-US', file: 'en.js' }],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales/'
      }
    ]
  ],
  head: {
    title: 'adidas developer portal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    bodyAttrs: {
      class: 'yarn'
    }
  },
  css: [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    './node_modules/branding-resources/fonts/adihaus-din.css',
    './node_modules/branding-resources/fonts/adihaus-din-cond.css',
    './node_modules/branding-resources/fonts/adineue.css',
    './node_modules/yarn-design-system/dist/yarn-logo.css',
    './node_modules/yarn-design-system/dist/yarn-icon.css',
    './node_modules/yarn-design-system/dist/yarn.css',
    '~/styles/style.scss'
  ],
  plugins: [
    '~/plugins/fetch.js',
    '~/plugins/bootstrap.js',
    '~/plugins/global-components.js',
    { src: '~/plugins/lazyload.js', ssr: false }
  ],
  router: {
    linkExactActiveClass: 'active',
    scrollBehavior: () => ({ x: 0, y: 0 })
  },
  manifest: {
    name: 'adidas developer portal',
    short_name: 'developer portal',
    description: 'All you need to know to create.'
  },
  generate: {
    routes: config.contributing.routes.map(({ path }) => path),
    minify: {
      collapseWhitespace: true,
      conservativeCollapse: true
    }
  },
  env: {
    routes,
    config
  }
};
