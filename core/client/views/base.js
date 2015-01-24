(function() {
	'use strict';

	App.View = Backbone.View.extend({

		template: function (data) {
            return JST[this.templateName](data);
        },

        templateData: function () {
            if (this.model) {
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
    App.Views.Notification = App.View.extend({
        templateName: 'partial/notification',
        className: 'notification-holder',
        template: function (data) {
            return JST[this.templateName](data);
        },
        render: function () {
            var html = this.template(this.model);
            this.$el.html(html);
            return this;
        }
    });

    App.Views.NotificationCollection = App.View.extend({
        el: '.notification',

        initialize: function() {
            var self = this;
            this.render();
        },

        render: function () {
            _.each(this.model, function (item) {
                this.renderItem(item);
            }, this);
        },

        renderItem: function (item) {
            var itemView = new App.Views.Notification({ model: item }),
                height,
                $notification = $(itemView.render().el),
                self = this;
            this.$el.append($notification);
            height = $notification.hide().outerHeight(true);
            $notification.animate({height: height}, 250, function () {
                $(this)
                    .css({height: "auto"})
                    .fadeIn(200)
                    .slideDown(150);                
            });

            setTimeout(function () {
                $notification.animate({height: height}, 250, function () {
                    $(this)
                        .css({height: "auto"})
                        .fadeOut(100)
                        .slideUp(150);                
                });
            }, 3000);
        },

        addItem: function (item) {
            this.model.push(item);
            this.renderItem(item);
        },

        removeItem: function() {
            console.log('removed!');
        },
    });

} ());