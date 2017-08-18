var gulp         = require('gulp');
var sass         = require('gulp-sass');
var minify       = require('gulp-minifier');
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var notify       = require('gulp-notify');
var gutil        = require( 'gulp-util' );

gulp.task('sass', function () {
  return gulp.src('assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(minify({ minify: true, minifyCSS: true }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('../public/css'))
    .pipe(notify({message: 'Sass task complete'}))
});

gulp.task('js',function(){
	gulp.src('assets/js/**/*.js')
    //.pipe(minify({ minify: true, minifyJS: true }))
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('../public/js'))
    .pipe(notify({message: 'JavaScript task complete'}))
});

gulp.task('json', function(){
    gulp.src(['sass/**/*.json','js/**/*.json' ])
    .pipe(merge('combined.json'))
    .pipe(gulp.dest('../public/'))
});

gulp.task('watch', function() {
  gulp.watch('.assets/js/**/*.js', ['js']);
  gulp.watch('.assets/sass/**/*.scss', ['sass']);
});