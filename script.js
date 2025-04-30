let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElem = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      ${item.name} - ${item.price} ₽ 
      <button onclick="removeFromCart(${index})">Удалить</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalElem.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function testPay() {
  alert('Тестовый режим оплаты через ЮKassa. Оплата не проводится.');
  cart = [];
  updateCart();
  return false;
}
