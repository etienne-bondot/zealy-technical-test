const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { assetsDir, baseDir, outputDir, publicDir, srcDir } = require('./webpack.config')

const commonConf = {
  entry: {
    app: [path.join(srcDir, 'index.tsx')],
  },
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        generator: {
          filename: 'static/media/[hash][ext]',
        },
        test: /\.(png|jpe?g|gif|svg|woff|swf|zip|woff2|ttf|eot|ico|otf|pdf)$/,
        type: 'asset/resource',
      },
      {
        exclude: [path.join(baseDir, 'node_modules')],
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(outputDir),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(publicDir, 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: assetsDir, to: 'assets' }],
    }),
  ],
  resolve: {
    alias: {
      '~/__mocks__': path.join(srcDir, '__mocks__'),
      '~/api': path.join(srcDir, 'api'),
      '~/assets': path.join(srcDir, 'assets'),
      '~/components': path.join(srcDir, 'components'),
      '~/config': path.join(srcDir, 'config'),
      '~/const': path.join(srcDir, 'const'),
      '~/contexts': path.join(srcDir, 'contexts'),
      '~/hooks': path.join(srcDir, 'hooks'),
      '~/queries': path.join(srcDir, 'queries'),
      '~/types': path.join(srcDir, 'types'),
      '~/utils': path.join(srcDir, 'utils'),
      '~/views': path.join(srcDir, 'views'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve(__dirname, '../'), 'node_modules'],
  },
}

module.exports = commonConf
