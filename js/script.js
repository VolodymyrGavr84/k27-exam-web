'use strict';

$(document).ready(function(){
//Slick photos; section-slick under the menu
    $('.js-slick-content').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        dots: true,
        fade: false,
        dotsClass: 'new-dots',
        pauseOnDotsHover: true,
    });
});
//certificates images before footer
$('.js-certificates-content').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
    }
});