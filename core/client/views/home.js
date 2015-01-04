(function() {
	'use strict';

	var Tabs = {},
		Partial,
		Feed,
		Discover;

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

			var user = new App.Models.Session();
			user.fetch().then(function() {
				this.partial = new Partial({ el: '.navbar', model: user });
			});

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
			NProgress.done();
		}
	});

	Feed = App.View.extend({
		templateName: 'home/my-feed',

		initialize: function() {
			this.render();
		}
	});

	Discover = App.View.extend({
		templateName: 'home/my-discover',

		initialize: function() {
			this.render();
		}
	})
}());