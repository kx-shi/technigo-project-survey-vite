import React from "react";
import '../styles/QuestionNumber.css'

/* Component for rendering current question */
function QuestionNumber({ questionNumber, text }) {
  return (
    <div style={{ textAlign: "center" }} className={questionNumber > 0 ? 'visible' : 'hidden'}>
      <h3>{text}</h3>
    </div>
  );
}

export default QuestionNumber;
