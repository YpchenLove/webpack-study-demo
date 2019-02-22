const path = require('path');

module.exports = {
  mode: 'development', // production => 压缩, development 不压缩
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'imgs/'
          }
        }
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist') 
  }
}