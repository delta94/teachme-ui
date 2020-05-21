const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const shareByVersion = (module) => {
  const vendorVersion = require(`${module}/package.json`).version;
  const trimmedVersion = vendorVersion.substring(0, vendorVersion.length - 2);
  return { [trimmedVersion]: module };
};

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: "./src",
    compress: true,
    port: 9000,
  },
  output: {
    publicPath: "http://localhost:9000/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // add a custom index.html as the template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "teachme",
      filename: "remoteEntry.js",
      remotes: {
        wmForms: "wmForms",
      },
      shared: Object.assign(
        {},
        shareByVersion("react"),
        shareByVersion("react-dom")
      ),
    }),
  ],
};
