(function() {
	'use strict';

	var SessionButtons,
		Mobile;

	App.Views.Collection = App.View.extend({

		templateName: 'collection',

		events: {
			'click .readtime': 'addBookmark',
		},

		initialize: function() {
			this.render();

			var session = new App.Models.Session();
			session.fetch().then(function() {
				new SessionButtons({ el: '.collection-buttons', model: session });
				new Mobile({ el: '.mobile-menu-holder', model: session });
			});
		},

		addBookmark: function(e) {
			e.preventDefault();
			NProgress.start();
			var item    = $(e.currentTarget),
				post_id = item.attr('href').substring(1);

			var session = new App.Models.Session();
			session.fetch().then(function(sess) {
				if(sess) {
					var bookmark = new App.Models.Bookmark();
					bookmark.urlRoot = App.paths.api +'/bookmarks/' + sess.id + '/' + post_id + '/';
					bookmark.fetch().then(function(result) {
						if(result.id) {
							NProgress.done();
							App.notifications.addItem({
			                    message: 'This post has already been bookmarked before!',
			                });								
							return;
						} else {
							bookmark.urlRoot = App.paths.api +'/bookmarks/';
							bookmark.save({
								'owner_id': sess.id,
								'post_id': post_id
							}).then(function() {
								NProgress.done();
								App.notifications.addItem({
				                    message: 'Your bookmark has been added.',
				                });								
								item.text('bookmarked');
							})							
						}
					})

				}
			})	
		},
		
	});

	SessionButtons = App.View.extend({

		templateName: 'partial/session-buttons',

		initialize: function() {
			this.render();
		}
	});
	
	Mobile = App.View.extend({
		templateName: 'partial/mobile-menu',

		initialize: function() {
			this.render();
		}		
	})	
}());	