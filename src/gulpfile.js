var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();


gulp.task('sass', function () {
    gulp.src([
        './css/style.scss'
    ])
        .pipe($.plumber({errorHandler: $.notify.onError()}))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.concat('style.css'))
        .pipe($.csso())
        .pipe(gulp.dest('../public/css/'))
});

gulp.task('js', function() {
    gulp.src([
        './js/**/*.js'
    ])
        .pipe($.plumber({errorHandler: $.notify.onError()}))
        .pipe($.concat('min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('../public/js/'))
});

gulp.task('images', function() {
    gulp.src('./images/**/*')
        .pipe($.plumber({errorHandler: $.notify.onError()}))
        .pipe($.imagemin({use: [imageminMozjpeg({quality: 85})]}))
        .pipe(gulp.dest('./images/'))
});

gulp.task('serve', $.serve({
    root: '../',
    port: 3000,

}));

gulp.task('watch', function () {
    gulp.watch(['./css/**/*.scss'], ['sass']);
    gulp.watch(['./js/**/*.js'], ['js']);
    // gulp.watch('./images/**/*', ['images']);
});

gulp.task('default', ['watch', 'serve']);
