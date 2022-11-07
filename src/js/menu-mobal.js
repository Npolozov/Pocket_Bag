const burgerActive = document.querySelector('.header_burger');
const burgerMenu = document.querySelector('.header_menu');
const lockBody = document.querySelector('body');

const linkClickRef = document.querySelectorAll('.header_link');
console.log(linkClickRef);

burgerActive.addEventListener('click', e => {
  burgerActive.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  lockBody.classList.toggle('lock');
});

linkClickRef.forEach(item => {
  item.addEventListener('click', linkClickClose);
});

function linkClickClose(event) {
  burgerActive.classList.remove('active');
  burgerMenu.classList.remove('active');
  lockBody.classList.remove('lock');
}
