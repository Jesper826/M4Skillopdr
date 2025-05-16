let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const productContainer = document.getElementById('product-container');

const products = [
  ["Toilet XXL", 5000, "toilet-xxl.jpeg", 5, true],
  ["Toilet Deluxe", 200, "toilet-deluxe.jpeg", 5, false],
  ["Normaal Toilet", 80, "normale-toilet.jpeg", 5, true],
  ["Staand Toilet", 500, "staand-toilet.jpeg", 5, true],
  ["Hang Toilet", 200, "staand-toilet.jpeg", 5, false],
  ["Diepspoel Toilet", 80, "diepspoel-toilet.jpeg", 5, true],
  ["Bonen Toilet", 5000, "nicktoilet.jpeg", 5, true],
  ["Duoblok Toilet", 510, "duoblok.webp", 5, true]
];

function updateCartDisplay() {
  cartCountElement.textContent = cartCount;
}

function createProductCard([name, price, img, rating, available]) {
  const product = document.createElement('div');
  product.className = 'product';
  if (!available) product.classList.add('product--not-available');

  product.innerHTML = `
    <img src="./img/${img}" alt="${name}" class="product__img">
    <h2 class="product__title">${name}</h2>
    <p class="product__price">${price} eur</p>
    <p class="product__rating">${'★'.repeat(rating)}</p>
    <button class="product__button ${available ? 'product__button--add' : 'product__button--disabled'}"
      ${available ? '' : 'disabled'}>
      ${available ? 'Add to Cart' : 'Out of Stock'}
    </button>
    <button class="product__remove-button">Remove</button>
  `;

  const addButton = product.querySelector('.product__button--add');
  const removeButton = product.querySelector('.product__remove-button');

  if (addButton) {
    addButton.addEventListener('click', () => {
      cartCount++;
      updateCartDisplay();
    });
  }

  removeButton.addEventListener('click', () => {
    if (cartCount > 0) {
      cartCount--;
      updateCartDisplay();
    }
  });

  return product;
}

products.forEach(productData => {
  const card = createProductCard(productData);
  productContainer.appendChild(card);
});
