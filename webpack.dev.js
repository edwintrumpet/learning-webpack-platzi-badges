const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:3000/',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                
            },
            {
                test: /\.css$/,
                use: [
                    // Inject the CSS using javaScript
                    'style-loader',
                    // Lets import CSS into javaScript
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: false,
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}
