const qioHttp = require("q-io/http");

qioHttp.read("http://localhost:7000")
	.then( userId => {
		return qioHttp.read(`http://localhost:7001/${userId}`)
	})
	.then( user => {
		console.log(JSON.parse(user));
	})
	.catch(console.error)
	.done();
