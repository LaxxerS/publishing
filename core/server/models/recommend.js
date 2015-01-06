var myBookshelf = require('./base'),
	_			= require('lodash'),
    User        = require('./user').User,
	Post        = require('./post').Post,
    slugs        = require('slugs'),


	Recommend,
	Recommends;

Recommend = myBookshelf.Model.extend({
	tableName: 'recommends',

	owner: function() {
		return this.belongsTo(User, 'owner_id');
	},

    posts: function() {
        return this.belongsTo(Post, "post_id");
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

    add: function(newRecommend, options) {
        var self = this;

        return myBookshelf.Model.add.call(this, newRecommend, options);
    },

    destroy: function(_id, options) {
        options = options || {};

        return this.forge({id: _id}).fetch().then(function(post) {
            return post.destroy(options);
        });
    }

});

Recommends = myBookshelf.Collection.extend({
	model: Recommend
});


module.exports = {
	Recommend: Recommend,
	Recommends: Recommends
};