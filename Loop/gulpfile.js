const {src, dest, watch, parallel, series} = require('gulp');

const scss          = require('gulp-sass');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const uglify        = require('gulp-uglify-es').default;
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const del           = require('del');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return del('dist')
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
    return src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'app/scss/style.scss'
    ])
        .pipe(scss({outputStyle: 'extended'}))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/images/**/*')
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
        .pipe(dest('dist/images'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*/**.php']).on('change', browserSync.reload);
    watch(['app/*.html']).on('change', browserSync.reload)
}

function build() {
    return src([
        'app/css/style.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/**/*.php',
        'app/*.html'
    ], {base: 'app'})
        .pipe(dest('dist'))
}

exports.watching    = watching;
exports.browsersync = browsersync;
exports.styles      = styles;
exports.scripts     = scripts;
exports.images      = images;
exports.cleanDist   = cleanDist;

exports.build       = series(cleanDist, build, images);
exports.default     = parallel(styles, scripts, browsersync, watching);