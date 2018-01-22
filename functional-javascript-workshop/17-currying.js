function curryN(fn, n) {
	const fnLength = fn.length;
	if (n === undefined) {
		n = fnLength;
	}
	if (n <= 1) {
		return (...args) => fn.call(null, ...args);
	}
	return curryN(
		(...args) => {
			return fn.bind(null, ...args);
		}, n - 1);
}

module.exports = curryN
// function div3(one, two, three) {return one / two / three}
// x = curryN(div3, 3);
// console.log(x(6)(2)(3), 1);
// x = curryN(div3, 2);
// console.log(x(6)(2, 3), 1);
// x = curryN(div3, 1);
// console.log(x(6, 2, 3), 1);
