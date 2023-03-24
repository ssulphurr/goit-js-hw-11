import './css/styles.css';

const form = document.querySelector('#search-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  console.log(form.elements.searchQuery.value);
}
