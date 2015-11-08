var gulp = require('gulp');
var drakov = require('drakov');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
//var browserify = require('gulp-browserify');
//var stringify = require('stringify');
//var jslint = require('gulp-jslint');

gulp.task('scripts', function () {
    gulp.src('./js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

//gulp.task('js', function() {
//    return gulp.src('./js/**/*.js', { read: false })
//        .pipe(concat('index.js'))
//        .pipe(browserify({
//            transform: stringify({
//                extensions: ['.html'], minify: true
//            })
//        }))
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist/'));
//});

gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    gulp.src('./html/*.html')
        .pipe(concat('index.html'))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(concat('index.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('drakov-server', function () {

    var argv = {
        sourceFiles: './api-blueprint-test/*.md',
        serverPort: 3000
    };

    drakov.run(argv);

});

gulp.task('browserify', function () {
    gulp.start('scripts').start('html').start('css');
});

//gulp.task('browserify2', function () {
//    gulp.start('js').start('html').start('css');
//});




gulp.task('default', function () {
    //return gulp.start('drakov-server');
    return gulp.start('browserify');
});
