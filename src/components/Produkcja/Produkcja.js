import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import wykonczenia from "../../wykonczenia";
import WyswietlWykonczenie from "../WyswietlWykonczenie/WyswietlWykonczenie";
import ListaWykonczen from "../ListaWykonczen/ListaWykonczen";
import Wyszukiwarka from "../Wyszukiwarka/Wyszukiwarka";

const Produkcja = () => {
  const [wyswietl, setWyswietl] = useState(false);
  const [wyszukaj, setWyszukaj] = useState("");
  const [filteredWykonczenia, setFilteredWykonczenia] = useState(wykonczenia);

  const filtorwanie = () => {
    setFilteredWykonczenia(() =>
      wykonczenia.filter((element) => {
        return element.name.includes(wyszukaj) ? element : null;
      })
    );
  };

  useEffect(() => {
    wyszukaj === "" ? setFilteredWykonczenia(wykonczenia) : filtorwanie();
    // eslint-disable-next-line
  }, [wyszukaj]);

  const handleClick = (e) => {
    // eslint-disable-next-line
    wykonczenia.filter((element) => {
      if (
        element.name === e.target.innerText &&
        element.group === e.target.className
      ) {
        setWyswietl(element);
      }
    });
  };

  return (
    <>
      <h1>Produkcja</h1>
      <p className="regularP">Najbardziej obszerny dział pracy DTP'owca.</p>
      <p className="regularP">
        Ten etap wymaga włączenia pliku pomocniczego -{" "}
        <strong>DTP_Produkcja</strong> - znajdziesz go w pasku szybkiego dostępu
        eksploratora Windows lub pod ścieżką: <br></br>
        <span className="file-path">R:\Ogólne\PLANOWANIE\Aktualny</span>
      </p>
      <p className="regularP">
        <strong>
          Celem działu DTP jest przygotowanie wszystkich zleceń, które zostały
          zaplanowane w druku na dzień kolejny od aktualnego.
        </strong>{" "}
        Np. 20.10 dażymy do przygotowania wszystkich zleceń z datą druku 21.10.
        Każde zlecenie z datą wcześniejszą, które nie zostanie przygotowane jest
        zaległością działu DTP.
      </p>
      <p className="regularP">
        Aby dowiedzieć się jakie zlecenia zostały zaplanowane na dany dzień
        produkcyjny należy odpowiednio przefiltrować arkusz kalkulacyjny.
      </p>
      <ul className="filter-list">
        <li>
          W kolumnie J znajdują się inicjały osoby, która wyprodukowała dane
          zlecenie/pozycję. Aby zobaczyć{" "}
          <strong>zlecenia, które nie zostały jeszcze przygotowane</strong>{" "}
          należy w tej kolumnie odznaczyć wartości, które są inicjałami
          pracowników DTP'u.
        </li>
        <li>
          Żeby wyszukać <strong>zlecenia z najwcześniejszą datą druku</strong>{" "}
          należy w kolumnie C wyszukać odpowiednią datę. Ważne - trzeba również
          odznaczyć opcję "puste".
        </li>
        <li>
          Możemy wyszukać zlecenia zaplanowane na konkretną maszynę filturjąc
          kolumnę U,
        </li>
        <li>Materiał - W.</li>
        <li>I wiele innych kombinacji ;)</li>
      </ul>

      <p className="regularP">
        Po obraniu kursu produkcji otwieramy interesujące nas zlecenie w
        poligrafie i przystępujemy do faktcznej pracy z plikami.
      </p>

      <Wyszukiwarka wyszukaj={wyszukaj} setWyszukaj={setWyszukaj} />

      <ListaWykonczen
        wykonczenia={filteredWykonczenia}
        handleClick={handleClick}
      />

      {wyswietl ? <WyswietlWykonczenie props={wyswietl} /> : null}
    </>
  );
};

export default Produkcja;
