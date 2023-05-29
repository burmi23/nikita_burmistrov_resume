const btnMore = document.querySelector('.btn-more');
const cardsMore = document.querySelectorAll('.cards-item');

btnMore.addEventListener('click', () => {
  cardsMore.forEach(el => { el.classList.toggle('cards-item--active') });
  btnMore.closest('.btn-more-wrap').classList.add('btn--hidden');
  /*в данном случае мы убираем класс btn-wrap из нащей разметки и добавляем класс btn--hidden чтобы скрыть кнопку */

  // btnMore.classList.add('btn--hidden'); /*в данном случае мы добавляем класс btn--hidden чтобы скрыть кнопку , однако btn-wrap все равно остается в разметке */
});
