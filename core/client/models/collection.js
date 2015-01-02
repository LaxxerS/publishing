(function() {
	'use strict';

	App.Models.Collection = Backbone.Model.extend({

	});

	App.Collections.Collections = Backbone.Collection.extend({
		model: App.Models.Collection
	});
}());