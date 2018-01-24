const {argv} = process;

const [node, programPath, ...rest] = argv;

const sum = rest.reduce( (acc, arg) => {
	return acc + Number(arg);
}, 0);

console.log(sum);
