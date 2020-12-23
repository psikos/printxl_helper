import React from "react";

const Wyszukiwarka = ({ wyszukaj, setWyszukaj }) => {
  return (
    <>
      <input
        className="wyszukiwarka"
        onChange={(e) => setWyszukaj(e.target.value)}
        value={wyszukaj}
        placeholder="Wyszukaj wykończenie"
      ></input>
      <div className="legend">
        <span className="legend-element">winyle</span>
        <span className="legend-element">sublimacja</span>
        <span className="legend-element">papiery i folie</span>
      </div>
    </>
  );
};

export default Wyszukiwarka;
