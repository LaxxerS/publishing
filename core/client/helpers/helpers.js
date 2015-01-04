(function () {
    'use strict';
    Handlebars.registerHelper('date', function(context, options) {
        if (!options && context.hasOwnProperty('hash')) {
            options = context;
            context = undefined;

            // set to published_at by default, if it's available
            // otherwise, this will print the current date
            if (this.created_at) {
                context = this.created_at;
            }
        }

        // ensure that context is undefined, not null, as that can cause errors
        context = context === null ? undefined : context;

        var f = options.hash.format || 'MMM Do',
            timeago = options.hash.timeago,
            date;


        if (timeago) {
            date = moment(context).fromNow();
        } else {
            date = moment(context).format(f);
        }
        return date;
    });

    Handlebars.registerHelper('excerpt', function(context, options) {
        var excerpt;

        excerpt = String(this.html).replace(/<\/?[^>]+>/gi, '');
        excerpt = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ');


        return S(excerpt).truncate(300).s;
    });

}());
