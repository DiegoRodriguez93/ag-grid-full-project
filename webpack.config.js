"use strict";
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin  = require('webpack-livereload-plugin');

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  entry: './client/index.js',
  output: {
    path: '/react/ag-grid-server-side-nodejs-es2015/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      use: ['style-loader', 'css-loader'],
      test: /\.css$/
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'client/index.html'
  }), new LiveReloadPlugin()]
};
exports.default = _default;