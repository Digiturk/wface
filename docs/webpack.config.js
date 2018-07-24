const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: 'development',
    output: {
        path: path.join(__dirname, "dist3"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".md"]
    },

    module: {    
        rules: [
            {            
                test: /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/,
                // include: path.join(__dirname, "src"),
                loader: "ts-loader",
                options: {
                    transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
                }
            },
            {
                test: /\.tsx$/,
                // include: path.join(__dirname, "src"),
                loader: "ts-loader",
                options: {
                    transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
                }
            },
            {
                test: /\.(png|jpg|gif|ico|html)$/,
                loader: 'file-loader'
            },            
            {
                test: /.(LICENSE|md|lock|.d.ts)$/,
                loader: "ignore-loader"
            }, 
            {
                test: /\.mdx$/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['react']
                    }
                  }, 
                  {
                    loader: '@mdx-js/loader'
                  }
                ]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        ]
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port:2020
    }
};
