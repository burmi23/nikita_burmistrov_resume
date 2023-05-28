const btnMore = document.querySelector('.articles-more');
const articlesItems = document.querySelectorAll('.articles__item');

btnMore.addEventListener('click', () => {
    articlesItems.forEach(el => { el.classList.add('articles-item--visible') });
    btnMore.closest('.articles-center').classList.add('articles-center--hidden');
});
