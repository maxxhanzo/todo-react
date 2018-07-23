const ExtractTextPlugin = require('extract-text-webpack-plugin'); //  -> ADDED IN THIS STEP

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    new ExtractTextPlugin('style.bundle.css'),
  ],
  module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract({
                use: 'css-loader',
              }),
            }
        ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
      contentBase: "./"
  }
};
