'use strict';

// button for scroll up
let upButton = document.querySelector('.js-scrollUp-button');
window.onscroll = function() {
if (window.pageYOffset > 3000) {
upButton.classList.add('js-scrollUp-button--shown');
} else {
    upButton.classList.remove('js-scrollUp-button--shown');
    }  
};
upButton.onclick = function() {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
};