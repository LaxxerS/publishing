(function() {
	'use strict';

	App.Models.Recommend = Backbone.Model.extend({

	});

	App.Collections.Recommends = Backbone.Collection.extend({
		model: App.Models.Recommend
	});
}());