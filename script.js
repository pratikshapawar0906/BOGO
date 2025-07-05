const cards = document.querySelectorAll('.card');
const totalPriceDisplay = document.getElementById('total-price');

cards.forEach(card => {
  const radio = card.querySelector('input[type="radio"]');

  radio.addEventListener('change', () => {
    // Remove 'expanded' from all cards
    cards.forEach(c => c.classList.remove('expanded'));

    // Add 'expanded' to the selected card
    card.classList.add('expanded');

    // Update price
    const price = radio.dataset.price;
    totalPriceDisplay.textContent = `$${price}.00 USD`;
  });
});
