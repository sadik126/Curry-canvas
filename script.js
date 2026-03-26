const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdownmenu');
const toggleIcon = document.querySelector('.toggle_btn i');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});


fetch('menu.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('menuContainer');

    // show only first 3 items
    const firstThree = data.menu.slice(0, 3);

    firstThree.forEach(item => {

      // dynamic star generator
      const fullStars = Math.floor(item.rating);
      const halfStar = item.rating % 1 !== 0;
      let stars = '';

      for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
      }
      if (halfStar) stars += '☆';

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
            <span class="reviews">${stars} (${item.reviewCount})</span>
            <span class="stock">${item.stock}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  });