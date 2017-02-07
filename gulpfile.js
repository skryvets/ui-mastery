"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
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

//Compile SCSS and reload
gulp.task('sass', function () {
	return gulp.src('./src/scss/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
});

//Concat, Minify JS and reload
gulp.task('js', function () {
	return gulp.src('./src/js/main.js')
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
});

//Gulp Watcher
gulp.task('watch', function () {
	gulp.watch(['./**/*.html'], ['reload']);
	gulp.watch(['./src/scss/**/*.scss'], ['sass']);
	gulp.watch(['./src/js/main.js'], ['js']);
});


//Production Compilation: minify and remove source maps
gulp.task('prod-sass', function () {
	return gulp.src('./src/scss/style.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./dist'))
});

gulp.task('prod-js', function () {
	return gulp.src('./src/js/main.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))
});

gulp.task('prod', ['prod-sass', 'prod-js'], function () {
	return gulp.src(['./css/*', '!./css/style.css'], {read: false})
	.pipe(clean(({force: true})));
});

//Default Task
gulp.task('start', ['sass', 'js', 'connect', 'watch']);

