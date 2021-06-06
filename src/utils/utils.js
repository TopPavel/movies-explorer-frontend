const validNameRegex = /^[a-zа-яё -]+$/iu

const mapFilms = (movies, savedMovies, userId) => {
  return movies?.map(item => (
    {
      _id: item._id,
      country: item?.country ? item?.country : 'Не указано',
      director: item?.director ? item?.director : 'Не указано',
      duration: item.duration,
      year: item.year,
      description: item?.description ? item?.description : 'Не указано',
      image: `${item?.image?.url ? `https://api.nomoreparties.co${item.image.url}` : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'}`,
      trailer: item.trailerLink,
      thumbnail: `${item?.image?.formats?.thumbnail?.url ? `https://api.nomoreparties.co${item.image.formats.thumbnail.url}` : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'}`,
      movieId: item.id,
      nameRU: item?.nameRU,
      nameEN: item?.nameEN,
      isFavorite: savedMovies.filter(i => i?.owner === userId).some(i => i.movieId === item.id)
    }
  )).sort((a, b) => b.isFavorite - a.isFavorite)
}

const searchFilms = (item, filter) => {
  if (filter.isShort) {
    return item.duration <= 40 && (item?.nameRU?.toLowerCase().includes(filter.filmName.toLowerCase()) || item?.nameEN?.toLowerCase().includes(filter.filmName.toLowerCase()))
  } else {
    return item?.nameRU?.toLowerCase().includes(filter.filmName.toLowerCase()) || item?.nameEN?.toLowerCase().includes(filter.filmName.toLowerCase())
  }
}

function getInitialFilmsCounts(clientWidth) {
  if (clientWidth >= 1280) {
    return 12
  } else if (clientWidth >= 480 && clientWidth < 1280) {
    return 8
  } else if (clientWidth < 480) {
    return 5
  }
}

function getLoadUpCount(clientWidth) {
  if (clientWidth >= 1280) {
    return 3
  } else if (clientWidth < 1280) {
    return 2
  }
}

const duration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const minutesOfHour = Math.ceil(((minutes / 60) - hours) * 60)
  return `${hours && hours}ч ${minutesOfHour && minutesOfHour}м`
}

export {
  validNameRegex,
  mapFilms,
  searchFilms,
  getInitialFilmsCounts,
  getLoadUpCount,
  duration,
}

// savedMovies.some(i => i.movieId === item.movieId)
