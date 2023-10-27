import React from "react";
import '../styles/QuestionNumber.css'

function QuestionNumber({ questionNumber, text }) {
  return (
    <div style={{ textAlign: "center" }} className={questionNumber > 0 ? 'visible' : 'hidden'}>
      <h3>{text}</h3>
    </div>
  );
}

export default QuestionNumber;
