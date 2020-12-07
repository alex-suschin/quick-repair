const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require("gulp-rename")

module.exports = function vendors() {
    return gulp.src('src/js/libs/*.js')
        .pipe(concat('vendors.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/js'))
};