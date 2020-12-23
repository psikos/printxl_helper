import React from "react";
import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Start</h1>
      <p>
        Pracę DTP'owca można podzielić na trzy oddzielne, aczkolwiek połączone
        ze sobą, etapy.
      </p>
      <ol className="stages">
        <li>
          <NavLink className="link" to={"/sprawdzanie"}>
            Sprawdzanie
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/produkcja"}>
            Produkcja
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/sprawdzanie-skladek"}>
            Sprawdzanie składek
          </NavLink>
        </li>
      </ol>
      <div className="important">
        <p>
          Przed przystąpieniem do któregokolwiek z nich powinieneś przygotwać
          się do pracy, to znaczy:
        </p>
        <ul>
          <li>Włącz przeglądarkę i zaloguj się na działowego maila DTP.</li>
          <li>
            Jeżeli posiadasz maila imennego - zaloguj się również na niego.
          </li>
          <li>Zaloguj się do Poligrafa</li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
