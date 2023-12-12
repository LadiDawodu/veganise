const path = require("path");

module.exports = {
  mode: "development", // Set the build mode
  entry: "./src/App.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Define the output directory using path
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].text",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "svg-url-loader",
      },
    ],
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
