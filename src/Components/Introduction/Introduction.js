import React from "react";
import "../Introduction/Introduction.css";

const HeaderContent = ({ title, link, linkText }) => {
  return (
    <div className="introduction-title">
      <span>{title}</span>
      <a href={link}>{linkText}</a>
    </div>
  );
};

const Block = ({ imageSrc, alt, description }) => {
  return (
    <div className="introduction-content__block">
      <div>
        <img src={imageSrc} alt={alt} />
      </div>
      <span>{description}</span>
    </div>
  );
};

function Introduction() {
  return (
    <div className="content-introduction">
      <HeaderContent title="How it works" link="#" linkText="Learn more" />
      <div className="introduction-content">
        <Block
          imageSrc="https://static-exp1.licdn.com/sc/h/adj6i4rox81urqvl2lnz4me87"
          alt="Choice"
          description="Take a multiple-choice quiz"
        />
        <Block
          imageSrc="https://static-exp1.licdn.com/sc/h/kn2s7qlapljbu71375bjykd2"
          alt="Skill"
          description="Get a badge for your skill "
        />
        <Block
          imageSrc="https://static-exp1.licdn.com/sc/h/26mcnomu6yoddxp3x5ocohb5z"
          alt="Lock"
          description="Results are private unless you share them"
        />
      </div>
    </div>
  );
}
export default Introduction;
