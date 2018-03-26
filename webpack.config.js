const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry:path.resolve("./src/index.js"),
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
  new HTMLWebpackPlugin({
    template: path.resolve("./src/index.html"),
  }),
  new LiveReloadPlugin({}),
  ],
  module:{
     rules:[
             {
                 test:/\.(s*)css$/,
                 use:['style-loader','css-loader', 'sass-loader']
              }
      ]
   },
};
 