"use strict";

var profiBtn = document.querySelector('#profi-btn');
var profiTitle = document.querySelector('.profi__title');
var profiInfo = document.querySelector('.profi__info');
var profiSubtitle = document.querySelector('.profi__subtitle');
profiBtn.addEventListener('click', function () {
  profiInfo.style.border = '1px solid #F9AE00';
  profiTitle.setAttribute('contentEditable', true);
  profiSubtitle.setAttribute('contentEditable', true);
});
window.addEventListener('click', function (e) {
  var target = e.target;

  if (!target.closest('.profi__info') && !target.closest('#profi-btn')) {
    profiInfo.style.border = '1px solid transparent';
    profiTitle.setAttribute('contentEditable', false);
    profiSubtitle.setAttribute('contentEditable', false);
  }
});

