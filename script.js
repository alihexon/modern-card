const cards = document.querySelectorAll('.js-slide');

function handleMouseInteraction(card) {
  if (window.innerWidth <= 719) {
    card.addEventListener('mouseover', () => card.classList.add('slide'));
    card.addEventListener('mouseout', () => card.classList.remove('slide'));
  }
}

cards.forEach(card => {
  card.addEventListener('mouseover', () => handleMouseInteraction(card));
  card.addEventListener('mouseout', () => handleMouseInteraction(card));
});