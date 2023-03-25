import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { UnsplashAPI } from './UnsplashAPI';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './createGalleryCard';

const container = document.getElementById('tui-pagination-container');

const galleryList = document.querySelector('.js-gallery');
const searcForm = document.querySelector('.js-search-form');

const options = {
  totalItems: 0,
  itemsPerPage: 9,
  visiblePages: 5,
  page: 1,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const service = new UnsplashAPI();

service.getPopularImages(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCard(results);
  galleryList.insertAdjacentHTML('beforeend', markup);
}).catch(() => Notify.failure('Server error'));

pagination.on('afterMove', getPopular);

function getPopular({ page }) {
  service.getPopularImages(page).then(({ results }) => {
    galleryList.innerHTML = '';
    const markup = createGalleryCard(results);
    galleryList.insertAdjacentHTML('beforeend', markup);
  });
}

searcForm.addEventListener('submit', searchOnSubmit);

function searchOnSubmit(e) {
  e.preventDefault();
  const { query } = e.target.elements;
  const searchQuery = query.value.trim();
  if (searchQuery === '') {
    Notify.failure('Enter search query');
    return;
  }

  service.query = searchQuery;

  pagination.off('afterMove', getPopular);
  pagination.off('afterMove', getBySearch);

  service.getImagesBySearch(page).then(({ results, total }) => {
    if (results.length ===0){
      Notify.failure('Enter valid search query');
      return;
    }
    pagination.reset(total);
    galleryList.innerHTML = '';
    const markup = createGalleryCard(results);
    galleryList.insertAdjacentHTML('beforeend', markup);
  });

  pagination.on('afterMove', getBySearch);
}

function getBySearch({ page }) {
  service.getImagesBySearch(page).then(({ results }) => {
    galleryList.innerHTML = '';
    const markup = createGalleryCard(results);
    galleryList.insertAdjacentHTML('beforeend', markup);
  });
}
