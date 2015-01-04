var myBookshelf = require('./base'),
	_			= require('lodash'),
	Post        = require('./user').Post,


	CollectionPost,
	CollectionsPosts;

CollectionPost = myBookshelf.Model.extend({
	tableName: 'collections_posts',

}, {
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