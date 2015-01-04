var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	collections;

collections = {
	browse: function(args) {
			return dataProvider.Collection.findAll(args).then(function(result) {
            var i = 0,
                omitted = result.toJSON();
                
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].editor = _.omit(omitted[i].editor, Blacklist);
            }
            
            omitted = _.filter(omitted, { 'editor': { username: args.username }});

            return _.sortBy(omitted, 'updated_at').reverse();

            return result;
			});
		},

	read: function(args) {
			return dataProvider.Collection.findOne( { 'slug': args.slug }).then(function(result) {
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

    destroy: function(args) {
            return when(Collections.read({id: args.id, status: 'all'})).then(function(result) {
                return dataProvider.Collection.destroy(args.id).then(function() {
                    var deletedCollection = result;
                    return deletedCollection;
                });
            });
    },

    all: function(args) {
            return dataProvider.Post.findAll(args).then(function(result) {
            var i = 0,
                omitted = result.toJSON();
                
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].editor = _.omit(omitted[i].editor, Blacklist);
            }
            
            return _.sortBy(omitted, 'updated_at').reverse();
            });       
    }

};

module.exports = collections;