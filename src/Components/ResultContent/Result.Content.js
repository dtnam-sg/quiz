import React from "react";
import Button from "../Button/Button";
import "./ResultContent.css";
const Result = () => {
  return (
    <div className="tab-result">
      <h2 className="tab-result__header">Quizz to retake</h2>
      <ul className="tab-result__course">
        <li className="tab-result__course-name">
          <div className="tab-result__desc">
            <p>Cascading Style Sheets(CSS)</p>
            <span>Retake in 75d</span>
          </div>
          <Button
            buttonStyle="next--circle"
            buttonSize="medium"
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z" />
              </svg>
            }
          />
        </li>
        <div className="tab-result__hr"></div>
        <li className="tab-result__course-name">
          <div className="tab-result__desc">
            <p>HTML</p>
            <span>Retake in 83d</span>
          </div>
          <Button
            buttonStyle="next--circle"
            buttonSize="medium"
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z" />
              </svg>
            }
          />
        </li>
      </ul>
    </div>
  );
};
export default Result;
