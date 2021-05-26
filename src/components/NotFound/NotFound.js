import React from "react"
import { useHistory } from "react-router-dom";

const NotFound = ({}) => {
  const history = useHistory();

  const handleClickBack = (e) => {
    e.preventDefault();
    history.goBack()
  }

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__desc">Страница не найдена</p>
      <button onClick={handleClickBack} className="not-found__button_back">Назад</button>
    </div>
  );
}

export default NotFound
