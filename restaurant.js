let navMenu = document.querySelector('.nav-menu');
let iconButton = document.querySelectorAll('.icons');
let firstSlide = document.querySelector('.first-slide');

function toggleMenu() {
  if (iconButton[0].classList.contains('hide')) {
    iconButton[1].classList.add('hide');
    iconButton[0].classList.remove('hide');
    iconButton[0].classList.add('active');
    navMenu.classList.add('active');
  }
  else {
    iconButton[1].classList.remove('hide');
    iconButton[0].classList.add('hide');
    iconButton[0].classList.remove('active');
    navMenu.classList.remove('active');
  }
}

function slideShrink() {
  firstSlide.classList.add('slide-shrink');
}

for (var i = 0; i < iconButton.length; i++) {
  iconButton[i].addEventListener('click', toggleMenu);
}

window.onload = slideShrink;
