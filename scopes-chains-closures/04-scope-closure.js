function foo() {
	var bar;
	quux = 9;
	function zip() {
		var quux = 4;
		bar = true;
	}
	return zip;
}
