var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'component': path.resolve(__dirname, '../src/component')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
        {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.less$/,
            loader: 'style!css!postcss!less'
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        },
        {
            test: /\.json$/,
            loader: 'json'
        }
    ]
  }
}
