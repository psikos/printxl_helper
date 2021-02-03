import React from "react";

import timeConvert from "../../functions/timeConvert";

const sumConvertedTime = (a, b) => {
  let tempMinutes = parseInt(a.split(":")[0]) + parseInt(b.split(":")[0]);
  let tempSeconds = parseInt(a.split(":")[1]) + parseInt(b.split(":")[1]);

  if (tempSeconds >= 60) {
    tempMinutes += Math.floor(tempSeconds / 60);
  }
  tempSeconds % 60 < 10
    ? (tempSeconds = "0" + (tempSeconds % 60))
    : (tempSeconds = tempSeconds % 60);

  return tempMinutes + ":" + tempSeconds;
};

const SizesTable = ({ sizes, szwalnia }) => {
  const sumTime = (size, area) => {
    return timeConvert(
      Object.values(szwalnia.steps).reduce((acc, { time }) => {
        return (acc += time[size][area]);
      }, 0)
    );
  };

  return (
    <div className="sizes">
      <table className="sizes-table">
        <thead>
          <tr>
            <th></th>
            {sizes.map(({ size }) => (
              <th key={size}>{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>netto</th>
            {sizes.map(({ netto }) => (
              <td key={netto}>{netto}</td>
            ))}
          </tr>
          <tr>
            <th>brutto</th>
            {sizes.map(({ brutto }) => (
              <td key={brutto}>{brutto}</td>
            ))}
          </tr>
          <tr>
            <th>sub [min]</th>
            {sizes.map(({ size }) => (
              <td key={size}>{sumTime(size, "sub")}</td>
            ))}
          </tr>
          <tr>
            <th>szw [min]</th>
            {sizes.map(({ size }) => (
              <td key={size}>{sumTime(size, "szw")}</td>
            ))}
          </tr>
          <tr>
            <th>czas [min]</th>
            {sizes.map(({ size }) => (
              <td key={size}>
                {sumConvertedTime(sumTime(size, "sub"), sumTime(size, "szw"))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizesTable;
