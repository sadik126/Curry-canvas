const toggleBtn = document.getElementById('toggleBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
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

let menuData = []; // global data store

function displayMenu(data) {
  const container = document.getElementById('menuContainer');
  container.innerHTML = ""; // clear previous items

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu_card');

    card.innerHTML = `
      <div class="card_image">
        <img src="${item.image}" alt="${item.name}">
        <span class="badge">${item.badge}</span>
      </div>

      <div class="card_body">
        <h4>${item.name}</h4>
        <p>${item.description}</p>

        <div class="tags">
          ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>

        <div class="price_section">
          <div>
            <span class="old_price">${item.oldPrice}</span>
            <span class="price">${item.price}</span>
          </div>
          <button>Order Now</button>
        </div>

        <div class="card_footer">
          <span>⭐ ${item.rating} (${item.reviewCount})</span>
          <span class="stock">${item.stock}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// fetch data
fetch('menu.json')
  .then(res => res.json())
  .then(data => {
    menuData = data.menu;   // save data globally
    displayMenu(menuData);  // show all items initially
  });

// Filter buttons
const filterBtns = document.querySelectorAll('.filter_btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    document.querySelector('.filter_btn.active').classList.remove('active');
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');

    if (category === 'all') {
      displayMenu(menuData);
    } else {
      const filtered = menuData.filter(item => item.category === category);
      displayMenu(filtered);
    }
  });
});