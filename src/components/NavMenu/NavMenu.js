import ProfileLink from "./ProfileLink";
import { NavLink } from "react-router-dom";

const NavMenu = ({ isOpened, onClickByLink }) => {

  const handleLinkClick = (e) => {
    return onClickByLink(!isOpened);
  }

  return (
    <div className={`nav-menu ${isOpened && 'nav-menu_active'}`}>
      <nav className="nav-menu__container-links">
        <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current" exact
                 to="/">Главная</NavLink>
        <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current"
                 to="/movies">Фильмы</NavLink>
        <NavLink onClick={handleLinkClick} className="nav-menu__link" activeClassName="nav-menu__link_current"
                 to="/saved-movies">Сохранённые фильмы</NavLink>
      </nav>
      <div>
        <ProfileLink overridingStyleClass={'nav-menu__profile-link_column'} activeClassName="nav-menu__link_current"
                     handleClick={handleLinkClick}/>
      </div>
    </div>
  );
}

// ${isOpened && 'nav-menu_active'}

export default NavMenu
