import './css/styles.css';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  fetchPictures(refs.form.elements.searchQuery.value).then(photos => {
    if (photos.total === 0) {
      alert(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    renderGallery(photos);
  });
}

function fetchPictures(query) {
  return fetch(
    `https://pixabay.com/api/?key=34712470-649d4f955d7295175d07d13ae&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
  ).then(response => response.json());
}

function renderGallery(photos) {
  const markup = photos.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                <p class="info-item">
                <b>Likes</b></br> ${likes}
                </p>
                <p class="info-item">
                <b>Views</b></br> ${views}
                </p>
                <p class="info-item">
                <b>Comments</b></br> ${comments}
                </p>
                <p class="info-item">
                <b>Downloads</b></br> ${downloads}
                </p>
            </div>
            </div>`;
      }
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
