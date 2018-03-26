// const getPromise1 = () => Promise.resolve(1);
// const getPromise2 = () => Promise.resolve(2);

const all = (...promises) => {
	return new Promise((resolve) => {
		let resolvedCount = 0;
		const solutions = [];
		promises.map((promise, index) => {
			promise.then( (value) => {
				resolvedCount++;
				solutions[index] = value;
				finalizeIfReady();
			}).catch(console.error);
		});
		const finalizeIfReady = () => {
			if (resolvedCount === promises.length) {
				resolve(solutions)
			}
		}
	});
}

all(getPromise1(), getPromise2())
	.then(console.log)
	.catch(console.log);
