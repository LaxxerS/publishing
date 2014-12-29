(function() {
	'use strict';

	var Latest;

	App.Views.Profile = App.View.extend({

		templateName: 'profile',

		initialize: function() {
			this.render();

			var posts = new App.Collections.Posts();
			posts.url = App.paths.api + '/posts/laxxers/';
			posts.fetch().then(function() {
				new Latest({ el: '.profile-contents', collection: posts }).render().el;
			});
			
		}
		
	});

	Latest = App.View.extend({

		templateName: 'profile/profile-latest',
	});
}());