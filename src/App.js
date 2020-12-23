import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./main.scss";

import { navItemsDtp as navItems } from "./CONSTS";

import Header from "./components/Header/Header";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    window.innerWidth < 1072 ? setIsMenuActive(false) : setIsMenuActive(true);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header
          isMenuActive={isMenuActive}
          handleHamburgerClick={handleHamburgerClick}
        ></Header>
        <div className="content-wraper">
          <div className="container">
            <div className="content">
              {navItems.map((item) => (
                <Route
                  key={item.to}
                  exact
                  path={`/${item.to}`}
                  component={item.component}
                ></Route>
              ))}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
