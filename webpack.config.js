const webpack = require('webpack');
const { execSync } = require('child_process');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const path = require('path');

const srcPath = `${__dirname}/src`;
const distPath = `${__dirname}/build`;

let greVersion = 'v0.1.test';

if (process.env.NODE_ENV !== 'none') {
    greVersion = getGitTags();
}

const appData = {
    name: 'GoDaddy Record Editor',
    version: greVersion
};
// eslint-disable-next-line no-console
console.log('Setting project version as:', JSON.stringify(appData, null, 2));

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        vendor: ['lodash', 'react', 'react-dom', 'redux', 'react-redux', 'prop-types', 'dayjs'],
        bundle: `${srcPath}/index`,
    },
    output: {
        path: distPath,
        filename: '[name].js?v=[contenthash:12]',
    },
    devServer: {
        inline: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: process.env.NODE_ENV || 'development',
                    },
                },
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@actions': `${srcPath}/actions`,
            '@components': `${srcPath}/components`,
            '@constants': `${srcPath}/constants`,
            '@containers': `${srcPath}/containers`,
            '@enhancers': `${srcPath}/enhancers`,
            '@middleware': `${srcPath}/middleware`,
            '@reducers': `${srcPath}/reducers`,
            '@routes': `${srcPath}/routes`,
            '@selectors': `${srcPath}/selectors`,
            '@services': `${srcPath}/services`,
            '@state': `${srcPath}/state`,
            '@store': `${srcPath}/store`,
            '@styles': `${srcPath}/styles`,
            '@utils': `${srcPath}/utils`,
            '@views': `${srcPath}/views`,
        },
    },
    watchOptions: {
        ignored: /(node_modules|__tests__)/,
        poll: 500,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                GRE_VERSION: JSON.stringify(greVersion),
            },
        }),
        new WebpackBuildNotifierPlugin({
            title: appData.name,
            logo: path.resolve("./img/favicon.png"),
            suppressSuccess: false, // don't spam success notifications
        })
    ],
    devtool: 'source-map',
};

function getGitTags() {
    const cmd = [];

    cmd.push('git describe --tags');

    return execSync(cmd.join(' ; ')).toString().trim();
}
