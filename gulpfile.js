//Main Moduls
import gulp from "gulp";
//Import path
import {path} from "./gulp/config/path.js";
//Import global plugins
import {plugins} from "./gulp/config/plugins.js" 

//We pass values in the global variables
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Import tasks
import {copy} from "./gulp/task/copy.js";
import {reset} from "./gulp/task/reset.js";
import {html} from "./gulp/task/html.js";
import {server} from "./gulp/task/server.js";
import {scss} from "./gulp/task/scss.js";
import {js} from "./gulp/task/js.js";
import {images} from "./gulp/task/images.js";
import {svgSprive} from "./gulp/task/svgSprive.js";
import {zip} from "./gulp/task/zip.js";



//function watcher
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html , html);
    gulp.watch(path.watch.scss , scss);
    gulp.watch(path.watch.js , js);
    gulp.watch(path.watch.images , images); 
}

export {svgSprive}

const mainTasks = gulp.parallel(copy, html, scss, js, images);

//Watching scenario on the doing task
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

//Export scenario
export {dev}
export {build}
export {deployZIP}

//Doing scenario default
gulp.task('default', dev);