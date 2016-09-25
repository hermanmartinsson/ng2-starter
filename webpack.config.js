var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: './src/app/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [new HtmlWebPackPlugin( {
        template: './src/index.html'
    })]
};
