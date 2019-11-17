const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const incstr = require('incstr');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
// const PurgecssPlugin = require('purgecss-webpack-plugin');
// const glob = require('glob')
const pkg = require('./package.json');

// const PATHS = {
//     src: path.join(__dirname, 'src')
//   }
const createUniqueIdGenerator = () => {
    const index = {};

    const generateNextId = incstr.idGenerator({
        // Removed "d" letter to avoid accidental "ad" construct.
        // @see https://medium.com/@mbrevda/just-make-sure-ad-isnt-being-used-as-a-class-name-prefix-or-you-might-suffer-the-wrath-of-the-558d65502793
        alphabet: 'abcefghijklmnopqrstuvwxyz0123456789'
    });

    return (name) => {
        if (index[name]) {
            return index[name];
        }

        let nextId;

        do {
            // Class name cannot start with a number.
            nextId = generateNextId();
        } while (/^[0-9]/.test(nextId));

        index[name] = generateNextId();

        return index[name];
    };
};

const uniqueIdGenerator = createUniqueIdGenerator();

const generateScopedName = localName => uniqueIdGenerator(localName);

module.exports = [
    // NOTE: PRODUCTION_SERVER FILES
    {
        name: 'PRODUCTION_SERVER',
        mode: 'production',
        target: 'node',
        node: {
            __dirname: false
        },
        entry: {
            server: ['./server/server.js']
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: `${pkg.name}.[name].js`
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.(le|c)ss$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract(
                        [
                            {
                                loader: 'css-loader',
                                options: {
                                    camelCase: true,
                                    getLocalIdent: (context, localIdentName, localName) => generateScopedName(localName),
                                    importLoaders: 1,
                                    minimize: true,
                                    modules: true
                                }
                            },
                            'less-loader'
                        ]
                    )
                }
            ]
        },
        optimization: {
            minimizer: [
                new TerserJSPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ]
        },
        plugins: [
            new ExtractTextPlugin(`${pkg.name}.${pkg.version}.min.css`),
        ]
    },

    // NOTE: PRODUCTION_CLIENT FILES
    {
        name: 'PRODUCTION_CLIENT',
        mode: 'production',
        target: 'web',
        node: {
            __dirname: false
        },
        entry: {
            client: [
                'babel-polyfill',
                './src/js/index.js'
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: `${pkg.name}.${pkg.version}.min.js`,
            chunkFilename: `[id].${pkg.version}.client.min.js`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.(le|c)ss$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract(
                        [
                            {
                                loader: 'css-loader',
                                options: {
                                    camelCase: true,
                                    getLocalIdent: (context, localIdentName, localName) => generateScopedName(localName),
                                    importLoaders: 1,
                                    minimize: true,
                                    modules: true
                                }
                            },
                            'less-loader'
                        ]
                    )
                }
            ]
        },
        optimization: {
            minimizer: [
                new TerserJSPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ]
        },
        plugins: [
            new ExtractTextPlugin(`${pkg.name}.${pkg.version}.min.css`),
            new CssoWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            // }),
            // new PurgecssPlugin({
            //     paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
            })
        ]
    }
];