var dataProvider = require('../models'),
	_			 = require('lodash'),

	followers;

followers = {
	browse: function(options) {
        return dataProvider.Follower.findAll(options).then(function (result) {
            var i = 0,
                omitted = {};

            if (result) {
                omitted = result.toJSON();
            }

            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i] = _.omit(omitted[i], Blacklist);
            }

            return omitted;
        });
	},

	read: function(args) {
		return dataProvider.Follower.findOne(args).then(function(result) {
        var omitted;

        if (result) {
            omitted = result.toJSON();
            omitted = _.omit(omitted, Blacklist);
            return omitted;
        }
            return new Error('User not found');
		});
	},

    add: function(followerData) {
        return dataProvider.Follower.add(followerData);
    }
};

module.exports = followers;