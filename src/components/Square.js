import React from "react";

// value here is either 'X' or 'O', and these match the CSS class 'value' | if null then squares only
const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
