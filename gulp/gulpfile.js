/*
 * @description 引入插件
 */
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var copy = require('gulp-copy');
var tinypng = require('gulp-tinypng');
var imagemin = require('gulp-imagemin');

/*
 * @description 注册任务
 */
gulp.task('clean', function() {
	gulp.src(['build/css', 'build/js'])
	.pipe(clean());
});

//带有原文件的压缩
gulp.task('minify', function() {
	gulp.src(['js/**/*.js', '!js/**/*-min.js'])
	.pipe(minify())
	.pipe(gulp.dest('build/js/'));
});

//不带原文件压缩
gulp.task('uglify', function() {
	gulp.src(['js/**/*.js', '!js/**/*-min.js'])
	.pipe(uglify())
	.pipe(gulp.dest('build/js/'));
});

//合并压缩js文件
gulp.task('buildJS', ['clean'], function() {
	gulp.src(['src/concat1.js', 'src/concat2.js'])
	.pipe(concat('concat.js'))
	.pipe(gulp.dest('js/'))
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
	
	gulp.src(['src/test1.js', 'src/test2.js'])
	.pipe(concat('test.js'))
	.pipe(gulp.dest('js/'))
	.pipe(uglify())
	.pipe(gulp.dest('build/js/'));
});

//合并编译压缩css文件
gulp.task('buildCSS', function() {
	gulp.src(['less/**/*.less', '!less/**/_*.less'])
	.pipe(concat('myLess.less'))
	.pipe(less())
	.pipe(gulp.dest('css/'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/css/'));
});

//复制文件，无需任何插件
gulp.task('copyCSS', function() {
	gulp.src('css/**/*.css')
	.pipe(gulp.dest('build/css/'));
});

//压缩 png 和  jpg 格式的图片，压缩需要API-KEY，可从如下网址获得：https://tinypng.com/developers
gulp.task('tinypng', function() {
	gulp.src('img/**/*.*')
	.pipe(tinypng('si8Xu_lmYT3CXqefZg555k1QnPDd28za'))//参数为API-KEY
	.pipe(gulp.dest('build/img/'));
});

//压缩图片，压缩率没有tinypng高
gulp.task('imagemin', function() {
	gulp.src('img/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img/'));
});

gulp.task('default',['buildJS', 'buildCSS']);

