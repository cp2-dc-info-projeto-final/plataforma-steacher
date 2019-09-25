const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('build-assets', async function() {

  gulp.src('public/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets'));
});