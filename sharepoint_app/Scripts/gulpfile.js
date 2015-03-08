// Include gulp
var gulp = require('gulp');

// Include Our Plugins
//var jshint = require('gulp-jshint');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var ngmin = require('gulp-ngmin');
var concat = require('gulp-ngconcat');

// Concatenate & Minify JS
//gulp.task('scripts', function () {
//    return gulp.src('src/*.js')
//        .pipe(concat('app.js'))
//        .pipe(gulp.dest('dist'))
//       //.pipe(rename('app.min.js'))
//       //.pipe(uglify())
//        .pipe(gulp.dest('dist'));
//});

gulp.task('concat', function () {
    gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['concat']);
});

// Default Task
gulp.task('default', ['concat', 'watch']);