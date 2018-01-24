const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, (error, content) => {
	const lines = content.toString().split("\n");
	console.log(lines.length - 1);
});
