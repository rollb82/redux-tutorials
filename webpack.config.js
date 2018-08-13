const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    mode: 'none',
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
};

module.exports = config;
