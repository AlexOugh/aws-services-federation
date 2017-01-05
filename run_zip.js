
var gulp = require('gulp'),
vfs = require('vinyl-fs'),
zip = require('gulp-zip');

vfs.src(['index.js'],{cwd:'.', base:'.'})
.pipe(zip('federation.zip'))
.pipe(gulp.dest('.'))
.on('end', function(err, data) {
  if (err)  console.log("failed : " + err);
  else console.log('completed');
});
