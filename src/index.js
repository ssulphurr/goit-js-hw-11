import './css/styles.css';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

let pageNum = 1;

refs.loadMoreBtn.classList.add('hidden');

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
  pageNum = 1;

  evt.preventDefault();

  try {
    const photos = await fetchPictures(refs.form.elements.searchQuery.value);
    if (photos.total === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    Notiflix.Notify.success(`"Hooray! We found ${photos.totalHits} images.`);

    refs.gallery.innerHTML = '';

    renderGallery(photos);
  } catch (error) {
    console.log(error);
  }
}

async function fetchPictures(query) {
  const response = await fetch(
    `https://pixabay.com/api/?key=34712470-649d4f955d7295175d07d13ae&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNum}`
  );
  const photos = await response.json();
  return photos;
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

  showLoadBtn();
}

function showLoadBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}

refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onLoadMore() {
  pageNum += 1;

  try {
    const photos = await fetchPictures(refs.form.elements.searchQuery.value);
    if (photos.hits.length === 0) {
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }

    renderGallery(photos);
  } catch (error) {
    console.log(error);
  }
}
