// import webpack from 'webpack';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// import config from './config';

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");

const { dir_src, dir_dist } = config;

module.exports = {
  mode: "development",
  entry: path.join(dir_src, "index.js"),
  output: {
    path: dir_dist,
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: dir_dist,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: dir_src,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: dir_src,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(dir_src, "index.html"),
      filename: "index.html",
      inject: "body"
    })
  ]
};
