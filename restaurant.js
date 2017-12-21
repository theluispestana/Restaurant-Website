let pageScroll;
let attribute;
let image;
let navMenu = document.querySelector('.nav-menu');
let iconButton = document.querySelectorAll('.icons');
let firstSlide = document.querySelector('.first-slide');
let firstSlideHeight = firstSlide.offsetHeight;
let quoteText = document.querySelector('.quote-text');
let quoteBoxHeight = document.querySelector('.quote-box').offsetHeight;
let aboutMe = document.querySelector('.about-box');
let aboutHeight = document.querySelector('.about-container').offsetHeight;
let images = document.querySelectorAll('.images img');

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

  if (pageScroll > (firstSlideHeight)) {
    aboutMe.classList.add('about-active');
  }
}

function  saturation () {
  if (event.type == 'mouseenter') {
    attribute = this.getAttribute('data-image');
    image = document.querySelector(`img[data-image="${attribute}"]`);
    image.style.filter = "grayscale(0%)";
  }
  else if (event.type == 'mouseleave') {
    attribute = this.getAttribute('data-image');
    image = document.querySelector(`img[data-image="${attribute}"]`);
    image.style.filter = "grayscale(90%)";
  }
}

// function  desaturate()

//adding event listener for load animation
window.onload = slideShrink;

//Adding event listeners to both buttons
for (var i = 0; i < iconButton.length; i++) {
  iconButton[i].addEventListener('click', toggleMenu);
}

window.addEventListener('scroll', slide);

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseenter', saturation);
  images[i].addEventListener('mouseleave', saturation);
}
