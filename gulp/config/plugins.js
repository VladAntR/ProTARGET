import replace from "gulp-replace"; //Search and substitute
import plumber from "gulp-plumber"; //Error handling
import notify from "gulp-notify"; //Notify
import browser_sync from "browser-sync"; //Notify
import newer from "gulp-newer";
import ifPlugin from "gulp-if"



export const plugins = {
    replace: replace,
    plumber: plumber,
    notify:notify,
    browser_sync:browser_sync,
    newer: newer,
    if: ifPlugin
}