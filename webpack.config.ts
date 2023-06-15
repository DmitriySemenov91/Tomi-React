import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack'

const config: webpack.Configuration = {
    mode: 'development',
    entry:  path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}

export default config