const path = require('path')

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
