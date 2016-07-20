/**
 * @file 构建工具
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const rollup = require('gulp-rollup');
const uglify = require('gulp-uglify');

const gulpBrowser = require("gulp-browser");
var transforms = [
    {
        transform: "babelify",
        options: { presets: ["es2015"] }
    }
];

gulp.task('sass', () => {
    return gulp.src('dev/scss/**/*.{scss,sass}')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('static/css/'));
});

gulp.task('bundle', () => {
   gulp.src('dev/js/**/*.main.js')
   		.pipe(rollup())
		.pipe(gulpBrowser.browserify(transforms))
		// .pipe(uglify())
		.pipe(gulp.dest('static/js'));
});

gulp.task('copy', () => {
    gulp.src('dev/vtour/**/*')
		.pipe(gulp.dest('static/vtour/'))
});

gulp.task('watch', () => {
    gulp.watch('dev/js/**/*', ['bundle']);
	gulp.watch('dev/scss/**/*', ['sass']);
	gulp.watch('dev/vtour/**/*', ['copy']);
});

// task
gulp.task('default', ['sass', 'bundle', 'copy', 'watch']);