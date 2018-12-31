// shared config (dev and prod)
const {resolve} = require('path');
const merge = require('webpack-merge');
const WebpackCommonConfig = require('@wface/container/src/configs/webpack/common');

module.exports = merge(WebpackCommonConfig, {
  context: resolve(__dirname, '../../')
});