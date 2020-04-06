import React from "react";
import "../Button/Button.css";

const Button = ({ onClick, icon, text = "" }) => {
  return (
    <button onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};
export default Button;
