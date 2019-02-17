var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('public/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles/'))
});

//Watch task
gulp.task('default', function () {
  return gulp.watch('public/styles/*.scss', gulp.series('sass'));
});
