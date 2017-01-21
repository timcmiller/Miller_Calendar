var gulp = require('gulp');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('static:dev', function() {
  return gulp.src('app/index.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass:dev', function() {
  return gulp.src('./app/sass/**.scss')
  .pipe(maps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('build/css'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.jsx')
  .pipe(webpack({
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['static:dev', 'webpack:dev']);
gulp.task('styles', ['sass:dev']);
gulp.task('default', ['build', 'styles']);
