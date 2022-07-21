const open = document.querySelector('.toggle-menu-btn');
const closeBtn = document.querySelector('.toggle-close-btn');
const nav = document.querySelector('nav');

open.addEventListener('click' , () => {
    nav.classList.add('show-nav')
})

closeBtn.addEventListener('click' , () => {
    nav.classList.remove('show-nav')
})

const click = document.querySelector('.down');
const list = document.querySelector('.sub-menu-1');

click.addEventListener('click' , () => {
    list.classList.toggle('show-drop-down')
})