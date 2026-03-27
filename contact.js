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


const form = document.querySelector('.contact-form form');
const modal = document.getElementById('successModal');
const closeBtn = document.getElementById('closeModal');
const contactform = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  contactform.reset();
});