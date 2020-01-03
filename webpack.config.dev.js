const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    output: {
        publicPath: '/public/'
    },
    devServer: {
        contentBase: path.join(process.cwd(), 'public'),
        port: 3000,
        historyApiFallback: true,
        hot: false,
        inline: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});