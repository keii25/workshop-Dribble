const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/main.ts",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "build.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        fallback: {
            "fs": false
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use:['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Application',
                filename: 'index.html',
                template: './index.html'
            }
        )
    ]
};