'use strict';

const gulp         = require('gulp');

const plumber      = require('gulp-plumber');

const gutil        = require('gulp-util');
const notify       = require('gulp-notify');
const child        = require('child_process');

const browserSync  = require('browser-sync');

const sass         = require('gulp-sass');
const copy         = require('gulp-copy');
const sourcemaps   = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');

const babel        = require('gulp-babel');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');

const src = {
  js   : 'assets/js',
  css  : 'assets/css',
  sass : 'assets/sass',
  maps : '../maps',

  root : '_site'
}

const processors = [
autoprefixer({browsers: ['> 0.1%', 'iOS >= 7', 'Safari >= 7',]}),
cssnano(),
]

gulp.task('sass', () => {
 return gulp.src(src.sass + '/*.sass')
 .pipe(sourcemaps.init())
 .pipe(sass().on('error', sass.logError))
 .pipe(postcss(processors))
 .pipe(sourcemaps.write(src.maps))
 .pipe(gulp.dest(src.css))
 .pipe(gulp.dest(src.root + '/' + src.css))
 .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('js', () => {
  return gulp.src([src.js + '/*.js', '!assets/js/*.min.js'])
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(babel({ presets: ['env']}))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(sourcemaps.write(src.maps))
    .pipe(gulp.dest(src.js))
    .pipe(gulp.dest(src.root + '/' + src.js));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build', '--incremental', '--drafts']);

  const jekyllLogger = (buffer) => {
    buffer.toString()
    .split(/\n/)
    .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('server', ['jekyll', 'sass', 'js'], () => {
  browserSync.init({
    port: 4000,
    server: {
      baseDir: src.root,
    }
  });

  gulp.watch(src.js + '/*.js', ['js']);
  gulp.watch(src.sass + '/*.sass', ['sass']);
  gulp.watch(['*.yml', '**/*.md', 'feed.xml', '_includes/*.html', '_layouts/*.html', '*.html'], ['jekyll']);
  gulp.watch(['_site/**/*.html', '_site/assets/js/main.min.js']).on('change', browserSync.reload);
});

const onError = function (err) {
  notify.onError({
    title:    'Error:',
    message:  '<%= error.message %>',
    icon:     'error'
  })(err);
  this.emit('end');
};

gulp.task('default', ['server']);
