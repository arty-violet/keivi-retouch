const gulp = require('gulp'); // Подключаем Gulp
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const mincss = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgsprite = require('gulp-svgstore');
const del = require('del');
// const fs = require('fs');


// pug compile
gulp.task('pug', function () {
	return gulp.src(['./source/pages/*.pug', '!./source/pages/_template.pug'])
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./build/'))
		.pipe(browserSync.stream())
});

// scss compile
gulp.task('scss', function () {
	return gulp.src('./source/styles/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		// .pipe(autoprefixer({
		// 	overrideBrowserslist: ['last 4 versions']
		// }))
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css/'))
		.pipe(mincss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./build/css/'))
		.pipe(browserSync.stream())
});

// js compile
gulp.task('js', function () {
	return gulp.src(['./source/scripts/*.js', './source/lib/**/*.js'])
		.pipe(plumber())
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./build/js/'))
		.pipe(uglify())
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest('./build/js/'))
		.pipe(browserSync.stream())
});

// minify images
gulp.task('imagemin', function () {
	return gulp.src('./source/img/**/*.{png,jpg,svg}')
		.pipe(imagemin([
			imagemin.optipng({
				optimizationLevel: 3
			}),
			imagemin.mozjpeg({
				progressive: true
			}),
			imagemin.svgo()
		]))
		.pipe(gulp.dest('./build/img/'))
});

// generate webp
gulp.task("webp", function () {
	return gulp.src("./source/img/**/*.jpg")
		.pipe(webp({
			quality: 90
		}))
		.pipe(gulp.dest('./build/img/webp/'))
});

// generate svg sprite
gulp.task("sprite", function () {
	return gulp.src("./source/img/**/*.svg")
		.pipe(svgsprite({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest('./build/img/'))
});

// copy images
gulp.task('copy:img', function () {
	return gulp.src('./source/img/**/*')
		.pipe(gulp.dest('./build/img/'))
});

// copy fonts
gulp.task('copy:fonts', function () {
	return gulp.src('./source/fonts/**/*')
		.pipe(gulp.dest('./build/fonts/'))
});

// watch task
gulp.task('watch', function () {

	// watch for js & img in ./build/
	gulp.watch(['./build/js/*', './build/img/**/*'], gulp.parallel(browserSync.reload))
	gulp.watch('./build/css/*').on('change', browserSync.reload)

	// watch for pug in ./source/ and compile
	gulp.watch('./source/**/*.pug', gulp.parallel('pug'))

	// watch for scss in ./source/ and compile
	gulp.watch('./source/**/*.{scss,sass}', gulp.parallel('scss'))

	// watch for js in ./source/ and compile
	gulp.watch('./source/**/*.js', gulp.parallel('js'))

	// watch for img in ./source/ and copy
	gulp.watch('./source/img/**/*', gulp.parallel('copy:img'))

	// watch for fonts in ./source/ and copy
	gulp.watch('./source/fonts/**/*', gulp.parallel('copy:fonts'))
});

// server start from ./build/
gulp.task('server', function () {
	browserSync.init({
		server: {
			port: 3000,
			baseDir: './build/'
		}
	})
});

// deleting folder ./build
gulp.task('clean', function () {
	return del('./build')
});


// build task
gulp.task('build',
	gulp.series(
		gulp.parallel('clean'),
		gulp.parallel('scss', 'pug', 'js', 'copy:img', 'copy:fonts'),
		gulp.parallel('imagemin', 'sprite'),
		gulp.parallel('webp')
	)
);

// default task
gulp.task('default',
	gulp.series(
		gulp.parallel('pug', 'scss', 'js'),
		gulp.parallel('server', 'watch'),
	)
);

// default task
gulp.task('pug+',
	gulp.series(
		gulp.parallel('pug'),
		gulp.parallel('server', 'watch'),
	)
);