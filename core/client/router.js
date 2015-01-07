(function() {
	'use strict';

	App.Router = Backbone.Router.extend({

		routes: {
			'signup/': 'signup',
			'collection/': 'allcollections',
			'(collection/:slug)/': 'collection',
			'': 'home',
			'(@:username)/': 'profile',
			'(@:username)(/:slug)/': 'post',
			'(:tab)/': 'home'
		},

		signup: function() {
			App.currentView = new App.Views.Signup({ el: '#main' });
		},

		home: function(tab) {
			App.currentView = new App.Views.Home({ el: '#main', tab: tab });
		},

		profile: function(username) {
		        var user = new App.Models.User();
		        user.urlRoot = App.paths.api + '/users/' + username;
		    	if(username) {
		    		user.username = username;
		    		user.fetch().then(function() {
		    			App.currentView = new App.Views.Profile({ el: '#main', model: user });
		    		});
		    	}
		},

		post: function(username, slug) {
			var post = new App.Models.Post();
			post.urlRoot = App.paths.api + '/posts/' + username + '/' + slug;
			if(slug) {
				post.slug = slug;
				post.fetch().then(function() {
					App.currentView = new App.Views.Post({ el: '#main', model: post });
				});
			}
			
		},

		collection: function(slug) {
			if(slug) {
				var collection = new App.Models.Collection();
				collection.url = App.paths.api + '/collections/' + slug + '/';
				collection.fetch().then(function() {
					App.currentView = new App.Views.Collection({ el: '#main', model: collection });
				});
			} 
		},
		
		allcollections: function() {
			App.currentView = new App.Views.AllCollections({ el: '#main' });
		}
	});
			
}());