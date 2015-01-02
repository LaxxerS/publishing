var	migrations = require('../migrations');

module.exports = {
	Base: require('./base'),
	User: require('./user').User,
	Follower: require('./follower').Follower,
	Post: require('./post').Post,
	Collection: require('./collection').Collection,

	init: function() {
		return migrations.init();
	}
};