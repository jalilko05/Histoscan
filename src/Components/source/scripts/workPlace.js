
let profiBtn = document.querySelector('#profi-btn');
let profiTitle = document.querySelector('.profi__title');
let profiInfo = document.querySelector('.profi__info');
let profiSubtitle = document.querySelector('.profi__subtitle');

profiBtn.addEventListener('click', () => {
    profiInfo.style.border = '1px solid #F9AE00';
    profiTitle.setAttribute('contentEditable', true);
    profiSubtitle.setAttribute('contentEditable', true);
});

window.addEventListener('click', e => { 
    const target = e.target
    if (!target.closest('.profi__info') && !target.closest('#profi-btn')) {
        profiInfo.style.border = '1px solid transparent';
        profiTitle.setAttribute('contentEditable', false);
        profiSubtitle.setAttribute('contentEditable', false);
    }
})