import React from "react";
import Hamburger from "../Hamburger/Hamburger";

const Fieldset = ({
  mainLabel,
  mainInputToSet,
  filterGroup,
  isListVisible,
  setListVisibility,
  setList,
  mainInputValue,
  list,
  handleWykonczenieClick,
  oczkaValue,
  setOczka,
  uwagaValue,
  setUwaga,
}) => {
  return (
    <fieldset className="generator_form">
      <legend>{mainLabel}</legend>
      <label>
        WYKOŃCZENIE:
        <input
          onChange={(e) => {
            mainInputToSet(e.target.value);
            //tutaj jest problem bo przekazuje name i od nowa się filtruje tablica wcześniej wyfiltorwana przez group
            filterGroup(e, e.target.value, "name", setList);
            setListVisibility(true);
          }}
          value={mainInputValue}
        ></input>
        <ul className={isListVisible ? "wykonczenia" : "hidden"}>
          {list &&
            list.map((elem, index) => (
              <li key={index}>
                <button
                  onClick={(e) => {
                    handleWykonczenieClick(
                      e,
                      mainInputToSet,
                      elem.name,
                      elem.kod
                    );
                    filterGroup(e, elem.name, "name", setList, mainInputValue);
                    setListVisibility(false);
                  }}
                  className={elem.group}
                >
                  {elem.name} ({elem.kod})
                </button>
              </li>
            ))}

          <Hamburger
            isMenuActive={isListVisible}
            handleHamburgerClick={(e) => setListVisibility(!isListVisible)}
          ></Hamburger>
        </ul>
      </label>
      {mainInputValue.includes("oczk") && !mainInputValue.includes("narożnik") && (
        <label>
          OCZKA:
          <input
            onChange={(e) => setOczka(e.target.value)}
            value={oczkaValue}
          ></input>
        </label>
      )}
      <label>
        UWAGA:
        <input
          onChange={(e) => setUwaga(e.target.value)}
          value={uwagaValue}
        ></input>
      </label>
    </fieldset>
  );
};

export default Fieldset;
