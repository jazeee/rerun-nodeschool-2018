module.exports = (inputWords) => inputWords
	.reduce( (accumulator, word) => {
		accumulator[word] = Number(accumulator[word] || 0) + 1;
		return accumulator;
	}, {}
);
