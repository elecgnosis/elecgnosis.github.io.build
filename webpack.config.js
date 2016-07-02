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
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./app.js",

  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    /**
     * Loader code inspired by Foxandxss at GitHub.com/preboot/angular-webpack
     */
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      //loader: "style!css"
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
      cache: true,
      inject: 'body',
      template: './source/html/index.html'
    }),
    new ExtractTextPlugin('[name].[hash].css')
  ],
  devServer: {
    contentBase: 'pub/',
  },
}
