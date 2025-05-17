//* select nav element
const nav = document.getElementById('navbar-nav');

//* scroll function
scroll = () =>
  scrollY >= 645
    ? nav.classList.add('scrolled')
    : nav.classList.remove('scrolled');

//* attach scroll to EventListener
window.addEventListener('scroll', scroll);

// typed js
var typed = new Typed('#element', {
  strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// back to top button

// Show/hide button
let toggleButton = () => {
  let button = document.getElementById('backToTop');
  button.style.display = window.pageYOffset > 300 ? 'block' : 'none';
};

// Smooth scroll
const scrollTop = e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Event Listeneres
window.addEventListener('scroll', toggleButton);
document.getElementById('backToTop').addEventListener('click', scrollTop);
