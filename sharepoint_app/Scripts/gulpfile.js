//����������������� ������
var gulp = require('gulp');
var concat = require('gulp-ngconcat');

//�������� ������
gulp.task('concat', function () {
    gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

//�������� �����, ��� ��������� ������, ����� ������ ������ concat
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['concat']);
});

//�������� ������ �� ��������� - ��� ����� ���������� ��� ���������� ������� gulp
gulp.task('default', ['concat', 'watch']);