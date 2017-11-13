const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MinifyPlugin()
  ]
})
