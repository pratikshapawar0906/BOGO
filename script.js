const cards = document.querySelectorAll('.card');
const totalPriceDisplay = document.getElementById('total-price');

cards.forEach(card => {
  const radio = card.querySelector('input[type="radio"]');
  radio.addEventListener('change', () => {
    cards.forEach(c => c.classList.remove('expanded'));
    card.classList.add('expanded');
    const price = radio.dataset.price;
    totalPriceDisplay.textContent = `$${price}.00 USD`;
  });
});
