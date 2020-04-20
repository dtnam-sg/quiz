import React from "react";
import "../Button/Button.css";
const STYLES = ["primary--solid", "next--circle"];
const SIZES = ["medium", "large"];
const Button = ({ onClick, buttonStyle, buttonSize, text }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
  return (
    <button
      onClick={onClick}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {text}
    </button>
  );
};
export default Button;
