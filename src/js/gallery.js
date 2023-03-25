import {UnsplashAPI} from './UnsplashAPI';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './createGalleryCard';

const container = document.getElementById('tui-pagination-container');

const galleryList = document.querySelector(".js-gallery");

const options = {
    totalItems: 0,
    itemsPerPage: 9,
    visiblePages: 5,
    page: 1,
}

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const service = new UnsplashAPI();

service.getPopularImages(page).then(({results, total}) => {
    pagination.reset(total);
    const markup = createGalleryCard(results);
    galleryList.insertAdjacentHTML('beforeend', markup);
});

pagination.on('afterMove', ({ page }) => {
    service.getPopularImages(page).then(({results}) => {
        galleryList.innerHTML = "";
        const markup = createGalleryCard(results);
        galleryList.insertAdjacentHTML('beforeend', markup);
    });
});