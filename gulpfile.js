"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var gulp_jspm = require('gulp-jspm');
var karma = require("gulp-karma-runner");

gulp.task('default', function () {
});

//Init server and connect
gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});

//Reload on any HTML changes
gulp.task('reload', function () {
    gulp.src('./*.html')
    .pipe(connect.reload());
    
});

//Compile SCSS and reload
gulp.task('sass', function () {
    return gulp.src('./src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

//Compile and bundle js
gulp.task('js-bundle', function(){
    return gulp.src('./src/js/actions/main.js')
    .pipe(sourcemaps.init())
    .pipe(gulp_jspm({selfExecutingBundle: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

//Gulp Watcher
gulp.task('watch', function () {
    gulp.watch(['./**/*.html'], ['reload']);
    gulp.watch(['./src/scss/**/*.scss'], ['sass']);
    gulp.watch(['./src/js/actions/**/*.js'], ['js-bundle']);
});

//Dev compilation with sourcemaps. It's needed for dev server
gulp.task('dev', ['sass', 'js-bundle']);


//Production Compilation: minify and remove source maps
gulp.task('prod-sass', function () {
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
});

gulp.task('prod-js-bundle', function () {
    return gulp.src('./src/js/actions/main.js')
    .pipe(gulp_jspm({selfExecutingBundle: true, minify: true}))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('prod', ['prod-sass', 'prod-js-bundle'], function () {
    return gulp.src(['./css/*', '!./css/style.css'], {read: false})
    .pipe(clean(({force: true})));
});

//Default Task
gulp.task('start', ['sass', 'js-bundle', 'connect', 'watch']);
