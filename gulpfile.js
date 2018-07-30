var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename');
    del          = require('del');
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
               .pipe(sass())
               .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 10', 'ie 11'], { cascade: true }))
               .pipe(gulp.dest('src/css'))
               .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('src/css/libs/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});


gulp.task('scripts', function() {
    return gulp.src([
        'src/js/libs/jquery-3.2.1.min.js',
        'src/js/libs/slick.min.js',
        'src/js/libs/jquery.animateNumber.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src' //
        },
        notify: false //
    });
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('watch',['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', browserSync.reload );
    gulp.watch('src/js/**/*.js', browserSync.reload );

});

gulp.task('build', ['clean', 'css-libs', 'scripts'], function() {

    var buildCss = gulp.src([
        'src/css/style.css',
        'src/css/libs.min.css'
    ])
        .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));
    var buildJs = gulp.src('src/js/**/*').pipe(gulp.dest('dist/js'));
    var buildHtml = gulp.src('src/*.html').pipe(gulp.dest('dist'));

});