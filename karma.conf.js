// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],
    // ... normal karma configuration
    files: [
      // all files ending in "spec.js"
      'src/js/tests/**/*spec.js',
      // each file acts as entry point for the webpack configuration
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      // add webpack as preprocessor
      'src/js/tests/**/*spec.js': ['webpack', 'sourcemap']
    },
    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },
    browsers: ['PhantomJS']
  });
};
