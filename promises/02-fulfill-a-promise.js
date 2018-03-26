'use strict'

const promise = new Promise( (resolve) => {
	setTimeout(resolve.bind(this, "FULFILLED!"), 300);
}).then(console.log);
