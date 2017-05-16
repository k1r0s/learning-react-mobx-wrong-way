var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".ts", ".tsx"]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ["awesome-typescript-loader"],
      include: path.join(__dirname, "src")
    }]
  }
};
