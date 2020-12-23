import React from "react";
import { NavLink } from "react-router-dom";
import "../../main.scss";

import { navItemsDtp as navItems } from "../../CONSTS";

const Navigation = ({ isMenuActive, handleHamburgerClick }) => {
  return (
    <>
      <nav className={isMenuActive ? "nav nav-open" : "nav"}>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                className="nav-link"
                activeClassName="active-link"
                exact
                to={`/${item.to}`}
                onClick={isMenuActive ? handleHamburgerClick : null}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
