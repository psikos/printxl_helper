import React from "react";

import Navigation from "../Navigation/Navigation";
import Hamburger from "../Hamburger/Hamburger";

const Header = ({ isMenuActive, handleHamburgerClick }) => {
  return (
    <header className="header">
      <Navigation
        isMenuActive={isMenuActive}
        handleHamburgerClick={handleHamburgerClick}
      />
      <Hamburger
        isMenuActive={isMenuActive}
        handleHamburgerClick={handleHamburgerClick}
      />
    </header>
  );
};

export default Header;
