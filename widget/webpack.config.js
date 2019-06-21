const path = require("path");

module.exports = {
  entry: "./frontend/app.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/, // Leaves dependencies alone
        loader: 'babel-loader', // Sets Babel as the transpiler
        query: {
          presets: ['@babel/env', '@babel/react'] // Tells Babel what syntaxes to translate
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};