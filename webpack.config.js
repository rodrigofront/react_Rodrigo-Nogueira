const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const IconsPlugin = require('icons-loader/IconsPlugin');

const RUN_TIMESTAMP = Math.round(Date.now() / 1000)

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  module: {
    preLoaders: [
      // Javascript
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {test: /.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', ['env', { 'targets': { 'node': 7 } }]],
          plugins: ['transform-object-rest-spread', 'lodash']
        }
      },
      {test: /\.scss$/,loader: ExtractTextPlugin.extract('css!sass')},
      {test: /\.(jpg|png)$/, loader: 'file-loader',
        options: {
          name: './images/[hash].[ext]'
        }
      },
      {test: /\.(eot|ttf|woff|woff2)$/, loader: 'file-loader'},
      {test: /\.svg$/, loader: 'icons-loader'}
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      }
    }),
    new IconsPlugin({
      fontName: 'icons',
      timestamp: RUN_TIMESTAMP,
      normalize: true,
      formats: ['ttf', 'eot', 'woff', 'svg']
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: './images', to: './images' }
    ])
  ]
}
