//Проинициализируем модули
var gulp = require('gulp');
var concat = require('gulp-ngconcat');

//Создадим задачу
gulp.task('concat', function () {
    gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

//Создадим вочер, при изменении файлов, будет дёргать задачу concat
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['concat']);
});

//Создадим задачу по умолчанию - она будет исполнятся при выполнении команды gulp
gulp.task('default', ['concat', 'watch']);