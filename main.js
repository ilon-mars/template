const subscribeBtns = document.querySelectorAll('.subscribe-btn');
const submitBtn = document.querySelector('.submit-btn');
const arrowBtn = document.querySelector('.arrow-image');
const closeBtn = document.querySelector('.close-btn');
const headerContacts = document.querySelector('.header-contacts');
const overlay = document.querySelector('.overlay');
const order = document.querySelector('.order');
const menuBtn = document.querySelector('.m-header-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.header-menu__link');

arrowBtn.addEventListener('click', ()=>{
  headerContacts.classList.toggle('d-none');
  headerContacts.classList.toggle('d-block');
  arrowBtn.classList.toggle('arrow-rotate');
});

subscribeBtns.forEach(btn => {
  btn.addEventListener('click', ()=>{
    overlay.classList.remove('d-none');
    overlay.classList.add('d-block');
    order.classList.remove('d-none');
    order.classList.add('d-flex');
  });
});


closeBtn.addEventListener('click', ()=>{
  overlay.classList.add('d-none');
  overlay.classList.remove('d-block');
  order.classList.add('d-none');
  order.classList.remove('d-flex');
});

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('d-flex');
  menu.classList.toggle('d-none');
  menu.classList.toggle('active-menu');
});

menuLinks.forEach(btn => {
  btn.addEventListener('click', ()=>{
    menu.classList.toggle('d-flex');
    menu.classList.toggle('d-none');
    menu.classList.toggle('active-menu');
  });
});