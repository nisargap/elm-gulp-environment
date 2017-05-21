let gulp = require('gulp');
let elm = require('gulp-elm');
let plumber = require('gulp-plumber');
let sass = require('gulp-sass');
let del = require('del');

// Builds elm files and static resources (i.e. html and css) from src to dist folder
let paths = {
  dest: 'dist',
  elm: 'src/*.elm',
  sass: './src/sass/main.scss',
  bootstrapBower: './bower_components/bootstrap/dist/**/*.*',
  staticAssets: 'src/static/*.html',
  fontawesomeDir: './bower_components/font-awesome/scss'
};

gulp.task('clean', (cb) => {
  del([paths.dest], cb);
});

gulp.task('elm-init', elm.init);

gulp.task('elm', ['elm-init'], () => {
  return gulp.src(paths.elm)
    .pipe(plumber())
    .pipe(elm())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('staticAssets', () => {
  return gulp.src(paths.staticAssets)
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('bootstrap', () => {
  return gulp.src(paths.bootstrapBower)
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('icons', function() { 
    return gulp.src('./bower_components/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./dist/fonts')); 
});

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sass({
             outputStyle: 'compressed',
             includePaths: [
                './src/sass',
                 paths.fontawesomeDir
             ]
         }).on('error', sass.logError))
    .pipe(gulp.dest(paths.dest));
});


gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.elm, ['elm']);
  gulp.watch(paths.staticAssets, ['staticAssets']);
});

gulp.task('build', ['elm', 'staticAssets', 'icons', 'sass', 'bootstrap']);
gulp.task('dev', ['build', 'bootstrap', 'watch']);
gulp.task('default', ['build']);
