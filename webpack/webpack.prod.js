const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackCommon = require('./webpack.common')

const DefinePlugin = webpack.DefinePlugin

const config = merge(webpackCommon, {
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: 'static/js/[name].js?[chunkhash]',
    publicPath: '/',
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  stats: 'errors-only',
})

module.exports = config
