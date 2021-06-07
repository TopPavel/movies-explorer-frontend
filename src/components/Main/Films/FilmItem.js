import React from "react"

const FilmItem = ({ title, duration, image, trailer, icon }) => {

  return (
    <>
      <li className="film-item">
        <div className="film-info">
          <div className="film-info__text">
            <h2 className="film-info__title">{title}</h2>
            <p className="film-info__duration">{duration}</p>
          </div>
          {icon}
        </div>
        <a href={trailer} className="film-card__link">
          <img src={image} alt="Обложка фильма" className="film-card__image"/>
        </a>
      </li>
    </>
  );
}

export default FilmItem
