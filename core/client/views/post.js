(function() {
	'use strict';

	var SessionButtons;

	App.Views.Post = App.View.extend({

		templateName: 'post',

		initialize: function() {
			this.render();

			var session = new App.Models.Session();
			session.fetch().then(function() {
				 new SessionButtons({ el: '.post-buttons', model: session });
			});
			}
		
	});

	SessionButtons = App.View.extend({
		templateName: 'partial/session-buttons',

		initialize: function() {
			this.render();
		}
	});
	
}());