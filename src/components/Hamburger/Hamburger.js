import React from "react";

const Hamburger = ({ isMenuActive, handleHamburgerClick }) => {
  return (
    <div
      className={
        isMenuActive
          ? "hamburger-wraper hamburger-wraper-active"
          : "hamburger-wraper"
      }
      onClick={handleHamburgerClick}
    >
      <div
        className={isMenuActive ? "hamburger-active hamburger" : "hamburger"}
      ></div>
    </div>
  );
};

export default Hamburger;
