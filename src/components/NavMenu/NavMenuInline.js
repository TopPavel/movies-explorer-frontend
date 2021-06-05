import ProfileLink from "./ProfileLink";
import { NavLink } from "react-router-dom";

const NavMenuInline = ({ menuIsActive, handleMenuClick }) => {

  const handleLinkClick = (e) => {
    return handleMenuClick(!menuIsActive);
  }

  return (
    <nav className="nav-menu__inline-block">
      <NavLink className="nav-menu__inline-link" to="/movies">Фильмы</NavLink>
      <NavLink className="nav-menu__inline-link nav-menu__link_light" to="/saved-movies">Сохранённые фильмы</NavLink>
      <ProfileLink overridingStyleClass={'nav-menu__profile-link_inline'}/>
      <button className={`nav-menu-btn ${menuIsActive && 'nav-menu-btn_active'}`} onClick={handleMenuClick}>
        <span className="nav-icon"/>
      </button>
    </nav>
  );
}

export default NavMenuInline
