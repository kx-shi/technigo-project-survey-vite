import React from "react";

/* Questions of type radio */
function QuestionRadioButton({questionData, updateFunction}) {
  return (
    <form className="question-radio">
      <p>{questionData.text}</p>
        {questionData.answers.map((answer, idx) => {
            return(
              <div key={idx}>
                <input type={questionData.type} name="radiobutton" onChange={updateFunction} value={answer.weighting}/>
                <label htmlFor={`option${idx}`}>{answer.text}</label>
              </div>
            )
        })}
    </form>
  );
}
export default QuestionRadioButton;
