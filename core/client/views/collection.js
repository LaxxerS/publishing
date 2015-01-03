(function() {
	'use strict';

	var SessionButtons;

	App.Views.Collection = App.View.extend({

		templateName: 'collection',

		initialize: function() {
			this.render();

			var session = new App.Models.Session();
			session.fetch().then(function() {
				 new SessionButtons({ el: '.collection-buttons', model: session });
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