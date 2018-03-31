//gulp
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var shorthand = require('gulp-shorthand');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var tiny = require('gulp-tinypng-nokey');

//config 
var path = {
	build: {
		html: 'build/',
		js: 'build/js',
		css: 'build/css',
		img: 'build/img',
		fonts: 'build/fonts'
	},
	src: {
		html: 'src/*.html',
		js: 'src/js/*.js',
		sass: 'src/sass/*.sass',
		css: 'src/css',
		cssfile: 'src/css/*.css',
		img: 'src/img/*.*',
		fonts: 'src/fonts/*.*'
	},
	watch: {
		html: 'src/*.html',
		js: 'src/js/*.js',
		sass: 'src/sass/*.sass'
	}
};

var serverConfig = {
	server: ['./src'],
	notify: false
	};

//server
gulp.task('server',['style:src'],function(){
	browserSync.init(serverConfig);
});

//html
gulp.task('html:build', function(){
	gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html));
});

//js
gulp.task('js:build', function(){
	gulp.src(path.src.js)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js));
});

//style
gulp.task('style:build', function(){
	gulp.src(path.src.cssfile)
		.pipe(gulp.dest(path.build.css));
});

gulp.task('style:src', function(){
	gulp.src(path.src.sass)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 10 versions']
		}))
		.pipe(shorthand())
		.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.src.css))
		.pipe(browserSync.reload({stream: true}));
});

//image
gulp.task('image:build', function(){
	gulp.src(path.src.img)
	.pipe(tiny())
	.pipe(gulp.dest(path.build.img))
});

//fonts
gulp.task('fonts:build', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

//watcher
gulp.task('watch', function(){
	gulp.watch(path.watch.html, browserSync.reload);
	gulp.watch(path.watch.js, browserSync.reload)
	gulp.watch(path.watch.sass,['style:src']);
});

//build
gulp.task('build', [
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'image:build'
]);

//default
gulp.task('default', ['server', 'watch']);