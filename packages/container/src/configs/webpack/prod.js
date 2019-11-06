// production config
const merge = require('webpack-merge');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './index.tsx',
  ],
  output: {
    filename: 'js/main-[contenthash].js',
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(process.cwd(), 'assets'), to: 'assets' }
    ]),
  ],
  optimization: {
    minimize: true,
    // minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      minSize: 256 * 1024,
      maxSize: 512 * 1024
    }
  },
});