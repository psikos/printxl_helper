import React, { useState } from "react";

const Step = ({ name, description, img, warrning, szwalnia, templates }) => {
  const [isPicVisible, setIsPicVisible] = useState(false);
  return (
    <>
      <li className="detail" onClick={(e) => setIsPicVisible(!isPicVisible)}>
        <button>{description}</button>
        <div className={isPicVisible ? "detail_content" : "hide"}>
          {img && (
            <div className="detail_imgs">
              {img.map((pic, index) => (
                <img
                  key={index}
                  src={require(`../../assets/products/${name}/${pic}.jpg`)}
                  alt={`Zdjęcie do kroku ${pic}`}
                ></img>
              ))}
            </div>
          )}
          {templates && (
            <div className="detail_imgs">
              {templates.map((template, index) => (
                <img
                  key={index}
                  src={require(`../../assets/products/${name}/${template}_template.png`)}
                  alt={`Zdjęcie do kroku ${template}`}
                ></img>
              ))}
            </div>
          )}
          {warrning &&
            warrning.map((warn, index) => (
              <p className="warning" key={index}>
                <span>UWAGA: </span>
                {warn}
              </p>
            ))}
        </div>
      </li>
    </>
  );
};

export default Step;
