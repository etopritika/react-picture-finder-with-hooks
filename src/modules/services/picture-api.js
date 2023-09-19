const BASE_URL = 'https://pixabay.com';
const API_KEY = '34805987-f2b531f3f349672084b6a5db6';

export default class FetchPicture {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchArticles() {
    return await fetch(
      `${BASE_URL}/api/?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ hits }) => {
        this.incrementPage();
        if (hits.length === 0) {
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        return { hits };
      })
      .catch(error => alert("We're sorry, but you've reached the end of search results."))
  }
  incrementPage() {
    this.page = this.page + 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
 
}

