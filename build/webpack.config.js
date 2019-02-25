const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // production => 压缩, development 不压缩
  devtool: 'sheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [{
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs/'
          }
        }
      },
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
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // publicPath: 'https://www.cdn.com',
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}