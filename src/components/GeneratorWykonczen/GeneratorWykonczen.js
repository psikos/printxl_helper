import React, { useEffect, useState } from "react";

import wykonczenia from "../../wykonczenia";

const inputs = {
  name: ["naOkolo", "gora", "dol", "lewa", "prawa"],
};

const GeneratorWykonczen = () => {
  //lista wszystkich wykończeń
  const [listOfWykonczenia, setListOfWykonczenia] = useState(wykonczenia);

  // grupa wykonczeń - sublimacja, winyle, mw
  const [group, setGroup] = useState(false);

  //value inputa na około
  const [naOkolo, setNaOkolo] = useState("");
  //lista na około - powinno z tego się filtrować
  const [naOkoloList, setNaOkoloList] = useState(false);

  //to co się wyświetla
  const [wykonczenie, setWykonczenie] = useState("");

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

  // const handleSearchChange = (e) => {
  //   searchWykonczenie(e.currentTarget.value);
  // };

  useEffect(() => {
    let temp = "";

    // setNaOkoloList(listOfWykonczenia);

    setWykonczenie(() => {
      if (naOkolo !== "") {
        temp = `NAOKOŁO: ${naOkolo}`;
      }
      return temp;
    });
  }, [naOkolo, group]);

  return (
    <div>
      <button
        onClick={(e) => {
          setGroup(false);
          setListOfWykonczenia(wykonczenia);
        }}
      >
        RESET
      </button>
      <button
        className="winyle"
        onClick={(e) => {
          filterGroup(e, "winyle", "group", setListOfWykonczenia, [
            setNaOkoloList,
          ]);
        }}
      >
        winyle
      </button>
      <button
        className="sublimacja"
        onClick={(e) =>
          filterGroup(e, "sublimacja", "group", setListOfWykonczenia, [
            setNaOkoloList,
          ])
        }
      >
        sublimacja
      </button>
      <button
        className="mw"
        onClick={(e) =>
          filterGroup(e, "mw", "group", setListOfWykonczenia, [setNaOkoloList])
        }
      >
        folie i papiery
      </button>
      <form>
        <label>
          NAOKOŁO:
          {/* <input
            onChange={handleSearchChange}
            value={wykonczenieSearch}
          ></input> */}
          <input
            onChange={(e) => {
              setNaOkolo(e.target.value);
              //tutaj jest problem bo przekazuje name i od nowa się filtruje tablica wcześniej wyfiltorwana przez group
              filterGroup(e, e.target.value, "name", setNaOkoloList);
            }}
            value={naOkolo}
          ></input>
          <ul className="wykonczenia">
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
                    }}
                    className={elem.group}
                  >
                    {elem.name} ({elem.kod})
                  </button>
                </li>
              ))}
          </ul>
        </label>
      </form>
      <div>{wykonczenie}</div>
    </div>
  );
};

export default GeneratorWykonczen;
