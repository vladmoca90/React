var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('content/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('content/'))
});

// Watch task
gulp.task('default', function () {
  return gulp.watch('content/**/*.scss', ['sass']);
});
