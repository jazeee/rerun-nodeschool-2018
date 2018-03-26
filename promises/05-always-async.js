'use strict'

const onReject = (error) => {
	console.log(error);
}
const promise = new Promise( (resolve, reject) => {
	resolve("PROMISE VALUE");
})
	.then((value) => {
		console.log(value);
	});
console.log("MAIN PROGRAM")
