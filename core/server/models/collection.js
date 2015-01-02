var myBookshelf = require('./base'),
	_			= require('lodash'),
	User        = require('./user').User,
    slugs        = require('slugs'),


	Collection,
	Collections;

Collection = myBookshelf.Model.extend({
	tableName: 'collections',

	defaults: function() {

	},

	initialize: function () {
        this.on('saving', this.saving);
	},

	saving: function() {
        this.set('slug', slugs(this.get('title')));
        myBookshelf.Model.prototype.saving.call(this);
	},

    creating: function(options) {

    },

	editor: function() {
		return this.belongsTo(User, 'editor_id');
	}

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
	model: Collection
});


module.exports = {
	Collection: Collection,
	Collections: Collections
};