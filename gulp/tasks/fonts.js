module.exports = function () {
    $.gulp.task('fonts', function () {
        return $.gulp.src('src/static/stylus/fonts/*.*')
            .pipe($.gulp.dest('build/static/css/fonts/'))
            .pipe($.bs.reload({
                stream:true
            }));
    })
}