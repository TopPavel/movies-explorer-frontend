import React from "react"
import { goToAnchor } from 'react-scrollable-anchor'

const Promo = (props) => {
  return (
    <div className="promo">
      <h1 className="promo__title">{'Учебный проект студента факультета Веб\u2011разработки.'}</h1>
      <nav className="promo__nav">
        <button className="promo__nav-button" onClick={() => {
          goToAnchor('AboutProject');
        }}>О проекте
        </button>
        <button className="promo__nav-button" onClick={() => {
          goToAnchor('Techs');
        }}>Технологии
        </button>
        <button className="promo__nav-button" onClick={() => {
          goToAnchor('portfolio');
        }}>Студент
        </button>
      </nav>
    </div>
  );
}

export default Promo;
