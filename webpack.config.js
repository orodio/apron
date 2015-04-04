var webpack = require("webpack");

module.exports = {
  entry: __dirname + "/dynamic/index.js",

  output: {
    path: __dirname,
    filename: "app.js"
  },

  module: {
    loaders: [
      {test: /\.js$/, loaders: ["babel"]},
      {test: /\.css$/, loaders: ["style", "css", "postcss"]}
    ]
  },

  postcss: [
    require("autoprefixer-core"),
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("postcss-media-minmax")
  ],

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({ __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "false")) })
  ]
}
