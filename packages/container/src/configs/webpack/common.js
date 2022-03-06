// shared config (dev and prod)
const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelQuery = {
  "presets": [
    ["@babel/preset-env"],
    "@babel/preset-react"
  ],
  "plugins": [
    "add-module-exports",
    // "react-hot-loader/babel"
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
            options: babelQuery
          },
          // 'source-map-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelQuery
          },
          'ts-loader' //'awesome-typescript-loader'
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
  plugins: [
    // new CheckerPlugin(),
    // new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../../public/index.html.js'),
      title: 'WFace App'
    })
  ],
  performance: {
    hints: false,
  },
};