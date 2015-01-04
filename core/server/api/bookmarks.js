var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	bookmarks;

bookmarks = {
	browse: function(args) {
			return dataProvider.Bookmark.findAll(args).then(function(result) {


            return result;
			});
		},

	read: function(args) {
			return dataProvider.Bookmark.findOne( { 'owner_id': args.owner_id }).then(function(result) {
            var omitted;

            if (result) {
                omitted = result.toJSON();
                omitted.editor = _.omit(omitted.editor, Blacklist);

                return omitted;
            }
                return new Error('Collection not found');
			});
	},

	edit: function(CollectionData) {
			return dataProvider.Collection.edit(CollectionData).then(function(result) {
                if (result) {
                    var omitted = result.toJSON();
                    omitted.author = _.omit(omitted.author, Blacklist);
                    return omitted;
                }
                return new Error('Collection not found');
			});
	},

    add: function(newCollectionData) {
            return dataProvider.Collection.add(newCollectionData).then(function(result) {
                if (result) {
                    var omitted = result.toJSON();
                    omitted.author = _.omit(omitted.author, Blacklist);
                    return omitted;
                }
                return new Error('Collection not found');
            });
    },



};

module.exports = bookmarks;