import React from "react";

function QuestionSelectDropdown({
  questionText,
  optionText1,
  optionText2,
  optionText3,
}) {
  const dropdownStyle = { border: "5px solid #ffffff", borderRadius: "5px" };
  return (
    <div>
      <p>{questionText}</p>
      <select style={dropdownStyle}>
        <option value=" ">Select .......</option>
        <option value=" ">{optionText1}</option>
        <option value=" ">{optionText2}</option>
        <option value=" ">{optionText3}</option>
      </select>
    </div>
  );
}

export default QuestionSelectDropdown;
