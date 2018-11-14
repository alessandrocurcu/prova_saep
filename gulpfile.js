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
  src(['./src/views/*.pug', '!./src/views/_?*.pug'])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest('./'))
    .pipe(browserSync.stream());

const prodhtml = () =>
  src(['./src/views/*.pug', '!./src/views/_?*.pug'])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest('./dist'));

const prodjs = () => src('./js/index.js').pipe(dest('./dist/js/'));

const cleanCSS = cb => {
  del(['./css/']);
  cb();
};

const prodcleanCSS = cb => {
  del(['./dist/css/']);
  cb();
};

const prodcleanJS = cb => {
  del(['./dist/js/']);
  cb();
};

const cleanHTML = cb => {
  del(['./*.html']);
  cb();
};

const prodcleanHTML = cb => {
  del(['./dist/*.html']);
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
    .pipe(dest('./css/'))
    .pipe(browserSync.stream());
};

const prodstyle = () =>
  src('./src/sass/main.scss')
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(
      autoprefixer({
        browsers: ['last 6 versions'],
      })
    )
    .pipe(beautify())
    .pipe(dest('./dist/css/'));

const watchFiles = () => {
  watch('./src/sass/*.scss', series(cleanCSS, style));
  watch('./src/views/*.pug', series(cleanHTML, html));
  watch('./js/*.js', series(cleanHTML, html));
};

exports.dev = parallel(watchFiles, browserSyncTask);

exports.build = parallel(
  series(prodcleanHTML, prodhtml),
  series(prodcleanCSS, prodstyle),
  series(prodcleanJS, prodjs)
);

exports.prova = series(prodcleanHTML, prodhtml);
exports.prova2 = prodjs;
