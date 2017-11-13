const path = require('path')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MinifyPlugin()
  ]
}
