var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),
	when		 = require('when'),
	Blacklist    = ['password', 'last_login'],
	posts;

posts = {
	browse: function(args) {
			return dataProvider.Post.findAll(args).then(function(result) {
            var i = 0,
                omitted = result.toJSON();
                
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].author = _.omit(omitted[i].author, Blacklist);
            }
            
            omitted = _.filter(omitted, { 'author': { username: args.username }});

            return _.sortBy(omitted, 'updated_at').reverse();
			});
		},

	read: function(args) {
			return dataProvider.Post.findOne( { 'slug': args.slug }).then(function(result) {
            var omitted;

            if (result) {
                omitted = result.toJSON();
                omitted.author = _.omit(omitted.author, Blacklist);
                omitted.comments = _.sortBy(omitted.comments, 'updated_at').reverse();
                return omitted;
            }
                return new Error('Post not found');
			});
	},

	edit: function(postData) {
			return dataProvider.Post.edit(postData).then(function(result) {
                if (result) {
                    var omitted = result.toJSON();
                    omitted.author = _.omit(omitted.author, Blacklist);
                    return omitted;
                }
                return new Error('Post not found');
			});
	},

    add: function(newPostData) {
            return dataProvider.Post.add(newPostData).then(function(result) {
                if (result) {
                    var omitted = result.toJSON();
                    omitted.author = _.omit(omitted.author, Blacklist);
                    return omitted;
                }
                return new Error('Post not found');
            });
    },
    extAdd: function(newPostData) {
            var _newPostdata = newPostData,
                id;

            return dataProvider.User.findOne({ 'username': _newPostdata.username }).then(function(result) {
                result = result.toJSON();
                id = result.id;
                id = parseInt(id);
                _newPostdata = _.assign(_newPostdata, {'author_id': id })
                console.log(_newPostdata)
                delete _newPostdata.username;
                return dataProvider.Post.add(_newPostdata);
            })
    },

    destroy: function(args) {
            return when(posts.read({id: args.id, status: 'all'})).then(function(result) {
                return dataProvider.Post.destroy(args.id).then(function() {
                    var deletedPost = result;
                    return deletedPost;
                });
            });
    },

    all: function(args) {
            return dataProvider.Post.findAll(args).then(function(result) {
            var i = 0,
                omitted = result.toJSON();
                
            for (i = 0; i < omitted.length; i = i + 1) {
                omitted[i].author = _.omit(omitted[i].author, Blacklist);
            }
            
            return _.sortBy(omitted, 'updated_at').reverse();
            });       
    }
};

module.exports = posts;