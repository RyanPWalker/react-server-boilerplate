const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = [
    {
        name: 'DEVELOPMENT_SERVER',
        mode: 'development',
        target: 'node',
        node: {
            __dirname: false
        },
        entry:
            [
                './server/server.js'
            ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'server.js',
            publicPath: 'http://localhost:3000'
        },
        devtool: 'source-map',
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                hmr: true,
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: '[name].css',
              chunkFilename: '[id].css',
              ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    },
    {
        name: 'DEVELOPMENT_CLIENT',
        mode: 'development',
        target: 'web',
        node: {
            __dirname: false
        },
        entry: [
            './src/js/index.js'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: 'http://localhost:3000/dist/',
            filename: 'client.js',
            chunkFilename: '[id].client.js'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                        'less-loader'
                    ]
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: '[name].css',
              chunkFilename: '[id].css',
              ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            // new BundleAnalyzerPlugin({ analyzerMode: "static" })
        ]
    }
];