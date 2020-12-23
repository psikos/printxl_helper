import React, { useEffect, useState } from "react";

import wykonczenia from "../../wykonczenia";

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

  const filterGroup = (e, value, key, toSet, input) => {
    e.preventDefault();

    if (key === "group") {
      setGroup(value);
      toSet(() => {
        return wykonczenia.filter((elem) => {
          value === elem[key] && setGroup(elem[key]);
          return value === elem[key];
        });
      });
    }

    if (key === "name") {
      group !== false &&
        toSet(() => {
          return wykonczenia.filter((elem) => {
            return value === elem.group;
          });
        });
      if (input.length > value.length) {
        console.log("dupa");
        toSet(() => {
          return listOfWykonczenia.filter((elem) => elem[key].includes(value));
        });
      }
      toSet(() => {
        return listOfWykonczenia.filter((elem) => elem[key].includes(value));
      });
    }
  };

  // const handleGroupClick = (e, chosenGroup) => {
  //   e.preventDefault();
  //   setGroup(chosenGroup);
  // };

  const handleWykonczenieClick = (e, stateToSet, name, kod) => {
    e.preventDefault();
    stateToSet(`${name} (${kod})`);
  };

  useEffect(() => {
    let temp = "";

    setNaOkoloList(listOfWykonczenia);

    setWykonczenie(() => {
      if (naOkolo !== "") {
        temp = `NAOKOŁO: ${naOkolo}`;
      }
      return temp;
    });
  }, [naOkolo, listOfWykonczenia, naOkoloList, group]);

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
          filterGroup(e, "winyle", "group", setListOfWykonczenia, naOkolo);
        }}
      >
        winyle
      </button>
      <button
        className="sublimacja"
        onClick={(e) =>
          filterGroup(e, "sublimacja", "group", setListOfWykonczenia, naOkolo)
        }
      >
        sublimacja
      </button>
      <button
        className="mw"
        onClick={(e) =>
          filterGroup(e, "mw", "group", setListOfWykonczenia, naOkolo)
        }
      >
        folie i papiery
      </button>
      <form>
        <label>
          NAOKOŁO:
          <input
            onChange={(e) => {
              setNaOkolo(e.target.value);
              //tutaj jest problem bo przekazuje name i od nowa się filtruje tablica wcześniej wyfiltorwana przez group
              filterGroup(e, e.target.value, "name", setNaOkoloList, naOkolo);
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
