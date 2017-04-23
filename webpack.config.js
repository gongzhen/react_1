module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exculde:/(node_modules)/,
      loaders: ['babel']
    }
    ]
  }
};
