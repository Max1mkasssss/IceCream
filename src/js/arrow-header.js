
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');

  if (window.pageYOffset > 200) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');

  }
}