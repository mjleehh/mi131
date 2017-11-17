const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({template: __dirname + '/index.html'}),
    ],
}
