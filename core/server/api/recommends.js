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
                omitted = result.toJSON(),
                posts,
                results,
                recommend;
           
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].owner = _.omit(omitted[i].owner, Blacklist);
            }

            posts = _.chain(omitted).countBy("post_id").pairs().sortBy(1).reverse().pluck(0).value();
            
            if(posts.length > 10) {
                 for(var i = 0; i < 5; i++){
                    posts[i] = parseInt(posts[i], 10);

                    results = _.filter(omitted, { 'post_id': posts[i] });
                    recommend = _.union(recommend, results);
                }                
            } else {
                for(var i = 0; i < posts.length; i++){
                    posts[i] = parseInt(posts[i], 10);

                    results = _.filter(omitted, { 'post_id': posts[i] });
                    recommend = _.union(recommend, results);
                }                
            }


            return _.uniq(recommend, "post_id");
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