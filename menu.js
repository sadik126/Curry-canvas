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

fetch('menu.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('menuContainer');

    data.menu.forEach(item => {
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
            <button>Add to Cart</button>
          </div>

          <div class="card_footer">
            <span>⭐ ⭐ ⭐ ⭐ ⭐ ${item.reviews}</span>
            <span class="stock">${item.stock}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  });