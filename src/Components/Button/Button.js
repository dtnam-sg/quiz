import React from "react";
import "../Button/Button.css";

const Button = ({ onClick, icon, text = "" }) => {
  return (
    <button onClick={onClick}>
      {text}
      {icon}
    </button>
    // <div className="button">
    //   <a href={link}>{icons}</a>
    // </div>
  );
};
export default Button;
