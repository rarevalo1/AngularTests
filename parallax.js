/* Window Scroll Events
============================ */
var $window = $( window ),
    parallaxUp = $('.parallax-up'),
    parallaxDown = $('.parallax-down'),
    scrollFadeOut = $('.js-scrollFadeOut'),
    scrollScale = $('.js-scrollScale'),
    fromtop,
    fromtopWhole,
    elementHeight = $('header.resource-hero').height();

$window.scroll(function () {
    var fromtop = $window.scrollTop(),
        fromtopWhole = Math.ceil(fromtop) / 2000 + 1;

    if ( fromtop < elementHeight && $window.width() > 768 ) {

        scrollFadeOut.css({
            opacity: 1 - fromtop / 400,
            "margin-top": fromtop / 3 * -1 + "px"
        });

        scrollScale.css({
            transform: 'translate3d(0px,' + fromtop / 3 * -1 + 'px,0px) scale(' + fromtopWhole + ',' + +fromtopWhole + ')'
        });
    }

    if( !device.tablet() && !device.mobile() ) {
        parallaxUp.css({
            'top' : -($(this).scrollTop()/4)+"px" // increase # to make even slower
        });
    }

});
