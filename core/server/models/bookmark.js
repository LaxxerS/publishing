var myBookshelf = require('./base'),
	_			= require('lodash'),
    User        = require('./user').User,
	Post        = require('./post').Post,
    slugs        = require('slugs'),


	Bookmark,
	Bookmarks;

Bookmark = myBookshelf.Model.extend({
	tableName: 'bookmarks',

	owner: function() {
		return this.belongsTo(User, 'owner_id');
	},

    posts: function() {
        return this.belongsToMany(Post, "bookmarks", "post_id");
    }

}, {
    findAll: function (options) {
    	options = options || {};
    	options.withRelated = ['owner', 'posts', 'posts.author'];
        return myBookshelf.Model.findAll.call(this, options);
    },

    findOne: function(args, options) {
    	options = options || {};

    	options.withRelated = ['owner', 'posts', 'posts.author'];
    	return myBookshelf.Model.findOne.call(this, args, options);
    },

    edit: function(editedPost, options) {
    	var self = this;

    	return myBookshelf.Model.edit.call(this, editedPost, options).then(function(post) {
            return self.findOne({status: 'all', id: post.id}, options);
        });
    },

    add: function(newCollection, options) {
        var self = this;

        return myBookshelf.Model.add.call(this, newCollection, options);
    },

    destroy: function(_id, options) {
        options = options || {};

        return this.forge({id: _id}).fetch().then(function(post) {
            return post.destroy(options);
        });
    }

});

Collections = myBookshelf.Collection.extend({
	model: Bookmark
});


module.exports = {
	Bookmark: Bookmark,
	Bookmarks: Bookmarks
};