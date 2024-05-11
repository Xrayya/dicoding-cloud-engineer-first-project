const header = document.querySelector('header');
const hamburger = document.querySelector('#hamburger')
const navLink = document.querySelector('nav')

window.addEventListener('scroll', function() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active')
  navLink.classList.toggle('active')
})
