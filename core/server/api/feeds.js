var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	collections;

collections = {
	browse: function(args) {
            var following,
                omitted,
                results;

            return dataProvider.User.findOne({ 'username': args.username }).then(function(user) {
                if(user) {
                    following = user.toJSON();
                    following = _.pluck(following.following, 'id');

                    // Source: http://stackoverflow.com/questions/17251764/lodash-filter-collection-using-array-of-values
                    _.mixin({
                        'findByValues': function(collection, property, values) {
                        return _.filter(collection, function(item) {
                            return _.contains(values, item[property]);
                        });
                        }
                    });

                        return dataProvider.Post.findAll().then(function(result) {
                        var i = 0,
                            j = 0,
                            omitted = result.toJSON();
    
                        for (i = 0; i < omitted.length; i = i + 1) {
                            omitted[i].author = _.omit(omitted[i].author, Blacklist);
                        }

    
                        if(following.length == 0) {
                            omitted = {}
                        } else {
                            results = _.findByValues(omitted, "author_id", following);
                        }

                        return _.sortBy(results, 'updated_at').reverse();
                        });
                }
            })
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

};

module.exports = collections;