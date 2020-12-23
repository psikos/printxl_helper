import React from "react";

const WyswietlWykonczenie = ({ props }) => {
  const {
    name,
    group,
    kod,
    description,
    detailsDtp,
    dtpExceptions,
    exapmlesMaterials,
    additionalInfo,
  } = props;
  return (
    <div className="wykonczenie">
      <h1 className="wykonczenie-title">
        {name} <span className="kod">{kod}</span>
        <span className={`${group} title-span`}>
          {group === "mw" ? "papiery i folie" : group}
        </span>
      </h1>
      <p className="regularP">{description}</p>
      <div className="steps">
        <ol>
          {detailsDtp.map((detail, index) => (
            <button key={index} className="detail">
              <li>{detail}</li>
            </button>
          ))}
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
      {additionalInfo.length > 0 ? (
        <div className="important">
          <ul className="important-ul">
            {additionalInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default WyswietlWykonczenie;
