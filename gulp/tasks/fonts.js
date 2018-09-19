module.exports = function () {
    $.gulp.task('fonts', function () {
    return $.gulp.src('src/static/stylus/fonts/*.{eot,ttf,woff,woff2}')
        .pipe($.gulp.dest('build/static/css/fonts/'));
    })
}