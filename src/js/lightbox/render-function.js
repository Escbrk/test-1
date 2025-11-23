import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './lightbox.js';

const gallery = new SimpleLightbox('.simply-gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 0,
});

iziToast.settings({
  position: 'topRight',
});

export const createGallery = async images => {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
                                  <li class="gallery-card">
                                    <a href="${largeImageURL}">
                                      <img src="${webformatURL}" alt="${tags}">
                                    </a>
                                    <div class="info">
                                      <b class="info-text">Likes <span>${likes}</span></b>
                                      <b class="info-text">Views <span>${views}</span></b>
                                      <b class="info-text">Comments <span>${comments}</span></b>
                                      <b class="info-text">Downloads <span>${downloads}</span></b>
                                    </div>
                                  </li>
                                  `
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
  hideLoader();
};

export const clearGallery = () => {
  refs.gallery.innerHTML = null;
};

export const showLoader = () => {
  refs.loader.classList.remove('is-hidden');
};

export const hideLoader = () => {
  refs.loader.classList.add('is-hidden');
};

export const showLoadMoreButton = () => {
  refs.loadMoreBtn.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  refs.loadMoreBtn.classList.add('is-hidden');
};
