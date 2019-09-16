import { CleanWebpackPlugin } from 'clean-webpack-plugin'
const path = require('path')
const webpack = require('webpack') // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: ["./src/main.js", "./src/css/app.scss"],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: '[name].[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: path.resolve(__dirname, 'node_modules'),
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: './../_includes/scripts.html',
            template: './_includes/_scripts.html'
        }),
        new MiniCssExtractPlugin({
          filename: "bundle.css"
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.mode = 'production'
}
