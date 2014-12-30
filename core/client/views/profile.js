(function() {
	'use strict';

	var Latest;

	App.Views.Profile = App.View.extend({

		templateName: 'profile',

		events: {
			'click .following': 'showFollowing',
			'click .close': 'hideFollowing'
		},

		initialize: function() {
			this.render();

			var posts = new App.Collections.Posts();
			posts.url = App.paths.api + '/posts/laxxers/';
			posts.fetch().then(function() {
				new Latest({ el: '.profile-contents', collection: posts }).render().el;
			});
			
		},

		showFollowing: function(e) {
			e.preventDefault();
			this.$('.modal-wrapper').fadeIn(300).show();
			$('body').css('overflow','hidden');
		},

		hideFollowing: function(e) {
			preventDefault();
		}
		
	});

	Latest = App.View.extend({

		templateName: 'profile/profile-latest',
	});
}());