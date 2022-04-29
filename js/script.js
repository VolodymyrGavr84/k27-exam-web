'use strict';

$(document).ready(function(){
//Slick photos; section-slick under the menu
    $('.js-slick-content').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        dots: true,
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
// button for scroll up
let upButton = document.querySelector('.js-scrollUp-button');
window.onscroll = function() {
if (window.pageYOffset > 3000) {
upButton.classList.add('js-scrollUp-button__shown');
} else {
    upButton.classList.remove('js-scrollUp-button__shown');
    }  
};
upButton.onclick = function() {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
};