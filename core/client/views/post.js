(function() {
	'use strict';

	var SessionButtons,
		PostButtons;

	App.Views.Post = App.View.extend({

		templateName: 'post',

		events: {
			'click .button-add': 'showDropDown',
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
			});
		}
	})
	
}());