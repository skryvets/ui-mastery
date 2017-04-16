// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jspm', 'jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-jspm')
        ],
        jspm: {
            config: "jspm_config.js",
            packages: "jspm_packages/",
            beforeFiles: ['jspm_packages/system-polyfills.js'],
            loadFiles: ['src/js/tests/**/*.js'],
            serveFiles: ['src/**/*.js']
        },
        files: [],
        proxies: {
            '/src/': '/base/src/',
            '/jspm_packages/' : '/base/jspm_packages/'
        },
        browsers: ['PhantomJS']
    })
}
