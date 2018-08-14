const { join } = require('path');
const webpack = require('webpack');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  vendor: [
    'babel-polyfill',
    'isomorphic-fetch',
    'showdown',
    'jquery',
    'bootstrap',
    '@fortawesome/fontawesome-free',
    'rxjs',
    'vue-lazyload',
    'js-yaml'
  ],
  extractCSS: true,
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CompressionWebpackPlugin()
  ],
  extend(config, { isDev }) {
    if (!isDev) {
      config.devtool = false;
      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            'pages',
            'layouts',
            'components'
          ].map((folder) => join(__dirname, '../src', `${ folder }/**/*.vue`))),
          whitelist: [
            'html',
            'body'
          ],
          whitelistPatterns: [
            /nuxt/,
            /layout/,
            /active/,
            /yarn/
          ]
        })
      );
    }
  }
};
