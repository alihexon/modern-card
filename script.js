const cards = document.querySelectorAll('.js-slide');

cards.forEach(card => {
  card.addEventListener('mouseover', () => card.classList.add('slide'));
  card.addEventListener('mouseout', () => card.classList.remove('slide'));

});