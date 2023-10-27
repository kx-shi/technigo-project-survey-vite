import React from "react";

function QuestionSelectDropdown({questionData, updateFunction}) {
  const dropdownStyle = { border: "5px solid #ffffff", borderRadius: "5px" };
  const noWeighting = [0,0,0,0];

  return (
    <div>
      <p>{questionData.text}</p>
      <select style={dropdownStyle} onChange={updateFunction}>
        <option value={noWeighting}>Select .......</option>
        {questionData.answers.map((answer, idx) => {
          return(
              <option key={idx} value={answer.weighting}>{answer.text}</option>
          )
        })}
      </select>
    </div>
  );
}

export default QuestionSelectDropdown;
