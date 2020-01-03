const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    entry: ['./src/'],
    output: {
        filename: '[name].pokemon.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js','.jsx'],
        modules: [
            path.join(__dirname, '../src'),
            // Important. This makes webpack follow Node's module resolution behaviour.
            'node_modules',
        ]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                  }
                }
            },
            {
                test:/\.ts(x?)$/,
                exclude: [/node_modules\/ih/, /__tests__/],
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty' 
    }
};