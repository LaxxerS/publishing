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

});

Followers = myBookshelf.Collection.extend({
	model: Follower
});


module.exports = {
	Follower: Follower,
	Followers: Followers
};