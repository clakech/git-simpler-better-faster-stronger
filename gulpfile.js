/* global require */

'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    merge = require('merge-stream'),
    rimraf = require('rimraf'),
    fs = require('fs'),
    chokidar = require('chokidar');

// effin dot character in spritemith lib :-(;
var spritesmith = require('gulp.spritesmith');

rimraf.sync('.dev');
rimraf.sync('.prod-tmp');
rimraf.sync('.prod');

var htmlminConf = {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    removeOptionalTags: true
};

var injectConf = {
    ignorePath: ['.dev', '.prod-tmp'],
    // jade does not add space before -->
    starttag: '<!-- inject:{{ext}}-->',
    endtag: '<!-- endinject-->'
};

gulp.task('css:dev', function () {

    return merge(
        // CSS sources
        gulp.src(['src/**/*.css'])
            .pipe($.cached('css', { optimizeMemory: true })),

        // CSS from SCSS sources
        gulp.src(['src/common/styles/*.scss', 'src/**/*.scss'])
            .pipe($.cached('sass', { optimizeMemory: true }))
            .pipe($.sass({
                errLogToConsole: true
            })),

        // CSS from LESS sources
        gulp.src(['src/**/*.less'])
            .pipe($.cached('less', { optimizeMemory: true }))
            .pipe($.plumber())
            .pipe($.less()),

        // CSS from STYL sources
        gulp.src(['src/**/*.styl'])
            .pipe($.cached('stylus', { optimizeMemory: true }))
            .pipe($.plumber())
            .pipe($.stylus()),

        // bower CSS dependencies
        $.bowerFiles()
            .pipe($.cached('bower-css', { optimizeMemory: true }))
            .pipe($.filter(['**/*.css']))
    )

        .pipe($.autoprefixer())
        .pipe(gulp.dest('.dev'))
        .pipe($.connect.reload());
});

function allOrderedCss(readFiles) {

    readFiles = Boolean(readFiles);

    return gulp.src(['.dev/**/*.css'], { read: readFiles });
}

function fromSrcToDev(path) {
    return path
        .replace(/^src\//, '.dev/')
        .replace(/\.(scss|less|styl)$/, '.css')
        .replace(/\.(ts.coffee)$/, '.js')
        .replace(/\.jade$/, '.html');
}

gulp.task('css:prod', ['css:dev'], function () {

    return allOrderedCss(true)

        .pipe($.concat('all.css'))
        //.pipe($.csso())
        .pipe(gulp.dest('.prod-tmp'));
});

gulp.task('js:dev', function () {

    return merge(
        // JS sources
        gulp.src(['src/**/*.js'])
            .pipe($.cached('js', { optimizeMemory: true })),

        // JS from TS sources
        gulp.src(['src/**/*.ts'])
            .pipe($.cached('tsc', { optimizeMemory: true }))
            .pipe($.typescript()),

        // JS from CS sources
        gulp.src(['src/**/*.coffee'])
            .pipe($.cached('coffee', { optimizeMemory: true }))
            .pipe($.coffee()),

        // bower JS dependencies
        $.bowerFiles()
            .pipe($.cached('bower-js', { optimizeMemory: true }))
            .pipe($.filter(['**/*.js'])))

        .pipe(gulp.dest('.dev'))
        .pipe($.connect.reload());
});

function allOrderedJs(readFiles) {

    readFiles = Boolean(readFiles);

    return gulp.src(['.dev/**/*.js'], { read: readFiles })

        .pipe($.order([
            'angular/**/*',
            'angular-route/**/*',
            'underscore/**/*',
            'moment/**/*',
            'localforage/**/*',
            'angular-localForage/**/*',
            'mousetrap/**/*',
            'main.js'
        ]));
}

gulp.task('js:prod', ['js:dev', 'html-other:dev'], function () {

    var templateJs = gulp.src(['src/**/*.html', '!src/*.html'])

        .pipe($.htmlmin(htmlminConf))
        .pipe($.angularTemplatecache({
            root: '/',
            module: 'myModule'
        }));

    return merge(allOrderedJs(true), templateJs)

        .pipe($.concat('all.js'))
        .pipe($.ngmin())
        .pipe($.uglify())
        .pipe(gulp.dest('.prod-tmp'));
});

gulp.task('html-root:dev', ['css:dev', 'js:dev'], function () {

    var injectables = merge(allOrderedCss(), allOrderedJs());

    return merge(
        // HTML sources
        gulp.src(['src/*.html'])
            .pipe($.cached('html', { optimizeMemory: true })),

        // HTML from JADE sources
        gulp.src(['src/*.jade'])
            .pipe($.plumber())
            .pipe($.jade({ pretty: true }))
    )

        .pipe($.inject(injectables, injectConf))
        .pipe(gulp.dest('.dev'))
        .pipe($.connect.reload());
});

gulp.task('html-other:dev', function () {

    return gulp.src(['src/**/*.jade', '!src/*.jade'])

        .pipe($.cached('jade', { optimizeMemory: true }))
        .pipe($.plumber())
        .pipe($.jade({ pretty: true }))
        .pipe(gulp.dest('.dev'))
        .pipe($.connect.reload());
});

gulp.task('html-root:prod', ['css:prod', 'js:prod', 'html-root:dev'], function () {

    var injectables = gulp.src(['.prod-tmp/**/*.css', '.prod-tmp/**/*.js']);

    return gulp.src(['.dev/*.html'])

        .pipe($.inject(injectables, injectConf))
        .pipe($.htmlmin(htmlminConf))
        .pipe(gulp.dest('.prod-tmp'));
});

gulp.task('media:dev', function () {

    var flagsSprite = gulp.src(['src/common/flags/*.svg'])
        .pipe($.svgSprites.svg({
            className: '.flags-%f',
            cssFile: 'flags.sprite.css',
            generatePreview: false,
            pngPath: './%f',
            svgPath: './%f',
            svg: {
                sprite: 'flags.sprite.svg'
            }
        }))
        .pipe(gulp.dest('.dev/sprites'))
        .pipe($.svgSprites.png())
        .pipe(gulp.dest('.dev/sprites'));

    var otherFlagsSprite = gulp.src('src/common/images/*.png')
            .pipe(spritesmith({
                imgName: 'other-flags.sprite.png',
                cssName: 'other-flags.sprite.css',
                cssOpts: {
                    cssClass: function (item) {
                        return '.other-flags-' + item.name;
                    }
                }
            })),
        otherFlagsSpriteImg = otherFlagsSprite.img.pipe(gulp.dest('.dev/sprites')),
        otherFlagsSpriteCss = otherFlagsSprite.css.pipe(gulp.dest('.dev/sprites'));

    var allOtherImages = gulp.src([
        'src/**/*.gif',
        'src/**/*.jpg',
        'src/**/*.png',
        'src/**/*.svg',
        '!src/common/images/*.png',
        '!src/common/flags/*.svg'
    ])
        .pipe(gulp.dest('.dev'));

    var otherMedias = gulp.src([
        'src/**/*.woff',
        'src/**/*.woff2',
        'src/**/*.appcache',
        'src/**/*.webm'
    ])
        .pipe(gulp.dest('.dev'));

    return merge(flagsSprite, otherFlagsSpriteImg, otherFlagsSpriteCss, allOtherImages, otherMedias);
});

gulp.task('media:prod', ['media:dev'], function () {

    var images = gulp.src([
        '.dev/**/*.gif',
        '.dev/**/*.jpg',
        '.dev/**/*.png',
        '.dev/**/*.svg'
    ])
        .pipe($.imagemin({
            progressive: true,
            interlaced: true
        }));

    var otherMedias = gulp.src([
        'src/**/*.woff',
        'src/**/*.webm'
    ]);

    merge(images, otherMedias)
        .pipe(gulp.dest('.prod-tmp'))
});

gulp.task('rev', ['html-root:prod', 'css:prod', 'js:prod', 'media:prod'], function () {

    var allButRootHtmlRevved = gulp.src(['.prod-tmp/**/*', '!.prod-tmp/*.html'])
        .pipe($.rev());

    var rootHtml = gulp.src(['.prod-tmp/*.html']);

    return merge(allButRootHtmlRevved, rootHtml)
        .pipe($.revReplace())
        .pipe(gulp.dest('.prod'));
});

gulp.task('build:dev', ['html-root:dev', 'html-other:dev', 'css:dev', 'js:dev', 'media:dev']);

gulp.task('build:prod', ['html-root:prod', 'css:prod', 'js:prod', 'media:prod', 'rev'], function () {

    return gulp.src('.prod-tmp', { read: false })
        .pipe($.rimraf());
});

gulp.task('watch', ['build:dev'], function () {

    chokidar.watch('src', { persistent: true, ignoreInitial: true })

        .on('add', function () {
            gulp.start('html-root:dev', 'html-other:dev', 'css:dev', 'js:dev', 'media:dev');
        })

        .on('change', function (path) {
            if (path.match(/^src\/.*\.(css|scss|less|styl)$/)) {
                gulp.start('css:dev');
            }
            if (path.match(/^src\/.*\.(js|ts|coffee)$/)) {
                gulp.start('js:dev');
            }
            if (path.match(/^src\/.*\/.*\.(html|jade)$/)) {
                gulp.start('html-other:dev');
            }
            if (path.match(/^src\/[^\/]*\.(html|jade)$/)) {
                gulp.start('html-root:dev');
            }
            if (path.match(/^src\/[^\/]*\.(gif|jpg|png|svg)$/)) {
                gulp.start('media:dev');
            }
        })

        .on('unlink', function (path) {
            var devPath = fromSrcToDev(path);
            rimraf.sync(devPath);

            for (var cacheName in $.cached.caches) {
                delete $.cached.caches[cacheName][__dirname + '/' + path];
            }

            gulp.start('html-root:dev', 'html-other:dev', 'css:dev', 'js:dev', 'media:dev');
        })

        .on('unlinkDir', function (path) {
            var devPath = fromSrcToDev(path);
            rimraf.sync(devPath);
        })

        .on('error', function (error) {
            console.error('watch error', error);
        });

    var randomPort = 55000 + Math.floor(Math.random() * 1000);

    $.connect.server({
        root: '.dev',
        port: 8080,
        livereload: { port: randomPort }
    });
});

gulp.task('lint', function () {

    var jsHint = gulp.src('src/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));

    var tsLint = gulp.src('src/**/*.ts')
        .pipe($.tslint())
        .pipe($.tslint.report('prose'));

    var coffeeLint = gulp.src('src/**/*.coffee')
        .pipe($.coffeelint())
        .pipe($.coffeelint.reporter());

    var cssLint = gulp.src('src/**/*.css')
        .pipe($.csslint())
        .pipe($.csslint.failReporter());

    return merge(jsHint, tsLint, coffeeLint, cssLint);
});

gulp.task('tests', function () {
    // karma
    // coverage
});

// HTML5 gulp-manifest
// sourcemaps
// vrai connectjs
// icons
// favicon

gulp.task('default', ['build:prod', 'lint', 'tests']);