let cartCount = 0;

const cartCountElement = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.product__button--add');
const removeButtons = document.querySelectorAll('.product__remove-button');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    updateCartDisplay();
  });
});

removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (cartCount > 0) {
      cartCount--;
      updateCartDisplay();
    }
  });
});

function updateCartDisplay() {
  cartCountElement.textContent = cartCount;
}
