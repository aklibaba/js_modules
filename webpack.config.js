const path = require('path');
console.log(path.resolve(__dirname, '/build'));

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  }
};

module.exports = config;