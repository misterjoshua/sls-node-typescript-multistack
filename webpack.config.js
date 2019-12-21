const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: "node",
  entry: {
    test1: "./src/test1/test1.ts",
    test2: "./src/test2/test2.ts"
  },
  output: {
    filename: "[name]/dist.js",
    path: __dirname + "/dist/",
    libraryTarget: "commonjs",
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/**/serverless.yml',
        to: '[1]/serverless.yml',
        test: /src\/(.*)\/serverless.yml/,
      }
    ])
  ],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [{ test: /.tsx?$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  
};
