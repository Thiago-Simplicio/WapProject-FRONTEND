const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/_app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: "file-loader",
        include: path.join(__dirname, "pages"),
      },
    ],
  },
  plugins: [new HtmlWebPackPlugin({ template: "./index.html" })],
};
