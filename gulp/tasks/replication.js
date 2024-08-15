/**
 * Копировать файлы в build
 */
export const replication = () => {
	return app.gulp.src('.', {allowEmpty: true}); // return empty stream
	// return copyFiles();
};

function copyFiles() {
	const files = [
		"src/humans.txt",
	];

	return app.gulp
		.src(files)
		.pipe(app.gulp.dest(app.path.build.html));
}
