import React from "react";
import { Route, Switch } from "react-router-dom";
import StartNavMenu from "../NavMenu/StartNavMenu";
import NavMenuInline from "../NavMenu/NavMenuInline";

const Header = ({ logo, menuIsActive, onClickMenu }) => {

  const handleMenuClick = (e) => {
    return onClickMenu(!menuIsActive);
  }

  return (
    <Switch>
      <Route path="/sign-up">
        <header className="header-column">
          <img alt="Логотип" className="header__logo" src={logo}/>
          <p className='sign__title'>Добро пожаловать!</p>
        </header>
      </Route>
      <Route path="/sign-in">
        <header className="header-column">
          <img alt="Логотип" className="header__logo" src={logo}/>
          <p className='sign__title'>Рады видеть!</p>
        </header>
      </Route>
      <Route path="/movies">
        <header className="header-row">
          <img alt="Логотип" className="header__logo" src={logo}/>
          <NavMenuInline menuIsActive={menuIsActive} handleMenuClick={handleMenuClick}/>
        </header>
      </Route>
      <Route path="/saved-movies">
        <header className="header-row">
          <img alt="Логотип" className="header__logo" src={logo}/>
          <NavMenuInline menuIsActive={menuIsActive} handleMenuClick={handleMenuClick}/>
        </header>
      </Route>
      <Route path="/profile">
        <header className="header-row">
          <img alt="Логотип" className="header__logo" src={logo}/>
          <NavMenuInline menuIsActive={menuIsActive} handleMenuClick={handleMenuClick}/>
        </header>
      </Route>
      <Route exact strict path="/">
        <header className="header-row">
          <img alt="Логотип" className="header__logo" src={logo}/>
          <StartNavMenu/>
        </header>
      </Route>
    </Switch>
  );
}


export default Header
