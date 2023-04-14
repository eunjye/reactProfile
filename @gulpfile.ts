const gulp = require('gulp');
const uglify = require('gulp-uglify');

// 경로 set (추후 정리)
const devsrc = '.';
const pubsrc = '.';
const paths = {
    'dev': {
        'css': './scss/*.scss',
        'js': './dev/js/*.js',
        'html': './*.html'
    },
    'pub': {
        'css': pubsrc,
        'js': pubsrc + '/js',
        'html': pubsrc
    },
}

// js minify
gulp.task('uglify', function (){
    return gulp.src('src/*.js') // src 폴더 아래 모든 js 파일
            .pipe(uglify) // minify 하여
            .pipe(gulp.dest('public')); // public 폴더에 저장
});

// setting gulp default
gulp.task('default', gulp.parallel(['uglify']));