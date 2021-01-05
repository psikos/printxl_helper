import React, { useEffect, useState } from "react";

import wykonczenia from "../../wykonczenia";
import Hamburger from "../Hamburger/Hamburger";

const GeneratorWykonczen = () => {
  //lista wszystkich wykończeń
  const [listOfWykonczenia, setListOfWykonczenia] = useState(wykonczenia);

  // grupa wykonczeń - sublimacja, winyle, mw
  const [group, setGroup] = useState(false);

  //value inputa na około
  const [naOkolo, setNaOkolo] = useState("");

  //lista na około - powinno z tego się filtrować
  const [naOkoloList, setNaOkoloList] = useState(false);

  const [isNaOkoloListVisible, setIsNaOkoloListVisible] = useState(false);

  //to co się wyświetla
  const [wykonczenie, setWykonczenie] = useState("");

  const setArr = [setNaOkoloList];
  const inputsArr = [setNaOkolo];

  const filterGroup = (e, value, key, toSet, lists) => {
    e.preventDefault();

    //jeżeli argument key ma wartość "group" to state group ustawiany jest na wartość "value", która jest stringiem reprezentującym wartość, która może znaleźć się w przeszukiwanym elemencie pod kluczem group, następnie filtrowana jest tablica wykonczenia zwracając do danego state - toSet - tablicę obiektów zawierającą obiekty z kluczem "group" o wartości "value"
    if (key === "group") {
      setGroup(value);
      toSet(
        wykonczenia.filter((elem) => {
          return value === elem[key];
        })
      );

      //aktualizuje wyświetalnie propozycji w poszczególnych listach
      // tutaj do ogarnięcia
      lists.forEach((list) =>
        list(
          wykonczenia.filter((elem) => {
            return value === elem[key] && elem.name.includes(naOkolo);
          })
        )
      );
    }

    if (key === "name") {
      group !== false &&
        toSet(
          listOfWykonczenia.filter((elem) => {
            return elem.name.includes(value);
          })
        );
    }
  };

  const handleWykonczenieClick = (e, stateToSet, name, kod) => {
    e.preventDefault();
    stateToSet(`${name} (${kod})`);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setGroup(false);
    setArr.forEach((setter) => setter(false));
    inputsArr.forEach((input) => input(""));
  };

  useEffect(() => {
    let temp = "";
    setWykonczenie(() => {
      if (naOkolo !== "") {
        temp = `NAOKOŁO: ${naOkolo}`;
      }
      return temp;
    });
  }, [naOkolo, group]);

  return (
    <div>
      <div className="group_buttons">
        <button
          className="group_buttons-item winyle"
          onClick={(e) => {
            filterGroup(e, "winyle", "group", setListOfWykonczenia, [
              setNaOkoloList,
            ]);
          }}
        >
          winyle
        </button>
        <button
          className="group_buttons-item sublimacja"
          onClick={(e) =>
            filterGroup(e, "sublimacja", "group", setListOfWykonczenia, [
              setNaOkoloList,
            ])
          }
        >
          sublimacja
        </button>
        <button
          className="group_buttons-item mw"
          onClick={(e) =>
            filterGroup(e, "mw", "group", setListOfWykonczenia, [
              setNaOkoloList,
            ])
          }
        >
          folie i papiery
        </button>
        <button
          className="group_buttons-item reset"
          onClick={(e) => handleReset(e)}
        >
          RESET
        </button>
      </div>

      <form className="generator_form">
        <label>
          NAOKOŁO:
          <input
            onChange={(e) => {
              setNaOkolo(e.target.value);
              //tutaj jest problem bo przekazuje name i od nowa się filtruje tablica wcześniej wyfiltorwana przez group
              filterGroup(e, e.target.value, "name", setNaOkoloList);
              setIsNaOkoloListVisible(true);
            }}
            value={naOkolo}
          ></input>
          <ul className={isNaOkoloListVisible ? "wykonczenia" : "hidden"}>
            {naOkoloList &&
              naOkoloList.map((elem, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => {
                      handleWykonczenieClick(
                        e,
                        setNaOkolo,
                        elem.name,
                        elem.kod
                      );
                      filterGroup(
                        e,
                        elem.name,
                        "name",
                        setNaOkoloList,
                        naOkolo
                      );
                      setIsNaOkoloListVisible(false);
                    }}
                    className={elem.group}
                  >
                    {elem.name} ({elem.kod})
                  </button>
                </li>
              ))}

            <Hamburger
              isMenuActive={isNaOkoloListVisible}
              handleHamburgerClick={(e) =>
                setIsNaOkoloListVisible(!isNaOkoloListVisible)
              }
            ></Hamburger>
          </ul>
        </label>
      </form>
      <div>{wykonczenie}</div>
    </div>
  );
};

export default GeneratorWykonczen;
