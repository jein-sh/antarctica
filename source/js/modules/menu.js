let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navItems = navMain.querySelectorAll('.main-nav__item');
let overlay = document.querySelector('.overlay');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    overlay.classList.add('layer--show');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    overlay.classList.remove('layer--show');
  }
});

navItems.forEach( item => {
  item.addEventListener("click", function() {

    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      overlay.classList.remove('layer--show');
    }
  });
});

overlay.addEventListener ("click", function() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  overlay.classList.remove('layer--show');
});
