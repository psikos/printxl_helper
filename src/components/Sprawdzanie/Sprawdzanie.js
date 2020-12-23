import React from "react";

const Sprawdzanie = () => {
  return (
    <>
      <h1 className="page-title">Sprawdzanie</h1>
      <p className="regularP">
        Pierwszy etap pracy DTP-owca. Polega na sprawdzaniu plików przesłanych
        za pośrednictwem działu handlowego (DH) na działowego maila
        dtp@printxl.pl. Przychodzą tam pliki w różnych formatach. Naszym
        zadaniem jest sprawdzenie przesłanych plików pod kątem:
      </p>
      <div className="important">
        <ul>
          <li>rozmiaru</li>
          <li>rozdzielczości</li>
          <li>jakości</li>
          <li>wykończenia</li>
        </ul>
      </div>
      <article className="article">
        <h2>Rozmiar</h2>
        <p className="regularP">
          Rozmiar sprawdzanego pliku powinien być dokładnie taki jak w
          poligrafie. Wszelkie niewielkie dostosowania wykonujemy bez
          dodatkowych zapytań do działu DH, chyba, że grafika na to nie pozwala.
          Po dostosowaniu informujemy DH, iż dany plik miał inny rozmiar i że
          został dostosowany do wymiaru z poligrafa.
        </p>
        <div className="exception">
          <p>
            Istnieje kilka wyjątków takich jak: rollupy, papiery oraz folie
            wykańczane do formatu. Te produkty zapisujemy ze spadem 0,3 mm na
            stronę.
          </p>
        </div>
      </article>
      <article className="article">
        <h2>Rozdzielczość</h2>
        <p className="regularP">
          Rozdzielczość sprawdzanego pliku jest uzależniona od materiału na
          którym przewidziany jest wydruk danej pozycji. Zawsze w skali
          piksel/inch (dpi/ppi). Możemy wyróżnić 5 grup rozdzielczości.
        </p>
        <table className="resolution-table">
          <thead>
            <tr>
              <th>Winyle</th>
              <th>Siatki winylowe</th>
              <th>Sublimacja</th>
              <th>Folie</th>
              <th>Małe formaty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>70</td>
              <td>50</td>
              <td>90</td>
              <td>150</td>
              <td>150/300</td>
            </tr>
          </tbody>
        </table>
        <div className="exception">
          <p>
            Powyższe rodzielczości są standardem. Zdażyć się może odstępstwo od
            standardu spowodowane np. małymi elementami na niewielkich formatach
            (max. około rozmiar rollupu), wtedy grafik zobowiązany jest zapisać
            plik w wyższej rozdzielczości niż przewiduje standard i zamieścić
            stosowną informację o zmianie rozdzielczości w folderze ze
            zleceniem.
          </p>
          <p>
            Możliwe jest też obniżenie standardowej rodzielczości, np. na
            potrzeby zapisania dużego formatu.
          </p>
        </div>
      </article>
      <article className="article">
        <h2>Jakość</h2>
        <p className="regularP">
          Wszelkie wątpliwości odnośnie jakości sprawdzanego pliku zgłaszamy do
          DH. Jeżeli chcemy pokazać konkretny element grafiki, który poddajemy
          wątpliwości, korzystamy z akcji:{" "}
          <span className="action-path">
            Akcje_DTP {">>"} miarka 15x15 - prevka jakościowa
          </span>
          Ważne, aby przed jej uruchomieniem zaznaczyć na splaszczonym pliku
          obszar o wymiarze minimum 15x15 cm.
        </p>
      </article>
    </>
  );
};

export default Sprawdzanie;
