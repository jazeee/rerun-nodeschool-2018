module.exports = (array, mapper, thisArg) => array.reduce( (accumulator, value, index, arr) => {
	accumulator.push(mapper.call(thisArg, value, index, arr));
	return accumulator;
}, []);
