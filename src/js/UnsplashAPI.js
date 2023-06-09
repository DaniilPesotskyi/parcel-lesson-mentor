export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';
  #searchParams = new URLSearchParams({
    per_page: 9,
    orientation: 'portrait',
    client_id: this.#API_KEY,
  });

  getPopularImages(page) {
    const url = `${this.#BASE_URL}?page=${page}&query=popular&${
      this.#searchParams
    }`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }).catch(err => console.log(err));
  }

  getImagesBySearch(page) {
    const url = `${this.#BASE_URL}?page=${page}&query=${
      this.#query
    }&per_page=9&orientation=portrait&client_id=${this.#API_KEY}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
}
