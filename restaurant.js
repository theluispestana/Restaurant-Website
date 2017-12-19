let pageScroll;
let navMenu = document.querySelector('.nav-menu');
let iconButton = document.querySelectorAll('.icons');
let firstSlide = document.querySelector('.first-slide');
let quoteText = document.querySelector('.quote-text');
let aboutMe = document.querySelector('.about-box');

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

function slide() {
  pageScroll = window.scrollY
  if (pageScroll > 200) {
    quoteText.classList.add('text-rise');
  }
  else {
    return;
  }
}

window.addEventListener('click', function() {
    aboutMe.classList.add('about-active');
});

window.addEventListener('scroll', slide);

//adding event listener for load animation
window.onload = slideShrink;

//Adding event listeners to both buttons
for (var i = 0; i < iconButton.length; i++) {
  iconButton[i].addEventListener('click', toggleMenu);
}
