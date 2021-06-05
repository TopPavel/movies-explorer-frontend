import React from "react";
import { NavLink } from "react-router-dom";

const ProfileLink = ({ overridingStyleClass, activeClassName, handleClick }) => {
  return (
    <>
      <NavLink className={`nav-menu__profile-link ${overridingStyleClass}`} activeClassName={activeClassName}
               to="/profile" onClick={handleClick}>
        Аккаунт
        <div className="profile-icon"/>
      </NavLink>
    </>
  );
}

export default ProfileLink
