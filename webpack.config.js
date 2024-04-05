const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = process.env.NODE_ENV || 'production';
const isDev = ENV !== 'production';
console.log('isDev', isDev);

const sharedModule = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(le|c)ss$/,
            use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader", 
                options: {
                    modules: {
                        localIdentName: '[local]__[hash:base64:5]'
                    },
                },
            },
            "less-loader",
            ],
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
            }
        }
    ]
};
const sharedPluginsArray = [
    new webpack.DefinePlugin({
        // PRODUCTION: JSON.stringify(ENV) === 'production',
        'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/ }),
    new MiniCssExtractPlugin({
        filename: 'client.min.css',
    }),
];
const sharedOptimization = isDev ? {} : {
    minimizer: [
        new TerserJSPlugin({
            terserOptions: {
                output: {
                    comments: false,
                },
            },
            extractComments: false,
        }),
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                    },
                ],
            },
        }),
    ],
};

module.exports = [
    {
        name: 'DEVELOPMENT_SERVER',
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
        externals: [nodeExternals()],
        module: sharedModule,
        optimization: sharedOptimization,
        plugins: sharedPluginsArray
    },
    {
        name: 'DEVELOPMENT_CLIENT',
        target: 'web',
        node: {
            __dirname: false
        },
        entry: [
            './src/js/index.js'
        ],
        output: {
            filename: 'client.min.js',
        },
        module: sharedModule,
        optimization: sharedOptimization,
        plugins: [
            ...sharedPluginsArray,
            new HtmlWebpackPlugin({
                filename: 'client.index.html',
                inject: false,
                meta: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
                showErrors: false,
                template: 'src/local/index.html',
            })
            // new BundleAnalyzerPlugin({ analyzerMode: "static" })
        ],
    }
];