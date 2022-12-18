const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const watch = require('gulp-watch');


const sassFile = 'src/sass/all.scss';

const devOptions = {
    outputStyle: 'expanded'
}

const prodOptions = {
    outputStyle: 'compressed'
}



// Para executar: gulp dev
gulp.task('dev', function() {
    return gulp.src(sassFile)
        .pipe(sass(devOptions).on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css'));
});

// Para executar: gulp prod
gulp.task('prod', function() {
    return gulp.src(sassFile)
        .pipe(sass(prodOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    watch('src/sass/*.scss', ['dev', 'prod']);
});