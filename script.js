const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => card.classList.add('slide'));
  card.addEventListener('mouseout', () => card.classList.remove('slide'));

});