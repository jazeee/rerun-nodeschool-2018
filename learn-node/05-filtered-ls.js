const filterDirectory = require("./05-filtered-module");

const [node, prog, dir, extension = ""] = process.argv;

filterDirectory(dir, extension, (error, data) => {
	if (error) {
		return console.error(error);
	}
	data.forEach((value) => console.log(value));
});
