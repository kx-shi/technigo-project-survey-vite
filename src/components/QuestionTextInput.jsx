import React from "react";
import '../styles/QuestionTextInput.css';

function QuestionTextInput({questionData}) {
  return (
    <div className="question-text" >
        <p>{questionData.text}</p>
        <input style={{textAlign:'center'}} type="text" id="text"/>
    </div>
  );
};

export default QuestionTextInput;
