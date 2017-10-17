const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const rootPath = path.join(__dirname, '.');


module.exports = {
  entry: {
    main: `${rootPath}/src/main.css`
  },
  output: {
    filename: 'output.css'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
              {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 1,
                  }
              },
              {
                  loader: 'postcss-loader'
              }
          ]
        })

      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: `output.css`, allChunks: true, ignoreOrder: true }),
  ]
}
