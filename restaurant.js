let navMenu = document.querySelector('.nav-menu');
let iconButton = document.querySelectorAll('.icons');

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

for (var i = 0; i < iconButton.length; i++) {
  iconButton[i].addEventListener('click', toggleMenu);
}
