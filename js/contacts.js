'use strict';

// header email-form 
let sendEmail = document.querySelector('.header-email');
let sendFormHidden = document.querySelector('.email-form');
let hideForm = document.querySelector('.email-form__close-icon');
sendEmail.onclick = function() {
sendFormHidden.classList.add('js-email-form--visible');
};
hideForm.onclick = function() {
sendFormHidden.classList.remove('js-email-form--visible');
};// hide email-form