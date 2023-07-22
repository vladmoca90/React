let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/'))
});

//Watch task
gulp.task('default', function () {
  return gulp.watch('src/*.scss', gulp.series('sass'));
});