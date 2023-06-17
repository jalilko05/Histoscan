"use strict";

// entry items effects
var entryItemFirst = document.querySelector('.first-item');
var entryItemSecond = document.querySelector('.second-item');
entryItemFirst.addEventListener('mouseover', function () {
  entryItemSecond.classList.add('entry-is-active');
});
entryItemFirst.addEventListener('mouseout', function () {
  entryItemSecond.classList.remove('entry-is-active');
});