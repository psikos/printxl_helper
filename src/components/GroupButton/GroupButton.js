import React from "react";

const GroupButton = ({
  className,
  label,
  filterGroup,
  setListOfWykonczenia,
  lists,
}) => {
  return (
    <>
      <button
        className={`group_buttons-item ${className}`}
        onClick={(e) => {
          filterGroup(e, className, "group", setListOfWykonczenia, lists);
        }}
      >
        {label}
      </button>
    </>
  );
};

export default GroupButton;
