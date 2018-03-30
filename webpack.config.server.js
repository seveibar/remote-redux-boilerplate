const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'umd'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.sql$/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {}
      }
    ]
  }
}
