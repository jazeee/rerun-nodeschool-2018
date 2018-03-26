const alwaysThrows = () => {
	throw new Error("OH NOES");
}
const iterate = (x) => {
	console.log(x);
	return x + 1;
}

Promise.resolve(1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.catch(alwaysThrows)
	.catch((error) => console.log(error.message));
