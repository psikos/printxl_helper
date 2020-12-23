import React from "react";
// import { Link } from "react-router-dom";

const ListaWykonczen = ({ wykonczenia, handleClick }) => {
  return (
    <>
      <ul className="wyszukiwarka-list">
        {wykonczenia.map((elem, index) => (
          <li
            key={index}
            onClick={(e) => handleClick(e)}
            className={elem.group}
          >
            {elem.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaWykonczen;
