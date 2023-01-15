const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./css"));
}

function watch() {
  gulp.watch("./scss/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;
