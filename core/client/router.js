(function() {
	'use strict';

	App.Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'(@:user)/': 'profile',
			'(@:user)(/:slug)/': 'post',
			'(:tab)/': 'home'
		},


		home: function(tab) {
			App.currentView = new App.Views.Home({ el: '#main', tab: tab });
		},

		profile: function(user) {
			App.currentView = new App.Views.Profile({ el: '#main' });
		},

		post: function(user, slug) {
			App.currentView = new App.Views.Post({ el: '#main' });
		}
	});
			
}());