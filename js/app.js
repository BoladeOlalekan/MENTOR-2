const open = document.querySelector('.toggle-menu-btn');
const closeBtn = document.querySelector('.toggle-close-btn');
const nav = document.querySelector('nav');

open.addEventListener('click' , () => {
    nav.classList.add('show-nav')
})

closeBtn.addEventListener('click' , () => {
    nav.classList.remove('show-nav')
})

const featureBtn = document.querySelector('.featuresBtn');
const main = document.querySelector('.sub-menu-1');

featureBtn.addEventListener('click' , () => {
    main.classList.toggle('show-drop-down')
})