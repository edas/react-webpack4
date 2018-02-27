"use strict";
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          "options": {
            "plugins": ["react-hot-loader/babel", /*'@babel/transform-runtime'*/]
          }
        }
      }
    ]
  },
  "plugins": [
    new HTMLPlugin()
  ],
  "devServer": {
    index: 'index.html',
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  "devtool": "source-map"
};
