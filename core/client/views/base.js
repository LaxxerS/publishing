(function() {
	'use strict';

	App.View = Backbone.View.extend({

		template: function (data) {
            return JST[this.templateName](data);
        },

        templateData: function () {
            if (this.model) {
                                console.log(this.model.toJSON());
                return this.model.toJSON();
            }

            if (this.collection) {
                return this.collection.toJSON();
            }

            return {};
        },

        render: function () {
            this.$el.html(this.template(this.templateData()));
            return this;
        }
	});

} ());