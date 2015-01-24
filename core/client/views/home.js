(function() {
	'use strict';

	var Tabs = {},
		Partial,
		Feed,
		Discover,
		Bookmark,
		Top,
		Mobile;

	App.Views.Home = App.View.extend({

		templateName: 'home',

		events: {
			'click .sign-in': 'showSignin',
			'click .nav-tabs-list li': 'changeTab',
		},

		initialize: function() {
			NProgress.start();
			this.render();
			this.menu = this.$('.navbar');
			this.menu.find('li').removeClass('active');


			var target = window.location.pathname.split( '/' )[1];

			if(target !== '' && target !== 'discover' && target !== 'bookmarks') {
				target = '';
			}
			this.menu.find('a[href=#' + target + ']').parent().addClass('active');
			if(target === '') target = 'feed';
			if(target === 'discover') target = 'discover';

			this.tab = new Tabs[target]({ el: '.main-contents' });
			this.renderTab();
			NProgress.done();

			this.sidebar = new App.Views.Sidebar({
				el: '.sidebar'
			});

			var user = new App.Models.Session();
			user.fetch().then(function() {
				this.partial = new Partial({ el: '.navbar', model: user });
				this.mobile = new Mobile({ el: '.mobile-menu-holder', model: user });
			});
		},

		showSignin: function(e) {
			e.preventDefault();
			this.$('.modal-wrapper').fadeIn(300).show();
			$('body').css('overflow','hidden');
		},

		hideSignin: function(e) {
			e.preventDefault();
		},
		
		changeTab: function(e) {
			NProgress.start();
			e.preventDefault();
			var item = $(e.currentTarget),
				id   = item.find('a').attr('href').substring(1);

			App.router.navigate(id + '/');
			this.setActive(id);
			if(id === '') id = 'feed';
			if(id === 'discover') id = 'discover';

			
			this.tab = new Tabs[id]({ el: '.main-contents' });
			this.renderTab();
		},

		renderTab: function() {
			this.tab.render();
		},

		setActive: function(id) {
			this.menu.find('li').removeClass('active');
			this.menu.find('a[href=#' + id + ']').parent().addClass('active');
		}
		
	});
	
	Partial = App.View.extend({
		templateName: 'partial/nav-menu-buttons',

		initialize: function() {
			this.render();
		}
	});

	App.Views.Sidebar = App.View.extend({
		templateName: 'home/sidebar',

		initialize: function() {
			this.render();
			var top = new App.Collections.Recommends();
			top.url = App.paths.api + '/recommends/all/';
			top.fetch().then(function() {
				new Top({ el: '.sidebar-wrapper', collection: top });
			});
		}
	});

	Tabs.Base = App.View.extend({
		render: function() {
			this.$el.hide();
			App.View.prototype.render.call(this);
			this.$el.fadeIn(300);
		}
	});

	Tabs.feed = Tabs.Base.extend({
		templateName: 'home/feed',

		initialize: function() {
			var user = new App.Models.Session();
			user.fetch().then(function(user) {
				if(user.username) {
					var feeds = new App.Collections.Feeds();
					feeds.url = App.paths.api + '/feeds/' + user.username + '/';
					feeds.fetch().then(function() {
						new Feed({ el: '.fill-up-the-feed', collection: feeds });
					})
				} else {
					var posts = new App.Collections.Posts();
					posts.url = App.paths.api + '/posts/';
					posts.fetch().then(function() {
						new Feed({ el: '.fill-up-the-feed', collection: posts });
					})
					
				}
			});

			NProgress.done();
		},

	});

	Tabs.discover = Tabs.Base.extend({
		templateName: 'home/discover',

		initialize: function() {
			var posts = new App.Collections.Posts();
			posts.url = App.paths.api + '/posts/';
			posts.fetch().then(function() {
				new Discover({ el: '.fill-up-the-discover', collection: posts });
			})
			NProgress.done();
		}
	});

	Tabs.bookmarks = Tabs.Base.extend({
		templateName: 'home/bookmarks',

		initialize: function() {
			var session = new App.Models.Session();
			session.fetch().then(function(sess) {
				if(sess) {
					var id = sess.id,
					    bookmarks;
					bookmarks = new App.Collections.Bookmarks();
					bookmarks.url = App.paths.api + '/bookmarks/all/' + id + '/';
					bookmarks.fetch().then(function() {
						new Bookmark({ el: '.fill-up-the-bookmark', collection: bookmarks })
					})
				}
			})
			NProgress.done();
		}
	});

	Feed = App.View.extend({
		templateName: 'home/my-feed',

		events: {
			'click .readtime': 'addBookmark',
		},

		initialize: function() {
			this.render();
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

	Discover = App.View.extend({
		templateName: 'home/my-discover',

		initialize: function() {
			this.render();
		}
	});

	Bookmark = App.View.extend({
		templateName: 'home/my-bookmark',

		events: {
			'click .remove': 'removeBookmark'			
		},

		initialize: function() {
			this.render();
		},

		removeBookmark: function(e) {
			e.preventDefault();
			NProgress.start();
			var item    = $(e.currentTarget),
				post_id = item.attr('href').substring(1),
			    session,
				currentUser,
				bookmark,
				_id,

	            session = new App.Models.Session();
				session.fetch().then(function(sess) {
					if(sess.id) {
						currentUser = sess.id;
					}
				}).then(function() {
					bookmark = new App.Models.Bookmark();
					bookmark.urlRoot = App.paths.api + '/bookmarks/' + currentUser + '/' + post_id;
					bookmark.fetch().then(function(result) {
						if(result) {
							_id = result.id;
						}
					}).then(function() {
						bookmark.url = App.paths.api + '/bookmarks/' + _id + '/';
						bookmark.destroy({ id: _id }).then(function() {
							NProgress.done();
							App.notifications.addItem({
			                    message: 'Your bookmark has been removed.',
			                });
						    Backbone.history.loadUrl();
						    return false;	
						});
					});
				});
		}
	});

	Top = App.View.extend({
		templateName: 'home/my-sidebar',

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