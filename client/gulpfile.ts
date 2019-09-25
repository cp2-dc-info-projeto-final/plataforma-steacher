import * as gulp from 'gulp';
import * as imagemin from 'gulp-imagemin';

gulp.task('build-assets', function() {

  gulp.src('public/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets'));
});