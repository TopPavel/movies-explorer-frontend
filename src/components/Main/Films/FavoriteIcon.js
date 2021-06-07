import React, { useState } from "react"
import { Route, Switch } from "react-router-dom";

const FavoriteIcon = ({ film, onClickFavorite, onDeleteFavorite }) => {
  const [filmIsFavorite, setFilmIsfavorite] = useState(film.isFavorite)

  const handleIsFavoriteClick = (e) => {
    film.isFavorite = !film.isFavorite
    onClickFavorite(film)
      .then(resp => {
        setFilmIsfavorite(resp)
      })
      .catch(err => console.log(err))
  }

  const handleDeleteFavorite = () => {
    film.isFavorite = !film.isFavorite
    onDeleteFavorite(film)
  }

  return (
    <Switch>
      <Route path="/movies">
        <div onClick={handleIsFavoriteClick}
             className={`film-info__favorite ${filmIsFavorite && 'film-info__favorite_active'}`}/>
      </Route>
      <Route path="/saved-movies">
        <div onClick={handleDeleteFavorite}
             className={`film-info__favorite film-info__favorite_delete`}/>
      </Route>
    </Switch>
  );
}

export default FavoriteIcon
