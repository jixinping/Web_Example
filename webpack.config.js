/**
 * Created by yuyuanlin on 2018/6/29.
 *
 */
const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    entry:{
        home:"./src/index.js",
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js']
    }
}