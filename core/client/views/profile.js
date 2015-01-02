(function() {
	'use strict';

	var Latest,
		Collection,
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
			var currentUser = this.model.get('id'),
			    follow_id   = $('input[name=follow_id]').val(),
			    followHandler;

			    NProgress.start();
				followHandler = new App.Models.Follower();
				followHandler.save({
					follower_id: currentUser,
					following_id: follow_id
				}).then(function() {
					NProgress.done();
				    Backbone.history.loadUrl();
				    return false;	
				});
			
		},

	});

	Button.unfollow = App.View.extend({
		templateName: 'profile/profile-following',

		events: {
			'click .button-unfollow': 'unfollow'
		},

		unfollow: function() {
			var self = this,
			    currentUser = self.model.get('id'),
			    follow_id   = $('input[name=follow_id]').val(),
			    followHandler,
			    _id;

			   
			   	NProgress.start();
				followHandler = new App.Models.Follower();
				followHandler.url = App.paths.api + '/followers/' + currentUser + '/' + follow_id + '/'; 
				followHandler.fetch().then(function(result) {
					_id = result.id;
				}).then(function() {
					followHandler.url = App.paths.api + '/followers/' + _id + '/'; 
					followHandler.destroy({id: _id}).then(function() {
						NProgress.done();
					}).then(function() {
					    Backbone.history.loadUrl();
					    return false;					
					})
				});
		}

	})

	Latest = App.View.extend({

		templateName: 'profile/profile-latest',

		initialize: function() {
		    var target     = window.location.pathname.split( '/' )[1].split('@')[1],
		        colletions = new App.Collections.Collections();

			colletions.url = App.paths.api + '/collections/all/' + target + '/';
			colletions.fetch().then(function() {
				new Collection({ el: '.profile-collection', collection: colletions }).render().el;
			});		
		}
	});

	Collection = App.View.extend({

		templateName: 'profile/profile-collection',
	});
}());