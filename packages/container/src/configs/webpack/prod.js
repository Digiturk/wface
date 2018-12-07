// production config
const merge = require('webpack-merge');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/main.min.js',
    path: path.resolve(process.cwd(), './dist'),
    publicPath: './',
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(process.cwd(), 'assets'), to: 'assets' }
    ]),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
});