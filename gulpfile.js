var gulp=require('gulp'),
	connect=require('gulp-connect'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	concat=require('gulp-concat'),
	port=process.env.port||3000;


//connect

gulp.task('connect',function(){
	connect.server({
		port:port,
		livereload:true
	})
});

//uglify

gulp.task('uglify',function(){
	gulp.src('./proj/js/*.js')
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./proj/dist'))
});

//reload

gulp.task('reload',function(){
	gulp.src('.proj/dist/*.js')
	.pipe(connect.reload())
});

//watch

gulp.task('watch',function(){
	gulp.watch('./proj/js/*.js',['uglify']);
	gulp.watch('./proj/dist/*.js',['reload']);
	gulp.watch('./*.html',['reload']);
});

//default

gulp.task('default',['connect','uglify','watch'])