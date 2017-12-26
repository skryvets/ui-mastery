var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SvgStore = require('webpack-svgstore-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var inProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: [
      './src/js/actions/main.js',
      './src/scss/style.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      },
    ]
  },
  plugins: [
    new SvgStore({
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      },
      prefix: ''
    })
  ]
}

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    function() {
      this.plugin("done", function(statsData) {
        var stats = statsData.toJson();
        console.log("This is a hash", stats.hash);

        if (!stats.errors.length) {
          var footerFileName = "./index.html";
          var phpFile = fs.readFileSync(path.join(__dirname, footerFileName), "utf8");

          var phpOutput = phpFile.replace(
            /(<script.+main\.bundle\.)(js">)/gi,
            "$1" + stats.hash + "." + "$2");

          fs.writeFileSync(
            path.join(__dirname, "", footerFileName),
            phpOutput);
        }
      });
    },
    new ExtractTextPlugin({
      filename: function (getPath) {
        var hash = getPath('[hash]');

        var headerFileName = "./index.html";
        var phpFile = fs.readFileSync(path.join(__dirname, headerFileName), "utf8");

        var phpOutput = phpFile.replace(
          /(<link.+dist\/style\.)(css">)/gi,
          "$1" + hash + "." + "$2");

        fs.writeFileSync(
          path.join(__dirname, "", headerFileName),
          phpOutput);

        return getPath('style.css');
      }
    })
  )
} else {
  module.exports.plugins.push(
    new webpack.SourceMapDevToolPlugin({
      filename: 'style.css.map'
    }),
    new LiveReloadPlugin(),
    new ExtractTextPlugin('style.css')
  )
}

