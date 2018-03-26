Promise
	.resolve(first())
	.then((value) => second(value))
	.then(console.log);
