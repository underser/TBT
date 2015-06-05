var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
var livereload = require('gulp-livereload');

gulp.task('connect', function () {
	connect.server({
		root: '',
		port: 8001,
		livereload: true
	});
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(livereload());
});

gulp.task("sass", function() {
	return gulp.src("sass/*.scss")
	.pipe(sass({errLogToConsole: true}))
	.pipe(gulp.dest("css"))
	.pipe(livereload());
});

gulp.task("watch", function() {
	livereload.listen();
	gulp.watch(['./*.html'], ['html']);
	gulp.watch("sass/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "html", "connect", "watch"]);