var	migrations = require('../migrations');

module.exports = {
	Base: require('./base'),
	User: require('./user').User,

	init: function() {
		return migrations.init();
	}
};