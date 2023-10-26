import React, { useState } from "react";

function QuestionRadioButton({
  questionText,
  optionText1,
  optionText2,
  optionText3,
  optionText4,
}) {
  return (
    <form className="question-radio">
      <p>{questionText}</p>
      <div>
        <input type="radio" />
        <label htmlFor="option1">{optionText1}</label>
      </div>
      <div>
        <input type="radio" />
        <label htmlFor="option2">{optionText2}</label>
      </div>
      <div>
        <input type="radio" />
        <label htmlFor="option3">{optionText3}</label>
      </div>
      <div>
        <input type="radio" />
        <label htmlFor="option4">{optionText4}</label>
      </div>
    </form>
  );
}
export default QuestionRadioButton;
