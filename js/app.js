const open = document.querySelector('.toggle-menu-btn');
const closeBtn = document.querySelector('.toggle-close-btn');
const nav = document.querySelector('nav');

open.addEventListener('click' , () => {
    nav.classList.add('show-nav')
})

closeBtn.addEventListener('click' , () => {
    nav.classList.remove('show-nav')
})

const dropdown = document.querySelector('.dropdowns');

dropdown.forEach(dropdowns => {
    const select = dropdowns.querySelector('.main-links');
    const caret = dropdowns.querySelector('.caret');
})