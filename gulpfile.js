const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const imageMin = require('gulp-imagemin');
var sass = require('gulp-sass');
var modernizr = require('gulp-modernizr');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

const cssFiles = [
	'./src/css/main.css',
	'./src/css/media.css'
];
const jsFiles = [
	'./src/js/lib.js',
	'./src/js/main.js'
];

function sassPipe(){

	return gulp.src('./sass/**/*.scss')
	    	.pipe(sass().on('error', sass.logError))
	    	.pipe(gulp.dest('./src/css'));
}

// таск для стилей
function styles(){
	return gulp.src(cssFiles)
	// объединить файлы
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./build/css'))

	// Добавить префиксы
	.pipe(autoprefixer({
       browsers: ['last 40 versions'],
       cascade: false
    }))
    .pipe(gulp.dest('./build/css'))


    // минификация
    .pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());

}
function stylesOrig(){
	return gulp.src(cssFiles)
		.pipe(concat('template.css'))
		.pipe(gulp.dest('./build/css/'))

		.pipe(autoprefixer({
		       browsers: ['last 40 versions'],
		       cascade: false
		    })) 
		.pipe(gulp.dest('./build/css/'));
}
// таск для скриптов
function scripts(){
	return gulp.src(jsFiles)
	.pipe(concat('script.js'))
	.pipe(uglify())

	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}
// modernizer
function modern(){
	return gulp.src('./src/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest('build/js'))
}
function minImage(){
	return gulp.src('src/images/*.+(png|jpg|gif)')
	       .pipe(imageMin({verbose: true}))
	       .pipe(gulp.dest('./build/images'))
}
// удалить все в указанной папке
function clean(){
	return del(['build/*'])
}

// изменения файлов
function watch(){
	browserSync.init({
	        server: {
	            baseDir: "./"
	        }
	    });
	gulp.watch('./sass/**/*.scss', sassPipe);
	// следить за css файлами
	gulp.watch('./src/css/**/*.css', styles);
	// следить за js
	gulp.watch('./src/js/**/*.js', scripts);
	// следить за изменениями html
	gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('sass', sassPipe);
gulp.task('styles', styles);
gulp.task('stylesOrig', stylesOrig);
gulp.task('scripts', scripts);
gulp.task('del', clean);
gulp.task('minImage', minImage);
gulp.task('modern', modern);
// отслеживание изменений
gulp.task('watch', watch);

// запуск тасков в опр порядке, и параллельно - parallel
gulp.task('build', gulp.series(clean, gulp.parallel(styles,stylesOrig ,scripts, modern)));
// таск запускает по очереди сборку и обновление
gulp.task('dev', gulp.series('build', 'watch'));


/*
структура:
sass/
build 
	/css/
	/js/
src
	/css/
	/js/

index.html
*/