const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './scripts/js/profile.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["babel-preset-env", "react", "babel-preset-es2015"]
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: 'sites/profile.html'
      })
   ]
}