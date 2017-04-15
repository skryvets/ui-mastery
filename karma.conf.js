// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: './src/js/tests/',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher')
        ],
        files: [
            '*.spec.js'
        ],
        browsers: ['PhantomJS']
    })
}
