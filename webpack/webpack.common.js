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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Resolve assets url
          {
            loader: 'resolve-url-loader',
            options: {
              root: srcDir,
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: [path.join(srcDir, 'css')],
              },
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
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'static/css/[name].css',
    }),
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
