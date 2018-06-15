var fs = require('fs');
const path = require('path');

module.exports = (dir, extension, callback) => {
	fs.readdir(dir, (error, files) => {
		if (error) {
			return callback(error);
		}
		const data = files
			.filter((file) => !extension || path.extname(file) === `.${extension}`);
		return callback(null, data);
	});
};
