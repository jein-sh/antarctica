let body = document.querySelector('.page-body');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navItems = navMain.querySelectorAll('.main-nav__item');
let overlay = document.querySelector('.overlay');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    overlay.classList.add('overlay--show');
    body.classList.add('scroll-lock');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    overlay.classList.remove('overlay--show');
    body.classList.remove('scroll-lock');
  }
});

navItems.forEach((item) => {
  item.addEventListener('click', function () {

    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      overlay.classList.remove('overlay--show');
      body.classList.remove('scroll-lock');
    }
  });
});

overlay.addEventListener('click', function () {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  overlay.classList.remove('overlay--show');
  body.classList.remove('scroll-lock');
});
