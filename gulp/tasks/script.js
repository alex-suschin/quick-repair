const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const eslint = require('gulp-eslint')



module.exports = function script() {
    return gulp.src('src/js/main.js')
        // .pipe(plumber())
        // .pipe(eslint())
        // .pipe(eslint.format())
        // .pipe(webpack({
        //     output: {
        //         filename: '[name].js',
        //     },


    // }))
    .pipe(gulp.dest('build/js'))
}