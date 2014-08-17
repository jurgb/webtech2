var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat')


//task

gulp.task("css",function(){
	return gulp.src('public/stylesheets/style.css')
	.pipe(concat('style_min.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/stylesheets'))
})

gulp.task("cssreset",function(){
	return gulp.src('public/stylesheets/reset.css')
	.pipe(concat('reset_min.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/stylesheets'))
})

//default task instellen

gulp.task('default', function(){
	gulp.run('css')
	gulp.watch('public/stylesheets/style.css',function(){
		gulp.run('css')
	})
})