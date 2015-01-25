(function () {
    'use strict';

    FastClick.attach(document.body);

    // ### general wrapper to handle conditional screen size actions
    function responsiveAction(event, mediaCondition, cb) {
        if (!window.matchMedia(mediaCondition).matches) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        cb();
    }

    $('#manage').on('click', '.mobile-icon', function(event) {
        responsiveAction(event, '(max-width: 480px)', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 0);
            $(".mobile-menu").toggleClass("active");
            $("#main").toggleClass("active");
            $(".mobile-icon").toggleClass("active");
        });
    })

    $('#manage').on('click', '.sign-in', function(event) {
        responsiveAction(event, '(max-width: 480px)', function () {
            $(".mobile-menu").toggleClass("active");
            $("#main").toggleClass("active");
            $(".mobile-icon").toggleClass("active");
        });
    })
}());
    