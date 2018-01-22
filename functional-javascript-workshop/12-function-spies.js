module.exports = (obj, fun) => {
	const returnVal = {
		count: 0,
	};
	const origFunction = obj[fun];
	obj[fun] = (...args) => {
		returnVal.count++;
		// return origFunction.apply(obj, args);
		return Function.prototype.apply.call(origFunction, obj, args);
	};
	return returnVal;
}
