
// navber toggle
const toggleBtn = document.getElementById('toggleBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show'); 
  const isOpen = dropdownMenu.classList.contains('show');
  toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// scroll effect for navbar background
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// form submission and modal handling
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
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");


const today = new Date().toISOString().split("T")[0];
dateInput.min = today;


function updateTimeMin() {
  const selectedDate = dateInput.value;
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0];

  if (selectedDate === currentDate) {
   
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const currentTime = `${hours}:${minutes}`;
    timeInput.min = currentTime;

   
    if (timeInput.value < currentTime) {
      timeInput.value = currentTime;
    }
  } else {
    timeInput.removeAttribute("min");
  }
}


dateInput.addEventListener("change", updateTimeMin);


updateTimeMin();


document.getElementById("bookingForm").addEventListener("submit", function(e){
  const selectedDate = dateInput.value;
  const selectedTime = timeInput.value;

  const now = new Date();
  const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

  if (selectedDateTime < now) {
    e.preventDefault();
    alert("Please select a future date and time.");
  }
});

const bookingForm = document.getElementById("bookingForm");
const bookingModal = document.getElementById("bookingModal");
const closeBookingModal = document.getElementById("closeBookingModal");

bookingForm.addEventListener("submit", function(e){
  e.preventDefault();

  const selectedDate = dateInput.value;
  const selectedTime = timeInput.value;
  const now = new Date();
  const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

  if(selectedDateTime < now){
    alert("Please select a future date and time.");
    return;
  }

 
  bookingModal.style.display = "flex";

 
  bookingForm.reset();

  
  updateTimeMin();
});


closeBookingModal.addEventListener("click", () => {
  bookingModal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if(e.target === bookingModal){
    bookingModal.style.display = "none";
  }
});