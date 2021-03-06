var	migrations = require('../migrations');

module.exports = {
	Base: require('./base'),
	User: require('./user').User,
	Follower: require('./follower').Follower,
	Post: require('./post').Post,
	Collection: require('./collection').Collection,
	CollectionPost: require('./collection-post').CollectionPost,
	Bookmark: require('./bookmark').Bookmark,
	Recommend: require('./recommend').Recommend,
	Comment: require('./comment').Comment,

	init: function() {
		return migrations.init();
	}
};