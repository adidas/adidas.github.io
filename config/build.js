const { join } = require('path');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const folders = [
  'pages',
  'layouts',
  'components'
];
const whitelist = [
  'html',
  'body',
  'table',
  'thead',
  'th',
  'td',
  'code',
  'kbd',
  'pre',
  'samp'
];
const whitelistPatterns = [
  /nuxt/,
  /layout/,
  /active/,
  /yarn/,
  /markdown/
];

module.exports = {
  vendor: [
    'babel-polyfill',
    'isomorphic-fetch',
    'showdown',
    '@fortawesome/fontawesome-free',
    'rxjs',
    'vue-lazyload',
    'js-yaml'
  ],
  extractCSS: true,
  plugins: [ new CompressionWebpackPlugin() ],
  extend(config, { isDev }) {
    if (!isDev) {
      config.devtool = false;
      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync(folders.map((folder) => join(__dirname, '../src', `${ folder }/**/*.vue`))),
          whitelist,
          whitelistPatterns
        })
      );
    }
  }
};
