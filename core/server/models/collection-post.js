var myBookshelf = require('./base'),
	_			= require('lodash'),
	Post        = require('./user').Post,


	CollectionPost,
	CollectionsPosts;

CollectionPost = myBookshelf.Model.extend({
	tableName: 'collections_posts',

}, {
    findAll: function (options) {
    	options = options || {};
    	options.withRelated = ['editor'];
        return myBookshelf.Model.findAll.call(this, options);
    },

    findOne: function(args, options) {
    	options = options || {};

    	options.withRelated = ['editor'];
    	return myBookshelf.Model.findOne.call(this, args, options);
    },

    edit: function(editedPost, options) {
    	var self = this;

    	return myBookshelf.Model.edit.call(this, editedPost, options).then(function(post) {
            return self.findOne({status: 'all', id: post.id}, options);
        });
    },

    add: function(newCollectionPost, options) {
        var self = this;

        return myBookshelf.Model.add.call(this, newCollectionPost, options);
    },

    destroy: function(_id, options) {
        options = options || {};

        return this.forge({id: _id}).fetch().then(function(post) {
            return post.destroy(options);
        });
    }

});

CollectionsPosts = myBookshelf.Collection.extend({
	model: CollectionPost
});


module.exports = {
	CollectionPost: CollectionPost,
	CollectionsPosts: CollectionsPosts
};