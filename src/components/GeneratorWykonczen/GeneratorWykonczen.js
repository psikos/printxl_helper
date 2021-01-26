import React, { useEffect, useState } from "react";

import wykonczenia from "../../wykonczenia";
import Fieldset from "../Fieldset/Fieldset";
import GroupButton from "../GroupButton/GroupButton";

const GeneratorWykonczen = () => {
  //lista wszystkich wykończeń
  const [listOfWykonczenia, setListOfWykonczenia] = useState(wykonczenia);

  // grupa wykonczeń - sublimacja, winyle, mw
  const [group, setGroup] = useState(false);

  //value inputa na około
  const [naOkolo, setNaOkolo] = useState("");

  const [naOkoloUwaga, setNaOkoloUwaga] = useState("");

  const [naOkoloOczka, setNaOkoloOczka] = useState("");

  const [naOkoloList, setNaOkoloList] = useState(false);

  const [isNaOkoloListVisible, setIsNaOkoloListVisible] = useState(false);

  const [gora, setGora] = useState("");

  const [goraUwaga, setGoraUwaga] = useState("");

  const [goraOczka, setGoraOczka] = useState("");

  const [goraList, setGoraList] = useState(false);

  const [isGoraListVisible, setIsGoraListVisible] = useState(false);

  const [dol, setDol] = useState("");

  const [dolUwaga, setDolUwaga] = useState("");

  const [dolOczka, setDolOczka] = useState("");

  const [dolList, setDolList] = useState(false);

  const [isDolListVisible, setIsDolListVisible] = useState(false);

  const [lewa, setLewa] = useState("");

  const [lewaUwaga, setLewaUwaga] = useState("");

  const [lewaOczka, setLewaOczka] = useState("");

  const [lewaList, setLewaList] = useState(false);

  const [isLewaListVisible, setIsLewaListVisible] = useState(false);

  const [prawa, setPrawa] = useState("");

  const [prawaUwaga, setPrawaUwaga] = useState("");

  const [prawaOczka, setPrawaOczka] = useState("");

  const [prawaList, setPrawaList] = useState(false);

  const [isPrawaListVisible, setIsPrawaListVisible] = useState(false);

  //to co się wyświetla
  const [wykonczenie, setWykonczenie] = useState("");

  const setArr = [
    setNaOkolo,
    setNaOkoloOczka,
    setNaOkoloUwaga,
    setGora,
    setGoraOczka,
    setGoraUwaga,
    setDol,
    setDolOczka,
    setDolUwaga,
    setLewa,
    setLewaOczka,
    setLewaUwaga,
    setPrawa,
    setPrawaOczka,
    setPrawaUwaga,
  ];

  const inputGroups = [
    [naOkolo, "NAOKOŁO", naOkoloOczka, naOkoloUwaga],
    [gora, "GÓRA", goraOczka, goraUwaga],
    [dol, "DÓŁ", dolOczka, dolUwaga],
    [lewa, "LEWA", lewaOczka, lewaUwaga],
    [prawa, "PRAWA", prawaOczka, prawaUwaga],
  ];

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
    let tempKod = "";
    stateToSet === setNaOkolo && (tempKod = `N${kod}`);
    stateToSet === setGora && (tempKod = `GK${kod}`);
    stateToSet === setDol && (tempKod = `DK${kod}`);
    stateToSet === setLewa && (tempKod = `LK${kod}`);
    stateToSet === setPrawa && (tempKod = `PK${kod}`);
    stateToSet(`${name} (${tempKod})`);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setGroup(false);
    setArr.forEach((input) => input(""));
  };

  const generateWykonczenie = (inputValue, label, oczka, uwaga) => {
    if (inputValue !== "") {
      let temp = "";
      temp = `${label}: ${inputValue}`;
      oczka &&
        (temp =
          temp
            .split("")
            .splice(0, temp.length - 1, 1)
            .join("") + `=${oczka})`);
      uwaga && (temp = `${temp} UWAGA: ${uwaga}`);
      return temp;
    }
    return null;
  };

  useEffect(() => {
    let temp = "";

    temp = inputGroups
      .map((group) =>
        generateWykonczenie(group[0], group[1], group[2], group[3])
      )
      .filter((elem) => elem !== null)
      .join(" | ");

    setWykonczenie(temp);
    // eslint-disable-next-line
  }, [group, ...inputGroups.flat()]);

  return (
    <div>
      <div className="group_buttons">
        <GroupButton
          className="winyle"
          label="winyle"
          filterGroup={filterGroup}
          setListOfWykonczenia={setListOfWykonczenia}
          lists={[setNaOkoloList]}
        ></GroupButton>
        <GroupButton
          className="sublimacja"
          label="sublimacja"
          filterGroup={filterGroup}
          setListOfWykonczenia={setListOfWykonczenia}
          lists={[setNaOkoloList]}
        ></GroupButton>
        <GroupButton
          className="mw"
          label="folie i papiery"
          filterGroup={filterGroup}
          setListOfWykonczenia={setListOfWykonczenia}
          lists={[setNaOkoloList]}
        ></GroupButton>
        <GroupButton
          className="reset"
          label="RESET"
          filterGroup={handleReset}
          setListOfWykonczenia={setListOfWykonczenia}
          lists={[setNaOkoloList]}
        ></GroupButton>
      </div>

      <form>
        <Fieldset
          mainLabel="NAOKOŁO"
          mainInputToSet={setNaOkolo}
          mainInputValue={naOkolo}
          filterGroup={filterGroup}
          setListVisibility={setIsNaOkoloListVisible}
          isListVisible={isNaOkoloListVisible}
          list={naOkoloList}
          setList={setNaOkoloList}
          handleWykonczenieClick={handleWykonczenieClick}
          oczkaValue={naOkoloOczka}
          setOczka={setNaOkoloOczka}
          uwagaValue={naOkoloUwaga}
          setUwaga={setNaOkoloUwaga}
        ></Fieldset>
        <Fieldset
          mainLabel="GÓRA"
          mainInputToSet={setGora}
          mainInputValue={gora}
          filterGroup={filterGroup}
          setListVisibility={setIsGoraListVisible}
          isListVisible={isGoraListVisible}
          list={goraList}
          setList={setGoraList}
          handleWykonczenieClick={handleWykonczenieClick}
          oczkaValue={goraOczka}
          setOczka={setGoraOczka}
          uwagaValue={goraUwaga}
          setUwaga={setGoraUwaga}
        ></Fieldset>
        <Fieldset
          mainLabel="DÓŁ"
          mainInputToSet={setDol}
          mainInputValue={dol}
          filterGroup={filterGroup}
          setListVisibility={setIsDolListVisible}
          isListVisible={isDolListVisible}
          list={dolList}
          setList={setDolList}
          handleWykonczenieClick={handleWykonczenieClick}
          oczkaValue={dolOczka}
          setOczka={setDolOczka}
          uwagaValue={dolUwaga}
          setUwaga={setDolUwaga}
        ></Fieldset>
        <Fieldset
          mainLabel="LEWA"
          mainInputToSet={setLewa}
          mainInputValue={lewa}
          filterGroup={filterGroup}
          setListVisibility={setIsLewaListVisible}
          isListVisible={isLewaListVisible}
          list={lewaList}
          setList={setLewaList}
          handleWykonczenieClick={handleWykonczenieClick}
          oczkaValue={lewaOczka}
          setOczka={setLewaOczka}
          uwagaValue={lewaUwaga}
          setUwaga={setLewaUwaga}
        ></Fieldset>
        <Fieldset
          mainLabel="PRAWA"
          mainInputToSet={setPrawa}
          mainInputValue={prawa}
          filterGroup={filterGroup}
          setListVisibility={setIsPrawaListVisible}
          isListVisible={isPrawaListVisible}
          list={prawaList}
          setList={setPrawaList}
          handleWykonczenieClick={handleWykonczenieClick}
          oczkaValue={prawaOczka}
          setOczka={setPrawaOczka}
          uwagaValue={prawaUwaga}
          setUwaga={setPrawaUwaga}
        ></Fieldset>
      </form>
      <div className="copy-container">{wykonczenie}</div>
    </div>
  );
};

export default GeneratorWykonczen;
