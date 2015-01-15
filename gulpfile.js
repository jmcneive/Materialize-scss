var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');

    // Scripts task
    // Uglifies
    gulp.task('scripts', function() {
      gulp.src('assets/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));  
    });


    // Styles task
    // Drugs
    gulp.task('sass', function() {
      gulp.src('assets/sass/**/**/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
          style: 'nested',
          lineNumbers: true
    }))
      .pipe(gulp.dest('assets/css/'));
    });


    // Watch task
    // Watches JS
    gulp.task('watch', function() {
        gulp.watch('assets/js/*.js', ['scripts']);
        gulp.watch('assets/sass/**/**/**/*.scss', ['sass']);
    });

    gulp.task('default', ['sass', 'scripts', 'watch']);


