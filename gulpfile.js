var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('default', function(done) {
    gulp.src('./js/*.js')
        .pipe(ngAnnotate({
            single_quotes: true
        }))
        .pipe(concat('pr.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
        .on('end', done);
});
