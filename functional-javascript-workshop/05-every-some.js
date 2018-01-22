module.exports = (goodUsers) => {
	const goodUserIds = goodUsers.map(({id}) => id);
	const allUsersValid = (submittedUsers) => {
		return submittedUsers.every(({id}) => goodUserIds.some((goodId) => goodId === id));
	}
	return allUsersValid;
}
