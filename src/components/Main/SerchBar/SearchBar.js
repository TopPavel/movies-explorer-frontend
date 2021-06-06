import React, { useEffect, useState } from "react"

const SearchBar = ({ handleSearch, onLoad }) => {
  const [checked, setChecked] = useState(false);
  const [filmName, setFilmName] = useState('');

  useEffect(() => {
    const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
    setFilmName(lastSearch?.filmName ? lastSearch.filmName : '')
    setChecked(lastSearch?.checked ? lastSearch.checked : false)
  }, [])

  const handleChangeCheckbox = (e) => {
    setChecked(!checked);
  }

  const handleChangeFilm = (e) => {
    setFilmName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('lastSearch', JSON.stringify({ filmName: filmName, checked: checked }))
    onLoad()
    handleSearch({ filmName: filmName, isShort: checked })
  }

  return (
    <section className="search-bar">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="search-icon"/>
        <input
          type="text"
          name="film"
          placeholder={"Фильм"}
          className="search-input"
          value={filmName}
          onChange={handleChangeFilm}
        />
        <button className="search-button">Найти</button>
      </form>
      <div className="switch">
        <label className="switch-label">
          Короткометражки
          <input className={"switch-input"} type="checkbox" checked={checked} value={checked}
                 onChange={handleChangeCheckbox}/>
          <span className="slider round"/>
        </label>
      </div>

    </section>
  );
}

export default SearchBar
