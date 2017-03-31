var webpack = require('webpack');

module.exports = {

  context: __dirname + 'src',
  entry: './main',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js'],
    alias: {}
  },

  module: {
    rules:[
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: 'node_modules'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
    
  }
}