const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'none',
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
});
