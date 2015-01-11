var myBookshelf = require('./base'),
	_			= require('lodash'),
    User        = require('./user').User,
	Post        = require('./post').Post,
    slugs       = require('slugs'),
    Showdown    = require('showdown'),
    readTime    = require('reading-time'),
 	converter   = new Showdown.converter(),

	Comment,
	Comments;

Comment = myBookshelf.Model.extend({
	tableName: 'comments',

	initialize: function () {
        this.on('saving', this.saving);
	},

	saving: function() {
		this.set('html', converter.makeHtml(this.get('markdown')));

        myBookshelf.Model.prototype.saving.call(this);
	},

	author: function() {
		return this.belongsTo(User, 'user_id');
	},

}, {
    findAll: function (options) {
    	options = options || {};
    	options.withRelated = ['author'];
        return myBookshelf.Model.findAll.call(this, options);
    },

    findOne: function(args, options) {
    	options = options || {};

    	options.withRelated = ['author'];
    	return myBookshelf.Model.findOne.call(this, args, options);
    },

    add: function(newComment, options) {
        var self = this;

        return myBookshelf.Model.add.call(this, newComment, options);
    },

});

Comments = myBookshelf.Collection.extend({
	model: Comment
});


module.exports = {
	Comment: Comment,
	Comments: Comments
};