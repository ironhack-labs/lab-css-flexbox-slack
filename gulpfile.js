const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const listaPath=["./starter_code/*.*", "./starter_code/stylesheets/*.*"];

function reload() {
    console.log("reload ----");

    $.livereload.listen();

    return gulp
        .src(listaPath)
        .pipe($.livereload())
        ;
}


gulp.task("watch",()=>{
    gulp.watch(listaPath, reload)
});