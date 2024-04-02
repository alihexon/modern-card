const cards = document.querySelector('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.classList.add('overflow-visible');
  });

  card.addEventListener('mouseout', function() {
    card.classList.remove('overflow-visible');
  });
});