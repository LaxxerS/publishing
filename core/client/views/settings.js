(function() {
	'use strict';

	var Mobile,
		SessionButtons;

	App.Views.Settings = App.View.extend({

		templateName: 'settings',

		events: {
			'click .first': 'focusOne',
			'click .second': 'focusTwo',
			'click .third': 'focusThree',
			'click .update': 'updateSettings'
		},

		initialize: function() {
			this.render();
			var user = new App.Models.Session();
			user.fetch().then(function() {
				this.mobile = new Mobile({ el: '.mobile-menu-holder', model: user });
				new SessionButtons({ el: '.collection-buttons', model: user });
			});	
			NProgress.done();
		},

		focusOne: function() {
			$('input:first').focus();
		},

		focusTwo: function() {
			$('input:eq(1)').focus();
		},

		focusThree: function() {
			$('input:last').focus();
		},

		updateSettings: function() {
			NProgress.start();
			var name  = $('input[name=name]').val(),
			    email = $('input[name=email]').val(),
			    bio   = $('input[name=bio]').val(),
			    id	  = this.model.id,
				user;

			user = new App.Models.User();
			user.urlRoot = App.paths.api + '/users/';
			user.save({
				id: id,
				name: name,
				email: email,
				bio: bio
			}).then(function() {
				NProgress.done();
				App.notifications.addItem({
                    message: 'Your settings have been updated.',
                });					
			})

		}
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
		},
	})
}());	