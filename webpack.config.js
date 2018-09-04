const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const root = __dirname

module.exports = {
  entry: path.resolve(root, 'src/app.js'),
  output: {
    path: path.resolve(root, 'dist'),
    filename: "app.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, 'src/index.ejs')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      }
    ]
  }
}