import React from "react";
import { Link } from "react-router-dom";

const SprawdzanieSkladek = () => {
  return (
    <>
      <h1>Sprawdzanie składek</h1>
      <p className="regularP">
        Postprodukcja - ostatni etap przed przekazaniem plików do druku.
      </p>
      <p className="regularP">
        Każdy z etapów pracy DTP'owca jest tak samo ważny i na każdym z tych
        etapów wymagana jest określona baza wiedzy. Podczas sprawdzania składek
        przydaje się wiedza z dziedziny{" "}
        <Link to={"/sprawdzanie"}>sprawdzania plików</Link> i{" "}
        <Link to={"/produkcja"}>produkcji</Link>, ale również impozycji,
        wewnętrzych standardów i ustaleń pomiędzy poszczególnymi działami naszej
        firmy.
      </p>
    </>
  );
};

export default SprawdzanieSkladek;
