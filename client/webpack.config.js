var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootDir = __dirname;
var srcDir = rootDir + '/es6';
var distDir = rootDir + '/dist';

module.exports = {
    context: rootDir,
    entry:{
      callbacks: srcDir + '/callbacks.js',
      xhr: srcDir + '/xhr.js',
      promises: srcDir + '/promises.js',
      generators: srcDir + '/generators.js',
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
          { test: path.join(__dirname, 'es6'), loader: 'babel-loader', query: { presets: 'es2015' }},
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
