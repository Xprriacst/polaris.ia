// Sélection des éléments du DOM
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Fonction pour basculer le menu mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  menuToggle.classList.toggle('toggle');
});
