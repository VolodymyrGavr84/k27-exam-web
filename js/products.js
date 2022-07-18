'use strict';

$(document).ready(function(){
    $('.js-multiple-items').slick({
        infinite: true,
        dots: false,
        initialSlide: 7,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
            {
            breakpoint:800,
            settings: {
                slidesToShow:3,
            }
        },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        }
        ]
    });
});