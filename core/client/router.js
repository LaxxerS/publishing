(function() {
	'use strict';

	App.Router = Backbone.Router.extend({

		routes: {
			''                 : 'home',
		},


		home: function() {
			App.currentView = new App.Views.Home({el: '#main'});
		},

		
	});
			
}());