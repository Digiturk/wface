// development config
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const {resolve} = require('path');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx'
  ],
  devServer: {
    hot: true, // enable HMR on the server
    // inline: true,
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin() // enable HMR globally
  ],
  optimization: {
    moduleIds: 'named'
  }
});