const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');

const devConfig= {
  mode: 'development', // production => 压缩, development 不压缩
  devtool: 'sheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader']
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
  }
}

module.exports = merge(baseConfig, devConfig)