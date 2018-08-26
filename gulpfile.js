var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('watch', function(){
	watch("./app/index.html", function(){
		gulp.start('html');
	});
	
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("styles");
	});
});

gulp.task('default', function(){
	console.log("running gulp");
});

gulp.task("html", function(){
	console.log("running html function");
});

gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});