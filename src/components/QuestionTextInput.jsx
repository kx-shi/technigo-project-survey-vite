import React, { useState } from "react";
import '../styles/QuestionTextInput.css';

function QuestionTextInput({questionText}) {
  return <div className="question-text" >
    <p>{questionText}</p>
    <input style={{textAlign:'center'}} type="text" id="text"/>
  </div>;
}

export default QuestionTextInput;
