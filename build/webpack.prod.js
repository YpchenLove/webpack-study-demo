const baseConfig = require('./webpack.base.');
const merge = require('webpack-merge');

const prodConfig = {
  mode: 'production', // production => 压缩, development 不压缩
  devtool: 'sheap-module-source-map',
}

module.exports = merge(baseConfig, prodConfig)