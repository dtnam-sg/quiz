import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
function Footer({ text }) {
  return (
    <div className="footer">
      <Button
        buttonStyle="primary--solid"
        buttonSize="large"
        text={text}
      ></Button>
    </div>
  );
}

export default Footer;
