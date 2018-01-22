const reduce = (originalArray, reducer, init) => {
	let index = 0;
	const reduceIt = (array, reducer, init) => {
		if (!array.length) {
			return init;
		}
		const currentVal = array[0];
		const remaining = array.slice(1);
		return reduceIt(remaining, reducer, reducer(init, currentVal, index++, originalArray));
	}
	return reduceIt(originalArray, reducer, init);
}

module.exports = reduce;
