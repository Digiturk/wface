// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelQuery = {
  "presets": [
    ["@babel/preset-env", {"modules": false}],
    "@babel/preset-react"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ],
  "env": { 
    "production": {
      "presets": ["minify"]
    },
    "test": {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
  }
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { 
            loader: 'babel-loader',
            query: babelQuery
          },
          'source-map-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [ 
          { 
          loader: 'babel-loader',
          query: babelQuery
          },
          'awesome-typescript-loader'
        ],
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
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../public/index.html.js'),      
      title: 'WFace App'
    }),
  ],
  
  performance: {
    hints: false,
  },
};