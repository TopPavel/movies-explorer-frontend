class MovieApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getAllFilms = (data) => {
    return fetch(`${this.baseUrl}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // "Authorization": `Bearer ${data.jwt}`
      },
    })
      .then(this._checkResponse);
  }


  _checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

const movieApi = new MovieApi({
  // baseUrl: 'https://api.mov-explorer.toppavel.nomoredomains.icu/',
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // "Authorization": `Bearer ${localStorage.getItem('jwt')}`
  }
});

export default movieApi;
