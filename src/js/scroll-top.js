const scrolBtn = document.querySelector('.scroll-to-top');

console.log(scrolBtn);

window.onscroll = () => {
  if (window.scrollY > 400) {
    scrolBtn.classList.remove('scroll-hide');
  } else if (window.scrollY < 400) {
    scrolBtn.classList.add('scroll-hide');
  }

  scrolBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};
