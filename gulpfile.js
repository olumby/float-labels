var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build:css', function () {
    gulp.src('scss/float-labels.scss')
        .pipe(plumber())
        .pipe(sass ({
            errLogToConsole: true,
            outputStyle: 'expanded',
            precision: 5
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("SCSS Done"))
});

gulp.task('build:js', function() {
    gulp.src('js/float-labels.js')
        .pipe(plumber())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("JS Done"))
});

gulp.task('min:css', function() {
    gulp.src('dist/css/float-labels.css')
        .pipe(plumber())
        .pipe(csso())
        .pipe(rename({ suffix:'.min' }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('min:js', function() {
    gulp.src('dist/js/float-labels.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({ suffix:'.min' }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build', ['build:css', 'build:js']);
gulp.task('min', ['min:css', 'min:js']);

function gulpWatch() {
    gulp.watch('scss/**/*.scss', ['build:css']);
    gulp.watch('js/**/*.js', ['build:js']);
};

gulp.task('run', function() {
    gulp.src('')
        .pipe(webserver({
            port: 1024,
            livereload: true,
            open: true,
            host: '192.168.1.7'
        }));
    gulpWatch();
});
