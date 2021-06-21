let gulp = require('gulp'),
   sass = require('gulp-sass'),
   browserSync = require('browser-sync'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   rename = require('gulp-rename'),
   del = require('del'),
   autoprefixer = require('gulp-autoprefixer');
   imagemin = require('gulp-imagemin');


gulp.task('clean', async function(){
   del.sync('dist');
});

gulp.task('scss', function(){
   return gulp.src('app/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 8 versions'],
         cascade: false
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('image', function() {
   return gulp.src('app/img/**/*')
      .pipe(imagemin([
         imagemin.gifsicle({interlaced: true}),
         imagemin.mozjpeg({quality: 75, progressive: true}),
         imagemin.optipng({optimizationLevel: 5}),
         imagemin.svgo({
             plugins: [
                 {removeViewBox: true},
                 {cleanupIDs: false}
             ]
         })
      ]))
      .pipe(gulp.dest('dist/img'));
});

gulp.task('css', function(){
   return gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/fullpage.js/dist/fullpage.css'
   ])
      .pipe(concat('_libs.scss'))
      .pipe(gulp.dest('app/scss'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
   return gulp.src(['app/*.html', 'app/**/*.php'])
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
   return gulp.src('app/js/*.js')
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
   return gulp.src([
      'node_modules/fullpage.js/vendors/scrolloverflow.js',
      'node_modules/fullpage.js/dist/fullpage.js'
   ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
   browserSync.init({
       server: {
           baseDir: "app/"
       }
   });
});

gulp.task('export', function(){

   let buildHtml = gulp.src(['app/*.html', 'app/**/*.php'])
      .pipe(gulp.dest('dist'));
   
   let buildCss = gulp.src('app/css/**/*.css')
      .pipe(gulp.dest('dist/css'));

   let buildJs = gulp.src('app/js/**/*.js')
      .pipe(gulp.dest('dist/js'));
   
   let buildFonts = gulp.src('app/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'));

   let buildImg = gulp.src('app/img/**/*.*')
      .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
   gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
   gulp.watch('app/*.html', gulp.parallel('html'));
   gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'))