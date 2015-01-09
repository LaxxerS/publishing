var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	comments;

comments = {
	browse: function(args) {
			return dataProvider.Comment.findAll().then(function(result) {
            var i = 0,
                omitted = result.toJSON();
                
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].author = _.omit(omitted[i].author, Blacklist);
            }
            

            return _.sortBy(omitted, 'created_at').reverse();
			});
		},

    add: function(newComment) {
            return dataProvider.Comment.add(newComment);
    },

};

module.exports = comments;