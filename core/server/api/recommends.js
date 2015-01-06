var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	recommends;

recommends = {
	browse: function(args) {
            return dataProvider.Recommend.findAll().then(function(result) {
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
            return dataProvider.Recommend.findOne(args).then(function(result) {

            if (result) {
                return result.toJSON();
            }
                return new Error('Bookmark not found');
            });
	},

    add: function(newBookmark) {
            return dataProvider.Recommend.add(newBookmark);
    },

    destroy: function(args) {
        return when(recommends.read({ id: args.id })).then(function(result) {
            return dataProvider.Recommend.destroy(result.id).then(function() {
                var deleted = result;
                return deleted;
           });
        });       
    }

};

module.exports = recommends;