require("ignore-styles");
require("@babel/polyfill");

require("@babel/register")({
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "mobx"
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import", "@loadable/babel-plugin"]
});

require("./index");
