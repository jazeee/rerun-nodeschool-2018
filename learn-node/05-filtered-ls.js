const fs = require('fs');
const path = require('path');

const [node, prog, dir, extension = ""] = process.argv;

fs.readdir(dir, (error, files) => {
	files
		.filter((file) => !extension || path.extname(file) === `.${extension}`)
		.forEach((file) => console.log(file));
});
