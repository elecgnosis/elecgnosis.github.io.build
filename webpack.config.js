/**
 * entry: The top level file or set of files we wish to include in the resulting
 * file. Can be a single file, an array of files, or a file "blob" (\/**\/*.js).
 * path: What folder to put the resulting file in.
 * filename: The location and filename for the resulting file.
 * watch: if true, will monitor the entry files for changes and reload any open
 * clients viewing the app.
 */
module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname + "/pub",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  watch: true,
}
