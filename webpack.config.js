const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: ['babel-polyfill', './client/main.js'],
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "react-hot!babel-loader",
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/,
                loader: "react-hot!style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.sass$/,
                loader: "react-hot!style-loader!css-loader!sass-loader!",
                exclude: [/node_modules/]
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"

            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"

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
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    devServer: {
        port: 8080,
        contentBase: __dirname + '/public',
        historyApiFallback: true,
        // proxy: {
        //     '*' : 'http://localhost:3000',
        // }
    },

    node: {
        net: 'empty',
        dns: 'empty'
    }
}


if(NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}
