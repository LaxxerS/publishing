(function() {
	'use strict';

	App.Models.Follower = Backbone.Model.extend({
		url: App.paths.api + '/followers/'
	});
}());