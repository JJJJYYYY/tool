const path = require('path')
const config = require('../config/config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: config.ENTRY,
  output: {
    path: config.OUTPUT_PATH,
    filename: `${config.LIB_NAME}.js`,
    library: config.LIB_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};