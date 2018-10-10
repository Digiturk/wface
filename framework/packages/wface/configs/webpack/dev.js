// development config
const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./common');
const _ = require("lodash");
const WebpackDevConfig = require('@wface/container/src/configs/webpack/dev');

module.exports = merge(
  {
    customizeArray(a, b, key) {
      if (key === 'resolve.extensions') {
        return _.uniq([...a, ...b]);
      }
      return undefined;
    },
    customizeObject(a, b, key) {
      if (key === 'module') {
        // Custom merging
        return _.merge({}, a, b);
      }
      return undefined;
    }
  }
)
(WebpackDevConfig, commonConfig, {  
});

