// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../../'),
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        // loaders: [
        //   'babel-loader', 
        //   {
        //     loader: 'awesome-typescript-loader',
        //     options: {
        //       sourceMap: true, 
        //       useCache: true, 
        //       useTranspileModule: true,
        //       "useBabel": true,
        //       "babelCore": "@babel/core", // needed for Babel v7
        //     }
        //   }
        // ]

        // loaders: [
        //   'babel-loader', 
        //   {
        //     loader: 'ts-loader',
        //     options: {
        //       transpileOnly: true,
        //       experimentalWatchApi: true,
        //     }
        //   }
        // ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({template: './public/index.html',}),
  ],
  performance: {
    hints: false,
  },
};