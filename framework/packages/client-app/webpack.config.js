const path = require("path");

module.exports = {
    entry: "./src/index.tsx",

    output: {
        path: path.join(__dirname, "dist3"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {    
        loaders: [
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
            }
            
        ]
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true
    }
};
