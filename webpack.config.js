const path = require("path");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new GoogleFontsPlugin({
        fonts: [
            { family: "Rubik" },
            { family: "Roboto", variants: [ "400", "700italic" ] }
        ]
        /* ...options */
    })
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
