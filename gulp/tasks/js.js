import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('js:lib:dist', () => {
  return gulp.src('./src/**/*')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});
