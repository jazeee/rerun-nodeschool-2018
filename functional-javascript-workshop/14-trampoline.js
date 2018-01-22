const repeat = (operation, num) =>{
	// Modify this so it doesn't cause a stack overflow!
	if (num <= 0) {
		return null;
	}
	operation();
	return repeat.bind(null, operation, num - 1),
}

const trampoline = (fn) => {
	while (fn) {
		nextRepeat = fn();
	}
}

module.exports = function(operation, num) {
	return trampoline(() => repeat(operation, num));
}
