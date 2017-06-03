var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    // spritesmith = require('gulp-spritesmith'),
    imagemin = require('gulp-imagemin'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    babel = require("gulp-babel"),
    reload = browserSync.reload;

var path = {
    dist: {
        html: 'dist/',
        css: 'dist/css/',
        js: 'dist/js/',
        // fonts: 'dist/fonts/',
        img: 'dist/img/'
    },
    src: {
        html: 'src/*.html',
        style: 'src/style/style.scss',
        js: 'src/js/script.js',
        // libs: 'src/js/libs/*.js',
        fonts: 'src/fonts/**/*.*',
        img: 'src/img/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        style: 'src/style/**/*.*',
        js: 'src/js/**/*.js',
        // libs: 'src/js/libs/**/*.js',
        // fonts: 'src/fonts/**/*.*',
        img: 'src/img/**/*.*'
    },
    clean: './dist'
};

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Shevchuk Alex"
};

// gulp.task('clean', function() {
//     return del.sync('dist');
// });

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.dist.html))
        .pipe(reload({stream: true}));
});
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.js))
        .pipe(reload({stream: true}));
    // gulp.src(path.src.libs)
    //     .pipe(concat('libs.min.js'))
    //     .pipe(rigger())
    //     .pipe(sourcemaps.init())
    //     .pipe(uglify())
    //     .pipe(sourcemaps.write())
    //     .pipe(gulp.dest(path.dist.js))
    //     .pipe(reload({stream: true}));
});
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        // .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css))
        .pipe(reload({stream: true}));
});
gulp.task('image:build', function () {
    gulp.src(path.src.img)
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(path.dist.img))
        .pipe(reload({stream: true}));
});
// gulp.task('fonts:build', function() {
//     gulp.src(path.src.fonts)
//         .pipe(gulp.dest(path.dist.fonts))
// });

// gulp.task('sprite', function () {
//   var spriteData = gulp.src('src/img/icon/*.png')
//     .pipe(spritesmith({
//       imgName: 'sprite1.png',
//       cssName: 'sprite1.scss',
//       algorithm: 'top-down'
//     }));
//   spriteData.img.pipe(gulp.dest('src/img/'));
//   spriteData.css.pipe(gulp.dest('src/style/'));
// });

gulp.task('build', [
    'html:build',
    'style:build',
    'js:build',
    // 'fonts:build',
    'image:build'
]);
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.start('fonts:build');
    // });
});

gulp.task('webserver', function () {
    browserSync(config);
});
// gulp.task('clean', function (cb) {
//     rimraf(path.clean, cb);
// });


gulp.task('default', ['build', 'webserver', 'watch']);
