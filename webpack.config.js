var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './client');

module.exports = {
    entry: './client/index.js',
    target: 'node',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, '/client'),
                loader: "babel-loader",
            }
        ]
    },
    resolve: {
        extensions: ['.webpack.js', '.js']
    },
    mode: 'development',
    watch: true
}