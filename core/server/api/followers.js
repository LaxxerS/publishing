var dataProvider = require('../models'),
	_			 = require('lodash'),

	followers;

followers = {
    add: function(followerData) {
        return dataProvider.Follower.add(followerData);
    },

    destroy: function() {
        
    }
};

module.exports = followers;