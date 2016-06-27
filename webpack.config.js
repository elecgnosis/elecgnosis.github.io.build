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
module.exports = {
  entry: "./app.js",

  output: {
    path: __dirname + "/pub",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
      contentBase: 'pub/',
  },
}
