const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const merge = require('webpack-merge')

const baseConfig = {
  entry: {
    main: './src/index.js'
    // vendor: [
    //   'react',
    //   'react-dom',
    // ]
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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory=true'
    },
    {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new BundleAnalyzerPlugin(),
    // new webpack.DllPlugin({
    //   // DllPlugin的name属性需要和libary保持一致
    //   name: '[name]_[hash]',
    //   path: path.join(__dirname, 'dist', '[name]-manifest.json'),
    //   // context需要和webpack.config.js保持一致
    //   context: __dirname,
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    // publicPath: 'https://www.cdn.com',  // cdn加速
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(baseConfig, prodConfig)
  } else {
    return merge(baseConfig, devConfig)
  }
}
