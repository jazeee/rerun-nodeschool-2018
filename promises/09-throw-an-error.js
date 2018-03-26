function parsePromised(json) {
	return new Promise((resolve, reject) => {
		try {
			resolve(JSON.parse(json));
		} catch (error) {
			return reject(error);
		}
	})
};

const [node, program, data] = process.argv;
parsePromised(data)
	.then(console.log)
	.catch(({message}) => console.log(message));
