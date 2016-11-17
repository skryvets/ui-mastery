"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

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

//Compile, minify SCSS and reload
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

//Concat, Minify JS and reload
gulp.task('js', function () {
  return gulp.src('./js/src/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
    .pipe(connect.reload());
});

//Gulp Watcher
gulp.task('watch', function () {
  gulp.watch(['./**/*.html'], ['reload']);
  gulp.watch(['./scss/**/*.scss'], ['sass', 'clean']);
  gulp.watch(['./js/src/**/*.js'], ['js']);
});

//Remove unnecessary CSS
gulp.task('clean', ['sass'], function () {
  return gulp.src(['./css/components', './css/common'], {read: false})
    .pipe(clean(({force: true})));
});

gulp.task('default', ['connect', 'watch', 'clean']);