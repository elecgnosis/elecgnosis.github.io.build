/**
 * entry: The top level file or set of files we wish to include in the resulting
 * file. Can be a single file, an array of files, or a file "blob" (\/**\/*.js).
 * Most common practice is to use it as a list, bringing in all of the lower
 * dependency modules individually. You will want to find a way to build this
 * file automatically.
 * path: What folder to put the resulting file in.
 * filename: The location and filename for the resulting file.
 * watch: if true, will monitor the entry files for changes and reload any open
 * clients viewing the app.
 * devServer: Configuration options for the webpack-dev-server.
 * contentBase: Tells the webpack-dev-server which folder to serve assets from.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    root: [ __dirname + path.sep + 'source' ]
  },

  entry: [
    './app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/'
  ],

  output: {
    path: path.resolve(__dirname + "/public"),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer!sass-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'I Am Daniel Lopez',
        path: 'public',
        cache: false,
        inject: 'body',
        template: './source/html/index.html'
    })
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true
  }
}
