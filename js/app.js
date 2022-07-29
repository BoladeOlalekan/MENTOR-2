const open = document.querySelector('.toggle-menu-btn');
const closeBtn = document.querySelector('.toggle-close-btn');
const nav = document.querySelector('nav');

open.addEventListener('click' , () => {
    nav.classList.add('show-nav')
})

closeBtn.addEventListener('click' , () => {
    nav.classList.remove('show-nav')
})

const subMenuOne = document.querySelector('.sub-menu-1');
const featureBtn = document.querySelector('.features-link');

featureBtn.addEventListener('click' , () => {
    subMenuOne.classList.toggle('show-sub-menu');
    featureBtn.classList.toggle('caret-rotate');
})

const subMenuTwo = document.querySelector('.sub-menu-2');
const companyBtn = document.querySelector('.company-link');

companyBtn.addEventListener('click' , () => {
    subMenuTwo.classList.toggle('show-sub-menu-2');
    companyBtn.classList.toggle('caret-rotate-2');
})