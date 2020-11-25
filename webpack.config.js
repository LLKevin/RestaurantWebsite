const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{

      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }, ],
  },
};