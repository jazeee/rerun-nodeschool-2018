// fetch from http://localhost:1337
const qioHttp = require("q-io/http");

qioHttp.read("http://localhost:1337")
	.then( (response) => {
		console.log(JSON.parse(response));
	});
