import React, { useEffect, useState } from "react"
import SearchBar from "../components/Main/SerchBar/SearchBar";
import Films from "../components/Main/Films/Films";
import LoadButton from "../components/Main/LoadButton/LoadButton";
import Preloader from "../components/Preloader/Preloader";
import { getInitialFilmsCounts, getLoadUpCount } from "../utils/utils";
import { Route, Switch } from "react-router-dom";

const MoviePage = ({ films, onClickFavorite, handleSearch, clientWidth, onDeleteFavorite }) => {
  const [initialFilmsCount, setInitialFilmsCount] = useState(getInitialFilmsCounts);
  const [loadUpFilmsCount, setLoadUpFilmsCount] = useState(getLoadUpCount);
  const [currentFilms, setCurrentFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInitialFilmsCount(getInitialFilmsCounts(clientWidth));
    setLoadUpFilmsCount(getLoadUpCount(clientWidth));
    getInitialSearchedFilms();
  }, [initialFilmsCount, loadUpFilmsCount])

  useEffect(() => {
    setInitialFilmsCount(getInitialFilmsCounts(clientWidth));
    setLoadUpFilmsCount(getLoadUpCount(clientWidth));
  }, [clientWidth])

  useEffect(() => {
    setInitialFilmsCount(getInitialFilmsCounts(clientWidth));
    setLoadUpFilmsCount(getLoadUpCount(clientWidth));
    const lastLoadedFilms = localStorage.getItem('lastLoadedFilms')
    if (lastLoadedFilms === null) {
      getInitialSearchedFilms();
    } else {
      setCurrentFilms(films?.filter(i => JSON.parse(lastLoadedFilms).some(j => j.movieId === i.movieId)))
    }
  }, [films])

  const getInitialSearchedFilms = () => {
    setIsLoading(false)
    setCurrentFilms(films?.slice(0, initialFilmsCount))
  }

  const onLoadMore = () => {
    const currentFilmsLength = currentFilms.length
    const newFilms = currentFilms?.concat(films.slice(currentFilmsLength, currentFilmsLength + loadUpFilmsCount))
    setCurrentFilms(newFilms)
    localStorage.setItem('lastLoadedFilms', JSON.stringify(newFilms))
  }

  function isLoadMore() {
    return currentFilms?.length > 0 && currentFilms?.length < films?.length
  }

  const handleLoading = () => {
    setCurrentFilms([])
    localStorage.removeItem('lastLoadedFilms')
    setIsLoading(true)
  }

  return (
    <>
      <main>
        <SearchBar handleSearch={handleSearch} onLoad={handleLoading}/>
        <Preloader loading={isLoading}/>
        <Switch>
          <Route path="/movies">
            {(films?.length === 0 && !isLoading) && <p className={'films-not-found'}>Ничего не найдено</p>}
            {
              films?.length > 0 &&
              <Films films={currentFilms} onClickFavorite={onClickFavorite}/>
            }
          </Route>
          <Route path="/saved-movies">
            {(films?.length === 0 && !isLoading) && <p className={'films-not-found'}>Добавьте фильмы в избранное.</p>}
            {
              films?.length > 0 &&
              <Films films={films} onClickFavorite={onClickFavorite} onDeleteFavorite={onDeleteFavorite}/>
            }
          </Route>
        </Switch>
        <LoadButton onClick={onLoadMore} isVisible={isLoadMore()}/>
      </main>
    </>
  );
}

export default MoviePage
