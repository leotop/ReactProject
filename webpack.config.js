var webpack = require('webpack');
var path = require('path');

var NODE_ENV = process.env.NODE_ENV || 'development';
console.log(NODE_ENV);

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: 'bundle.js'
    },

    watch: true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "react-hot!style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.sass$/,
                loader: "react-hot!style-loader!css-loader!sass-loader!",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jpg$/, loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.png$/, loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },

    resolve: {
        extensions: ['','.js']
    }
}
