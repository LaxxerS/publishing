(function() {
	'use strict';

	App.Models.User = Backbone.Model.extend({

	});

	App.Collections.Users = Backbone.Collection.extend({
		url: App.paths.api + '/users/',
		model: App.Models.User
	});


}());