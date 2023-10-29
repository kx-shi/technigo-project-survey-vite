import React from "react";
import '../styles/QuestionTextInput.css';

/* Question component for questions of type text input */
function QuestionTextInput({questionData, updateFunction}) {
  return (
    <div className="question-text" >
        <p>{questionData.text}</p>
        <input style={{textAlign:'center'}} type="text" id="text" required onChange={updateFunction}/>
    </div>
  );
};

export default QuestionTextInput;
