const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/client/index.tsx"],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [
                path.resolve("./client/scss"),
                path.resolve("./client/components"),
                path.resolve("./node_modules")
              ],
              sourceComments: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    path: __dirname + "/dist/client",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.IgnorePlugin(/environ/),
    new CopyPlugin([
      { from: "src/server/bootstrap.js", to: "../server/server" }
    ])
  ],
  devServer: {
    contentBase: "dist"
  }
};
