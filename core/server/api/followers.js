var dataProvider = require('../models'),
	_           = require('lodash'),
    when        = require('when'),

	followers;

followers = {
    read: function(args) {
        return dataProvider.Follower.findOne(args).then(function(result) {

        if (result) {
            return result.toJSON();
        }
            return new Error('Follower not found');
        });
    },

    add: function(followerData) {
        return dataProvider.Follower.add(followerData);
    },

    destroy: function(args) {
        return when(followers.read({ id: args.id })).then(function(result) {
            return dataProvider.Follower.destroy(result.id).then(function() {
                var deleted = result;
                return deleted;
           });
        });       
    }
};

module.exports = followers;