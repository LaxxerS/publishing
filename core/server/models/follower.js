var myBookshelf = require('./base'),
	_			= require('lodash'),
	User        = require('./user').User,
	Showdown    = require('showdown'),
 	
	Follower,
	Followers;

Follower = myBookshelf.Model.extend({
	tableName: 'users_users',

	initialize: function () {

	},

}, {
    add: function(newData) {
        var self = this;

        return myBookshelf.Model.add.call(this, newData);
    },

    destroy: function(_id, options) {
        options = options || {};

        return this.forge({id: _id}).fetch().then(function(follow) {
            return follow.destroy(options);
        });
    }
});

Followers = myBookshelf.Collection.extend({
	model: Follower
});


module.exports = {
	Follower: Follower,
	Followers: Followers
};