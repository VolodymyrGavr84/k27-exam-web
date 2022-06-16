'use strict';

// header email-form visible
let sendEmail = document.querySelector('.email-header');
let sendFormHidden = document.querySelector('.email-form');
let hideForm = document.querySelector('.email-form__close-icon');

sendEmail.onclick = function() {
sendFormHidden.classList.toggle('js-email-form--visible');
};
hideForm.onclick = function() {
sendFormHidden.classList.remove('js-email-form--visible');
};// hide email-form