(function() {
	'use strict';	

	var SessionButtons,
		Collection;

	App.Views.AllCollections = App.View.extend({

		templateName: 'collection/collection-all',

		initialize: function() {
			this.render();
			var currentUser;
			var session = new App.Models.Session();
			session.fetch().then(function(sess) {
				if(sess.username) {
					currentUser = sess.username;
					new SessionButtons({ el: '.collection-buttons', model: session });

				var collections = new App.Collections.Collections();
				collections.url = App.paths.api + '/collections/all/' + currentUser + '/';
				collections.fetch().then(function() {
					new Collection({ el: '.profile-contents', collection: collections }).render().el;
				});
				}

			});			

		}
		
	});

	SessionButtons = App.View.extend({

		templateName: 'partial/session-buttons',

		initialize: function() {
			this.render();
		}
	});

	Collection = App.View.extend({
		templateName: 'collection/collection-block',

		initialize: function() {
			this.render();
		}
	})
}());	