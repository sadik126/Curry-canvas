const toggleBtn = document.getElementById('toggleBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show'); // Toggle 'show' class
  const isOpen = dropdownMenu.classList.contains('show');
  toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Scroll effect for navbar background
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});