
// entry items effects

let entryItemFirst = document.querySelector('.first-item');
let entryItemSecond = document.querySelector('.second-item');

entryItemFirst.addEventListener('mouseover', () => {
    entryItemSecond.classList.add('entry-is-active');
});

entryItemFirst.addEventListener('mouseout', () => {
    entryItemSecond.classList.remove('entry-is-active');
});
