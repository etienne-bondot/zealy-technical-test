const { merge } = require("webpack-merge");

const webpackDevConfig = require("./webpack.dev");

const config = merge(webpackDevConfig, {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  performance: {
    hints: false,
  },
});

module.exports = config;
