const getDependencies = ({dependencies = {}} = {}) => {
	const uniqueDependencies = [];
	Object.keys(dependencies).forEach( (key) => {
		const {version} = dependencies[key];
		const formattedDependency = `${key}@${version}`;
		uniqueDependencies.push(formattedDependency, ...getDependencies(dependencies[key]));
	});
	uniqueDependencies.sort();
	return [...new Set(uniqueDependencies)];
}

module.exports = getDependencies;
