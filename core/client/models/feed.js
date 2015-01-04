(function() {
	'use strict';

	App.Models.Feed = Backbone.Model.extend({

	});

	App.Collections.Feeds = Backbone.Collection.extend({
		model: App.Models.Feed
	});
}());