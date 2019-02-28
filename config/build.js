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
  /markdown/,
  /hljs/
];

module.exports = {
  extractCSS: true,
  plugins: [ new CompressionWebpackPlugin() ],
  html: {
    minify: {
      collapseWhitespace: true,
      conservativeCollapse: true
    }
  },
  extend(config, { isDev }) {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'raw-loader'
    });

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
