const fs = require('fs');

const file = process.argv[2];

const content = fs.readFileSync(file).toString();
let count = 0;
let index = content.indexOf("\n");
while(index !== -1) {
	count++;
	index = content.indexOf("\n", index + 1);
}
console.log(count);
