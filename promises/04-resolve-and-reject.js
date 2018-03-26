'use strict'

const onReject = (error) => {
	console.log(error);
}
const promise = new Promise( (resolve, reject) => {
	resolve("I FIRED");
	reject("I DID NOT FIRE");
})
	.then(console.log, onReject);
