module.exports = (...objs) => {
	return objs.filter( (obj) => Object.prototype.hasOwnProperty.call(obj, 'quack')).length;
};
