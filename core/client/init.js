(function() {
	'use struct';

	function AppPaths() {
		var root 	= "/";

		return {
			root: root,
			api: root + 'admin/api/v0.1'
		};
	}

	var App = {
		Views		: {},
		Collections	: {},
		Models		: {},
		Session     : {},

		paths: AppPaths(),
		router: null
	};

    Backbone.oldModelProtoUrl = Backbone.Model.prototype.url;
    //overwrite original url method to add slash to end of the url if needed.
    Backbone.Model.prototype.url = function () {
        var url = Backbone.oldModelProtoUrl.apply(this, arguments);
        return url + (url.charAt(url.length - 1) === '/' ? '' : '/');
    };

	App.init = function() {
		App.router = new App.Router();

		//App.notifications = new App.Views.NotificationCollection({model: []});
		Backbone.history.start({
			pushState: true,
			hashChange: false,
			root: App.paths.root
		});
	}


	window.App = App;

	window.addEventListener("load", App.init, false);
}());