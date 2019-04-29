const webpack = require('webpack');
const path = require('path');

const parentDirectory = path.join(__dirname, './');

module.exports = {

  // entry point
  entry: [
    path.join(parentDirectory, 'index.js')
  ],

  // loaders:
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: [
        "style-loader",
        "css-loader"
      ]
    }]
  },

  // output:
  output: {
    path: parentDirectory + '/dist',
    filename: 'bundle.js'
  },

  // dev-server:
  devServer: {
    contentBase: parentDirectory + '/dist',
    historyApiFallback: true
  }
}
