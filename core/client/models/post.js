(function() {
	'use strict';

	App.Models.Post = Backbone.Model.extend({

	});

	App.Collections.Posts = Backbone.Collection.extend({
		model: App.Models.Post
	});
}());