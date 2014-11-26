var	migrations = require('../migrations');

module.exports = {
	Base: require('./base'),

	init: function() {
		return migrations.init();
	}
};