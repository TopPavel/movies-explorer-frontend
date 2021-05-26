import React from "react"

const FilmItem = ({ title, duration, image, icon }) => {

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
        <img src={image} alt="Обложка фильма" className="film-card__image"/>
      </li>
    </>
  );
}

export default FilmItem
