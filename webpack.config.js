const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
  ]
  
  // the clean options to use
  let cleanOptions = {
    exclude:  ['index.html'],
    verbose:  true,
    dry:      false
  }
module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
        "/api": "http://localhost:8080"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Tic Tac Toe',
        template: './src/client/tictactoe.html'
        }),
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
}