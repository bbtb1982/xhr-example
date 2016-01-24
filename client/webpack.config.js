var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var srcDir = rootDir + '/es6';
var distDir = rootDir + '/dist';

module.exports = {
    context: rootDir,
    entry:{
      callback: srcDir + '/callback.js',
      xhr: srcDir + '/xhr.js',
      promises: srcDir + '/promises.js',
    },
    output: {
        path: distDir,
        filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
        loaders: [
            {loader: 'babel-loader', test: path.join(__dirname, 'es6'), query: { presets: 'es2015' }}
        ]
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
