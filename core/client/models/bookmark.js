(function() {
	'use strict';

	App.Models.Bookmark = Backbone.Model.extend({

	});

	App.Collections.Bookmarks = Backbone.Collection.extend({
		model: App.Models.Bookmark
	});
}());