import React from "react";
import SizesTable from "../SizesTable/SizesTable";
import Step from "../Step/Step";

const WyswietlWykonczenie = ({ props, isSzwalnia }) => {
  const {
    name,
    group,
    kod,
    description,
    detailsDtp,
    dtpExceptions,
    exapmlesMaterials,
    additionalInfo,
    szwalnia,
    sizes,
  } = props;

  return (
    <div className="wykonczenie">
      <header>
        <div className="title-wraper">
          <h1 className="wykonczenie-title">{name}</h1>
          <div className="wykonczenie-title_under">
            <div className="kod">{kod}</div>
            <div className={`${group} title-span`}>
              {group === "mw" ? "papiery i folie" : group}
            </div>
          </div>
        </div>

        {sizes && <SizesTable sizes={sizes} szwalnia={szwalnia}></SizesTable>}
      </header>
      <div className="main">
        <p className="regularP">
          {isSzwalnia && szwalnia ? szwalnia.description : description}
        </p>
        <div className="main_img">
          <img
            src={require(`../../assets/products/${name}/main.jpg`)}
            alt={`${name} - wykończony produkt.`}
          ></img>
        </div>
        <div className="main_img">
          <img
            src={require(`../../assets/products/${name}/main-template.png`)}
            alt={`${name} - template.`}
          ></img>
        </div>
      </div>

      <div className="steps">
        <ol>
          {isSzwalnia ? (
            szwalnia ? (
              szwalnia.steps.map(
                ({ description, img, warrning, templates }, index) => (
                  <Step
                    name={name}
                    key={index}
                    description={description}
                    img={img}
                    warrning={warrning}
                    szwalnia={szwalnia}
                    templates={templates}
                  />
                )
              )
            ) : (
              <Step
                description="Ten produkt nie ma swojego wykończenia na szwalni lub nie
              zostało one jeszcze zredagowane..."
              ></Step>
            )
          ) : (
            detailsDtp.map((detail, index) => (
              <Step key={index} description={detail} />
            ))
          )}
        </ol>
      </div>

      {dtpExceptions.length > 0 ? (
        <div className="exception">
          <ol className="exception-ul">
            {dtpExceptions.map((exception, index) => (
              <li key={index}>{exception}</li>
            ))}
          </ol>
        </div>
      ) : null}

      <ul className="examples-materials">
        {exapmlesMaterials.map((example, index) => (
          <li className="examples-materials-item" key={index}>
            {example}
          </li>
        ))}
      </ul>

      {!isSzwalnia && additionalInfo && (
        <div className="important">
          <ul className="important-ul">
            {additionalInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WyswietlWykonczenie;
