
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), 
        compress: true, 
        historyApiFallback: true, 
        port: 3000, 
    },
    module: {
        rules: [
            {
            test:/\.css$/,
            use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
        inject: true,
        template: './src/index.html',
        filename: './index.html'
        })
    ]
}