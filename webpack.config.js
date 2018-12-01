const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/app/index.js',
   module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
   output: {
     path: path.join(__dirname, './dist'),
     publicPath: '/',
     filename: 'bundle.js'
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin()    // Auto Refresh Changes
      // new HtmlWebpackPlugin({
      //    template: './dist/index.html'
      // })
   ],
   devServer: {
     contentBase: './dist',
     port: 8080,
     hot: true
   }
 };