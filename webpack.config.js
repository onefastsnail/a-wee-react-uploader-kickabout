const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist/js');
const APP_DIR = path.resolve(__dirname, 'src/js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body'
})

const config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [HtmlWebpackPluginConfig],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss']
    }
};

module.exports = config
