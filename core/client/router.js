(function() {
	'use strict';

	App.Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'(:tab)/': 'home'
		},


		home: function(tab) {
			App.currentView = new App.Views.Home({el: '#main', tab: tab});
		}
	});
			
}());