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

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: '.purecounter', // HTML query selector for specific element

  // Settings that can be overridden on a per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 100, // End number [uint]
  duration: 2, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  pulse: false, // Repeat count for a certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [uint]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable the Currency format. Use it to set the symbol too [boolean|char|string]
  formater: 'us-US', // Number toLocaleString locale/format, by default, is "en-US" [string|boolean:false]
  separator: false, // This will enable/disable comma separator for thousands. Use it to set the symbol too [boolean|char|string]
});
