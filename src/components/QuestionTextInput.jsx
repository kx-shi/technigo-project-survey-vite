import React from "react";
import '../styles/QuestionTextInput.css';

/* Question component for questions of type text input */
function QuestionTextInput({questionData}) {
  return (
    <div className="question-text" >
        <p>{questionData.text}</p>
        <input style={{textAlign:'center'}} type="text" id="text"/>
    </div>
  );
};

export default QuestionTextInput;
