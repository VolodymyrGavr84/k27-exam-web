'use strict';

// sticky sideBar
let SideBar = document.querySelector('.js-sidebar');

window.onscroll = function() {
if (window.pageYOffset > 300) {
    SideBar.classList.add('js-sidebar--shown'); 
} else {
    SideBar.classList.remove('js-sidebar--shown');
}
};