const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    navLinks.classList.toggle('show');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && event.target !== menuBtn) {
      navLinks.classList.remove('show');
    }
  });
}
