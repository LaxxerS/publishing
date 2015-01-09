(function() {
	'use strict';	

	var SessionButtons,
		Collection;

	App.Views.AllCollections = App.View.extend({

		templateName: 'collection/collection-all',

		events: {
			'click .button-follow': 'showModal',
			'click .login-submit': 'newCollection',
			'click .upload': 'showUpload',
			'change #collection-cover': 'uploadFile'
		},

		initialize: function() {
			this.render();
			NProgress.done();
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

		},

		showModal: function(e) {
			e.preventDefault();
			this.$('.modal-wrapper').fadeIn(300).show();
			$('body').css('overflow','hidden');	
		},

		newCollection: function(e) {
			e.preventDefault();
			NProgress.start();
			var cover       = $('input[name=cover]').val(),
				title       = $('input[name=title]').val(),
				description = $('input[name=description]').val(),
				session,
				collection;

				session = new App.Models.Session();
				session.fetch().then(function(sess) {
					if(sess.id) {
						collection = new App.Models.Collection();
						collection.urlRoot = App.paths.api + '/collections/';
						collection.save({
							'cover': cover,
							'title': title,
							'editor_id': sess.id,
							'description': description
						}).then(function() {
							NProgress.done();
							App.notifications.addItem({
			                    message: 'Your collection has been created.',
			                });
							$('body').css('overflow','auto');	
							Backbone.history.loadUrl();
				    		return false;	
						})
					} else {
						App.notifications.addItem({
		                    message: 'Please login to create a collection.',
		                });						
					}
				})
		},

		showUpload: function(e) {
			e.preventDefault();
			$('input[type=file]').click();
		},

		uploadFile: function(e) {
			e.preventDefault();
			NProgress.start();
			var fileSelect = document.getElementById('collection-cover'),
					 files = fileSelect.files,
			      formData = new FormData(),
			      filename;

			for (var i = 0; i < files.length; i++) {
			  var file = files[i];
			 
			  if (!file.type.match('image.*')) {
			    continue;
			  }

			  filename = file.name;

			  console.log(filename);
			 
			  formData.append('photos[]', file, filename);
			}

			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://localhost:3000/admin/upload/', true);

			xhr.onload = function () {
			  if (xhr.status === 200) {
			  	NProgress.done();
				App.notifications.addItem({
                    message: 'Your collection cover has been uploaded.',
                });
                $('input[name=cover]').val(filename);
			  } else {
				App.notifications.addItem({
                    message: 'An error has occurred.',
                });
			  }
			};

			xhr.send(formData);
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