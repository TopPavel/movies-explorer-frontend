import { Link } from "react-router-dom";
import React from "react";

const StartNavMenu = () => {

  // const handleLinkClick = (e) => {
  //   return onClickByLink(!isOpened);
  // }

  return (
    <div className="nav-menu__inline-block">
      <Link className="nav-menu__start-link" to="/sign-up">Регистрация</Link>
      <Link className="nav-menu__start-link" to="/sign-in">
        <button className="nav-menu__button">Войти</button>
      </Link>
    </div>
  );
}

// ${isOpened && 'nav-menu_active'}

export default StartNavMenu
