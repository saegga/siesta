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
	'./src/css/media.css',
	'./src/css/first_page.css',
];
const fidelCss = './src/css/fidel.css';
const fidelJs = './src/js/fidel.js';

const siestaCss = './src/css/siesta.css';
const siestaJs = './src/js/siesta.js';

const daddyCss = './src/css/daddy.css';
const daddyJs = './src/js/daddy.js';

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

function stylesDaddy(){
	return gulp.src(daddyCss)
	// объединить файлы
		.pipe(concat('daddy.css'))
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

function stylesOrigDaddy(){
	return gulp.src(daddyCss)
		.pipe(concat('template_daddy.css'))
		.pipe(gulp.dest('./build/css/'), {nocomment: true})

		.pipe(autoprefixer({
			browsers: ['last 40 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./build/css/'))
		.pipe(browserSync.stream());
}

function stylesFidel(){
	return gulp.src(fidelCss)
	// объединить файлы
		.pipe(concat('fidel.css'))
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
function stylesOrigFidel(){
	return gulp.src(fidelCss)
		.pipe(concat('template_fidel.css'))
		.pipe(gulp.dest('./build/css/'), {nocomment: true})

		.pipe(autoprefixer({
			browsers: ['last 40 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./build/css/'))
		.pipe(browserSync.stream());
}

function stylesSiesta(){
	return gulp.src(siestaCss)
	// объединить файлы
		.pipe(concat('fidel.css'))
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
function stylesOrigSiesta(){
	return gulp.src(siestaCss)
		.pipe(concat('template_siesta.css'))
		.pipe(gulp.dest('./build/css/'), {nocomment: true})

		.pipe(autoprefixer({
			browsers: ['last 40 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./build/css/'))
		.pipe(browserSync.stream());
}

function stylesOrig(){
	return gulp.src(cssFiles)
		.pipe(concat('template.css'))
		.pipe(gulp.dest('./build/css/'), {nocomment: true})

		.pipe(autoprefixer({
		       browsers: ['last 40 versions'],
		       cascade: false
		    })) 
		.pipe(gulp.dest('./build/css/'))
		.pipe(browserSync.stream());
}
// таск для скриптов
function scripts(){
	return gulp.src(jsFiles)
	.pipe(concat('script.js'))
	.pipe(uglify())

	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}

function scriptFidel(){
	return gulp.src(fidelJs)
		.pipe(concat('fidel.js'))
		.pipe(uglify())

		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}
function scriptSiesta(){
	return gulp.src(siestaJs)
		.pipe(concat('siesta.js'))
		.pipe(uglify())

		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

function scriptDaddy(){
	return gulp.src(daddyJs)
		.pipe(concat('daddy.js'))
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
	gulp.watch('./src/css/**/*.css', stylesOrig);
	gulp.watch('./src/css/**/*.css', stylesFidel);
	gulp.watch('./src/css/**/*.css', stylesSiesta);
	gulp.watch('./src/css/**/*.css', stylesDaddy);
	gulp.watch('./src/css/**/*.css', stylesOrigDaddy);
	gulp.watch('./src/css/**/*.css', stylesOrigFidel);
	gulp.watch('./src/css/**/*.css', stylesOrigSiesta);
	// следить за js
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./src/js/**/*.js', scriptFidel);
	gulp.watch('./src/js/**/*.js', scriptSiesta);
	gulp.watch('./src/js/**/*.js', scriptDaddy);
	// следить за изменениями html
	gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('sass', sassPipe);
gulp.task('styles', styles);
gulp.task('stylesOrig', stylesOrig);
gulp.task('stylesFidel', stylesFidel);
gulp.task('stylesSiesta', stylesSiesta);
gulp.task('stylesDaddy', stylesDaddy);
gulp.task('stylesOrigSiesta', stylesOrigSiesta);
gulp.task('stylesOrigDaddy', stylesOrigDaddy);
gulp.task('scripts', scripts);
gulp.task('scriptFidel', scriptFidel);
gulp.task('scriptSiesta', scriptSiesta);
gulp.task('scriptDaddy', scriptDaddy);
gulp.task('del', clean);
gulp.task('minImage', minImage);
gulp.task('modern', modern);
// отслеживание изменений
gulp.task('watch', watch);

// запуск тасков в опр порядке, и параллельно - parallel
gulp.task('build', gulp.series(clean,
	gulp.parallel(styles, stylesFidel, stylesSiesta ,  stylesOrig, stylesOrigSiesta, stylesDaddy, stylesOrigFidel, stylesOrigDaddy , scriptFidel, scriptSiesta, scriptDaddy , scripts, modern)));
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