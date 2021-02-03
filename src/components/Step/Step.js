import React, { useState, useEffect } from "react";

import timeConvert from "../../functions/timeConvert";

const Step = ({
  name,
  description,
  img,
  warrning,
  templates,
  time,
  sizes,
  index,
}) => {
  const [isPicVisible, setIsPicVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      setIsPicVisible(() => !isPicVisible);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <li className="detail" onClick={(e) => setIsPicVisible(!isPicVisible)}>
        <div className={isPicVisible ? "step-counter spin" : "step-counter"}>
          <div className="step-counter_wraper">
            <span className="step-counter_counter">
              {index < 9 ? `0${index + 1}` : `${index + 1}`}
            </span>
            <span className="step-counter_step">krok</span>
          </div>
        </div>

        <button>{description}</button>
        <div className="sizes">
          <table
            className={
              isPicVisible ? "sizes-table, step-active" : "sizes-table"
            }
          >
            <thead>
              <tr>
                <th></th>
                {sizes.map(({ size }, index) => (
                  <th key={index}>{size}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>sub [min]</th>
                {sizes.map(({ size }, index) => {
                  const subTimePerStep = time[size].sub;

                  return (
                    <td key={index} className={subTimePerStep && "show"}>
                      {timeConvert(subTimePerStep)}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th>sub [min]</th>
                {sizes.map(({ size }, index) => {
                  const szwTimePerStep = time[size].szw;

                  return (
                    <td key={index} className={szwTimePerStep && "show"}>
                      {timeConvert(szwTimePerStep)}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        <div className={isPicVisible ? "detail_content" : "hide"}>
          <div className="detail_content_imgs">
            {img && (
              <div className={isPicVisible ? "detail_imgs" : "hide"}>
                {img.map((pic, index) => (
                  <img
                    key={index}
                    src={require(`../../assets/products/${name}/${pic}.jpg`)}
                    alt={`Zdjęcie do kroku ${pic}`}
                    className={isPicVisible ? "detail_imgs-img" : "hide"}
                  ></img>
                ))}
              </div>
            )}
            {templates && (
              <div className="detail_imgs">
                <div className={isPicVisible ? "detail_imgs" : "hide"}>
                  {templates.map((template, index) => (
                    <img
                      key={index}
                      src={require(`../../assets/products/${name}/templates/${template}_template.png`)}
                      alt={`Zdjęcie do kroku ${template}`}
                      className={isPicVisible ? "detail_imgs-img" : "hide"}
                    ></img>
                  ))}
                </div>
              </div>
            )}
          </div>

          {warrning.length > 0 && (
            <div className="warnings">
              {warrning.map((warn, index) => (
                <p className={isPicVisible ? "warning" : "hide"} key={index}>
                  <span>UWAGA: </span>
                  {warn}
                </p>
              ))}
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default Step;
