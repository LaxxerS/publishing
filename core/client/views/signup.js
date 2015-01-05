(function() {
	'use strict';

	App.Views.Signup = App.View.extend({

		templateName: 'signup',

		events: {
			'click .login-submit': 'signUp'
		},

		initialize: function() {
			this.render();
		},

		signUp: function(e) {
			e.preventDefault();
			NProgress.start();
			var name =  $('input[name=name]').val(),
				username =  $('input[name=username]').val(),
			    email    =  $('input[name=email]').val(),
			    password =  $('input[name=password]').val(),
			    saved;

			 var user = new App.Models.User();
			 user.urlRoot = App.paths.api + '/users/';

			 saved = user.save({
			 	name: name,
			 	username: username,
			 	email: email,
			 	password: password
			 });

			 if(saved) {
			 	NProgress.done();
			 	App.router.navigate('/', {trigger: true});
			 }


		}
		
	});


}());	