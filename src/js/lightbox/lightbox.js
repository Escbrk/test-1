import iziToast from 'izitoast';
import getImagesByQuery from './pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './render-function.js';

export const refs = {
  searchBtn: document.getElementById('search'),
  form: document.querySelector('.form'),
  gallery: document.querySelector('.simply-gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.getElementById('load_more'),
};

const disableBtn = () => {
  refs.searchBtn.disabled = true;
};

const enableBtn = () => {
  refs.searchBtn.disabled = false;
};

let current_page = 0;
let QUERY = null;

refs.form.addEventListener('input', e => {
  if (e.currentTarget.query.value.trim() !== '') {
    enableBtn();
  } else {
    disableBtn();
  }
});

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  current_page = 1;

  QUERY = e.target.elements.query.value.trim();

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits: img } = await getImagesByQuery(QUERY, current_page);
    if (!img.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      hideLoadMoreButton();
    } else {
      createGallery(img);
      showLoadMoreButton();
      refs.form.reset();
      disableBtn();
    }
    hideLoader();
  } catch ({ message }) {
    hideLoader();

    iziToast.error({
      title: 'Error',
      message,
    });
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  current_page++;

  const { hits: img, total } = await getImagesByQuery(QUERY, current_page);

  // This API doesn't show all pages
  // const totalPages = Math.ceil(total / perPage);

  if (current_page >= 34) {
    hideLoadMoreButton();

    iziToast.info({
      message: "We're sorry, but you've reached the end of search results",
    });
  }

  await createGallery(img);
  refs.loadMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
});

disableBtn();
