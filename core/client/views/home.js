(function() {
	'use strict';

	var Tabs = {};

	App.Views.Home = App.View.extend({

		templateName: 'home',


		events: {
			'click .nav-tabs-list li': 'changeTab'
		},

		initialize: function() {
			NProgress.start();
			this.render();
			this.menu = this.$('.nav-tabs');
			this.menu.find('li').removeClass('active');

			var target = window.location.pathname.split( '/' )[1];

			if(target !== '' && target !== 'top-stories' && target !== 'bookmarks') {
				target = '';
			}
			this.menu.find('a[href=#' + target + ']').parent().addClass('active');
			if(target === '') target = 'feed';
			if(target === 'top-stories') target = 'top';
			this.tab = new Tabs[target]({ el: '.main-contents' });
			this.renderTab();
			NProgress.done();

			this.sidebar = new App.Views.Sidebar({
				el: '.sidebar'
			});
		},

		changeTab: function(e) {
			NProgress.start();
			e.preventDefault();
			var item = $(e.currentTarget),
				id   = item.find('a').attr('href').substring(1);

			App.router.navigate(id + '/');
			this.setActive(id);
			if(id === '') id = 'feed';
			if(id === 'top-stories') id = 'top';

			
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
			NProgress.done();
		}
	});

	Tabs.top = Tabs.Base.extend({
		templateName: 'home/top-stories',

		initialize: function() {
			NProgress.done();
		}
	});

	Tabs.bookmarks = Tabs.Base.extend({
		templateName: 'home/bookmarks',

		initialize: function() {
			NProgress.done();
		}
	});
}());