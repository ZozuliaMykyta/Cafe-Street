import React from "react";

export default function Burger({ onButtonClick }) {
  return (
    <button onClick={onButtonClick} className="header__burger burger">
      <span></span>
    </button>
  );
}
