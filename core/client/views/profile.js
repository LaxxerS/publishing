(function() {
	'use strict';

	var Latest,
		Button = {};

	App.Views.Profile = App.View.extend({

		templateName: 'profile',

		events: {
			'click .following': 'showFollowing',
		},

		initialize: function() {
			var self = this;

			this.render();

			var target = window.location.pathname.split( '/' )[1].split('@')[1],
			     posts = new App.Collections.Posts();

			posts.url = App.paths.api + '/posts/' + target;
			posts.fetch().then(function() {
				new Latest({ el: '.profile-contents', collection: posts }).render().el;
			});

			var session = new App.Models.Session();
			session.fetch().then(function(sess) {
				var count = 0;
				for(var x=0; x < _.size(sess.following); x++) {
					if(sess.following[x].username === target) {
						count++;
					}
				}

				if(sess.username !== target && count === 0) {
					new Button.follow({ el: '.profile-follow', model: session }).render();
				} else if(sess.username !== target && count !== 0){
					new Button.unfollow({ el: '.profile-follow', model: session }).render();
				}
					
			})
			
			
		},

		showFollowing: function(e) {
			e.preventDefault();
			this.$('.modal-wrapper').fadeIn(300).show();
			$('body').css('overflow','hidden');
		},
		
	});

	Button.follow = App.View.extend({
		templateName: 'profile/profile-follow',

		events: {
			'click .button-follow': 'follow'
		},

		follow: function() {
			var follow_id = $('input[name=follow_id]').val()
			alert(follow_id);
		},

		unfollow: function() {

		}
	});

	Button.unfollow = App.View.extend({
		templateName: 'profile/profile-following',

	})

	Latest = App.View.extend({

		templateName: 'profile/profile-latest',
	});
}());