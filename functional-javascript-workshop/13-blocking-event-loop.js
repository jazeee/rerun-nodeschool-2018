const repeat = (operation, num) => {
  if (num <= 0) {
		return;
	}
	operation();
	if ( num % 10) {
		setTimeout(repeat.bind(null, operation, num -1));
	} else {
		repeat(operation, num - 1);
	}
}

module.exports = repeat
