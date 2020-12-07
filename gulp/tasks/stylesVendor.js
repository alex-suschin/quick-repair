const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require("gulp-rename")

module.exports = function vendors() {
    return gulp.src('src/styles/libs/*.scss')
        .pipe(concat('vendors.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/css'))
};