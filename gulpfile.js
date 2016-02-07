var gulp = require('gulp'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber');

gulp.task('es6toes5', function() {
	return gulp.src('src/jsminifier.js')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['es6toes5', 'watch']);

gulp.task('watch', function() {
	gulp.watch('src/jsminifier.js', ['es6toes5']);
});