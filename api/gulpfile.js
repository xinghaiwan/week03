const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

gulp.task('devSass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('webserver', function() {
    return gulp.src('./src/')
        .pipe(webserver({
            port: 9000,
            open: true,
            livereload: true,
            proxies: [{
                source: '/api/list',
                target: 'http://localhost:3000/api/list'
            }]
        }))
});

gulp.task('watching', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.series('devSass'));
});

gulp.task('default', gulp.series('devSass', 'webserver', 'watching'));