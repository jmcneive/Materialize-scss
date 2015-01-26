var gulp = require('gulp');
    
var sass = require('gulp-sass');
var takana = require('takana');
var plumber = require('gulp-plumber');

    // Run Takana
    gulp.task('takana', function() {
      takana.run({
        path:         __dirname, // run from the current working directory
        includePaths: []         // optional include paths
      });
    });

    // Compile SCSS
    gulp.task('sass', function() {
      gulp.src('./assets/sass/**/**/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
          style: 'nested',
          lineNumbers: true
    }))
      .pipe(gulp.dest('./assets/css/'));
    });

    // Watch task
    // Watches JS
    gulp.task('watch', function() {
        gulp.watch('./assets/js/*.js', ['scripts']);
        gulp.watch('./assets/sass/**/**/**/*.scss', ['sass']);
    });

    gulp.task('default', ['takana', 'sass', 'watch']);


