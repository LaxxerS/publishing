(function() {
	'use strict';

	var SessionButtons,
		PostButtons;

	App.Views.Post = App.View.extend({

		templateName: 'post',

		events: {
			'click .button-add': 'showDropDown',
			'click .bookmark-add': 'addBookmark',
			'click .recommend': 'recommend'
		},

		initialize: function() {
			this.render();

			var session = new App.Models.Session();
			session.fetch().then(function() {
				 new SessionButtons({ el: '.post-buttons', model: session });
			});
		},

		showDropDown: function(e) {
			e.preventDefault();
			this.$('.button-add-drop').toggle();

			var session = new App.Models.Session(),
			    collections;

			session.fetch().then(function(sess) {
				if(sess) {
					collections = new App.Collections.Collections();
					collections.url = App.paths.api + '/collections/all/' + sess.username;
					collections.fetch().then(function() {
						new PostButtons({ el: '.button-add-drop ', collection: collections});
					})
				}
			})
		},

		addBookmark: function(e) {
			e.preventDefault();
			NProgress.start();
			var post_id = $('input[name=post_id]').val();

			var session = new App.Models.Session();
			session.fetch().then(function(sess) {
				if(sess) {
					var bookmark = new App.Models.Bookmark();
					bookmark.urlRoot = App.paths.api +'/bookmarks/' + sess.id + '/' + post_id + '/';
					bookmark.fetch().then(function(result) {
						if(result.id) {
							NProgress.done();
							App.notifications.addItem({
			                    message: 'This post has already been bookmarked before!.',
			                });								
							return;
						} else {
							bookmark.urlRoot = App.paths.api +'/bookmarks/';
							bookmark.save({
								'owner_id': sess.id,
								'post_id': post_id
							}).then(function() {
								App.notifications.addItem({
				                    message: 'Your bookmark has been added.',
				                });									
								NProgress.done();
							})							
						}
					});

				}
			})	
		},

		recommend: function(e) {
			e.preventDefault();
			NProgress.start();
			var post_id = $('input[name=post_id]').val();

			var session = new App.Models.Session();
			session.fetch().then(function(sess) {
				if(sess) {
					var recommend = new App.Models.Bookmark();
					recommend.urlRoot = App.paths.api +'/recommends/' + sess.id + '/' + post_id + '/';
					recommend.fetch().then(function(result) {
						if(result.id) {
							NProgress.done();
							App.notifications.addItem({
			                    message: 'Your have already recommended this post!',
			                });								
							return;
						} else {
							recommend.urlRoot = App.paths.api +'/recommends/';
							recommend.save({
								'owner_id': sess.id,
								'post_id': post_id
							}).then(function() {
								NProgress.done();
								App.notifications.addItem({
				                    message: 'Recommended!.',
				                });									
							})							
						}
					});

				}
			})	
		}
		
	});

	SessionButtons = App.View.extend({
		templateName: 'partial/session-buttons',

		initialize: function() {
			this.render();
		}
	});

	PostButtons = App.View.extend({
		templateName: 'partial/drop-addto-collection',

		events: {
			'click .add-to': 'addTo',
		},

		initialize: function() {
			this.render();
		},

		addTo: function(e) {
			e.preventDefault();

			var collection_id = $('.collection').val(),
			          post_id = $('input[name=post_id]').val();
			NProgress.start();
			var collection = new App.Models.CollectionPost();
			collection.urlRoot = App.paths.api + '/collection-post/' + collection_id + '/' + post_id + '/';
			
			collection.save({
				'collection_id': collection_id,
				'post_id': post_id
			}).then(function() {
				NProgress.done();
				App.notifications.addItem({
                    message: 'The post has been added into the collection.',
                });					
			});
		}
	})
	
}());