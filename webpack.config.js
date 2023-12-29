const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/js/script.js',
    target: 'web',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};