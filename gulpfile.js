// const gulp = require('gulp');
const { src, dest, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const log = require('fancy-log');
const color = require('ansi-colors');
const del = require('del');

// HTML
const pug = require('gulp-pug');

// CSS
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const beautify = require('gulp-cssbeautify');
const moduleImporter = require('sass-module-importer');

const defaultTask = cb => {
  cb();
};

const browserSyncTask = cb => {
  browserSync.init({
    server: {
      baseDir: './',
      browser: 'google chrome canary',
    },
  });
  cb();
};

const html = () =>
  src('./src/views/*.pug')
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest('./'))
    .pipe(browserSync.stream());

const cleanCSS = cb => {
  del(['./static/css/']);
  cb();
};

const cleanHTML = cb => {
  del(['./index.html']);
  cb();
};

const style = () => {
  log(color.green('Da SASS a CSS'));
  return src('./src/sass/main.scss')
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(
      autoprefixer({
        browsers: ['last 6 versions'],
      })
    )
    .pipe(beautify())
    .pipe(dest('./static/css/'))
    .pipe(browserSync.stream());
};

watch('./src/sass/*.scss', series(cleanCSS, style));
watch('./src/views/*.pug', series(cleanHTML, html));
watch('./static/js/*.js', series(cleanHTML, html));

// watch('./index.html', series(clean, htmlTask));
// watch('./index.html', htmlTask);
exports.default = series(browserSyncTask);
