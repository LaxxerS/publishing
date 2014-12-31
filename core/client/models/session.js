(function() {
	'use strict';

	App.Models.Session = Backbone.Model.extend({
		url: App.paths.api + '/session/'
	});
}());