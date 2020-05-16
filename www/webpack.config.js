const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dist = path.resolve(__dirname, "dist");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const appConfig = {
  entry: "./app/main.js",
  devServer: {
    contentBase: dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  resolve: {
    extensions: [".js"]
  },
  output: {
    path: dist,
    filename: "app.js"
  }
};

const worker1Config = {
  entry: "./worker/worker1.js",
  target: "webworker",
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "../crate-wasm")
    })
  ],
  resolve: {
    extensions: [".js", ".wasm"]
  },
  output: {
    path: dist,
    filename: "worker1.js"
  }
};

const worker2Config = {
  entry: "./worker/worker2.js",
  target: "webworker",
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "../crate-wasm")
    })
  ],
  resolve: {
    extensions: [".js", ".wasm"]
  },
  output: {
    path: dist,
    filename: "worker2.js"
  }
};

module.exports = [appConfig, worker1Config, worker2Config];
