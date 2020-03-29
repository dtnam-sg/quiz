import React from "react";
import "../Introduction/Introduction.css";

const HeaderContent = ({ title, link, linkText }) => {
  return (
    <div className="introduction">
      <span>{title}</span>
      <a href={link}>{linkText}</a>
    </div>
  );
};

const Block = ({ imageSrc, alt, description }) => {
  return (
    <div className="block">
      <div>
        <img src={imageSrc} alt={alt} />
      </div>
      <span>{description}</span>
    </div>
  );
};

function Introduction() {
  return (
    <div className="introduction-header">
      <HeaderContent title="How it works" link="#" linkText="Learn more" />
      <div className="content-block">
        <Block
          imageSrc="logo192.png"
          alt="Choice"
          description="Take multiple-choice quiz"
        />
        <Block
          imageSrc="logo192.png"
          alt="Skill"
          description="Get a badge for your skill "
        />
        <Block imageSrc="logo192.png" alt="Lock" />
      </div>
    </div>
  );
}
export default Introduction;
