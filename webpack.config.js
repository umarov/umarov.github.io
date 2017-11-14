const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './scripts/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
}
