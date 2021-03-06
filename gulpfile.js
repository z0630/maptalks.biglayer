'use strict';

const gulp = require('gulp'),
    pkg = require('./package.json'),
    rollup = require('rollup'),
    watch = require('rollup-watch'),
    BundleHelper = require('maptalks-build-helpers').BundleHelper;
const bundleHelper = new BundleHelper(pkg);

gulp.task('build', () => {
    return bundleHelper.bundle('src/maptalks.webgl.js');
});

gulp.task('minify', ['build'], () => {
    bundleHelper.minify();
});

gulp.task('watch', () => {
    //gulp.watch(['src/**/*.js'], ['build']);
    const config = bundleHelper.getDefaultRollupConfig();
    config.entry = 'src/maptalks.webgl.js';
    const year = new Date().getFullYear();
    const banner = `/*!\n * ${pkg.name} v${pkg.version}\n * LICENSE : ${pkg.license}\n * (c) 2016-${year} maptalks.org\n */`;
    config.dest = 'dist/maptalks.webgl.js';
    config.format = 'umd';
    config.moduleName = 'maptalks';
    config.banner = banner;
    const watcher = watch(rollup, config);
    watcher.on('event', e => {
        if (e.code === 'BUILD_START') {
            console.log('[ROLLUP] Starting...');
            console.time('[ROLLUP]');
        } else if (e.code === 'BUILD_END') {
            console.timeEnd('[ROLLUP]');
        } else if (e.code === 'ERROR') {
            console.error(e);
        }
    });

});

gulp.task('default', ['watch']);

