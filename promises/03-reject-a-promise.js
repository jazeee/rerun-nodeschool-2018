'use strict'

const onReject = ({message}) => {
	console.log(message);
}

const promise = new Promise( (resolve, reject) => {
	setTimeout(reject.bind(this, new Error("REJECTED!")), 300);
})
	.then(console.log, onReject);
