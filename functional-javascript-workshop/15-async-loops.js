function loadUsers(userIds, load, done) {
	var users = []
	for (var i = 0; i < userIds.length; i++) {
		const loadOne = (index) => {
			const userId = userIds[index];
			load(userId, (user) => {
				users[index] = user;
			});
		}
		loadOne(i);
	}
	done(users);
}

module.exports = loadUsers;
