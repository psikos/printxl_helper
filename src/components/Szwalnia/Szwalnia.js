import React, { useState, useEffect } from "react";

import wykonczenia from "../../wykonczenia";
import filtrowanie from "../../functions/filtrowanie";
import handleWykonczenieClick from "../../functions/handleWykonczenieClick";

import Wyszukiwarka from "../Wyszukiwarka/Wyszukiwarka";
import ListaWykonczen from "../ListaWykonczen/ListaWykonczen";
import WyswietlWykonczenie from "../WyswietlWykonczenie/WyswietlWykonczenie";

const Szwalnia = () => {
  const [wyswietl, setWyswietl] = useState(false);
  const [wyszukaj, setWyszukaj] = useState("");
  const [filteredWykonczenia, setFilteredWykonczenia] = useState(wykonczenia);

  useEffect(() => {
    wyszukaj === ""
      ? setFilteredWykonczenia(wykonczenia)
      : filtrowanie(setFilteredWykonczenia, wyszukaj, wykonczenia);
    // eslint-disable-next-line
  }, [wyszukaj]);

  return (
    <>
      <div className="no-print">
        <Wyszukiwarka wyszukaj={wyszukaj} setWyszukaj={setWyszukaj} />

        <ListaWykonczen
          wykonczenia={filteredWykonczenia}
          handleClick={(e) =>
            handleWykonczenieClick(e, wykonczenia, setWyswietl)
          }
        />
      </div>

      {wyswietl ? (
        <WyswietlWykonczenie props={wyswietl} isSzwalnia={true} />
      ) : null}
    </>
  );
};

export default Szwalnia;
