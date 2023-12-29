const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/script.js',
    target: 'web',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, './src/js/dist'),
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};