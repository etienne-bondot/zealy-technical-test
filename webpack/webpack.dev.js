const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackCommon = require('./webpack.common')

const DefinePlugin = webpack.DefinePlugin

const config = merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
})

module.exports = config
