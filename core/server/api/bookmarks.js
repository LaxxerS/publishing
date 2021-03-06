var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	bookmarks;

bookmarks = {
	browse: function(args) {
            return dataProvider.Bookmark.findAll().then(function(result) {
            var i = 0,
                omitted = result.toJSON();
                
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].owner = _.omit(omitted[i].owner, Blacklist);
            }
            
            omitted = _.filter(omitted, { 'owner_id': parseInt(args.owner_id) });

            return _.sortBy(omitted, 'updated_at').reverse();
            });
		},

	read: function(args) {
            return dataProvider.Bookmark.findOne(args).then(function(result) {

            if (result) {
                return result.toJSON();
            }
                return new Error('Bookmark not found');
            });
	},

    add: function(newBookmark) {
            return dataProvider.Bookmark.add(newBookmark);
    },

    destroy: function(args) {
        return when(bookmarks.read({ id: args.id })).then(function(result) {
            return dataProvider.Bookmark.destroy(result.id).then(function() {
                var deleted = result;
                return deleted;
           });
        });       
    }

};

module.exports = bookmarks;