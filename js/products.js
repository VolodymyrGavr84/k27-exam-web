'use strict';

$(document).ready(function(){
    $('.js-multiple-items').slick({
        infinite: true,
        dots: false,
        initialSlide: 7,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: 'progressive'
    });
});