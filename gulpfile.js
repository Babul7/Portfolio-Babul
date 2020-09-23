var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Specific Task
function js() {
    return gulp
    .src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}
gulp.task(js);

// Specific Task
function gulpSass() {
    return gulp
    .src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
gulp.task(gulpSass);

// Move Fonts Folder to src/fonts
function fonts() {
    return gulp
    .src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("src/fonts"));
}
gulp.task(fonts);

// Move Font Awesome CSS to src/css
function fa() {
    return gulp
    .src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("src/css"));
}
gulp.task(fa);

// Watch Sass & Server
function serve() {
    browserSync.init({
        server: "./src"
    });
}
gulp.task(serve);

// Run multiple tasks
gulp.task('start', gulp.series(js, gulpSass, fonts, fa, serve));