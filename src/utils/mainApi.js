class MainApi {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    signIn = (data) => {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        })
          .then(this._checkResponse)
          .then(data => {
              if (data.token) {
                  localStorage.setItem('jwt', data.token);
                  return data
              }
          });
    }

    getSavedMovies = () => {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
            },
        })
          .then(this._checkResponse);
    }

    saveMovie = (data) => {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailer: data.trailer,
                thumbnail: data.thumbnail,
                movieId: data.movieId,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
          .then(this._checkResponse);
    }


    deleteMovie = (data) => {
        return fetch(`${this.baseUrl}/movies/${data?._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
            },
        })
          .then(this._checkResponse);
    }

    getContent = (data) => {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
            },
        })
          .then(this._checkResponse);
    }

    signUp = (data) => {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email,
                name: data.name,
            })
        })
          .then(this._checkResponse);
    }

    updateSelfData = (data) => {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                email: data.email,
                name: data.name,
            })
        })
          .then(this._checkResponse);
    }


    _checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

const mainApi = new MainApi({
    baseUrl: 'https://api.mov-explorer.toppavel.nomoredomains.icu',
    // baseUrl: 'http://localhost:8085',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    }
});

export default mainApi;
