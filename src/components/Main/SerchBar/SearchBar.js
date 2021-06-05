import React, { useEffect, useState } from "react"

const SearchBar = (props) => {
  const [checked, setChecked] = useState(false);
  const [film, setFilm] = useState('');

  useEffect(() => {
    setChecked(false);
    setFilm('');
  });
  const handleChangeCheckbox = (e) => {
    setChecked(!checked);
  }

  const handleChangeFilm = (e) => {
    setFilm(e.target.value);
  }

  return (
    <section className="search-bar">
      <form action="" className="search-form">
        <div className="search-icon"/>
        <input
          type="text"
          name="film"
          placeholder={"Фильм"}
          className="search-input"
          onChange={handleChangeFilm}
        />
        <button className="search-button">Найти</button>
      </form>
      <div className="switch">
        <label className="switch-label">
          Короткометражки
          <input className={"switch-input"} type="checkbox" onChange={handleChangeCheckbox}/>
          <span className="slider round"/>
        </label>
      </div>

    </section>
  );
}

export default SearchBar
